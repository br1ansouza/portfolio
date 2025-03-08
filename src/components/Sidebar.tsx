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
    { section: "resume", pt: "Resumo", en: "Resume", icon: BsPersonFill, route: "/resume" },
    { section: "projects", pt: "Projetos", en: "Projects", icon: BsFolderFill, route: "/projects" },
    { section: "certificates", pt: "Certificados", en: "Certificates", icon: FaAward, route: "/certificates" },
    { section: "contact", pt: "Contato", en: "Contact", icon: BsEnvelopeFill, route: "/contact" },
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
        <List>
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
                  color: theme.colors.textPrimary,
                  fontWeight: "bold",
                  fontSize: "1.1rem",
                  transition: "0.3s",
                  "&:hover": {
                    backgroundColor: "rgba(255, 255, 255, 0.1)",
                    transform: "scale(1.05)",
                    boxShadow: "0px 0px 10px rgba(255, 255, 255, 0.15)",
                    color: theme.colors.hover,
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

      <Box sx={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
        <StyledButton onClick={toggleTheme}>
          {darkMode ? (
            <>
              <BsSunFill size={22} />
              <span>Light Mode</span>
            </>
          ) : (
            <>
              <BsMoonFill size={22} />
              <span>Dark Mode</span>
            </>
          )}
        </StyledButton>

        <StyledButton onClick={() => setLanguage(language === "pt" ? "en" : "pt")}>
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
        </StyledButton>
      </Box>
    </Box>
  );
}

const StyledButton = ({ children, onClick }: { children: React.ReactNode; onClick: () => void }) => {
  return (
    <IconButton
      onClick={onClick}
      sx={{
        color: "white",
        fontSize: "1rem",
        fontWeight: "bold",
        width: "100%",
        padding: "1rem",
        borderRadius: "10px",
        backgroundColor: "rgba(255,255,255,0.1)",
        transition: "0.3s",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "10px",
        "&:hover": {
          backgroundColor: "rgba(255,255,255,0.2)",
          transform: "scale(1.05)",
        },
      }}
    >
      {children}
    </IconButton>
  );
};
