import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import DietRecommendation from "./components/DietRecommendation";
import CustomRecommendation from "./components/CustomRecommendation";

const theme = createTheme({
  palette: {
    primary: {
      main: "#667eea",
    },
    secondary: {
      main: "#764ba2",
    },
    background: {
      default: "#f5f7fa",
    },
  },
  typography: {
    fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontWeight: 700,
    },
    h2: {
      fontWeight: 700,
    },
    h3: {
      fontWeight: 600,
    },
    h4: {
      fontWeight: 600,
    },
    h5: {
      fontWeight: 600,
    },
  },
  shape: {
    borderRadius: 8,
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1920,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
          fontWeight: 600,
          // Better touch targets on mobile
          minHeight: 44,
          '@media (max-width: 600px)': {
            minHeight: 48,
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
        },
      },
    },
    MuiIconButton: {
      styleOverrides: {
        root: {
          // Larger touch targets for mobile
          '@media (max-width: 600px)': {
            padding: 12,
          },
        },
      },
    },
    MuiTextField: {
      defaultProps: {
        // Better mobile input experience
        InputLabelProps: {
          shrink: true,
        },
      },
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/diet-recommendation" element={<DietRecommendation />} />
          <Route
            path="/custom-recommendation"
            element={<CustomRecommendation />}
          />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
