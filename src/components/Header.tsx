import { Box, IconButton, Button } from "@mui/material";
import { useTheme } from "styled-components";
import { BsSunFill, BsMoonFill } from "react-icons/bs";
import { useState } from "react";
import { useLanguage } from "../contexts/LanguageContext";
import { motion, AnimatePresence } from "framer-motion";

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
        padding: "1rem 2rem",
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        backgroundColor: theme.colors.background,
        zIndex: 10,
      }}
    >
      <Button
        onClick={() => setLanguage(language === "pt" ? "en" : "pt")}
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
        <AnimatePresence mode="wait">
          <motion.span
            key={language}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.3 }}
          >
            {language === "pt" ? "English" : "Português"}
          </motion.span>
        </AnimatePresence>
      </Button>

      <Box sx={{ display: "flex", gap: 2 }}>
        {[
          { section: "resume", pt: "Resumo", en: "Resume" },
          { section: "projects", pt: "Projetos", en: "Projects" },
          { section: "contact", pt: "Contato", en: "Contact" },
        ].map((item, index) => (
          <Button
            key={index}
            href={`#${item.section}`}
            sx={{
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
            <AnimatePresence mode="wait">
              <motion.span
                key={language + item.section}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{ duration: 0.3 }}
              >
                {language === "pt" ? item.pt : item.en}
              </motion.span>
            </AnimatePresence>
          </Button>
        ))}
      </Box>

      <IconButton
        onClick={toggleTheme}
        sx={{
          color: theme.colors.textSecondary,
          transition: "0.3s",
          padding: "0.4rem",
          borderRadius: "8px",
          "&:hover": {
            transform: "scale(1.1)",
            color: theme.colors.hover,
            backgroundColor: theme.colors.hover,
          },
        }}
      >
        {darkMode ? <BsSunFill size={22} /> : <BsMoonFill size={22} />}
      </IconButton>
    </Box>
  );
}
