import React, { useState } from "react";
import {
  Container,
  Typography,
  Box,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Chip,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";

const FAQ = () => {
  const [expanded, setExpanded] = useState("panel1");

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const faqs = [
    {
      category: "Getting Started",
      questions: [
        {
          q: "How do I get started with HealthyWay?",
          a: "Simply click on 'Get Diet Plan' from the navigation menu, enter your personal information (age, height, weight, activity level), and our AI will generate a personalized meal plan tailored to your needs. It's completely free and takes less than 2 minutes!",
        },
        {
          q: "Is HealthyWay really free?",
          a: "Yes! HealthyWay is 100% free to use. We believe everyone deserves access to personalized nutrition guidance. There are no hidden fees, subscriptions, or premium tiers. All features are available to all users at no cost.",
        },
        {
          q: "Do I need to create an account?",
          a: "No account is required! You can use HealthyWay immediately without signing up. Simply enter your information and get instant recommendations. However, we're working on an optional account feature to save your preferences and track your progress over time.",
        },
      ],
    },
    {
      category: "Diet Plans & Recommendations",
      questions: [
        {
          q: "How accurate are the nutritional recommendations?",
          a: "Our AI achieves 99% accuracy in nutritional calculations and meal matching. We use industry-standard formulas (Harris-Benedict, Mifflin-St Jeor equations) for BMR calculations and trained machine learning models on verified nutritional databases. All recipes include detailed macro and micronutrient information.",
        },
        {
          q: "Can I customize my meal preferences?",
          a: "Absolutely! Use our 'Custom Food Recommendation' feature to specify your exact nutritional targets (calories, protein, carbs, fats). You can also search for recipes by specific ingredients, making it easy to work with foods you love or accommodate dietary restrictions.",
        },
        {
          q: "How often should I update my profile information?",
          a: "We recommend updating your information every 4-6 weeks or whenever there's a significant change in your weight, activity level, or fitness goals. This ensures your meal plans remain optimally aligned with your current needs.",
        },
        {
          q: "Can HealthyWay help with specific diets (keto, vegan, etc.)?",
          a: "Yes! Our custom recommendation feature allows you to set specific macronutrient ratios perfect for keto, high-protein, low-carb, or any other dietary approach. You can search by ingredients to find vegan, vegetarian, or other specialized recipes.",
        },
      ],
    },
    {
      category: "Nutrition & Health",
      questions: [
        {
          q: "What is BMI and why is it important?",
          a: "BMI (Body Mass Index) is a measure of body fat based on height and weight. While not perfect, it's a useful screening tool to categorize weight status. HealthyWay calculates your BMI and provides context to help you understand your current health status and set appropriate goals.",
        },
        {
          q: "How do you calculate my daily calorie needs?",
          a: "We use your Basal Metabolic Rate (BMR) calculated via the Mifflin-St Jeor equation, then multiply by your activity level factor. For weight loss, we create a moderate calorie deficit (typically 300-500 calories). For muscle gain, we add a surplus. This science-based approach ensures safe, sustainable results.",
        },
        {
          q: "Can I use HealthyWay if I have dietary restrictions or allergies?",
          a: "Yes! While we don't have an automatic allergen filter (yet!), you can use the custom search feature to find recipes with specific ingredients and avoid those you're allergic to. Always review recipe ingredients carefully if you have severe allergies.",
        },
        {
          q: "Is this a replacement for professional nutritional advice?",
          a: "No. HealthyWay is an educational and planning tool designed for generally healthy individuals. It should not replace advice from registered dietitians, doctors, or other healthcare professionals, especially if you have specific medical conditions or health concerns.",
        },
      ],
    },
    {
      category: "Technical & Privacy",
      questions: [
        {
          q: "How do you protect my personal information?",
          a: "Your privacy is our priority. We process your information locally in your browser session. We don't store your personal health data on our servers. Your age, weight, height, and other details are only used to calculate your recommendations and are not saved or shared with third parties.",
        },
        {
          q: "What technology powers HealthyWay?",
          a: "HealthyWay uses machine learning algorithms (K-Nearest Neighbors with cosine similarity) trained on a database of 500,000+ recipes. The backend is built with FastAPI (Python), the frontend with React, and we use scikit-learn for our recommendation engine.",
        },
        {
          q: "Can I use HealthyWay offline?",
          a: "Currently, HealthyWay requires an internet connection to access our recipe database and run recommendations. We're exploring offline capabilities for future versions.",
        },
        {
          q: "Which devices and browsers are supported?",
          a: "HealthyWay works on all modern devices - desktop computers, laptops, tablets, and smartphones. We support the latest versions of Chrome, Firefox, Safari, and Edge. The interface is fully responsive and optimized for mobile use.",
        },
      ],
    },
    {
      category: "Results & Progress",
      questions: [
        {
          q: "How long until I see results?",
          a: "Results vary by individual, but most users notice changes within 2-4 weeks of following their personalized meal plans consistently. Sustainable weight loss is typically 0.5-2 pounds per week. Remember, nutrition is just one part of a healthy lifestyle alongside exercise, sleep, and stress management.",
        },
        {
          q: "Can I save my meal plans?",
          a: "Currently, you can view and screenshot your meal plans for reference. We're developing a feature to save meal plans, create grocery lists, and track your favorites. Stay tuned for updates!",
        },
        {
          q: "What if the recommended calories seem too high or too low?",
          a: "Our calculations are based on established scientific formulas, but everyone is unique. If recommendations feel off, double-check your activity level selection - this significantly impacts calorie needs. Consider consulting with a healthcare professional for personalized guidance.",
        },
      ],
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
          <HelpOutlineIcon
            sx={{
              fontSize: { xs: 60, md: 80 },
              color: "#667eea",
              mb: 2,
            }}
          />
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
            Frequently Asked Questions
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
            Everything you need to know about HealthyWay and personalized
            nutrition
          </Typography>
        </Box>

        {/* FAQs by Category */}
        {faqs.map((category, categoryIndex) => (
          <Box key={categoryIndex} sx={{ mb: 6 }}>
            <Chip
              label={category.category}
              sx={{
                mb: 3,
                px: 2,
                py: 2.5,
                fontSize: { xs: "0.9rem", md: "1rem" },
                fontWeight: 700,
                background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                color: "white",
                "& .MuiChip-label": {
                  px: 1,
                },
              }}
            />
            {category.questions.map((faq, index) => (
              <Accordion
                key={index}
                expanded={expanded === `panel${categoryIndex}-${index}`}
                onChange={handleChange(`panel${categoryIndex}-${index}`)}
                sx={{
                  mb: 2,
                  background: "rgba(255, 255, 255, 0.05)",
                  backdropFilter: "blur(10px)",
                  border: "1px solid rgba(255, 255, 255, 0.1)",
                  borderRadius: "12px !important",
                  "&:before": {
                    display: "none",
                  },
                  "&.Mui-expanded": {
                    borderColor: "rgba(102, 126, 234, 0.5)",
                    boxShadow: "0 8px 32px rgba(102, 126, 234, 0.2)",
                  },
                }}
              >
                <AccordionSummary
                  expandIcon={
                    <ExpandMoreIcon
                      sx={{ color: "rgba(255, 255, 255, 0.7)" }}
                    />
                  }
                  sx={{
                    "& .MuiAccordionSummary-content": {
                      my: 2,
                    },
                  }}
                >
                  <Typography
                    variant="h6"
                    sx={{
                      fontWeight: 600,
                      color: "white",
                      fontSize: { xs: "0.95rem", md: "1.15rem" },
                      pr: 2,
                    }}
                  >
                    {faq.q}
                  </Typography>
                </AccordionSummary>
                <AccordionDetails sx={{ pt: 0, pb: 3 }}>
                  <Typography
                    variant="body1"
                    sx={{
                      color: "rgba(255, 255, 255, 0.7)",
                      lineHeight: 1.8,
                      fontSize: { xs: "0.9rem", md: "1rem" },
                    }}
                  >
                    {faq.a}
                  </Typography>
                </AccordionDetails>
              </Accordion>
            ))}
          </Box>
        ))}

        {/* Still Have Questions Section */}
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
            Still Have Questions?
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: "rgba(255, 255, 255, 0.7)",
              mb: 3,
              fontSize: { xs: "0.95rem", md: "1.1rem" },
            }}
          >
            We're here to help! Reach out to our support team anytime.
          </Typography>
          <Box
            sx={{
              display: "flex",
              gap: 2,
              justifyContent: "center",
              flexWrap: "wrap",
            }}
          >
            <Box
              sx={{
                px: 3,
                py: 2,
                background: "rgba(255, 255, 255, 0.1)",
                border: "1px solid rgba(255, 255, 255, 0.2)",
                borderRadius: 2,
              }}
            >
              <Typography
                sx={{
                  color: "rgba(255, 255, 255, 0.5)",
                  fontSize: "0.85rem",
                  mb: 0.5,
                }}
              >
                Email
              </Typography>
              <Typography sx={{ color: "white", fontWeight: 600 }}>
                support@healthyway.com
              </Typography>
            </Box>
            <Box
              sx={{
                px: 3,
                py: 2,
                background: "rgba(255, 255, 255, 0.1)",
                border: "1px solid rgba(255, 255, 255, 0.2)",
                borderRadius: 2,
              }}
            >
              <Typography
                sx={{
                  color: "rgba(255, 255, 255, 0.5)",
                  fontSize: "0.85rem",
                  mb: 0.5,
                }}
              >
                Response Time
              </Typography>
              <Typography sx={{ color: "white", fontWeight: 600 }}>
                Within 24 hours
              </Typography>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default FAQ;
