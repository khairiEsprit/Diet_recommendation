import React, { useState } from "react";
import {
  Container,
  Typography,
  Box,
  TextField,
  Button,
  Paper,
  Grid,
  Slider,
  CircularProgress,
  Alert,
  Chip,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import TuneIcon from "@mui/icons-material/Tune";
import { getRecommendations } from "../services/api";
import { getRecipeImageWithFallback } from "../services/imageService";
import RecipeCard from "./RecipeCard";

const CustomRecommendation = () => {
  const [nutritionValues, setNutritionValues] = useState({
    calories: 500,
    fat: 20,
    saturatedFat: 5,
    cholesterol: 50,
    sodium: 500,
    carbohydrate: 50,
    fiber: 5,
    sugar: 10,
    protein: 30,
  });

  const [ingredients, setIngredients] = useState("");
  const [numRecommendations, setNumRecommendations] = useState(9);
  const [recommendations, setRecommendations] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const nutritionConfig = [
    {
      key: "calories",
      label: "Calories",
      min: 0,
      max: 2000,
      step: 50,
      unit: "kcal",
      color: "#ff6b6b",
    },
    {
      key: "fat",
      label: "Fat",
      min: 0,
      max: 100,
      step: 5,
      unit: "g",
      color: "#f7b731",
    },
    {
      key: "saturatedFat",
      label: "Saturated Fat",
      min: 0,
      max: 30,
      step: 1,
      unit: "g",
      color: "#ee5a6f",
    },
    {
      key: "cholesterol",
      label: "Cholesterol",
      min: 0,
      max: 300,
      step: 10,
      unit: "mg",
      color: "#c44569",
    },
    {
      key: "sodium",
      label: "Sodium",
      min: 0,
      max: 2300,
      step: 100,
      unit: "mg",
      color: "#f8b500",
    },
    {
      key: "carbohydrate",
      label: "Carbohydrate",
      min: 0,
      max: 200,
      step: 10,
      unit: "g",
      color: "#45b7d1",
    },
    {
      key: "fiber",
      label: "Fiber",
      min: 0,
      max: 40,
      step: 2,
      unit: "g",
      color: "#5f27cd",
    },
    {
      key: "sugar",
      label: "Sugar",
      min: 0,
      max: 50,
      step: 5,
      unit: "g",
      color: "#fd79a8",
    },
    {
      key: "protein",
      label: "Protein",
      min: 0,
      max: 200,
      step: 10,
      unit: "g",
      color: "#4ecdc4",
    },
  ];

  const handleSliderChange = (key) => (event, newValue) => {
    setNutritionValues({ ...nutritionValues, [key]: newValue });
  };

  const handleSearch = async () => {
    setLoading(true);
    setError(null);

    try {
      const nutritionInput = [
        nutritionValues.calories,
        nutritionValues.fat,
        nutritionValues.saturatedFat,
        nutritionValues.cholesterol,
        nutritionValues.sodium,
        nutritionValues.carbohydrate,
        nutritionValues.fiber,
        nutritionValues.sugar,
        nutritionValues.protein,
      ];

      const ingredientsList = ingredients
        .split(";")
        .map((ing) => ing.trim())
        .filter((ing) => ing.length > 0);

      const params = {
        n_neighbors: numRecommendations,
        return_distance: false,
      };

      const response = await getRecommendations(
        nutritionInput,
        ingredientsList,
        params
      );

      if (response.output) {
        // Add images to recipes
        const recipesWithImages = response.output.map((recipe) => ({
          ...recipe,
          image_link: getRecipeImageWithFallback(recipe.Name),
        }));
        setRecommendations(recipesWithImages);
      } else {
        setRecommendations([]);
      }
    } catch (err) {
      setError("Failed to fetch recommendations. Please try again.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleReset = () => {
    setNutritionValues({
      calories: 500,
      fat: 20,
      saturatedFat: 5,
      cholesterol: 50,
      sodium: 500,
      carbohydrate: 50,
      fiber: 5,
      sugar: 10,
      protein: 30,
    });
    setIngredients("");
    setNumRecommendations(9);
    setRecommendations(null);
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        background: "#0a0e27",
        py: 4,
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Animated Background */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: `
            radial-gradient(circle at 20% 50%, rgba(102, 126, 234, 0.15) 0%, transparent 50%),
            radial-gradient(circle at 80% 80%, rgba(118, 75, 162, 0.15) 0%, transparent 50%)
          `,
        }}
      />

      <Container maxWidth="xl" sx={{ position: "relative", zIndex: 1 }}>
        <Paper
          elevation={0}
          sx={{
            p: 4,
            borderRadius: 4,
            mb: 4,
            background: "rgba(255, 255, 255, 0.05)",
            backdropFilter: "blur(20px)",
            border: "1px solid rgba(255, 255, 255, 0.1)",
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center", mb: 3 }}>
            <Box
              sx={{
                width: 56,
                height: 56,
                borderRadius: "50%",
                background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                mr: 2,
              }}
            >
              <SearchIcon sx={{ fontSize: 32, color: "white" }} />
            </Box>
            <Typography
              variant="h4"
              sx={{
                fontWeight: 700,
                background: "linear-gradient(135deg, #ffffff 0%, #667eea 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Custom Food Recommendation
            </Typography>
          </Box>

          <Typography
            variant="body1"
            sx={{
              mb: 3,
              color: "rgba(255, 255, 255, 0.7)",
              fontSize: "1.05rem",
            }}
          >
            Adjust nutritional values and add ingredients to find recipes that
            match your dietary needs.
          </Typography>

          {/* Nutrition Sliders */}
          <Grid container spacing={4} sx={{ mb: 4 }}>
            {nutritionConfig.map((nutrition) => (
              <Grid item xs={12} md={6} lg={4} key={nutrition.key}>
                <Box
                  sx={{
                    p: 3,
                    background: "rgba(255, 255, 255, 0.05)",
                    backdropFilter: "blur(10px)",
                    border: "1px solid rgba(255, 255, 255, 0.1)",
                    borderRadius: 3,
                    transition: "all 0.3s ease",
                    "&:hover": {
                      borderColor: "rgba(102, 126, 234, 0.5)",
                      transform: "translateY(-3px)",
                    },
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      mb: 2,
                    }}
                  >
                    <Typography
                      variant="subtitle2"
                      sx={{ fontWeight: 600, color: "white" }}
                    >
                      {nutrition.label}
                    </Typography>
                    <Chip
                      label={`${nutritionValues[nutrition.key]} ${
                        nutrition.unit
                      }`}
                      size="small"
                      sx={{
                        backgroundColor: nutrition.color,
                        color: "white",
                        fontWeight: 700,
                        fontSize: "0.85rem",
                      }}
                    />
                  </Box>
                  <Slider
                    value={nutritionValues[nutrition.key]}
                    onChange={handleSliderChange(nutrition.key)}
                    min={nutrition.min}
                    max={nutrition.max}
                    step={nutrition.step}
                    valueLabelDisplay="auto"
                    sx={{
                      color: nutrition.color,
                      "& .MuiSlider-thumb": {
                        width: 20,
                        height: 20,
                      },
                    }}
                  />
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      mt: 1,
                    }}
                  >
                    <Typography
                      variant="caption"
                      sx={{ color: "rgba(255, 255, 255, 0.5)" }}
                    >
                      {nutrition.min}
                    </Typography>
                    <Typography
                      variant="caption"
                      sx={{ color: "rgba(255, 255, 255, 0.5)" }}
                    >
                      {nutrition.max}
                    </Typography>
                  </Box>
                </Box>
              </Grid>
            ))}
          </Grid>

          {/* Ingredients and Settings */}
          <Grid container spacing={3} sx={{ mb: 3 }}>
            <Grid item xs={12} md={8}>
              <TextField
                fullWidth
                label="Ingredients (separate with semicolon)"
                placeholder="e.g., chicken; tomato; garlic"
                value={ingredients}
                onChange={(e) => setIngredients(e.target.value)}
                multiline
                rows={2}
                helperText="Enter ingredients separated by semicolons to filter recipes"
                sx={{
                  "& .MuiOutlinedInput-root": {
                    color: "white",
                    "& fieldset": {
                      borderColor: "rgba(255, 255, 255, 0.2)",
                    },
                    "&:hover fieldset": {
                      borderColor: "rgba(102, 126, 234, 0.5)",
                    },
                    "&.Mui-focused fieldset": {
                      borderColor: "#667eea",
                    },
                  },
                  "& .MuiInputLabel-root": {
                    color: "rgba(255, 255, 255, 0.7)",
                  },
                  "& .MuiFormHelperText-root": {
                    color: "rgba(255, 255, 255, 0.5)",
                  },
                }}
              />
            </Grid>
            <Grid item xs={12} md={4}>
              <Box
                sx={{
                  p: 3,
                  background: "rgba(255, 255, 255, 0.05)",
                  backdropFilter: "blur(10px)",
                  border: "1px solid rgba(255, 255, 255, 0.1)",
                  borderRadius: 3,
                  height: "100%",
                }}
              >
                <Typography
                  variant="subtitle2"
                  sx={{ fontWeight: 600, mb: 2, color: "white" }}
                >
                  <TuneIcon
                    sx={{ fontSize: 18, verticalAlign: "middle", mr: 0.5 }}
                  />
                  Number of Recommendations
                </Typography>
                <Slider
                  value={numRecommendations}
                  onChange={(e, newValue) => setNumRecommendations(newValue)}
                  min={3}
                  max={20}
                  step={1}
                  marks
                  valueLabelDisplay="on"
                  sx={{ color: "#667eea" }}
                />
              </Box>
            </Grid>
          </Grid>

          <Box sx={{ display: "flex", gap: 2 }}>
            <Button
              variant="contained"
              startIcon={<SearchIcon />}
              onClick={handleSearch}
              disabled={loading}
              sx={{
                background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                px: 4,
                py: 1.5,
                borderRadius: 3,
                textTransform: "none",
                fontSize: "1rem",
                fontWeight: 600,
                boxShadow: "0 8px 24px rgba(102, 126, 234, 0.4)",
                "&:hover": {
                  background:
                    "linear-gradient(135deg, #764ba2 0%, #667eea 100%)",
                  transform: "translateY(-2px)",
                  boxShadow: "0 12px 32px rgba(102, 126, 234, 0.6)",
                },
                transition: "all 0.3s ease",
              }}
            >
              {loading ? (
                <CircularProgress size={24} sx={{ color: "white" }} />
              ) : (
                "Search Recipes"
              )}
            </Button>
            <Button
              variant="outlined"
              onClick={handleReset}
              sx={{
                px: 4,
                py: 1.5,
                borderRadius: 3,
                textTransform: "none",
                fontSize: "1rem",
                fontWeight: 600,
                borderColor: "rgba(255, 255, 255, 0.3)",
                borderWidth: 2,
                color: "white",
                "&:hover": {
                  borderColor: "rgba(255, 255, 255, 0.5)",
                  borderWidth: 2,
                  background: "rgba(255, 255, 255, 0.05)",
                  transform: "translateY(-2px)",
                },
                transition: "all 0.3s ease",
              }}
            >
              Reset
            </Button>
          </Box>

          {error && (
            <Alert severity="error" sx={{ mt: 2 }}>
              {error}
            </Alert>
          )}
        </Paper>

        {/* Results */}
        {recommendations && (
          <Paper
            elevation={0}
            sx={{
              p: 4,
              borderRadius: 4,
              background: "rgba(255, 255, 255, 0.05)",
              backdropFilter: "blur(20px)",
              border: "1px solid rgba(255, 255, 255, 0.1)",
            }}
          >
            <Typography
              variant="h5"
              gutterBottom
              sx={{ fontWeight: 700, mb: 3, color: "white" }}
            >
              Recommended Recipes ({recommendations.length})
            </Typography>

            {recommendations.length > 0 ? (
              <Grid container spacing={3}>
                {recommendations.map((recipe, index) => (
                  <Grid item xs={12} sm={6} md={4} key={index}>
                    <RecipeCard recipe={recipe} />
                  </Grid>
                ))}
              </Grid>
            ) : (
              <Alert severity="info">
                No recipes found matching your criteria. Try adjusting the
                nutritional values or ingredients.
              </Alert>
            )}
          </Paper>
        )}
      </Container>
    </Box>
  );
};

export default CustomRecommendation;
