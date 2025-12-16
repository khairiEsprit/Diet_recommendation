import React from "react";
import {
  Container,
  Typography,
  Box,
  Grid,
  Card,
  CardContent,
  Avatar,
  Paper,
  Stepper,
  Step,
  StepLabel,
  StepContent,
} from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import CalculateIcon from "@mui/icons-material/Calculate";
import RestaurantMenuIcon from "@mui/icons-material/RestaurantMenu";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";

const HowItWorks = () => {
  const steps = [
    {
      label: "Enter Your Information",
      description:
        "Provide your age, height, weight, gender, activity level, and health goals. This helps us understand your unique nutritional needs.",
      icon: <PersonIcon sx={{ fontSize: 40 }} />,
      color: "#667eea",
    },
    {
      label: "Calculate Your Metrics",
      description:
        "Our AI calculates your BMI, BMR (Basal Metabolic Rate), and daily caloric needs based on your activity level and goals.",
      icon: <CalculateIcon sx={{ fontSize: 40 }} />,
      color: "#f093fb",
    },
    {
      label: "Get Personalized Recommendations",
      description:
        "Receive AI-powered meal suggestions from our database of 500K+ recipes, perfectly matched to your nutritional requirements.",
      icon: <RestaurantMenuIcon sx={{ fontSize: 40 }} />,
      color: "#43e97b",
    },
    {
      label: "Start Your Journey",
      description:
        "Follow your personalized meal plan, track your progress, and adjust as needed to achieve your health and fitness goals.",
      icon: <CheckCircleIcon sx={{ fontSize: 40 }} />,
      color: "#fa709a",
    },
  ];

  const features = [
    {
      title: "Smart Calorie Calculation",
      description:
        "Advanced algorithms calculate your exact caloric needs based on multiple factors",
      icon: "🔢",
    },
    {
      title: "Macro Distribution",
      description:
        "Optimal protein, carbs, and fat ratios tailored to your specific goals",
      icon: "📊",
    },
    {
      title: "Recipe Matching",
      description:
        "AI matches you with recipes that fit your nutritional targets perfectly",
      icon: "🎯",
    },
    {
      title: "Meal Planning",
      description:
        "Complete daily meal plans with breakfast, lunch, dinner, and snacks",
      icon: "📅",
    },
    {
      title: "Ingredient Filters",
      description: "Search by specific ingredients and dietary preferences",
      icon: "🔍",
    },
    {
      title: "Nutritional Insights",
      description:
        "Detailed breakdown of calories, macros, vitamins, and minerals",
      icon: "💡",
    },
  ];

  return (
    <Box
      sx={{
        minHeight: "100vh",
        background: "#0a0e27",
        py: 8,
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background */}
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
        {/* Hero Section */}
        <Box sx={{ textAlign: "center", mb: 8 }}>
          <Typography
            variant="h2"
            sx={{
              fontWeight: 800,
              fontSize: { xs: "2rem", md: "3.5rem" },
              mb: 3,
              background: "linear-gradient(135deg, #ffffff 0%, #667eea 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            How HealthyWay Works
          </Typography>
          <Typography
            variant="h5"
            sx={{
              color: "rgba(255, 255, 255, 0.7)",
              maxWidth: 800,
              mx: "auto",
              lineHeight: 1.8,
              fontSize: { xs: "1rem", md: "1.25rem" },
            }}
          >
            From your first input to your personalized meal plan, here's how our
            AI-powered platform transforms your nutrition journey
          </Typography>
        </Box>

        {/* Process Steps */}
        <Paper
          sx={{
            p: { xs: 3, md: 6 },
            mb: 8,
            background: "rgba(255, 255, 255, 0.05)",
            backdropFilter: "blur(20px)",
            border: "1px solid rgba(255, 255, 255, 0.1)",
            borderRadius: 4,
          }}
        >
          <Grid container spacing={4}>
            {steps.map((step, index) => (
              <Grid item xs={12} key={index}>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: { xs: "column", sm: "row" },
                    gap: 3,
                    alignItems: { xs: "center", sm: "flex-start" },
                  }}
                >
                  <Avatar
                    sx={{
                      width: { xs: 64, md: 80 },
                      height: { xs: 64, md: 80 },
                      backgroundColor: step.color,
                      flexShrink: 0,
                    }}
                  >
                    {step.icon}
                  </Avatar>
                  <Box
                    sx={{ flex: 1, textAlign: { xs: "center", sm: "left" } }}
                  >
                    <Typography
                      variant="h5"
                      sx={{
                        fontWeight: 700,
                        color: "white",
                        mb: 1,
                        fontSize: { xs: "1.25rem", md: "1.5rem" },
                      }}
                    >
                      Step {index + 1}: {step.label}
                    </Typography>
                    <Typography
                      variant="body1"
                      sx={{
                        color: "rgba(255, 255, 255, 0.7)",
                        lineHeight: 1.8,
                        fontSize: { xs: "0.95rem", md: "1.1rem" },
                      }}
                    >
                      {step.description}
                    </Typography>
                  </Box>
                </Box>
                {index < steps.length - 1 && (
                  <Box
                    sx={{
                      height: 60,
                      width: 2,
                      background: `linear-gradient(to bottom, ${step.color}, ${
                        steps[index + 1].color
                      })`,
                      mx: { xs: "auto", sm: 5 },
                      my: 2,
                    }}
                  />
                )}
              </Grid>
            ))}
          </Grid>
        </Paper>

        {/* Key Features */}
        <Box sx={{ mb: 8 }}>
          <Typography
            variant="h3"
            sx={{
              fontWeight: 700,
              color: "white",
              mb: 5,
              textAlign: "center",
              fontSize: { xs: "1.75rem", md: "2.5rem" },
            }}
          >
            Key Features
          </Typography>
          <Grid container spacing={3}>
            {features.map((feature, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <Card
                  sx={{
                    height: "100%",
                    background: "rgba(255, 255, 255, 0.05)",
                    backdropFilter: "blur(10px)",
                    border: "1px solid rgba(255, 255, 255, 0.1)",
                    borderRadius: 4,
                    transition: "all 0.4s ease",
                    "&:hover": {
                      transform: "translateY(-10px)",
                      borderColor: "rgba(102, 126, 234, 0.5)",
                      boxShadow: "0 20px 60px rgba(102, 126, 234, 0.3)",
                    },
                  }}
                >
                  <CardContent
                    sx={{ p: { xs: 3, md: 4 }, textAlign: "center" }}
                  >
                    <Typography variant="h2" sx={{ mb: 2 }}>
                      {feature.icon}
                    </Typography>
                    <Typography
                      variant="h6"
                      sx={{
                        fontWeight: 700,
                        color: "white",
                        mb: 2,
                        fontSize: { xs: "1rem", md: "1.25rem" },
                      }}
                    >
                      {feature.title}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{
                        color: "rgba(255, 255, 255, 0.7)",
                        lineHeight: 1.7,
                        fontSize: { xs: "0.85rem", md: "0.875rem" },
                      }}
                    >
                      {feature.description}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* Technology Section */}
        <Paper
          sx={{
            p: { xs: 4, md: 6 },
            background:
              "linear-gradient(135deg, rgba(102, 126, 234, 0.1) 0%, rgba(118, 75, 162, 0.1) 100%)",
            backdropFilter: "blur(20px)",
            border: "1px solid rgba(255, 255, 255, 0.1)",
            borderRadius: 4,
            textAlign: "center",
          }}
        >
          <TrendingUpIcon sx={{ fontSize: 60, color: "#667eea", mb: 2 }} />
          <Typography
            variant="h4"
            sx={{
              fontWeight: 700,
              color: "white",
              mb: 3,
              fontSize: { xs: "1.5rem", md: "2rem" },
            }}
          >
            Powered by Machine Learning
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: "rgba(255, 255, 255, 0.8)",
              lineHeight: 1.8,
              maxWidth: 800,
              mx: "auto",
              mb: 3,
              fontSize: { xs: "0.95rem", md: "1.1rem" },
            }}
          >
            Our recommendation engine uses advanced machine learning algorithms
            trained on millions of data points. The system continuously
            improves, learning from user preferences and nutritional science to
            provide increasingly accurate and personalized recommendations.
          </Typography>
          <Box
            sx={{
              display: "flex",
              gap: 2,
              justifyContent: "center",
              flexWrap: "wrap",
            }}
          >
            {[
              "Scikit-learn",
              "K-Nearest Neighbors",
              "Cosine Similarity",
              "Content-Based Filtering",
            ].map((tech) => (
              <Box
                key={tech}
                sx={{
                  px: 3,
                  py: 1.5,
                  background: "rgba(255, 255, 255, 0.1)",
                  border: "1px solid rgba(255, 255, 255, 0.2)",
                  borderRadius: 3,
                  color: "white",
                  fontWeight: 600,
                  fontSize: { xs: "0.8rem", md: "0.9rem" },
                }}
              >
                {tech}
              </Box>
            ))}
          </Box>
        </Paper>
      </Container>
    </Box>
  );
};

export default HowItWorks;
