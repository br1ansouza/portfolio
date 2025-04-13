import { Box, List, ListItem, ListItemButton, ListItemText, IconButton, Tooltip } from "@mui/material";
import { useTheme } from "styled-components";
import { BsSunFill, BsMoonFill, BsGithub, BsPersonFill, BsFolderFill, BsEnvelopeFill, BsHouseFill } from "react-icons/bs";
import { FaAward } from "react-icons/fa";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import { useLanguage } from "../contexts/useLanguage";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useThemeContext } from "../contexts/ThemeContext";
import { useState } from "react";

export function Sidebar() {
  const theme = useTheme();
  const { language, setLanguage } = useLanguage();
  const navigate = useNavigate();
  const { darkMode, toggleTheme } = useThemeContext();
  const [isCollapsed, setIsCollapsed] = useState(false);

  const menuItems = [
    { section: "home", pt: "Início", en: "Home", icon: BsHouseFill, route: "/" },
    { section: "projects", pt: "Projetos", en: "Projects", icon: BsFolderFill, route: "/projects" },
    { section: "certificates", pt: "Certificados", en: "Certificates", icon: FaAward, route: "/certificates" },
    { section: "resume", pt: "Resumo", en: "Resume", icon: BsPersonFill, route: "/resume" },
    { section: "contact", pt: "Contato", en: "Contact", icon: BsEnvelopeFill, route: "/contact" },
  ];

  const darkBackgroundPath = darkMode
    ? '/src/assets/sidebar/sidebar-background.png'
    : '/src/assets/sidebar/sidebar-background-light.png';

  const sidebarVariants = {
    expanded: {
      width: "250px",
      transition: {
        duration: 0.5,
        type: "spring",
        stiffness: 300,
        damping: 26,
        ease: "easeInOut"
      }
    },
    collapsed: {
      width: "80px",
      transition: {
        duration: 0.5,
        type: "spring",
        stiffness: 300,
        damping: 26,
        ease: "easeInOut"
      }
    }
  };

  const textVariants = {
    expanded: {
      opacity: 1,
      x: 0,
      display: "block",
      transition: {
        delay: 0.1,
        duration: 0.3,
        ease: "easeOut"
      }
    },
    collapsed: {
      opacity: 0,
      x: -10,
      display: "none",
      transition: {
        duration: 0.2,
        ease: "easeIn"
      }
    }
  };

  const bottomControlsVariants = {
    expanded: {
      opacity: 1,
      scale: 1,
      display: "flex",
      transition: {
        delay: 0.1,
        duration: 0.4,
        ease: "easeOut"
      }
    },
    collapsed: {
      opacity: 0,
      scale: 0.8,
      transitionEnd: {
        display: "none"
      },
      transition: {
        duration: 0.3,
        ease: "easeIn"
      }
    }
  };

  const collapsedControlsVariants = {
    expanded: {
      opacity: 0,
      y: 20,
      transition: {
        duration: 0.2,
        ease: "easeIn"
      },
      transitionEnd: {
        display: "none"
      }
    },
    collapsed: {
      opacity: 1,
      y: 0,
      display: "flex",
      transition: {
        delay: 0.2,
        duration: 0.4,
        ease: "easeOut"
      }
    }
  };

  const iconButtonVariants = {
    hover: {
      scale: 1.1,
      rotate: 5,
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    }
  };

  const chevronVariants = {
    hover: {
      scale: 1.2,
      x: isCollapsed ? 2 : -2,
      transition: {
        duration: 0.3,
        repeat: Infinity,
        repeatType: "reverse" as const
      }
    }
  };

  return (
    <Box
      component={motion.div}
      initial="expanded"
      animate={isCollapsed ? "collapsed" : "expanded"}
      variants={sidebarVariants}
      sx={{
        height: "100vh",
        position: "fixed",
        top: 0,
        left: 0,
        backgroundColor: theme.colors.sidebarBackground,
        backgroundImage: `url(${darkBackgroundPath})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundBlendMode: "overlay",
        backdropFilter: "blur(8px)",
        padding: "2rem 1.2rem",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        boxShadow: theme.shadow.sidebar,
        zIndex: 100,
        overflow: "visible"
      }}
    >
      <motion.div
        whileHover="hover"
        variants={chevronVariants}
        style={{
          position: "absolute",
          right: "-16px",
          top: "50px",
          zIndex: 101,
          backgroundColor: theme.colors.menuItemBackground,
          borderRadius: "50%",
          width: "32px",
          height: "32px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          boxShadow: "0px 0px 8px rgba(0, 0, 0, 0.3)",
          cursor: "pointer"
        }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsCollapsed(!isCollapsed)}
      >
        {isCollapsed ? <BsChevronRight color={theme.colors.textPrimary} /> : <BsChevronLeft color={theme.colors.textPrimary} />}
      </motion.div>

      <Box>
        <List sx={{ display: "flex", flexDirection: "column", gap: "12px" }}>
          {menuItems.map((item, index) => (
            <ListItem key={index} disablePadding>
              <Tooltip title={isCollapsed ? (language === "pt" ? item.pt : item.en) : ""} placement="right">
                <motion.div style={{ width: "100%" }}>
                  <ListItemButton
                    component={motion.div}
                    whileHover={{
                      backgroundColor: theme.colors.hover,
                      scale: 1.08,
                      color: "white",
                      boxShadow: "0px 0px 15px rgba(255, 255, 255, 0.2)",
                    }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => {
                      if (item.route) navigate(item.route);
                    }}
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: "14px",
                      padding: isCollapsed ? "1rem 0.5rem" : "1rem",
                      borderRadius: "10px",
                      color: theme.colors.hover,
                      fontWeight: "bold",
                      fontSize: "1.1rem",
                      backgroundColor: theme.colors.menuItemBackground,
                      transition: "background-color 0.3s ease-in-out, color 0.3s ease-in-out",
                      justifyContent: isCollapsed ? "center" : "flex-start",
                    }}
                  >
                    <motion.div
                      initial={{ scale: 1 }}
                      animate={{
                        scale: [1, 1.1, 1],
                        rotate: isCollapsed ? [0, 0, 0] : [0, 5, 0]
                      }}
                      transition={{
                        duration: 0.5,
                        ease: "easeInOut",
                        times: [0, 0.5, 1],
                        repeat: 0,
                        repeatDelay: 0
                      }}
                      style={{ display: "flex", alignItems: "center", color: "inherit" }}
                    >
                      <item.icon size={22} />
                    </motion.div>

                    <AnimatePresence mode="wait">
                      <motion.div
                        variants={textVariants}
                        initial="expanded"
                        animate={isCollapsed ? "collapsed" : "expanded"}
                        style={{ overflow: "hidden" }}
                      >
                        <motion.span
                          key={language + item.section}
                          initial={{ opacity: 0, y: -5 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 5 }}
                          transition={{ duration: 0.3 }}
                        >
                          <ListItemText primary={language === "pt" ? item.pt : item.en} />
                        </motion.span>
                      </motion.div>
                    </AnimatePresence>
                  </ListItemButton>
                </motion.div>
              </Tooltip>
            </ListItem>
          ))}
        </List>
      </Box>

      <motion.div
        variants={bottomControlsVariants}
        initial="expanded"
        animate={isCollapsed ? "collapsed" : "expanded"}
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "1rem",
          paddingBottom: "1rem"
        }}
      >
        <Box sx={{ width: "100%", display: "flex", justifyContent: "center" }}>
          <motion.div
            whileHover={iconButtonVariants.hover}
            whileTap={{ scale: 0.95 }}
            style={{ width: "100%", maxWidth: "200px" }}
          >
            <IconButton
              onClick={() => window.open("https://github.com/br1ansouza", "_blank")}
              sx={{
                color: theme.colors.textPrimary,
                padding: "14px",
                borderRadius: "10px",
                fontWeight: "bold",
                fontSize: "1.1rem",
                width: "100%",
                transition: "background-color 0.3s ease-in-out, color 0.3s ease-in-out",
                border: `1px solid ${theme.colors.border}`,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap: "10px",
              }}
            >
              <BsGithub size={22} />
              GitHub
            </IconButton>
          </motion.div>
        </Box>

        <Box sx={{ display: "flex", gap: "1rem", justifyContent: "center" }}>
          <motion.div whileTap={{ rotate: 360 }} transition={{ duration: 0.6, ease: "easeInOut" }}>
            <IconButton
              onClick={toggleTheme}
              sx={{
                color: darkMode ? "#ffcc00" : "#80bfff",
                padding: "10px",
                borderRadius: "10px",
                transition: "background-color 0.3s ease-in-out",
              }}
            >
              <motion.div whileHover={{ scale: 1.2, rotate: 15 }}>
                {darkMode ? <BsSunFill size={24} /> : <BsMoonFill size={24} />}
              </motion.div>
            </IconButton>
          </motion.div>

          <motion.div whileHover={iconButtonVariants.hover} whileTap={{ scale: 0.95 }}>
            <IconButton
              onClick={() => setLanguage(language === "pt" ? "en" : "pt")}
              sx={{
                color: theme.colors.textPrimary,
                fontSize: "1.1rem",
                fontWeight: "bold",
                padding: "10px 16px",
                borderRadius: "10px",
                transition: "background-color 0.3s ease-in-out",
              }}
            >
              <AnimatePresence mode="wait">
                <motion.span
                  key={language}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{
                    opacity: 1,
                    y: 0,
                    transition: {
                      type: "spring",
                      stiffness: 300,
                      damping: 20
                    }
                  }}
                  exit={{
                    opacity: 0,
                    y: 10,
                    transition: { duration: 0.2 }
                  }}
                >
                  {language === "pt" ? "EN" : "PTBR"}
                </motion.span>
              </AnimatePresence>
            </IconButton>
          </motion.div>
        </Box>
      </motion.div>

      <motion.div
        variants={collapsedControlsVariants}
        initial="expanded"
        animate={isCollapsed ? "collapsed" : "expanded"}
        style={{
          flexDirection: "column",
          alignItems: "center",
          gap: "1rem",
          paddingBottom: "1rem"
        }}
      >
        <motion.div whileHover={iconButtonVariants.hover} whileTap={{ scale: 0.9 }}>
          <IconButton
            onClick={() => window.open("https://github.com/br1ansouza", "_blank")}
            sx={{
              color: theme.colors.textPrimary,
              padding: "8px",
              borderRadius: "10px",
              transition: "background-color 0.3s ease-in-out, color 0.3s ease-in-out",
              "&:hover": {
                backgroundColor: theme.colors.hover,
                color: "white",
              },
            }}
          >
            <BsGithub size={20} />
          </IconButton>
        </motion.div>

        <motion.div
          whileHover={iconButtonVariants.hover}
          whileTap={{ scale: 0.9, rotate: 180 }}
          transition={{ duration: 0.4 }}
        >
          <IconButton
            onClick={toggleTheme}
            sx={{
              color: darkMode ? "#ffcc00" : "#80bfff",
              padding: "8px",
              borderRadius: "10px",
              transition: "background-color 0.3s ease-in-out",
              "&:hover": {
                backgroundColor: theme.colors.hover,
              },
            }}
          >
            {darkMode ? <BsSunFill size={20} /> : <BsMoonFill size={20} />}
          </IconButton>
        </motion.div>

        <motion.div whileHover={iconButtonVariants.hover} whileTap={{ scale: 0.9 }}>
          <IconButton
            onClick={() => setLanguage(language === "pt" ? "en" : "pt")}
            sx={{
              color: theme.colors.textPrimary,
              padding: "8px",
              borderRadius: "10px",
              transition: "background-color 0.3s ease-in-out",
              "&:hover": {
                backgroundColor: theme.colors.hover,
              },
            }}
          >
            <AnimatePresence mode="wait">
              <motion.span
                key={language}
                style={{ fontSize: "0.7rem", fontWeight: "bold" }}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{
                  opacity: 1,
                  scale: 1,
                  transition: {
                    type: "spring",
                    stiffness: 400,
                    damping: 15
                  }
                }}
                exit={{
                  opacity: 0,
                  scale: 0.8,
                  transition: { duration: 0.2 }
                }}
              >
                {language === "pt" ? "EN" : "PT"}
              </motion.span>
            </AnimatePresence>
          </IconButton>
        </motion.div>
      </motion.div>
    </Box>
  );
}