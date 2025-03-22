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

      <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "1rem", paddingBottom: "1rem" }}>
        <Box sx={{ width: "100%", display: "flex", justifyContent: "center" }}>
          <IconButton
            onClick={() => window.open("https://github.com/br1ansouza", "_blank")}
            sx={{
              color: "#fff",
              padding: "14px",
              borderRadius: "10px",
              fontWeight: "bold",
              fontSize: "1.1rem",
              width: "100%",
              maxWidth: "200px",
              transition: "0.3s ease-in-out",
              border: "1px solid rgba(255, 255, 255, 0.2)",
              "&:hover": {
                backgroundColor: "rgba(255, 255, 255, 0.05)",
                transform: "scale(1.05)",
                boxShadow: "0px 0px 10px rgba(255, 255, 255, 0.15)",
              },
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: "10px",
            }}
          >
            <BsGithub size={22} />
            GitHub
          </IconButton>
        </Box>

        <Box sx={{ display: "flex", gap: "1rem", justifyContent: "center" }}>
          <IconButton
            onClick={toggleTheme}
            sx={{
              color: darkMode ? "#ffcc00" : "#80bfff",
              padding: "10px",
              borderRadius: "10px",
              transition: "0.3s ease-in-out",
              "&:hover": {
                transform: "scale(1.1)",
                backgroundColor: "rgba(255, 255, 255, 0.05)",
              },
            }}
          >
            {darkMode ? <BsSunFill size={24} /> : <BsMoonFill size={24} />}
          </IconButton>

          <IconButton
            onClick={() => setLanguage(language === "pt" ? "en" : "pt")}
            sx={{
              color: "white",
              fontSize: "1.1rem",
              fontWeight: "bold",
              padding: "10px 16px",
              borderRadius: "10px",
              transition: "0.3s ease-in-out",
              "&:hover": {
                transform: "scale(1.1)",
                backgroundColor: "rgba(255, 255, 255, 0.05)",
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
                {language === "pt" ? "EN" : "PT-BR"}
              </motion.span>
            </AnimatePresence>
          </IconButton>
        </Box>
      </Box>
    </Box>
  );
}