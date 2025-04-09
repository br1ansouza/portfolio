import { Box, Typography, Avatar, Grid, Paper, Tooltip } from "@mui/material";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { useTheme } from "styled-components";
import { useLanguage } from "../contexts/useLanguage";
import profileImage from "../assets/profile-images/profile-image.jpg";
import { BsCodeSlash, BsDatabase, BsWrench } from "react-icons/bs";
import { FaReact, FaBootstrap, FaGitAlt, FaDocker, FaNodeJs } from "react-icons/fa";
import { SiJavascript, SiTypescript, SiMui, SiPostgresql, SiMariadb, SiPostman } from "react-icons/si";

export function ProfileCard() {
  const theme = useTheme();
  const { language } = useLanguage();

  const [isHovered, setIsHovered] = useState(false);

  const aboutTitle = language === "pt" ? "Sobre Mim" : "About Me";
  const aboutText =
    language === "pt"
      ? `Oi! Eu sou um entusiasta de tecnologia que decidiu transformar café em código. Trabalho com desenvolvimento Front-end (e às vezes dou uma espiada no Back-end também).
Gosto de resolver problemas, criar interfaces bacanas e mexer com ferramentas que facilitam a vida de quem usa e de quem desenvolve.
Atualmente tô mergulhado no universo React, TypeScript, Node.js e mais umas tecnologias que têm nomes esquisitos mas fazem mágica quando bem usadas.
Se você curte tecnologia, design, ou só quer trocar uma ideia sobre o caos que é o desenvolvimento web... seja bem-vindo(a)!`
      : `Hey there! I’m a tech enthusiast who turned caffeine into code (and questionable sleep habits). I work mostly with Front-end development, but I like to sneak into the Back-end when curiosity kicks in.
I enjoy solving problems, building cool interfaces, and playing with tools that make life easier for users—and slightly less chaotic for developers.
These days I'm deep into the React, TypeScript, and Node.js ecosystem, with a sprinkle of other magical-sounding tech.
If you're into tech, design, or just want to rant about the rollercoaster that is web development... you're in the right place.`;

  const categories = [
    {
      title: "Frontend Development",
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
      title: "Backend Development",
      icon: <FaNodeJs size={28} />,
      color: "#00B74A",
      techIcons: [{ name: "Node.js", icon: <FaNodeJs />, color: "#339933" }],
    },
    {
      title: "Database Design",
      icon: <BsDatabase size={28} />,
      color: "#8E2DE2",
      techIcons: [
        { name: "PostgreSQL", icon: <SiPostgresql />, color: "#336791" },
        { name: "MariaDB", icon: <SiMariadb />, color: "#003545" },
      ],
    },
    {
      title: "Tools",
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

            <Grid container spacing={2} justifyContent="flex-start" sx={{ mt: 3 }}>
              {categories.map((category, index) => (
                <Grid item xs={12} sm={6} md={4} key={index}>
                  <Paper
                    component={motion.div}
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                    elevation={6}
                    sx={{
                      padding: "1.5rem",
                      borderRadius: "12px",
                      backgroundColor: theme.colors.cardBackground + " !important",
                      textAlign: "center",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      height: "230px",
                      gap: "10px",
                      borderLeft: `5px solid ${theme.colors.hover}`,
                    }}
                  >
                    <motion.div
                      initial={{ scale: 1, opacity: 0.6 }}
                      animate={{ scale: [1, 1.3, 1], opacity: [0.6, 1, 0.6] }}
                      transition={{ duration: 1.5, delay: 0.2 * index }}
                      whileHover={{ scale: 1.2, filter: "brightness(1.5)" }}
                      style={{ fontSize: "2rem", color: category.color }}
                    >
                      {category.icon}
                    </motion.div>


                    <Typography variant="h6" fontWeight="bold" sx={{ color: theme.colors.textPrimary }}>
                      {category.title}
                    </Typography>

                    <Box sx={{ display: "flex", gap: "8px", flexWrap: "wrap", justifyContent: "center" }}>
                      {category.techIcons.map((tech, i) => (
                        <Tooltip key={i} title={tech.name} arrow>
                          <motion.div
                            whileHover={{ scale: 1.2, color: tech.color }}
                            style={{ fontSize: "1.8rem", color: theme.colors.textPrimary }}
                          >
                            {tech.icon}
                          </motion.div>
                        </Tooltip>
                      ))}
                    </Box>
                  </Paper>
                </Grid>
              ))}
            </Grid>
          </Box>
        </Box>
      </motion.div>
    </AnimatePresence>
  );
}
