import { Box } from "@mui/material";
import { ProfileCard } from "../components/ProfileCard";
import { Certificates } from "../components/Certificates";
import { Technologies } from "../components/Technologies";
import { useTheme } from "styled-components";
import { Header } from "../components/Header";
import { ActionButtons } from "../components/ActionButtons";

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
        padding: "1rem",
      }}
    >
      <Header />

      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
          maxWidth: 1200,
          gap: 3,
          marginTop: "4rem",
        }}
      >
        <ProfileCard />
        <ActionButtons />
      </Box>

      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          justifyContent: "center",
          alignItems: "center",
          gap: 3,
          width: "100%",
          marginTop: "2rem",
        }}
      >

        <Technologies />
        <Certificates />
        
      </Box>
    </Box>
  );
}
