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
} from "@mui/material";
import PsychologyIcon from "@mui/icons-material/Psychology";
import SecurityIcon from "@mui/icons-material/Security";
import SpeedIcon from "@mui/icons-material/Speed";
import FavoriteIcon from "@mui/icons-material/Favorite";
import GroupsIcon from "@mui/icons-material/Groups";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";

const About = () => {
  const values = [
    {
      icon: <PsychologyIcon sx={{ fontSize: 40 }} />,
      title: "Innovation First",
      description:
        "Cutting-edge AI technology to revolutionize nutrition planning",
      color: "#667eea",
    },
    {
      icon: <SecurityIcon sx={{ fontSize: 40 }} />,
      title: "Privacy & Security",
      description: "Your data is encrypted and never shared with third parties",
      color: "#f093fb",
    },
    {
      icon: <FavoriteIcon sx={{ fontSize: 40 }} />,
      title: "Health Focused",
      description: "Every recommendation prioritizes your wellbeing and goals",
      color: "#43e97b",
    },
    {
      icon: <SpeedIcon sx={{ fontSize: 40 }} />,
      title: "Fast & Efficient",
      description: "Get personalized meal plans in seconds, not hours",
      color: "#fa709a",
    },
  ];

  const stats = [
    { number: "500K+", label: "Recipe Database", icon: <GroupsIcon /> },
    { number: "99%", label: "Accuracy Rate", icon: <EmojiEventsIcon /> },
    { number: "24/7", label: "Available", icon: <SpeedIcon /> },
    { number: "100%", label: "Free Forever", icon: <FavoriteIcon /> },
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
            About HealthyWay
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
            Empowering individuals to make healthier food choices through
            AI-powered nutrition recommendations and personalized meal planning
          </Typography>
        </Box>

        {/* Stats */}
        <Grid container spacing={3} sx={{ mb: 8 }}>
          {stats.map((stat, index) => (
            <Grid item xs={6} md={3} key={index}>
              <Paper
                sx={{
                  p: { xs: 2, md: 3 },
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
                <Box sx={{ color: "#667eea", mb: 1 }}>{stat.icon}</Box>
                <Typography
                  variant="h3"
                  sx={{
                    fontWeight: 700,
                    color: "white",
                    mb: 1,
                    fontSize: { xs: "1.75rem", md: "3rem" },
                  }}
                >
                  {stat.number}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    color: "rgba(255, 255, 255, 0.7)",
                    fontSize: { xs: "0.8rem", md: "0.875rem" },
                  }}
                >
                  {stat.label}
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>

        {/* Mission Statement */}
        <Paper
          sx={{
            p: { xs: 3, md: 6 },
            mb: 8,
            background:
              "linear-gradient(135deg, rgba(102, 126, 234, 0.1) 0%, rgba(118, 75, 162, 0.1) 100%)",
            backdropFilter: "blur(20px)",
            border: "1px solid rgba(255, 255, 255, 0.1)",
            borderRadius: 4,
          }}
        >
          <Typography
            variant="h3"
            sx={{
              fontWeight: 700,
              color: "white",
              mb: 3,
              textAlign: "center",
              fontSize: { xs: "1.75rem", md: "2.5rem" },
            }}
          >
            Our Mission
          </Typography>
          <Typography
            variant="h6"
            sx={{
              color: "rgba(255, 255, 255, 0.8)",
              textAlign: "center",
              lineHeight: 1.8,
              maxWidth: 900,
              mx: "auto",
              fontSize: { xs: "1rem", md: "1.25rem" },
            }}
          >
            To democratize access to personalized nutrition guidance by
            leveraging artificial intelligence and machine learning, making
            healthy eating simple, accessible, and enjoyable for everyone,
            regardless of their dietary preferences or health goals.
          </Typography>
        </Paper>

        {/* Core Values */}
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
            Our Core Values
          </Typography>
          <Grid container spacing={4}>
            {values.map((value, index) => (
              <Grid item xs={12} sm={6} md={3} key={index}>
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
                      borderColor: value.color,
                      boxShadow: `0 20px 60px ${value.color}40`,
                    },
                  }}
                >
                  <CardContent
                    sx={{ p: { xs: 3, md: 4 }, textAlign: "center" }}
                  >
                    <Avatar
                      sx={{
                        width: { xs: 64, md: 80 },
                        height: { xs: 64, md: 80 },
                        mx: "auto",
                        mb: 2,
                        backgroundColor: value.color,
                      }}
                    >
                      {value.icon}
                    </Avatar>
                    <Typography
                      variant="h6"
                      sx={{
                        fontWeight: 700,
                        color: "white",
                        mb: 2,
                        fontSize: { xs: "1rem", md: "1.25rem" },
                      }}
                    >
                      {value.title}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{
                        color: "rgba(255, 255, 255, 0.7)",
                        lineHeight: 1.7,
                        fontSize: { xs: "0.85rem", md: "0.875rem" },
                      }}
                    >
                      {value.description}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* Technology Stack */}
        <Paper
          sx={{
            p: { xs: 3, md: 6 },
            background: "rgba(255, 255, 255, 0.05)",
            backdropFilter: "blur(20px)",
            border: "1px solid rgba(255, 255, 255, 0.1)",
            borderRadius: 4,
          }}
        >
          <Typography
            variant="h3"
            sx={{
              fontWeight: 700,
              color: "white",
              mb: 3,
              textAlign: "center",
              fontSize: { xs: "1.75rem", md: "2.5rem" },
            }}
          >
            Powered by Advanced Technology
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: "rgba(255, 255, 255, 0.8)",
              textAlign: "center",
              lineHeight: 1.8,
              maxWidth: 900,
              mx: "auto",
              mb: 4,
              fontSize: { xs: "0.95rem", md: "1.1rem" },
            }}
          >
            HealthyWay uses state-of-the-art machine learning algorithms trained
            on over 500,000 recipes and nutritional data points. Our
            recommendation engine analyzes your personal metrics, dietary
            preferences, and health goals to deliver the most accurate and
            personalized meal suggestions.
          </Typography>
          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              gap: 2,
              justifyContent: "center",
            }}
          >
            {[
              "Machine Learning",
              "Neural Networks",
              "Nutritional Science",
              "Data Analytics",
              "Cloud Computing",
            ].map((tech) => (
              <Box
                key={tech}
                sx={{
                  px: 3,
                  py: 1.5,
                  background:
                    "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                  borderRadius: 3,
                  color: "white",
                  fontWeight: 600,
                  fontSize: { xs: "0.85rem", md: "0.95rem" },
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

export default About;
