import React from "react";
import {
  Box,
  Container,
  Grid,
  Typography,
  Link,
  IconButton,
  Divider,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import LocationOnIcon from "@mui/icons-material/LocationOn";

const Footer = () => {
  const navigate = useNavigate();

  const footerSections = [
    {
      title: "Quick Links",
      links: [
        { label: "Home", path: "/" },
        { label: "Diet Plan", path: "/diet-recommendation" },
        { label: "Custom Search", path: "/custom-recommendation" },
        { label: "About Us", path: "/about" },
      ],
    },
    {
      title: "Resources",
      links: [
        { label: "How It Works", path: "/how-it-works" },
        { label: "FAQ", path: "#faq" },
        { label: "Privacy Policy", path: "#privacy" },
        { label: "Terms of Service", path: "#terms" },
      ],
    },
    {
      title: "Contact",
      links: [
        {
          label: "contact@healthyway.com",
          icon: <EmailIcon sx={{ fontSize: 18 }} />,
        },
        {
          label: "+1 (555) 123-4567",
          icon: <PhoneIcon sx={{ fontSize: 18 }} />,
        },
        {
          label: "San Francisco, CA",
          icon: <LocationOnIcon sx={{ fontSize: 18 }} />,
        },
      ],
    },
  ];

  return (
    <Box
      component="footer"
      sx={{
        background: "linear-gradient(180deg, #0a0e27 0%, #050814 100%)",
        borderTop: "1px solid rgba(102, 126, 234, 0.2)",
        pt: 8,
        pb: 4,
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4} sx={{ mb: 6 }}>
          {/* Brand Section */}
          <Grid item xs={12} md={4}>
            <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
              <Box
                sx={{
                  width: 48,
                  height: 48,
                  borderRadius: "50%",
                  overflow: "hidden",
                  mr: 2,
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
                sx={{
                  fontWeight: 800,
                  background:
                    "linear-gradient(135deg, #ffffff 0%, #667eea 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                HealthyWay
              </Typography>
            </Box>
            <Typography
              variant="body2"
              sx={{
                color: "rgba(255, 255, 255, 0.7)",
                mb: 3,
                lineHeight: 1.7,
              }}
            >
              AI-powered nutrition platform helping you achieve your health
              goals through personalized meal recommendations and smart diet
              planning.
            </Typography>
            <Box sx={{ display: "flex", gap: 1 }}>
              {[
                { icon: <FacebookIcon />, link: "#" },
                { icon: <TwitterIcon />, link: "#" },
                { icon: <InstagramIcon />, link: "#" },
                { icon: <LinkedInIcon />, link: "#" },
                {
                  icon: <GitHubIcon />,
                  link: "https://github.com/khairiEsprit/Diet_recommendation",
                },
              ].map((social, index) => (
                <IconButton
                  key={index}
                  component="a"
                  href={social.link}
                  target="_blank"
                  sx={{
                    color: "rgba(255, 255, 255, 0.6)",
                    background: "rgba(255, 255, 255, 0.05)",
                    "&:hover": {
                      color: "#667eea",
                      background: "rgba(102, 126, 234, 0.1)",
                      transform: "translateY(-3px)",
                    },
                    transition: "all 0.3s ease",
                  }}
                >
                  {social.icon}
                </IconButton>
              ))}
            </Box>
          </Grid>

          {/* Footer Links */}
          {footerSections.map((section, index) => (
            <Grid item xs={12} sm={4} md={2.6} key={index}>
              <Typography
                variant="h6"
                sx={{
                  fontWeight: 700,
                  color: "white",
                  mb: 2,
                  fontSize: "1.1rem",
                }}
              >
                {section.title}
              </Typography>
              <Box sx={{ display: "flex", flexDirection: "column", gap: 1.5 }}>
                {section.links.map((link, linkIndex) => (
                  <Box
                    key={linkIndex}
                    sx={{ display: "flex", alignItems: "center", gap: 1 }}
                  >
                    {link.icon && (
                      <Box sx={{ color: "#667eea" }}>{link.icon}</Box>
                    )}
                    {link.path ? (
                      <Link
                        onClick={() => navigate(link.path)}
                        sx={{
                          color: "rgba(255, 255, 255, 0.7)",
                          textDecoration: "none",
                          cursor: "pointer",
                          fontSize: "0.95rem",
                          "&:hover": {
                            color: "#667eea",
                            transform: "translateX(5px)",
                          },
                          transition: "all 0.3s ease",
                        }}
                      >
                        {link.label}
                      </Link>
                    ) : (
                      <Typography
                        variant="body2"
                        sx={{
                          color: "rgba(255, 255, 255, 0.7)",
                          fontSize: "0.95rem",
                        }}
                      >
                        {link.label}
                      </Typography>
                    )}
                  </Box>
                ))}
              </Box>
            </Grid>
          ))}
        </Grid>

        <Divider sx={{ borderColor: "rgba(255, 255, 255, 0.1)", mb: 4 }} />

        {/* Bottom Section */}
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            justifyContent: "space-between",
            alignItems: "center",
            gap: 2,
          }}
        >
          <Typography
            variant="body2"
            sx={{
              color: "rgba(255, 255, 255, 0.5)",
              textAlign: { xs: "center", sm: "left" },
            }}
          >
            © {new Date().getFullYear()} HealthyWay. All rights reserved.
          </Typography>
          <Typography
            variant="body2"
            sx={{
              color: "rgba(255, 255, 255, 0.5)",
              textAlign: { xs: "center", sm: "right" },
            }}
          >
            Made with ❤️ for better health
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
