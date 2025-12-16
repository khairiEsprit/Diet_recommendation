import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  Container,
} from "@mui/material";
import { useNavigate, useLocation } from "react-router-dom";
import RestaurantIcon from "@mui/icons-material/Restaurant";
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";
import SearchIcon from "@mui/icons-material/Search";
import HomeIcon from "@mui/icons-material/Home";

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const navItems = [
    { label: "Home", path: "/", icon: <HomeIcon /> },
    {
      label: "Diet Plan",
      path: "/diet-recommendation",
      icon: <FitnessCenterIcon />,
    },
    {
      label: "Custom Search",
      path: "/custom-recommendation",
      icon: <SearchIcon />,
    },
  ];

  return (
    <AppBar
      position="sticky"
      elevation={0}
      sx={{
        background: "rgba(10, 14, 39, 0.95)",
        backdropFilter: "blur(20px)",
        borderBottom: "1px solid rgba(102, 126, 234, 0.2)",
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters sx={{ py: 1 }}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              cursor: "pointer",
              mr: 4,
            }}
            onClick={() => navigate("/")}
          >
            <Box
              sx={{
                width: 40,
                height: 40,
                borderRadius: "50%",
                background:
                  "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                mr: 1.5,
              }}
            >
              <RestaurantIcon sx={{ fontSize: 24, color: "white" }} />
            </Box>
            <Typography
              variant="h5"
              noWrap
              component="div"
              sx={{
                display: { xs: "none", md: "flex" },
                fontWeight: 800,
                background:
                  "linear-gradient(135deg, #ffffff 0%, #667eea 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                letterSpacing: ".05rem",
              }}
            >
              NutriAI
            </Typography>
          </Box>

          <Box sx={{ flexGrow: 1, display: "flex", justifyContent: "center", gap: 1 }}>
            {navItems.map((item) => (
              <Button
                key={item.path}
                startIcon={item.icon}
                onClick={() => navigate(item.path)}
                sx={{
                  color: "white",
                  px: 3,
                  py: 1,
                  borderRadius: 3,
                  textTransform: "none",
                  fontSize: "1rem",
                  fontWeight: 600,
                  background:
                    location.pathname === item.path
                      ? "linear-gradient(135deg, #667eea 0%, #764ba2 100%)"
                      : "rgba(255, 255, 255, 0.05)",
                  border:
                    location.pathname === item.path
                      ? "none"
                      : "1px solid rgba(255, 255, 255, 0.1)",
                  "&:hover": {
                    background:
                      location.pathname === item.path
                        ? "linear-gradient(135deg, #764ba2 0%, #667eea 100%)"
                        : "rgba(255, 255, 255, 0.1)",
                    transform: "translateY(-2px)",
                  },
                  transition: "all 0.3s ease",
                }}
              >
                {item.label}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;
