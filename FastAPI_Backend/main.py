from fastapi import FastAPI, HTTPException, Request
from fastapi.middleware.cors import CORSMiddleware
from fastapi.exceptions import RequestValidationError
from fastapi.responses import JSONResponse
from pydantic import BaseModel, field_validator, ValidationError
from typing import List,Optional
import pandas as pd
from model import recommend,output_recommended_recipes
import os
import logging

# Set up logging
logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

# Lazy load dataset to reduce memory usage
_dataset = None

def get_dataset():
    global _dataset
    if _dataset is None:
        dataset_path = os.path.join(os.path.dirname(__file__), '..', 'Data', 'dataset_reduced.csv')
        _dataset = pd.read_csv(dataset_path, compression='gzip')
    return _dataset

app = FastAPI()

# Add validation error handler
@app.exception_handler(RequestValidationError)
async def validation_exception_handler(request: Request, exc: RequestValidationError):
    exc_str = f'{exc}'.replace('\n', ' ').replace('   ', ' ')
    logger.error(f"Validation error: {exc_str}")
    logger.error(f"Request body: {await request.body()}")
    content = {'detail': exc.errors(), 'body': exc.body}
    return JSONResponse(content=content, status_code=422)

# Add CORS middleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Allow all origins for deployment
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


class params(BaseModel):
    n_neighbors:int=5
    return_distance:bool=False

class PredictionIn(BaseModel):
    nutrition_input: List[float]
    ingredients: List[str] = []
    params: Optional[params] = None
    
    @field_validator('nutrition_input')
    @classmethod
    def validate_nutrition_input(cls, v):
        if len(v) != 9:
            raise ValueError(f'nutrition_input must contain exactly 9 values, got {len(v)}')
        return v


class Recipe(BaseModel):
    Name:str
    CookTime:str
    PrepTime:str
    TotalTime:str
    RecipeIngredientParts:list[str]
    Calories:float
    FatContent:float
    SaturatedFatContent:float
    CholesterolContent:float
    SodiumContent:float
    CarbohydrateContent:float
    FiberContent:float
    SugarContent:float
    ProteinContent:float
    RecipeInstructions:list[str]

class PredictionOut(BaseModel):
    output: Optional[List[Recipe]] = None


@app.get("/")
def home():
    return {"health_check": "OK"}


@app.post("/test-payload/")
async def test_payload(data: dict):
    """Test endpoint to see what data is being sent"""
    logger.info(f"Received payload: {data}")
    return {"received": data}


@app.post("/predict/",response_model=PredictionOut)
async def update_item(prediction_input:PredictionIn):
    try:
        logger.info(f"Received request with nutrition_input length: {len(prediction_input.nutrition_input)}")
        logger.info(f"Nutrition values: {prediction_input.nutrition_input}")
        logger.info(f"Ingredients: {prediction_input.ingredients}")
        logger.info(f"Params: {prediction_input.params}")
        
        dataset = get_dataset()
        params_dict = prediction_input.params.model_dump() if prediction_input.params else {"n_neighbors": 5, "return_distance": False}
        recommendation_dataframe=recommend(dataset,prediction_input.nutrition_input,prediction_input.ingredients,params_dict)
        output=output_recommended_recipes(recommendation_dataframe)
        if output is None:
            return {"output":None}
        else:
            return {"output":output}
    except Exception as e:
        logger.error(f"Error in predict endpoint: {str(e)}", exc_info=True)
        raise HTTPException(status_code=500, detail=str(e))


if __name__ == "__main__":
    import uvicorn
    import os
    port = int(os.environ.get("PORT", 8080))
    uvicorn.run(app, host="0.0.0.0", port=port)

