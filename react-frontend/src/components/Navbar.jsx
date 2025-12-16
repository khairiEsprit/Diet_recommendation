import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  Container,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { useNavigate, useLocation } from "react-router-dom";
import RestaurantIcon from "@mui/icons-material/Restaurant";
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";
import SearchIcon from "@mui/icons-material/Search";
import HomeIcon from "@mui/icons-material/Home";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import InfoIcon from "@mui/icons-material/Info";
import HelpIcon from "@mui/icons-material/Help";
import StarIcon from "@mui/icons-material/Star";
import BuildIcon from "@mui/icons-material/Build";

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const handleNavigation = (path) => {
    navigate(path);
    setMobileMenuOpen(false);
  };

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
    { label: "How It Works", path: "/how-it-works", icon: <BuildIcon /> },
    { label: "About", path: "/about", icon: <InfoIcon /> },
    { label: "Testimonials", path: "/testimonials", icon: <StarIcon /> },
    { label: "FAQ", path: "/faq", icon: <HelpIcon /> },
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
                overflow: "hidden",
                mr: 1.5,
                border: "2px solid rgba(102, 126, 234, 0.3)",
              }}
            >
              <img
                src="/logo.png"
                alt="HealthyWay Logo"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  borderRadius: "50%",
                }}
              />
            </Box>
            <Typography
              variant="h5"
              noWrap
              component="div"
              sx={{
                display: "flex",
                fontWeight: 800,
                background: "linear-gradient(135deg, #ffffff 0%, #667eea 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                letterSpacing: ".05rem",
                fontSize: { xs: "1.25rem", md: "1.5rem" },
              }}
            >
              HealthyWay
            </Typography>
          </Box>

          {/* Desktop Navigation */}
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
              justifyContent: "center",
              gap: 1,
            }}
          >
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

          {/* Mobile Menu Toggle */}
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "flex", md: "none" },
              justifyContent: "flex-end",
            }}
          >
            <IconButton
              onClick={toggleMobileMenu}
              sx={{
                color: "white",
                background: "rgba(255, 255, 255, 0.05)",
                borderRadius: 2,
                "&:hover": {
                  background: "rgba(255, 255, 255, 0.1)",
                },
              }}
            >
              <MenuIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </Container>

      {/* Mobile Drawer Menu */}
      <Drawer
        anchor="right"
        open={mobileMenuOpen}
        onClose={toggleMobileMenu}
        sx={{
          display: { xs: "block", md: "none" },
          "& .MuiDrawer-paper": {
            width: 280,
            background: "linear-gradient(180deg, #0a0e27 0%, #1a1f3a 100%)",
            backdropFilter: "blur(20px)",
            borderLeft: "1px solid rgba(102, 126, 234, 0.2)",
          },
        }}
      >
        <Box
          sx={{
            p: 2,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography
            variant="h6"
            sx={{
              fontWeight: 700,
              background: "linear-gradient(135deg, #ffffff 0%, #667eea 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            HealthyWay
          </Typography>
          <IconButton onClick={toggleMobileMenu} sx={{ color: "white" }}>
            <CloseIcon />
          </IconButton>
        </Box>
        <List sx={{ px: 1 }}>
          {navItems.map((item) => (
            <ListItem key={item.path} disablePadding sx={{ mb: 1 }}>
              <ListItemButton
                onClick={() => handleNavigation(item.path)}
                sx={{
                  borderRadius: 2,
                  py: 1.5,
                  background:
                    location.pathname === item.path
                      ? "linear-gradient(135deg, #667eea 0%, #764ba2 100%)"
                      : "rgba(255, 255, 255, 0.05)",
                  "&:hover": {
                    background:
                      location.pathname === item.path
                        ? "linear-gradient(135deg, #764ba2 0%, #667eea 100%)"
                        : "rgba(255, 255, 255, 0.1)",
                  },
                  transition: "all 0.3s ease",
                }}
              >
                <ListItemIcon sx={{ color: "white", minWidth: 40 }}>
                  {item.icon}
                </ListItemIcon>
                <ListItemText
                  primary={item.label}
                  sx={{
                    "& .MuiTypography-root": {
                      color: "white",
                      fontWeight: 600,
                    },
                  }}
                />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </AppBar>
  );
};

export default Navbar;
