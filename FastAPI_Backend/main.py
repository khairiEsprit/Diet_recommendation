from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel, field_validator
from typing import List,Optional
import pandas as pd
from model import recommend,output_recommended_recipes
import os

# Lazy load dataset to reduce memory usage
_dataset = None

def get_dataset():
    global _dataset
    if _dataset is None:
        dataset_path = os.path.join(os.path.dirname(__file__), '..', 'Data', 'dataset_reduced.csv')
        _dataset = pd.read_csv(dataset_path, compression='gzip')
    return _dataset

app = FastAPI()

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
    ingredients:list[str]=[]
    params:Optional[params]=None
    
    @field_validator('nutrition_input')
    @classmethod
    def validate_nutrition_input(cls, v):
        if len(v) != 9:
            raise ValueError('nutrition_input must contain exactly 9 values')
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


@app.post("/predict/",response_model=PredictionOut)
def update_item(prediction_input:PredictionIn):
    dataset = get_dataset()
    params_dict = prediction_input.params.dict() if prediction_input.params else {"n_neighbors": 5, "return_distance": False}
    recommendation_dataframe=recommend(dataset,prediction_input.nutrition_input,prediction_input.ingredients,params_dict)
    output=output_recommended_recipes(recommendation_dataframe)
    if output is None:
        return {"output":None}
    else:
        return {"output":output}


if __name__ == "__main__":
    import uvicorn
    import os
    port = int(os.environ.get("PORT", 8080))
    uvicorn.run(app, host="0.0.0.0", port=port)

