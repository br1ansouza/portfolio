import { Box, IconButton, Button } from "@mui/material";
import { useTheme } from "styled-components";
import { BsSunFill, BsMoonFill } from "react-icons/bs";
import { useState } from "react";
import { useLanguage } from "../contexts/LanguageContext";

export function Header() {
  const theme = useTheme();
  const { language, setLanguage } = useLanguage();
  const [darkMode, setDarkMode] = useState(true);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "1rem 1rem",
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        backgroundColor: theme.colors.background,
        zIndex: 10,
      }}
    >
      <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
        <Button
          onClick={() => setLanguage(language === "pt" ? "en" : "pt")}
          variant="outlined"
          sx={{
            border: `2px solid ${theme.colors.border}`,
            color: theme.colors.textSecondary,
            fontWeight: "bold",
            padding: "0.4rem 1rem",
            fontSize: "0.9rem",
            borderRadius: "8px",
            transition: "0.3s",
            textTransform: "none",
            "&:hover": {
              backgroundColor: theme.colors.hover,
              borderColor: theme.colors.hover,
              color: theme.colors.textPrimary,
              transform: "scale(1.05)",
            },
          }}
        >
          {language === "pt" ? "English" : "Português"}
        </Button>

        <IconButton
          onClick={toggleTheme}
          sx={{
            color: theme.colors.textSecondary,
            transition: "0.3s",
            "&:hover": {
              transform: "scale(1.1)",
              color: theme.colors.hover,
            },
          }}
        >
          {darkMode ? <BsSunFill size={22} /> : <BsMoonFill size={22} />}
        </IconButton>
      </Box>
    </Box>
  );
}
