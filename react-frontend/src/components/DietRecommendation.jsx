import React, { useState } from "react";
import {
  Container,
  Typography,
  Box,
  TextField,
  Button,
  Paper,
  Grid,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Card,
  CardContent,
  CircularProgress,
  Alert,
  Tabs,
  Tab,
  Chip,
} from "@mui/material";
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";
import CalculateIcon from "@mui/icons-material/Calculate";
import {
  getRecommendations,
  calculateBMI,
  calculateBMR,
  calculateCalories,
} from "../services/api";
import { getRecipeImageWithFallback } from "../services/imageService";
import RecipeCard from "./RecipeCard";

const DietRecommendation = () => {
  const [formData, setFormData] = useState({
    age: "",
    height: "",
    weight: "",
    gender: "Male",
    activity: "Moderate exercise (3-5 days/wk)",
    goal: "Maintain weight",
  });

  const [bmiData, setBmiData] = useState(null);
  const [recommendations, setRecommendations] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [activeTab, setActiveTab] = useState(0);

  const goals = [
    { label: "Maintain weight", multiplier: 1, loss: "0 kg/week" },
    { label: "Mild weight loss", multiplier: 0.9, loss: "-0.25 kg/week" },
    { label: "Weight loss", multiplier: 0.8, loss: "-0.5 kg/week" },
    { label: "Extreme weight loss", multiplier: 0.6, loss: "-1 kg/week" },
  ];

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const calculateBMICategory = (bmi) => {
    if (bmi < 18.5) return { category: "Underweight", color: "#e74c3c" };
    if (bmi < 25) return { category: "Normal", color: "#27ae60" };
    if (bmi < 30) return { category: "Overweight", color: "#f39c12" };
    return { category: "Obesity", color: "#e74c3c" };
  };

  const handleCalculateBMI = () => {
    const { weight, height, age, gender, activity, goal } = formData;

    if (!weight || !height || !age) {
      setError("Please fill in all required fields");
      return;
    }

    const bmi = parseFloat(
      calculateBMI(parseFloat(weight), parseFloat(height))
    );
    const bmr = calculateBMR(
      parseFloat(weight),
      parseFloat(height),
      parseInt(age),
      gender
    );
    const maintenanceCalories = calculateCalories(bmr, activity);
    const goalMultiplier = goals.find((g) => g.label === goal)?.multiplier || 1;
    const targetCalories = Math.round(maintenanceCalories * goalMultiplier);
    const { category, color } = calculateBMICategory(bmi);

    setBmiData({
      bmi,
      category,
      color,
      bmr: Math.round(bmr),
      maintenanceCalories: Math.round(maintenanceCalories),
      targetCalories,
      goal,
    });

    setError(null);
  };

  const generateRandomNutrition = (calories, mealType) => {
    const random = (min, max) => Math.random() * (max - min) + min;

    if (mealType === "breakfast" || mealType === "snack") {
      return [
        calories,
        random(10, 30),
        random(0, 4),
        random(0, 30),
        random(0, 400),
        random(40, 75),
        random(4, 10),
        random(0, 10),
        random(30, 100),
      ];
    }
    return [
      calories,
      random(20, 40),
      random(0, 4),
      random(0, 30),
      random(0, 400),
      random(40, 75),
      random(4, 20),
      random(0, 10),
      random(50, 175),
    ];
  };

  const handleGenerateRecommendations = async () => {
    if (!bmiData) {
      setError("Please calculate BMI first");
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const mealDistribution = {
        breakfast: 0.3,
        lunch: 0.35,
        dinner: 0.25,
        snack: 0.1,
      };

      const mealsPromises = Object.entries(mealDistribution).map(
        async ([mealName, percentage]) => {
          const mealCalories = bmiData.targetCalories * percentage;
          const nutritionInput = generateRandomNutrition(
            mealCalories,
            mealName
          );

          const response = await getRecommendations(nutritionInput, [], {
            n_neighbors: 5,
            return_distance: false,
          });

          // Add images to recipes
          const recipesWithImages = (response.output || []).map((recipe) => ({
            ...recipe,
            image_link: getRecipeImageWithFallback(recipe.Name),
          }));

          return {
            name: mealName,
            recipes: recipesWithImages,
          };
        }
      );

      const mealsData = await Promise.all(mealsPromises);
      setRecommendations(mealsData);
    } catch (err) {
      setError("Failed to generate recommendations. Please try again.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const getMealIcon = (mealName) => {
    const icons = {
      breakfast: "🌅",
      lunch: "☀️",
      dinner: "🌙",
      snack: "🍎",
    };
    return icons[mealName] || "🍽️";
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

      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
        <Paper
          elevation={0}
          sx={{
            p: { xs: 2, sm: 3, md: 4 },
            borderRadius: 4,
            mb: 4,
            background: "rgba(255, 255, 255, 0.05)",
            backdropFilter: "blur(20px)",
            border: "1px solid rgba(255, 255, 255, 0.1)",
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center", mb: 3, flexDirection: { xs: "column", sm: "row" }, textAlign: { xs: "center", sm: "left" } }}>
            <Box
              sx={{
                width: 56,
                height: 56,
                borderRadius: "50%",
                background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                mr: { xs: 0, sm: 2 },
                mb: { xs: 2, sm: 0 },
              }}
            >
              <FitnessCenterIcon sx={{ fontSize: 32, color: "white" }} />
            </Box>
            <Typography
              variant="h4"
              sx={{
                fontWeight: 700,
                fontSize: { xs: "1.5rem", sm: "2rem", md: "2.125rem" },
                background: "linear-gradient(135deg, #ffffff 0%, #667eea 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Personalized Diet Recommendation
            </Typography>
          </Box>

          <Grid container spacing={3}>
            <Grid item xs={12} md={3}>
              <TextField
                fullWidth
                label="Age"
                name="age"
                type="number"
                value={formData.age}
                onChange={handleChange}
                required
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
                }}
              />
            </Grid>
            <Grid item xs={12} md={3}>
              <TextField
                fullWidth
                label="Height (cm)"
                name="height"
                type="number"
                value={formData.height}
                onChange={handleChange}
                required
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
                }}
              />
            </Grid>
            <Grid item xs={12} md={3}>
              <TextField
                fullWidth
                label="Weight (kg)"
                name="weight"
                type="number"
                value={formData.weight}
                onChange={handleChange}
                required
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
                }}
              />
            </Grid>
            <Grid item xs={12} md={3}>
              <FormControl
                fullWidth
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
                  "& .MuiSvgIcon-root": {
                    color: "rgba(255, 255, 255, 0.7)",
                  },
                }}
              >
                <InputLabel>Gender</InputLabel>
                <Select
                  name="gender"
                  value={formData.gender}
                  onChange={handleChange}
                >
                  <MenuItem value="Male">Male</MenuItem>
                  <MenuItem value="Female">Female</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} md={6}>
              <FormControl
                fullWidth
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
                  "& .MuiSvgIcon-root": {
                    color: "rgba(255, 255, 255, 0.7)",
                  },
                }}
              >
                <InputLabel>Activity Level</InputLabel>
                <Select
                  name="activity"
                  value={formData.activity}
                  onChange={handleChange}
                >
                  <MenuItem value="Little/no exercise">
                    Little/no exercise
                  </MenuItem>
                  <MenuItem value="Light exercise">Light exercise</MenuItem>
                  <MenuItem value="Moderate exercise (3-5 days/wk)">
                    Moderate exercise (3-5 days/wk)
                  </MenuItem>
                  <MenuItem value="Very active (6-7 days/wk)">
                    Very active (6-7 days/wk)
                  </MenuItem>
                  <MenuItem value="Extra active (very active & physical job)">
                    Extra active (very active & physical job)
                  </MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} md={6}>
              <FormControl
                fullWidth
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
                  "& .MuiSvgIcon-root": {
                    color: "rgba(255, 255, 255, 0.7)",
                  },
                }}
              >
                <InputLabel>Goal</InputLabel>
                <Select
                  name="goal"
                  value={formData.goal}
                  onChange={handleChange}
                >
                  {goals.map((goal) => (
                    <MenuItem key={goal.label} value={goal.label}>
                      {goal.label} ({goal.loss})
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
          </Grid>

          <Box 
            sx={{ 
              mt: 3, 
              display: "flex", 
              flexDirection: { xs: "column", sm: "row" },
              gap: 2,
              width: "100%"
            }}
          >
            <Button
              variant="contained"
              startIcon={<CalculateIcon />}
              onClick={handleCalculateBMI}
              fullWidth={true}
              sx={{
                background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                px: 4,
                py: 1.5,
                borderRadius: 3,
                textTransform: "none",
                fontSize: "1rem",
                fontWeight: 600,
                minHeight: { xs: 48, sm: "auto" },
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
              Calculate BMI
            </Button>
            {bmiData && (
              <Button
                variant="contained"
                startIcon={<FitnessCenterIcon />}
                onClick={handleGenerateRecommendations}
                disabled={loading}
                fullWidth={true}
                sx={{
                  background:
                    "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
                  px: 4,
                  py: 1.5,
                  borderRadius: 3,
                  textTransform: "none",
                  fontSize: "1rem",
                  fontWeight: 600,
                  minHeight: { xs: 48, sm: "auto" },
                  boxShadow: "0 8px 24px rgba(240, 147, 251, 0.4)",
                  "&:hover": {
                    background:
                      "linear-gradient(135deg, #f5576c 0%, #f093fb 100%)",
                    transform: "translateY(-2px)",
                    boxShadow: "0 12px 32px rgba(240, 147, 251, 0.6)",
                  },
                  transition: "all 0.3s ease",
                }}
              >
                {loading ? (
                  <CircularProgress size={24} sx={{ color: "white" }} />
                ) : (
                  "Generate Diet Plan"
                )}
              </Button>
            )}
          </Box>

          {error && (
            <Alert severity="error" sx={{ mt: 2 }}>
              {error}
            </Alert>
          )}
        </Paper>

        {/* BMI Results */}
        {bmiData && (
          <Grid container spacing={{ xs: 2, md: 3 }} sx={{ mb: 4 }}>
            <Grid item xs={6} sm={6} md={3}>
              <Card
                sx={{
                  textAlign: "center",
                  background:
                    "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                  color: "white",
                  borderRadius: 3,
                  transition: "all 0.3s ease",
                  "&:hover": {
                    transform: "translateY(-5px)",
                    boxShadow: "0 12px 40px rgba(102, 126, 234, 0.4)",
                  },
                }}
              >
                <CardContent sx={{ py: { xs: 2, md: 3 }, px: { xs: 1, md: 2 } }}>
                  <Typography variant="h6" sx={{ fontSize: { xs: "0.9rem", md: "1.25rem" } }}>BMI</Typography>
                  <Typography variant="h3" sx={{ fontWeight: 700, fontSize: { xs: "1.75rem", md: "3rem" } }}>
                    {bmiData.bmi}
                  </Typography>
                  <Chip
                    label={bmiData.category}
                    sx={{
                      mt: 1,
                      backgroundColor: bmiData.color,
                      color: "white",
                    }}
                  />
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={6} sm={6} md={3}>
              <Card
                sx={{
                  textAlign: "center",
                  background: "rgba(255, 255, 255, 0.05)",
                  backdropFilter: "blur(10px)",
                  border: "1px solid rgba(255, 255, 255, 0.1)",
                  borderRadius: 3,
                  transition: "all 0.3s ease",
                  "&:hover": {
                    transform: "translateY(-5px)",
                    borderColor: "rgba(102, 126, 234, 0.5)",
                  },
                }}
              >
                <CardContent sx={{ py: { xs: 2, md: 3 }, px: { xs: 1, md: 2 } }}>
                  <Typography
                    variant="h6"
                    sx={{ color: "rgba(255, 255, 255, 0.7)", fontSize: { xs: "0.9rem", md: "1.25rem" } }}
                  >
                    BMR
                  </Typography>
                  <Typography
                    variant="h4"
                    sx={{ fontWeight: 700, color: "#667eea", fontSize: { xs: "1.5rem", md: "2.125rem" } }}
                  >
                    {bmiData.bmr}
                  </Typography>
                  <Typography
                    variant="caption"
                    sx={{ color: "rgba(255, 255, 255, 0.5)", fontSize: { xs: "0.65rem", md: "0.75rem" } }}
                  >
                    kcal/day
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={6} sm={6} md={3}>
              <Card
                sx={{
                  textAlign: "center",
                  background: "rgba(255, 255, 255, 0.05)",
                  backdropFilter: "blur(10px)",
                  border: "1px solid rgba(255, 255, 255, 0.1)",
                  borderRadius: 3,
                  transition: "all 0.3s ease",
                  "&:hover": {
                    transform: "translateY(-5px)",
                    borderColor: "rgba(240, 147, 251, 0.5)",
                  },
                }}
              >
                <CardContent sx={{ py: { xs: 2, md: 3 }, px: { xs: 1, md: 2 } }}>
                  <Typography
                    variant="h6"
                    sx={{ color: "rgba(255, 255, 255, 0.7)", fontSize: { xs: "0.9rem", md: "1.25rem" } }}
                  >
                    Maintenance
                  </Typography>
                  <Typography
                    variant="h4"
                    sx={{ fontWeight: 700, color: "#f093fb", fontSize: { xs: "1.5rem", md: "2.125rem" } }}
                  >
                    {bmiData.maintenanceCalories}
                  </Typography>
                  <Typography
                    variant="caption"
                    sx={{ color: "rgba(255, 255, 255, 0.5)", fontSize: { xs: "0.65rem", md: "0.75rem" } }}
                  >
                    kcal/day
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={6} sm={6} md={3}>
              <Card
                sx={{
                  textAlign: "center",
                  background:
                    "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
                  color: "white",
                  borderRadius: 3,
                  transition: "all 0.3s ease",
                  "&:hover": {
                    transform: "translateY(-5px)",
                    boxShadow: "0 12px 40px rgba(240, 147, 251, 0.4)",
                  },
                }}
              >
                <CardContent sx={{ py: { xs: 2, md: 3 }, px: { xs: 1, md: 2 } }}>
                  <Typography variant="h6" sx={{ fontSize: { xs: "0.9rem", md: "1.25rem" } }}>Target Calories</Typography>
                  <Typography variant="h4" sx={{ fontWeight: 700, fontSize: { xs: "1.5rem", md: "2.125rem" } }}>
                    {bmiData.targetCalories}
                  </Typography>
                  <Typography variant="caption" sx={{ fontSize: { xs: "0.65rem", md: "0.75rem" } }}>kcal/day</Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        )}

        {/* Recommendations */}
        {recommendations && (
          <Paper
            elevation={0}
            sx={{
              p: { xs: 2, sm: 3, md: 4 },
              borderRadius: 4,
              background: "rgba(255, 255, 255, 0.05)",
              backdropFilter: "blur(20px)",
              border: "1px solid rgba(255, 255, 255, 0.1)",
            }}
          >
            <Typography
              variant="h5"
              gutterBottom
              sx={{
                fontWeight: 700,
                mb: 3,
                color: "white",
              }}
            >
              Your Personalized Meal Plan
            </Typography>

            <Tabs
              value={activeTab}
              onChange={(e, newValue) => setActiveTab(newValue)}
              variant="scrollable"
              scrollButtons="auto"
              sx={{
                mb: 3,
                "& .MuiTab-root": {
                  color: "rgba(255, 255, 255, 0.6)",
                  textTransform: "none",
                  fontSize: { xs: "0.875rem", md: "1rem" },
                  fontWeight: 600,
                  minHeight: { xs: 48, md: "auto" },
                },
                "& .Mui-selected": {
                  color: "#667eea !important",
                },
                "& .MuiTabs-indicator": {
                  backgroundColor: "#667eea",
                  height: 3,
                },
              }}
            >
              {recommendations.map((meal, index) => (
                <Tab
                  key={meal.name}
                  label={
                    <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                      <span>{getMealIcon(meal.name)}</span>
                      <span>
                        {meal.name.charAt(0).toUpperCase() + meal.name.slice(1)}
                      </span>
                    </Box>
                  }
                />
              ))}
            </Tabs>

            {recommendations.map((meal, index) => (
              <Box key={meal.name} hidden={activeTab !== index}>
                <Typography
                  variant="h6"
                  gutterBottom
                  sx={{ mb: 3, textTransform: "capitalize", color: "white" }}
                >
                  {getMealIcon(meal.name)} {meal.name} Recipes
                </Typography>
                <Grid container spacing={3}>
                  {meal.recipes && meal.recipes.length > 0 ? (
                    meal.recipes.map((recipe, recipeIndex) => (
                      <Grid item xs={12} sm={6} md={4} key={recipeIndex}>
                        <RecipeCard recipe={recipe} />
                      </Grid>
                    ))
                  ) : (
                    <Grid item xs={12}>
                      <Alert severity="info">
                        No recipes found for this meal
                      </Alert>
                    </Grid>
                  )}
                </Grid>
              </Box>
            ))}
          </Paper>
        )}
      </Container>
    </Box>
  );
};

export default DietRecommendation;
