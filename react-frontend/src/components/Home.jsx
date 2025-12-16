import React, { useState, useEffect } from "react";
import {
  Container,
  Typography,
  Box,
  Button,
  Grid,
  Card,
  CardContent,
  Paper,
  Fade,
  Chip,
  IconButton,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";
import SearchIcon from "@mui/icons-material/Search";
import RestaurantMenuIcon from "@mui/icons-material/RestaurantMenu";
import TipsAndUpdatesIcon from "@mui/icons-material/TipsAndUpdates";
import LocalFireDepartmentIcon from "@mui/icons-material/LocalFireDepartment";
import SpeedIcon from "@mui/icons-material/Speed";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";
import StarIcon from "@mui/icons-material/Star";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";

const Home = () => {
  const navigate = useNavigate();
  const [showContent, setShowContent] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  useEffect(() => {
    setShowContent(true);
  }, []);

  const features = [
    {
      icon: <AutoAwesomeIcon sx={{ fontSize: 40 }} />,
      title: "AI-Powered",
      description:
        "Machine learning algorithms analyze your profile to suggest perfect meals",
      gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
    },
    {
      icon: <LocalFireDepartmentIcon sx={{ fontSize: 40 }} />,
      title: "Calorie Tracking",
      description:
        "Precise calorie calculations based on BMR and activity level",
      gradient: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
    },
    {
      icon: <RestaurantMenuIcon sx={{ fontSize: 40 }} />,
      title: "500K+ Recipes",
      description:
        "Vast database with detailed nutritional info and instructions",
      gradient: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
    },
    {
      icon: <SpeedIcon sx={{ fontSize: 40 }} />,
      title: "Instant Results",
      description:
        "Get personalized recommendations in seconds with real-time analysis",
      gradient: "linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)",
    },
  ];

  const benefits = [
    "Personalized meal plans tailored to your goals",
    "Track macros and micronutrients effortlessly",
    "Discover new healthy recipes daily",
    "Achieve your fitness objectives faster",
  ];

  const stats = [
    { icon: <RestaurantMenuIcon />, value: "500K+", label: "Recipes" },
    { icon: <TipsAndUpdatesIcon />, value: "AI", label: "Powered" },
    { icon: <SpeedIcon />, value: "Instant", label: "Results" },
    { icon: <EmojiEventsIcon />, value: "Free", label: "Always" },
  ];

  return (
    <Box
      sx={{
        minHeight: "100vh",
        background: "#0a0e27",
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
            radial-gradient(circle at 80% 80%, rgba(118, 75, 162, 0.15) 0%, transparent 50%),
            radial-gradient(circle at 40% 20%, rgba(240, 147, 251, 0.1) 0%, transparent 40%)
          `,
          animation: "gradientShift 15s ease infinite",
          "@keyframes gradientShift": {
            "0%, 100%": { opacity: 1 },
            "50%": { opacity: 0.8 },
          },
        }}
      />

      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1, py: 8 }}>
        {/* Hero Section */}
        <Fade in={showContent} timeout={1000}>
          <Box sx={{ textAlign: "center", mb: 12, mt: { xs: 4, md: 8 } }}>
            {/* Badge */}
            <Chip
              icon={
                <StarIcon sx={{ fontSize: 16, color: "#ffd700 !important" }} />
              }
              label="AI-Powered Nutrition Platform"
              sx={{
                mb: 3,
                background: "rgba(255, 255, 255, 0.1)",
                backdropFilter: "blur(10px)",
                border: "1px solid rgba(255, 255, 255, 0.2)",
                color: "white",
                fontWeight: 600,
                fontSize: "0.9rem",
                px: 2,
                py: 0.5,
              }}
            />

            {/* Main Heading */}
            <Typography
              variant="h1"
              sx={{
                fontWeight: 800,
                fontSize: { xs: "2.5rem", sm: "3.5rem", md: "5rem" },
                mb: 3,
                background:
                  "linear-gradient(135deg, #ffffff 0%, #667eea 50%, #764ba2 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                lineHeight: 1.2,
              }}
            >
              Transform Your
              <br />
              Eating Habits
            </Typography>

            {/* Subheading */}
            <Typography
              variant="h5"
              sx={{
                color: "rgba(255, 255, 255, 0.7)",
                mb: 5,
                maxWidth: 700,
                mx: "auto",
                fontSize: { xs: "1.1rem", md: "1.4rem" },
                lineHeight: 1.6,
              }}
            >
              Discover personalized meal plans powered by AI. Achieve your
              health goals with smart nutrition recommendations tailored just
              for you.
            </Typography>

            {/* CTA Buttons */}
            <Box
              sx={{
                display: "flex",
                gap: 3,
                justifyContent: "center",
                flexWrap: "wrap",
                mb: 6,
              }}
            >
              <Button
                variant="contained"
                size="large"
                endIcon={<RocketLaunchIcon />}
                onClick={() => navigate("/diet-recommendation")}
                sx={{
                  background:
                    "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                  color: "white",
                  px: 5,
                  py: 2,
                  fontSize: "1.1rem",
                  fontWeight: 700,
                  borderRadius: 3,
                  boxShadow: "0 8px 32px rgba(102, 126, 234, 0.4)",
                  textTransform: "none",
                  "&:hover": {
                    background:
                      "linear-gradient(135deg, #764ba2 0%, #667eea 100%)",
                    transform: "translateY(-3px)",
                    boxShadow: "0 12px 48px rgba(102, 126, 234, 0.6)",
                  },
                  transition: "all 0.3s ease",
                }}
              >
                Get Started Free
              </Button>
              <Button
                variant="outlined"
                size="large"
                endIcon={<SearchIcon />}
                onClick={() => navigate("/custom-recommendation")}
                sx={{
                  borderColor: "rgba(255, 255, 255, 0.3)",
                  borderWidth: 2,
                  color: "white",
                  px: 5,
                  py: 2,
                  fontSize: "1.1rem",
                  fontWeight: 700,
                  borderRadius: 3,
                  textTransform: "none",
                  backdropFilter: "blur(10px)",
                  background: "rgba(255, 255, 255, 0.05)",
                  "&:hover": {
                    borderColor: "rgba(255, 255, 255, 0.5)",
                    borderWidth: 2,
                    background: "rgba(255, 255, 255, 0.1)",
                    transform: "translateY(-3px)",
                  },
                  transition: "all 0.3s ease",
                }}
              >
                Explore Recipes
              </Button>
            </Box>

            {/* Stats */}
            <Grid
              container
              spacing={3}
              justifyContent="center"
              sx={{ maxWidth: 900, mx: "auto" }}
            >
              {stats.map((stat, index) => (
                <Grid item xs={6} sm={3} key={index}>
                  <Paper
                    sx={{
                      p: 3,
                      background: "rgba(255, 255, 255, 0.05)",
                      backdropFilter: "blur(10px)",
                      border: "1px solid rgba(255, 255, 255, 0.1)",
                      borderRadius: 3,
                      textAlign: "center",
                      transition: "all 0.3s ease",
                      "&:hover": {
                        background: "rgba(255, 255, 255, 0.1)",
                        transform: "translateY(-5px)",
                        borderColor: "rgba(102, 126, 234, 0.5)",
                      },
                    }}
                  >
                    <Box sx={{ color: "#667eea", mb: 1 }}>{stat.icon}</Box>
                    <Typography
                      variant="h4"
                      sx={{ fontWeight: 700, color: "white", mb: 0.5 }}
                    >
                      {stat.value}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{ color: "rgba(255, 255, 255, 0.6)" }}
                    >
                      {stat.label}
                    </Typography>
                  </Paper>
                </Grid>
              ))}
            </Grid>
          </Box>
        </Fade>

        {/* Features Section */}
        <Box sx={{ mb: 12 }}>
          <Typography
            variant="h2"
            align="center"
            sx={{
              fontWeight: 700,
              fontSize: { xs: "2rem", md: "3rem" },
              mb: 2,
              color: "white",
            }}
          >
            Why Choose NutriAI?
          </Typography>
          <Typography
            variant="body1"
            align="center"
            sx={{
              color: "rgba(255, 255, 255, 0.6)",
              mb: 8,
              fontSize: "1.1rem",
            }}
          >
            Cutting-edge technology meets personalized nutrition
          </Typography>

          <Grid container spacing={4}>
            {features.map((feature, index) => (
              <Grid item xs={12} sm={6} md={3} key={index}>
                <Card
                  sx={{
                    height: "100%",
                    background: "rgba(255, 255, 255, 0.05)",
                    backdropFilter: "blur(10px)",
                    border: "1px solid rgba(255, 255, 255, 0.1)",
                    borderRadius: 4,
                    transition: "all 0.4s ease",
                    position: "relative",
                    overflow: "hidden",
                    "&:hover": {
                      transform: "translateY(-10px)",
                      borderColor: "rgba(102, 126, 234, 0.5)",
                      boxShadow: "0 20px 60px rgba(102, 126, 234, 0.3)",
                      "& .feature-icon": {
                        transform: "scale(1.1) rotate(5deg)",
                      },
                    },
                    "&::before": {
                      content: '""',
                      position: "absolute",
                      top: 0,
                      left: 0,
                      right: 0,
                      height: 4,
                      background: feature.gradient,
                    },
                  }}
                >
                  <CardContent sx={{ p: 4, textAlign: "center" }}>
                    <Box
                      className="feature-icon"
                      sx={{
                        width: 80,
                        height: 80,
                        borderRadius: "50%",
                        background: feature.gradient,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        mx: "auto",
                        mb: 3,
                        color: "white",
                        transition: "all 0.3s ease",
                      }}
                    >
                      {feature.icon}
                    </Box>
                    <Typography
                      variant="h6"
                      sx={{
                        fontWeight: 700,
                        mb: 2,
                        color: "white",
                      }}
                    >
                      {feature.title}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{
                        color: "rgba(255, 255, 255, 0.7)",
                        lineHeight: 1.7,
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

        {/* Benefits Section */}
        <Paper
          sx={{
            p: { xs: 4, md: 8 },
            mb: 12,
            background:
              "linear-gradient(135deg, rgba(102, 126, 234, 0.1) 0%, rgba(118, 75, 162, 0.1) 100%)",
            backdropFilter: "blur(20px)",
            border: "1px solid rgba(255, 255, 255, 0.1)",
            borderRadius: 5,
            position: "relative",
            overflow: "hidden",
          }}
        >
          <Grid container spacing={6} alignItems="center">
            <Grid item xs={12} md={6}>
              <Typography
                variant="h3"
                sx={{
                  fontWeight: 700,
                  mb: 3,
                  color: "white",
                  fontSize: { xs: "2rem", md: "2.5rem" },
                }}
              >
                Your Personal Nutrition Assistant
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  color: "rgba(255, 255, 255, 0.7)",
                  mb: 4,
                  fontSize: "1.1rem",
                  lineHeight: 1.8,
                }}
              >
                NutriAI combines advanced machine learning with nutritional
                science to create meal plans that fit your lifestyle and help
                you reach your goals.
              </Typography>
              <Box sx={{ mb: 4 }}>
                {benefits.map((benefit, index) => (
                  <Box
                    key={index}
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: 2,
                      mb: 2,
                    }}
                  >
                    <CheckCircleOutlineIcon
                      sx={{
                        color: "#43e97b",
                        fontSize: 28,
                      }}
                    />
                    <Typography
                      variant="body1"
                      sx={{
                        color: "white",
                        fontSize: "1.05rem",
                      }}
                    >
                      {benefit}
                    </Typography>
                  </Box>
                ))}
              </Box>
              <Button
                variant="contained"
                size="large"
                endIcon={<ArrowForwardIcon />}
                onClick={() => navigate("/diet-recommendation")}
                sx={{
                  background:
                    "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                  px: 4,
                  py: 1.5,
                  fontSize: "1.05rem",
                  fontWeight: 600,
                  borderRadius: 3,
                  textTransform: "none",
                  boxShadow: "0 8px 24px rgba(102, 126, 234, 0.4)",
                  "&:hover": {
                    background:
                      "linear-gradient(135deg, #764ba2 0%, #667eea 100%)",
                    transform: "translateX(5px)",
                  },
                  transition: "all 0.3s ease",
                }}
              >
                Start Your Journey
              </Button>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box
                sx={{
                  position: "relative",
                  height: { xs: 300, md: 400 },
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Box
                  sx={{
                    width: "100%",
                    height: "100%",
                    borderRadius: 4,
                    background:
                      "linear-gradient(135deg, rgba(102, 126, 234, 0.2) 0%, rgba(118, 75, 162, 0.2) 100%)",
                    backdropFilter: "blur(10px)",
                    border: "2px solid rgba(255, 255, 255, 0.1)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    position: "relative",
                    overflow: "hidden",
                  }}
                >
                  <FitnessCenterIcon
                    sx={{
                      fontSize: 200,
                      color: "rgba(255, 255, 255, 0.1)",
                      animation: "pulse 3s ease-in-out infinite",
                      "@keyframes pulse": {
                        "0%, 100%": { transform: "scale(1)", opacity: 0.1 },
                        "50%": { transform: "scale(1.05)", opacity: 0.15 },
                      },
                    }}
                  />
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Paper>

        {/* Final CTA */}
        <Paper
          sx={{
            p: 6,
            textAlign: "center",
            background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
            borderRadius: 5,
            boxShadow: "0 20px 60px rgba(102, 126, 234, 0.4)",
            position: "relative",
            overflow: "hidden",
          }}
        >
          <Box
            sx={{
              position: "absolute",
              top: -100,
              right: -100,
              width: 300,
              height: 300,
              borderRadius: "50%",
              background:
                "radial-gradient(circle, rgba(255,255,255,0.1) 0%, transparent 70%)",
            }}
          />
          <TrendingUpIcon
            sx={{
              fontSize: 60,
              color: "white",
              mb: 2,
              opacity: 0.9,
            }}
          />
          <Typography
            variant="h3"
            sx={{
              fontWeight: 700,
              color: "white",
              mb: 2,
              fontSize: { xs: "1.8rem", md: "2.5rem" },
            }}
          >
            Ready to Start Eating Smarter?
          </Typography>
          <Typography
            variant="h6"
            sx={{
              color: "rgba(255, 255, 255, 0.9)",
              mb: 4,
              maxWidth: 600,
              mx: "auto",
            }}
          >
            Join thousands who've transformed their nutrition with AI-powered
            recommendations
          </Typography>
          <Button
            variant="contained"
            size="large"
            endIcon={<RocketLaunchIcon />}
            onClick={() => navigate("/diet-recommendation")}
            sx={{
              background: "white",
              color: "#667eea",
              px: 6,
              py: 2,
              fontSize: "1.2rem",
              fontWeight: 700,
              borderRadius: 3,
              textTransform: "none",
              boxShadow: "0 8px 32px rgba(0, 0, 0, 0.2)",
              "&:hover": {
                background: "#f0f0f0",
                transform: "scale(1.05)",
                boxShadow: "0 12px 48px rgba(0, 0, 0, 0.3)",
              },
              transition: "all 0.3s ease",
            }}
          >
            Get Your Free Plan Now
          </Button>
          <Typography
            variant="caption"
            sx={{
              display: "block",
              mt: 3,
              color: "rgba(255, 255, 255, 0.8)",
              fontSize: "0.95rem",
            }}
          >
            ✨ No credit card required • 100% Free • Instant access
          </Typography>
        </Paper>
      </Container>
    </Box>
  );
};

export default Home;
