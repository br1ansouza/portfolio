import { useState } from "react";
import { Box, List, ListItem, ListItemButton, ListItemText, IconButton } from "@mui/material";
import { useTheme } from "styled-components";
import { BsSunFill, BsMoonFill, BsGithub, BsPersonFill, BsFolderFill, BsEnvelopeFill, BsHouseFill } from "react-icons/bs";
import { FaAward } from "react-icons/fa";
import { useLanguage } from "../contexts/LanguageContext";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";

export function Sidebar() {
  const theme = useTheme();
  const { language, setLanguage } = useLanguage();
  const navigate = useNavigate();

  const [darkMode, setDarkMode] = useState(true);

  const toggleTheme = () => {
    setDarkMode((prevMode) => !prevMode);
  };

  const menuItems = [
    { section: "home", pt: "Início", en: "Home", icon: <BsHouseFill size={20} />, route: "/" },
    { section: "resume", pt: "Resumo", en: "Resume", icon: <BsPersonFill size={20} />, route: "/resume" },
    { section: "projects", pt: "Projetos", en: "Projects", icon: <BsFolderFill size={20} />, route: "/projects" },
    { section: "certificates", pt: "Certificados", en: "Certificates", icon: <FaAward size={20} />, route: "/certificates" },
    { section: "contact", pt: "Contato", en: "Contact", icon: <BsEnvelopeFill size={20} />, route: "/contact" },
    { section: "github", pt: "GitHub", en: "GitHub", icon: <BsGithub size={20} />, external: "https://github.com/br1ansouza" },
  ];

  return (
    <Box
      sx={{
        width: "260px",
        height: "100vh",
        position: "fixed",
        top: 0,
        left: 0,
        backgroundColor: theme.colors.background,
        padding: "1.5rem",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        boxShadow: "2px 0 10px rgba(0,0,0,0.2)",
        zIndex: 100,
      }}
    >
      <Box>
        <List>
          {menuItems.map((item, index) => (
            <ListItem key={index} disablePadding>
              <ListItemButton
                onClick={() => {
                  if (item.route) {
                    navigate(item.route);
                  } else if (item.external) {
                    window.open(item.external, "_blank");
                  }
                }}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: "12px",
                  padding: "0.9rem",
                  borderRadius: "10px",
                  color: theme.colors.textSecondary,
                  fontWeight: "bold",
                  transition: "0.3s",
                  fontSize: "1rem",
                  cursor: "pointer",
                  "&:hover": {
                    backgroundColor: theme.colors.hover,
                    color: theme.colors.textPrimary,
                    transform: "scale(1.05)",
                  },
                }}
              >
                {item.icon}
                <AnimatePresence mode="wait">
                  <motion.span
                    key={language + item.section}
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ListItemText primary={language === "pt" ? item.pt : item.en} />
                  </motion.span>
                </AnimatePresence>
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Box>

      <Box sx={{ textAlign: "center", display: "flex", flexDirection: "column", gap: "1rem" }}>
        <IconButton
          onClick={toggleTheme}
          sx={{
            color: theme.colors.textSecondary,
            fontSize: "1rem",
            fontWeight: "bold",
            width: "100%",
            padding: "0.9rem",
            borderRadius: "10px",
            border: `2px solid ${theme.colors.border}`,
            transition: "0.3s",
            "&:hover": {
              backgroundColor: theme.colors.hover,
              color: theme.colors.textPrimary,
              transform: "scale(1.05)",
            },
          }}
        >
          {darkMode ? (
            <>
              <BsSunFill size={22} style={{ marginRight: "8px" }} />
              Light Mode
            </>
          ) : (
            <>
              <BsMoonFill size={22} style={{ marginRight: "8px" }} />
              Dark Mode
            </>
          )}
        </IconButton>

        <IconButton
          onClick={() => setLanguage(language === "pt" ? "en" : "pt")}
          sx={{
            color: theme.colors.textSecondary,
            fontSize: "1rem",
            fontWeight: "bold",
            width: "100%",
            padding: "0.9rem",
            borderRadius: "10px",
            border: `2px solid ${theme.colors.border}`,
            transition: "0.3s",
            "&:hover": {
              backgroundColor: theme.colors.hover,
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
        </IconButton>
      </Box>
    </Box>
  );
}
