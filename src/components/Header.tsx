import { Box, Typography, IconButton } from "@mui/material";
import { useTheme } from "styled-components";
import { BsSunFill, BsMoonFill } from "react-icons/bs";
import { useState } from "react";

export function Header() {
  const theme = useTheme();
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
        padding: "1rem 2rem",
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        backgroundColor: theme.colors.background,
        zIndex: 10,
      }}
    >
      <Typography
        variant="h5"
        sx={{
          fontFamily: "'Dancing Script', cursive",
          fontWeight: "bold",
          fontSize: "1.8rem",
          color: theme.colors.textPrimary,
        }}
      >
        Brian Souza
      </Typography>

      <IconButton onClick={toggleTheme} sx={{ color: theme.colors.textSecondary }}>
        {darkMode ? <BsSunFill size={22} /> : <BsMoonFill size={22} />}
      </IconButton>
    </Box>
  );
}
