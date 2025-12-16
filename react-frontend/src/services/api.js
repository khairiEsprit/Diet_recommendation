import axios from "axios";

const API_BASE_URL = process.env.REACT_APP_API_URL || "http://localhost:8080";

export const getRecommendations = async (
  nutritionInput,
  ingredients = [],
  params = { n_neighbors: 5, return_distance: false }
) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/predict/`, {
      nutrition_input: nutritionInput,
      ingredients: ingredients,
      params: params,
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching recommendations:", error);
    throw error;
  }
};

export const healthCheck = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/`);
    return response.data;
  } catch (error) {
    console.error("Error checking API health:", error);
    throw error;
  }
};

// Helper function to calculate BMI
export const calculateBMI = (weight, height) => {
  return (weight / Math.pow(height / 100, 2)).toFixed(2);
};

// Helper function to calculate BMR (Basal Metabolic Rate)
export const calculateBMR = (weight, height, age, gender) => {
  if (gender === "Male") {
    return 10 * weight + 6.25 * height - 5 * age + 5;
  } else {
    return 10 * weight + 6.25 * height - 5 * age - 161;
  }
};

// Helper function to calculate daily calories
export const calculateCalories = (bmr, activityLevel) => {
  const activityMultipliers = {
    "Little/no exercise": 1.2,
    "Light exercise": 1.375,
    "Moderate exercise (3-5 days/wk)": 1.55,
    "Very active (6-7 days/wk)": 1.725,
    "Extra active (very active & physical job)": 1.9,
  };
  return bmr * (activityMultipliers[activityLevel] || 1.2);
};
