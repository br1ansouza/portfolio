import { Box, Typography, Avatar, Grid, Paper, Tooltip } from "@mui/material";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { useTheme } from "styled-components";
import { useLanguage } from "../contexts/useLanguage";
import profileImage from "../assets/profile-images/profile-image.jpg";
import { BsCodeSlash, BsDatabase, BsWrench } from "react-icons/bs";
import { FaReact, FaBootstrap, FaGitAlt, FaDocker, FaNodeJs } from "react-icons/fa";
import { SiJavascript, SiNestjs, SiTypescript, SiMui, SiPostgresql, SiMariadb, SiPostman, SiExpress } from "react-icons/si";

export function ProfileCard() {
  const theme = useTheme();
  const { language } = useLanguage();

  const [isHovered, setIsHovered] = useState(false);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const aboutTitle = language === "pt" ? "Sobre Mim" : "About Me";
  const aboutText =
    language === "pt"
      ? `Oi! Eu sou um entusiasta de tecnologia que decidiu transformar café em código. Trabalho com desenvolvimento Front-end (e às vezes dou uma espiada no Back-end também).
Gosto de resolver problemas, criar interfaces bacanas e mexer com ferramentas que facilitam a vida de quem usa e de quem desenvolve.
Atualmente tô mergulhado no universo React, TypeScript, Node.js e mais umas tecnologias que têm nomes esquisitos mas fazem mágica quando bem usadas.
Se você curte tecnologia, design, ou só quer trocar uma ideia sobre o caos que é o desenvolvimento web... seja bem-vindo(a)!`
      : `Hey there! I'm a tech enthusiast who turned caffeine into code (and questionable sleep habits). I work mostly with Front-end development, but I like to sneak into the Back-end when curiosity kicks in.
I enjoy solving problems, building cool interfaces, and playing with tools that make life easier for users—and slightly less chaotic for developers.
These days I'm deep into the React, TypeScript, and Node.js ecosystem, with a sprinkle of other magical-sounding tech.
If you're into tech, design, or just want to rant about the rollercoaster that is web development... you're in the right place.`;

const categories = [
  {
    title: language === "pt" ? "Frontend" : "Frontend Development",
    icon: <BsCodeSlash size={28} />,
    color: "#007BFF",
    techIcons: [
      { name: "JavaScript", icon: <SiJavascript />, color: "#F7DF1E" },
      { name: "TypeScript", icon: <SiTypescript />, color: "#3178C6" },
      { name: "React", icon: <FaReact />, color: "#61DAFB" },
      { name: "Bootstrap", icon: <FaBootstrap />, color: "#7952B3" },
      { name: "MUI", icon: <SiMui />, color: "#0081CB" },
    ],
  },
  {
    title: language === "pt" ? "Backend" : "Backend Development",
    icon: <FaNodeJs size={28} />,
    color: "#00B74A",
    techIcons: [
      { name: "Node.js", icon: <FaNodeJs />, color: "#339933" },
      { name: "NestJS", icon: <SiNestjs />, color: "#E0234E" },
      { name: "Express", icon: <SiExpress />, color: "#000000" },
      {
        name: "TypeORM",
        icon: (
          <Typography
            sx={{
              fontSize: "1.8rem",
              fontWeight: 600,
              fontFamily: "'Poppins', sans-serif",
              color: theme.colors.textSecondary,
              lineHeight: 1,
              userSelect: "none",
            }}
          >
            TO
          </Typography>
        ),
        color: theme.colors.textSecondary,
      },
    ],
  },
  {
    title: language === "pt" ? "Banco de Dados" : "Database",
    icon: <BsDatabase size={28} />,
    color: "#8E2DE2",
    techIcons: [
      { name: "PostgreSQL", icon: <SiPostgresql />, color: "#336791" },
      { name: "MariaDB", icon: <SiMariadb />, color: "#003545" },
    ],
  },
  {
    title: language === "pt" ? "Ferramentas" : "Tools",
    icon: <BsWrench size={28} />,
    color: "#FFD700",
    techIcons: [
      { name: "Git", icon: <FaGitAlt />, color: "#F05032" },
      { name: "Docker", icon: <FaDocker />, color: "#2496ED" },
      { name: "Postman", icon: <SiPostman />, color: "#FF6C37" },
    ],
  },
];

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={language}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.4 }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            alignItems: "center",
            justifyContent: "space-between",
            textAlign: "left",
            maxWidth: "1100px",
            width: "100%",
            margin: "0 auto",
          }}
        >
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            style={{ position: "relative", display: "inline-block" }}
          >
            <Box
              sx={{
                position: "relative",
                display: "inline-block",
                borderRadius: "50%",
                padding: "6px",
                background: "linear-gradient(135deg, #6C1EE9, #F321E2)",
                boxShadow: "0px 0px 35px 8px rgba(108, 30, 233, 0.6)",
              }}
            >
              <Avatar
                src={profileImage}
                sx={{
                  width: 180,
                  height: 180,
                  filter: isHovered ? "brightness(1.2)" : "none",
                }}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              />
            </Box>
          </motion.div>

          <Box sx={{ flex: 1, paddingLeft: { md: "3rem" }, maxWidth: "850px" }}>
            <Typography
              component={motion.h3}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              fontWeight="bold"
              mb={2}
              sx={{
                fontSize: "3rem",
                marginTop: "1.5rem !important",
                fontFamily: "'Poppins', sans-serif",
                background: "linear-gradient(90deg, #ff0080, #00bfff, #ff0080)",
                backgroundSize: "200% auto",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                animation: "gradientAnimation 4s linear infinite",
                "@keyframes gradientAnimation": {
                  "0%": { backgroundPosition: "0% 50%" },
                  "50%": { backgroundPosition: "100% 50%" },
                  "100%": { backgroundPosition: "0% 50%" }
                },
              }}
            >
              {aboutTitle}
            </Typography>

            <Box sx={{ display: 'flex', flexDirection: 'column', gap: '1rem', mt: 1 }}>
              {aboutText.split('\n').map((paragraph, index) => (
                <Typography
                  key={index}
                  variant="body1"
                  sx={{ color: theme.colors.textSecondary, lineHeight: "1.1", fontSize: "1.1rem" }}
                >
                  {paragraph}
                </Typography>
              ))}
            </Box>

            <Grid container spacing={3} justifyContent="flex-start" sx={{ mt: 3 }}>
              {categories.map((category, index) => (
                <Grid item xs={12} sm={6} md={6} key={index}>
                  <motion.div
                    whileHover={{ 
                      y: -5,
                      boxShadow: `0 10px 20px rgba(0,0,0,0.15)` 
                    }}
                    onHoverStart={() => setHoveredCard(index)}
                    onHoverEnd={() => setHoveredCard(null)}
                  >
                    <Paper
                      elevation={3}
                      sx={{
                        padding: "1.5rem",
                        borderRadius: "16px",
                        backgroundColor: theme.colors.cardBackground + "CC !important",
                        backdropFilter: "blur(8px)",
                        border: `1px solid ${theme.colors.cardBackground}`,
                        height: "auto",
                        transition: "all 0.3s ease",
                        overflow: "hidden",
                        position: "relative",
                        "&::before": {
                          content: '""',
                          position: "absolute",
                          top: 0,
                          left: 0,
                          width: "5px",
                          height: "100%",
                          background: category.color,
                          borderTopLeftRadius: "16px",
                          borderBottomLeftRadius: "16px",
                        }
                      }}
                    >
                      <Box
                        sx={{
                          display: "flex",
                          gap: "16px",
                          alignItems: "flex-start",
                        }}
                      >
                        <Box
                          sx={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            width: "60px",
                            height: "60px",
                            borderRadius: "12px",
                            backgroundColor: `${category.color}15`,
                            flexShrink: 0,
                          }}
                        >
                          <motion.div
                            animate={{ 
                              scale: hoveredCard === index ? [1, 1.1, 1] : 1,
                            }}
                            transition={{
                              duration: 2,
                              repeat: hoveredCard === index ? Infinity : 0,
                              repeatType: "loop",
                              ease: "easeInOut",
                            }}
                            style={{ 
                              color: category.color
                            }}
                          >
                            {category.icon}
                          </motion.div>
                        </Box>

                        <Box sx={{ flex: 1 }}>
                          <Typography 
                            variant="h6" 
                            fontWeight="bold" 
                            sx={{ 
                              color: theme.colors.textPrimary,
                              mb: 2,
                            }}
                          >
                            {category.title}
                          </Typography>

                          <Box 
                            sx={{ 
                              display: "flex", 
                              gap: "12px", 
                              flexWrap: "wrap", 
                              mt: 1,
                            }}
                          >
                            {category.techIcons.map((tech, i) => (
                              <Tooltip 
                                key={i} 
                                title={tech.name} 
                                arrow 
                                placement="top"
                              >
                                <motion.div
                                  whileHover={{ 
                                    scale: 1.15, 
                                    color: tech.color,
                                    rotate: 5,
                                  }}
                                  transition={{ type: "spring", stiffness: 300 }}
                                  style={{ 
                                    fontSize: "1.8rem", 
                                    color: theme.colors.textSecondary,
                                    cursor: "pointer",
                                  }}
                                >
                                  {tech.icon}
                                </motion.div>
                              </Tooltip>
                            ))}
                          </Box>
                        </Box>
                      </Box>
                    </Paper>
                  </motion.div>
                </Grid>
              ))}
            </Grid>
          </Box>
        </Box>
      </motion.div>
    </AnimatePresence>
  );
}