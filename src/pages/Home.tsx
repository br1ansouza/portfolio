import { Box, Grid, Button } from "@mui/material";
import { ProfileCard } from "../components/ProfileCard";
import { Certificates } from "../components/Certificates";
import { Technologies } from "../components/Technologies";
import { GitHubCard } from "../components/GitHubCard";
import { FaFileAlt, FaProjectDiagram, FaEnvelope } from "react-icons/fa";
import { useTheme } from "styled-components";
import { Header } from "../components/Header";

const links = [
  { label: "Resume", icon: <FaFileAlt />, url: "#" },
  { label: "Projects", icon: <FaProjectDiagram />, url: "#" },
  { label: "Contact", icon: <FaEnvelope />, url: "mailto:your.email@example.com" },
];

export function Home() {
  const theme = useTheme();

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        minHeight: "100vh",
        backgroundColor: theme.colors.background,
        padding: "2rem",
      }}
    >
      <Header />

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
          maxWidth: 1200,
          gap: 4,
          marginTop: "4rem",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            justifyContent: "center",
            alignItems: "center",
            gap: 3,
            width: "100%",
          }}
        >
          <ProfileCard />
          <GitHubCard />
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            justifyContent: "center",
            alignItems: "center",
            gap: 3,
            width: "100%",
          }}
        >
          <Certificates />
          <Technologies />
        </Box>
        <Grid container spacing={2} justifyContent="center" sx={{ maxWidth: 800 }}>
          {links.map((link, index) => (
            <Grid item key={index} xs={12} sm={6} md={3}>
              <Button
                variant="outlined"
                fullWidth
                href={link.url}
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  padding: "12px 20px",
                  background: theme.colors.cardBackground,
                  color: theme.colors.textPrimary,
                  borderColor: theme.colors.textSecondary,
                  borderRadius: 2,
                  "&:hover": {
                    background: theme.colors.hover,
                    borderColor: theme.colors.textPrimary,
                  },
                }}
              >
                {link.label} {link.icon}
              </Button>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
}
