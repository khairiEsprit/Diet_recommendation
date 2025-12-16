import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Chip,
  Box,
  Collapse,
  IconButton,
  Divider,
  Grid,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import TimerIcon from "@mui/icons-material/Timer";
import RestaurantIcon from "@mui/icons-material/Restaurant";
import { styled } from "@mui/material/styles";

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

const RecipeCard = ({ recipe }) => {
  const [expanded, setExpanded] = useState(false);
  const [imageError, setImageError] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const handleImageError = () => {
    setImageError(true);
  };

  const nutritionValues = [
    {
      label: "Calories",
      value: recipe.Calories,
      unit: "kcal",
      color: "#ff6b6b",
    },
    {
      label: "Protein",
      value: recipe.ProteinContent,
      unit: "g",
      color: "#4ecdc4",
    },
    {
      label: "Carbs",
      value: recipe.CarbohydrateContent,
      unit: "g",
      color: "#45b7d1",
    },
    { label: "Fat", value: recipe.FatContent, unit: "g", color: "#f7b731" },
    { label: "Fiber", value: recipe.FiberContent, unit: "g", color: "#5f27cd" },
    { label: "Sugar", value: recipe.SugarContent, unit: "g", color: "#fd79a8" },
  ];

  return (
    <Card
      sx={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
        background: "rgba(255, 255, 255, 0.05)",
        backdropFilter: "blur(10px)",
        border: "1px solid rgba(255, 255, 255, 0.1)",
        borderRadius: 4,
        overflow: "hidden",
        transition: "all 0.4s ease",
        "&:hover": {
          transform: "translateY(-8px)",
          boxShadow: "0 20px 60px rgba(102, 126, 234, 0.3)",
          borderColor: "rgba(102, 126, 234, 0.5)",
        },
      }}
    >
      <Box sx={{ position: "relative", overflow: "hidden" }}>
        <CardMedia
          component="img"
          height="200"
          image={
            recipe.image_link ||
            "https://via.placeholder.com/300x200?text=Recipe+Image"
          }
          alt={recipe.Name}
          sx={{
            objectFit: "cover",
            transition: "transform 0.3s ease",
            "&:hover": {
              transform: "scale(1.1)",
            },
          }}
        />
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background:
              "linear-gradient(to bottom, transparent 0%, rgba(10, 14, 39, 0.3) 100%)",
            pointerEvents: "none",
          }}
        />
      </Box>
      <CardContent sx={{ flexGrow: 1, p: { xs: 2, md: 3 } }}>
        <Typography
          variant="h6"
          gutterBottom
          sx={{
            fontWeight: 600,
            mb: 2,
            color: "white",
            fontSize: { xs: "1rem", md: "1.25rem" },
            lineHeight: 1.3,
          }}
        >
          {recipe.Name}
        </Typography>

        {/* Time Information */}
        <Box sx={{ display: "flex", gap: 1, mb: 2, flexWrap: "wrap" }}>
          <Chip
            icon={
              <TimerIcon
                sx={{
                  color: "#667eea !important",
                  fontSize: { xs: 14, md: 16 },
                }}
              />
            }
            label={`Prep: ${recipe.PrepTime}min`}
            size="small"
            sx={{
              borderColor: "#667eea",
              color: "white",
              background: "rgba(102, 126, 234, 0.1)",
              fontSize: { xs: "0.7rem", md: "0.8125rem" },
            }}
            variant="outlined"
          />
          <Chip
            icon={
              <TimerIcon
                sx={{
                  color: "#f093fb !important",
                  fontSize: { xs: 14, md: 16 },
                }}
              />
            }
            label={`Cook: ${recipe.CookTime}min`}
            size="small"
            sx={{
              borderColor: "#f093fb",
              color: "white",
              background: "rgba(240, 147, 251, 0.1)",
              fontSize: { xs: "0.7rem", md: "0.8125rem" },
            }}
            variant="outlined"
          />
          <Chip
            label={`Total: ${recipe.TotalTime}min`}
            size="small"
            sx={{
              backgroundColor: "rgba(255, 255, 255, 0.1)",
              color: "white",
              fontSize: { xs: "0.7rem", md: "0.8125rem" },
            }}
          />
        </Box>

        {/* Nutrition Chips */}
        <Box sx={{ display: "flex", gap: 1, mb: 2, flexWrap: "wrap" }}>
          {nutritionValues.slice(0, 3).map((item) => (
            <Chip
              key={item.label}
              label={`${item.label}: ${Math.round(item.value)}${item.unit}`}
              size="small"
              sx={{
                backgroundColor: item.color,
                color: "white",
                fontWeight: 500,
                fontSize: { xs: "0.7rem", md: "0.8125rem" },
              }}
            />
          ))}
        </Box>

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Typography
            variant="body2"
            sx={{
              color: "rgba(255, 255, 255, 0.6)",
              fontSize: { xs: "0.8rem", md: "0.875rem" },
            }}
          >
            Click to see details
          </Typography>
          <ExpandMore
            expand={expanded}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
            sx={{
              color: "white",
              padding: { xs: 1.5, md: 1 },
            }}
          >
            <ExpandMoreIcon sx={{ fontSize: { xs: 28, md: 24 } }} />
          </ExpandMore>
        </Box>

        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <Divider sx={{ my: 2, borderColor: "rgba(255, 255, 255, 0.1)" }} />

          {/* All Nutrition Values */}
          <Typography
            variant="subtitle2"
            gutterBottom
            sx={{
              fontWeight: 600,
              mb: 2,
              color: "white",
              fontSize: { xs: "0.9rem", md: "0.875rem" },
            }}
          >
            Nutritional Information
          </Typography>
          <Grid container spacing={{ xs: 0.5, md: 1 }} sx={{ mb: 3 }}>
            {nutritionValues.map((item) => (
              <Grid item xs={6} sm={4} key={item.label}>
                <Box
                  sx={{
                    p: { xs: 1, md: 1.5 },
                    background: "rgba(255, 255, 255, 0.05)",
                    border: "1px solid rgba(255, 255, 255, 0.1)",
                    borderRadius: 2,
                    textAlign: "center",
                    transition: "all 0.2s ease",
                    "&:hover": {
                      background: "rgba(255, 255, 255, 0.08)",
                    },
                  }}
                >
                  <Typography
                    variant="caption"
                    sx={{
                      color: "rgba(255, 255, 255, 0.6)",
                      fontSize: { xs: "0.65rem", md: "0.75rem" },
                    }}
                  >
                    {item.label}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      fontWeight: 600,
                      color: "white",
                      fontSize: { xs: "0.8rem", md: "0.875rem" },
                    }}
                  >
                    {Math.round(item.value)}
                    {item.unit}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>

          {/* Ingredients */}
          <Typography
            variant="subtitle2"
            gutterBottom
            sx={{
              fontWeight: 600,
              mb: 1,
              color: "white",
              fontSize: { xs: "0.9rem", md: "0.875rem" },
            }}
          >
            <RestaurantIcon
              sx={{
                fontSize: { xs: 16, md: 18 },
                verticalAlign: "middle",
                mr: 0.5,
                color: "#667eea",
              }}
            />
            Ingredients
          </Typography>
          <Box sx={{ mb: 2 }}>
            {recipe.RecipeIngredientParts &&
              recipe.RecipeIngredientParts.map((ingredient, index) => (
                <Typography
                  key={index}
                  variant="body2"
                  sx={{
                    ml: 2,
                    mb: 0.5,
                    color: "rgba(255, 255, 255, 0.8)",
                    fontSize: { xs: "0.8rem", md: "0.875rem" },
                    lineHeight: 1.5,
                  }}
                >
                  • {ingredient}
                </Typography>
              ))}
          </Box>

          {/* Instructions */}
          <Typography
            variant="subtitle2"
            gutterBottom
            sx={{
              fontWeight: 600,
              mb: 1,
              color: "white",
              fontSize: { xs: "0.9rem", md: "0.875rem" },
            }}
          >
            Instructions
          </Typography>
          <Box>
            {recipe.RecipeInstructions &&
              recipe.RecipeInstructions.map((instruction, index) => (
                <Typography
                  key={index}
                  variant="body2"
                  sx={{
                    ml: 2,
                    mb: 1,
                    color: "rgba(255, 255, 255, 0.8)",
                    fontSize: { xs: "0.8rem", md: "0.875rem" },
                    lineHeight: 1.6,
                  }}
                >
                  {index + 1}. {instruction}
                </Typography>
              ))}
          </Box>
        </Collapse>
      </CardContent>
    </Card>
  );
};

export default RecipeCard;
