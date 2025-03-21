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

  const toggleTheme = () => setDarkMode((prevMode) => !prevMode);

  const menuItems = [
    { section: "home", pt: "Início", en: "Home", icon: BsHouseFill, route: "/" },
    { section: "projects", pt: "Projetos", en: "Projects", icon: BsFolderFill, route: "/projects" },
    { section: "certificates", pt: "Certificados", en: "Certificates", icon: FaAward, route: "/certificates" },
    { section: "contact", pt: "Contato", en: "Contact", icon: BsEnvelopeFill, route: "/contact" },
    { section: "resume", pt: "Resumo", en: "Resume", icon: BsPersonFill, route: "/resume" },
    { section: "github", pt: "GitHub", en: "GitHub", icon: BsGithub, external: "https://github.com/br1ansouza" },
  ];

  return (
    <Box
      sx={{
        width: "250px",
        height: "100vh",
        position: "fixed",
        top: 0,
        left: 0,
        backgroundColor: "rgba(25, 25, 25, 0.9)",
        backdropFilter: "blur(8px)",
        padding: "2rem 1.2rem",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        boxShadow: "4px 0 15px rgba(0,0,0,0.3)",
        borderRadius: "0 15px 15px 0",
        zIndex: 100,
      }}
    >
      <Box>
        <List sx={{ display: "flex", flexDirection: "column", gap: "12px" }}>
          {menuItems.map((item, index) => (
            <ListItem key={index} disablePadding>
              <ListItemButton
                onClick={() => {
                  if (item.route) navigate(item.route);
                  else if (item.external) window.open(item.external, "_blank");
                }}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: "14px",
                  padding: "1rem",
                  borderRadius: "10px",
                  color: theme.colors.hover,
                  fontWeight: "bold",
                  fontSize: "1.1rem",
                  backgroundColor: "rgba(255, 255, 255, 0.1)",
                  transition: "0.3s ease-in-out",
                  "&:hover": {
                    backgroundColor: "rgba(255, 255, 255, 0.2)",
                    transform: "scale(1.08)",
                    boxShadow: "0px 0px 15px rgba(255, 255, 255, 0.2)",
                    color: "white",
                  },
                }}
              >
                <Box
                  component={motion.div}
                  sx={{ display: "flex", alignItems: "center", transition: "color 0.3s", color: "inherit" }}
                >
                  <item.icon size={22} />
                </Box>

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

      <Box sx={{ display: "flex", alignItems: "center", gap: "1.5rem", justifyContent: "center", paddingBottom: "1rem" }}>
  <IconButton
    onClick={toggleTheme}
    sx={{
      color: darkMode ? "#ffcc00" : "#80bfff",
      padding: "12px",
      borderRadius: "12px",
      transition: "0.3s ease-in-out",
      fontSize: "1.2rem",
      "&:hover": {
        transform: "scale(1.1)",
        boxShadow: "0px 0px 12px rgba(255, 255, 255, 0.2)",
      },
    }}
  >
    {darkMode ? <BsSunFill size={24} /> : <BsMoonFill size={24} />}
  </IconButton>

  <IconButton
    onClick={() => setLanguage(language === "pt" ? "en" : "pt")}
    sx={{
      color: "white",
      fontSize: "1.2rem",
      fontWeight: "bold",
      padding: "12px 16px",
      borderRadius: "12px",
      transition: "0.3s ease-in-out",
      "&:hover": {
        transform: "scale(1.1)",
        boxShadow: "0px 0px 12px rgba(255, 255, 255, 0.2)",
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
        {language === "pt" ? "EN" : "PT"}
      </motion.span>
    </AnimatePresence>
  </IconButton>
</Box>

    </Box>
  );
}