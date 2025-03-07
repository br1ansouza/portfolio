import { Box } from "@mui/material";
import { ProfileCard } from "../components/ProfileCard";
import { Technologies } from "../components/Technologies";
import { useTheme } from "styled-components";
import { Sidebar } from "../components/Sidebar";

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
      <Sidebar />

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
        
      </Box>
    </Box>
  );
}
