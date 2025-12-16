import React from "react";
import {
  Container,
  Typography,
  Box,
  Grid,
  Card,
  CardContent,
  Avatar,
  Rating,
  Paper,
} from "@mui/material";
import FormatQuoteIcon from "@mui/icons-material/FormatQuote";
import VerifiedIcon from "@mui/icons-material/Verified";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Fitness Enthusiast",
      image: "👩‍💼",
      rating: 5,
      text: "HealthyWay transformed my approach to nutrition! I lost 15 pounds in 3 months while eating foods I actually enjoy. The personalized meal plans made it so easy to stay on track. Highly recommend!",
      stats: "Lost 15 lbs in 3 months",
    },
    {
      name: "Michael Chen",
      role: "Software Engineer",
      image: "👨‍💻",
      rating: 5,
      text: "As someone with a busy schedule, I needed meal planning that was quick and effective. HealthyWay's AI recommendations are spot-on. The custom search feature helps me hit my macros perfectly every single day.",
      stats: "Gained 8 lbs muscle",
    },
    {
      name: "Emma Rodriguez",
      role: "Yoga Instructor",
      image: "🧘‍♀️",
      rating: 5,
      text: "I love how HealthyWay considers my activity level and goals. The variety of recipes keeps meals interesting, and I've discovered so many new healthy dishes. My energy levels have never been better!",
      stats: "300+ recipes tried",
    },
    {
      name: "David Kim",
      role: "College Student",
      image: "👨‍🎓",
      rating: 5,
      text: "Being a college student on a budget, I needed free nutrition guidance I could trust. HealthyWay delivers! The meal recommendations are affordable, easy to prepare, and actually taste great.",
      stats: "BMI improved from 28 to 24",
    },
    {
      name: "Lisa Anderson",
      role: "Busy Mom of Three",
      image: "👩‍👧‍👦",
      rating: 5,
      text: "Feeding a family while maintaining a healthy lifestyle seemed impossible until I found HealthyWay. The recipe variety means something for everyone, and the nutritional breakdowns help me make better choices for my whole family.",
      stats: "Family favorite for 6 months",
    },
    {
      name: "James Wilson",
      role: "Marathon Runner",
      image: "🏃‍♂️",
      rating: 5,
      text: "Training for marathons requires precise nutrition. HealthyWay's custom recommendations help me fuel properly for long runs and recovery. My performance has improved significantly since I started using it!",
      stats: "PR in last marathon",
    },
    {
      name: "Priya Patel",
      role: "Medical Student",
      image: "👩‍⚕️",
      rating: 5,
      text: "From a medical perspective, I appreciate how HealthyWay uses evidence-based calculations for BMR and caloric needs. It's scientifically sound and practical. I recommend it to friends and family all the time.",
      stats: "Maintained healthy weight for 2 years",
    },
    {
      name: "Carlos Martinez",
      role: "Personal Trainer",
      image: "💪",
      rating: 5,
      text: "I recommend HealthyWay to all my clients. It's like having a nutrition coach in your pocket. The accuracy of the recommendations and the huge recipe database make it an invaluable tool for anyone serious about their health.",
      stats: "Recommends to 50+ clients",
    },
  ];

  const stats = [
    { value: "50K+", label: "Happy Users" },
    { value: "4.9/5", label: "Average Rating" },
    { value: "2M+", label: "Meals Planned" },
    { value: "95%", label: "Success Rate" },
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
            Success Stories
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
            Real people, real results. See how HealthyWay is transforming lives
            through personalized nutrition
          </Typography>
        </Box>

        {/* Stats Section */}
        <Grid container spacing={3} sx={{ mb: 8 }}>
          {stats.map((stat, index) => (
            <Grid item xs={6} md={3} key={index}>
              <Paper
                sx={{
                  p: 3,
                  textAlign: "center",
                  background: "rgba(255, 255, 255, 0.05)",
                  backdropFilter: "blur(10px)",
                  border: "1px solid rgba(255, 255, 255, 0.1)",
                  borderRadius: 3,
                }}
              >
                <Typography
                  variant="h3"
                  sx={{
                    fontWeight: 800,
                    background:
                      "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                    fontSize: { xs: "1.75rem", md: "2.5rem" },
                    mb: 1,
                  }}
                >
                  {stat.value}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    color: "rgba(255, 255, 255, 0.7)",
                    fontWeight: 600,
                    fontSize: { xs: "0.75rem", md: "0.875rem" },
                  }}
                >
                  {stat.label}
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>

        {/* Testimonials Grid */}
        <Grid container spacing={4}>
          {testimonials.map((testimonial, index) => (
            <Grid item xs={12} md={6} key={index}>
              <Card
                sx={{
                  height: "100%",
                  background: "rgba(255, 255, 255, 0.05)",
                  backdropFilter: "blur(10px)",
                  border: "1px solid rgba(255, 255, 255, 0.1)",
                  borderRadius: 4,
                  position: "relative",
                  overflow: "visible",
                  transition: "all 0.3s ease",
                  "&:hover": {
                    transform: "translateY(-8px)",
                    borderColor: "rgba(102, 126, 234, 0.5)",
                    boxShadow: "0 20px 60px rgba(102, 126, 234, 0.3)",
                  },
                }}
              >
                <CardContent sx={{ p: { xs: 3, md: 4 } }}>
                  {/* Quote Icon */}
                  <FormatQuoteIcon
                    sx={{
                      position: "absolute",
                      top: 15,
                      right: 15,
                      fontSize: 40,
                      color: "rgba(102, 126, 234, 0.2)",
                      transform: "rotate(180deg)",
                    }}
                  />

                  {/* User Info */}
                  <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                    <Avatar
                      sx={{
                        width: { xs: 50, md: 60 },
                        height: { xs: 50, md: 60 },
                        mr: 2,
                        fontSize: { xs: "1.5rem", md: "2rem" },
                        background:
                          "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                      }}
                    >
                      {testimonial.image}
                    </Avatar>
                    <Box>
                      <Box
                        sx={{ display: "flex", alignItems: "center", gap: 1 }}
                      >
                        <Typography
                          variant="h6"
                          sx={{
                            fontWeight: 700,
                            color: "white",
                            fontSize: { xs: "1rem", md: "1.1rem" },
                          }}
                        >
                          {testimonial.name}
                        </Typography>
                        <VerifiedIcon sx={{ fontSize: 18, color: "#667eea" }} />
                      </Box>
                      <Typography
                        variant="body2"
                        sx={{
                          color: "rgba(255, 255, 255, 0.6)",
                          fontSize: { xs: "0.8rem", md: "0.875rem" },
                        }}
                      >
                        {testimonial.role}
                      </Typography>
                    </Box>
                  </Box>

                  {/* Rating */}
                  <Rating
                    value={testimonial.rating}
                    readOnly
                    sx={{
                      mb: 2,
                      "& .MuiRating-iconFilled": {
                        color: "#ffd700",
                      },
                    }}
                  />

                  {/* Testimonial Text */}
                  <Typography
                    variant="body1"
                    sx={{
                      color: "rgba(255, 255, 255, 0.8)",
                      lineHeight: 1.8,
                      mb: 2,
                      fontStyle: "italic",
                      fontSize: { xs: "0.9rem", md: "0.95rem" },
                    }}
                  >
                    "{testimonial.text}"
                  </Typography>

                  {/* Stats Badge */}
                  <Box
                    sx={{
                      display: "inline-block",
                      px: 2,
                      py: 1,
                      background: "rgba(102, 126, 234, 0.2)",
                      border: "1px solid rgba(102, 126, 234, 0.4)",
                      borderRadius: 2,
                    }}
                  >
                    <Typography
                      variant="caption"
                      sx={{
                        color: "#667eea",
                        fontWeight: 700,
                        fontSize: { xs: "0.7rem", md: "0.75rem" },
                      }}
                    >
                      ✨ {testimonial.stats}
                    </Typography>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        {/* CTA Section */}
        <Box
          sx={{
            mt: 8,
            p: { xs: 4, md: 6 },
            background:
              "linear-gradient(135deg, rgba(102, 126, 234, 0.1) 0%, rgba(118, 75, 162, 0.1) 100%)",
            backdropFilter: "blur(20px)",
            border: "1px solid rgba(255, 255, 255, 0.1)",
            borderRadius: 4,
            textAlign: "center",
          }}
        >
          <Typography
            variant="h4"
            sx={{
              fontWeight: 700,
              color: "white",
              mb: 2,
              fontSize: { xs: "1.5rem", md: "2rem" },
            }}
          >
            Ready to Start Your Journey?
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: "rgba(255, 255, 255, 0.7)",
              mb: 3,
              fontSize: { xs: "0.95rem", md: "1.1rem" },
            }}
          >
            Join thousands of users who have transformed their health with
            HealthyWay
          </Typography>
          <Typography
            variant="h6"
            sx={{
              color: "#667eea",
              fontWeight: 700,
              fontSize: { xs: "1rem", md: "1.25rem" },
            }}
          >
            100% Free • No Credit Card Required • Start in 2 Minutes
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Testimonials;
