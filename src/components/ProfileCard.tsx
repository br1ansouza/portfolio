import { Box, Typography, Avatar, Grid, Paper, Tooltip } from "@mui/material";
import { motion } from "framer-motion";
import { useTheme } from "styled-components";
import { useLanguage } from "../contexts/LanguageContext";
import profileImage from "../assets/profile-images/profile-image.jpg";
import { BsCodeSlash, BsDatabase, BsWrench } from "react-icons/bs";
import { FaReact, FaBootstrap, FaGitAlt, FaDocker, FaNodeJs } from "react-icons/fa";
import { SiJavascript, SiTypescript, SiMui, SiPostgresql, SiMariadb, SiPostman } from "react-icons/si";

export function ProfileCard() {
  const theme = useTheme();
  const { language } = useLanguage();

  const aboutTitle = language === "pt" ? "Sobre Mim" : "About Me";
  const aboutText =
    language === "pt"
      ? `Desenvolvedor Front End com experiência em redes, infraestrutura e desenvolvimento de aplicações web e mobile. Trabalho com React, TypeScript, React Native no Front-end e Node.js, Express, TypeORM no Back-end, utilizando bancos de dados PostgreSQL e MariaDB. Tenho experiência com autenticação JWT, segurança e ferramentas como Git, Docker, Postman e Swagger.`
      : `Front End Developer with experience in networking, infrastructure, and web and mobile application development. I work with React, TypeScript, React Native on the Front-end and Node.js, Express, TypeORM on the Back-end, using PostgreSQL and MariaDB databases. I have experience with JWT authentication, security, and tools like Git, Docker, Postman, and Swagger.`;

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
            }}
          />
        </Box>
      </motion.div>

      <Box sx={{ flex: 1, paddingLeft: { md: "3rem" }, maxWidth: "850px" }}>
        <Typography variant="h3" sx={{ fontWeight: "bold", color: theme.colors.hover, mb: 2 }}>
          {aboutTitle}
        </Typography>

        <Typography variant="body1" sx={{ color: theme.colors.textSecondary, lineHeight: "1.8", fontSize: "1.1rem" }}>
          {aboutText}
        </Typography>

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
                  backgroundColor: theme.colors.cardBackground,
                  textAlign: "center",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  height: "230px",
                  gap: "10px",
                  borderLeft: `5px solid ${theme.colors.hover}`,
                }}
              >
                <Box
                  sx={{
                    fontSize: "2rem",
                    color: category.color,
                    transition: "0.3s",
                    "&:hover": {
                      filter: "brightness(1.5)",
                    },
                  }}
                >
                  {category.icon}
                </Box>

                <Typography variant="h6" fontWeight="bold" color={theme.colors.textPrimary}>
                  {category.title}
                </Typography>

                <Box sx={{ display: "flex", gap: "8px", flexWrap: "wrap", justifyContent: "center" }}>
                  {category.techIcons.map((tech, i) => (
                    <Tooltip key={i} title={tech.name} arrow>
                      <motion.div
                        whileHover={{ scale: 1.2, color: tech.color }}
                        style={{ fontSize: "1.8rem", color: "white" }}
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
  );
}
