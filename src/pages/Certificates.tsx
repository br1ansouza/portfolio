import { Box, Typography, Paper, Grid } from "@mui/material";
import { useTheme } from "styled-components";
import { motion } from "framer-motion";
import { useLanguage } from "../contexts/LanguageContext";
import { FaCode, FaNetworkWired, FaGitAlt, FaServer, FaDocker } from "react-icons/fa";

const certificates = [
  {
    name: { pt: "FrontEnd - Módulo 1 - LAB365", en: "FrontEnd - Module 1 - LAB365" },
    institution: "LAB365",
    date: "2024",
    icon: <FaCode size={28} />,
    color: "#E91E63",
    score: "9.73",
    link: "https://drive.google.com/file/d/1-XHxEg9cCRRAyv5e_1Io2noM_zjEIgb1/view?usp=sharing"
  },
  {
    name: { pt: "Desenvolvimento Web Compacto e Completo", en: "Complete and Compact Web Development" },
    institution: "Udemy",
    date: "2023",
    icon: <FaCode size={28} />,
    color: "#2196F3",
    link: "https://drive.google.com/file/d/1F7iHWIBZL1z_ESQ8g4nn_zHeedvTjOjF/view?usp=sharing"
  },
  {
    name: { pt: "Fundamentos de Programação", en: "Programming Fundamentals" },
    institution: "Udemy",
    date: "2022",
    icon: <FaServer size={28} />,
    color: "#4CAF50",
    link: "https://drive.google.com/file/d/1AUksurChYYHK9Xk61tbU8iOD1BNWe0ad/view?usp=sharing"
  },
  {
    name: { pt: "Git", en: "Git" },
    institution: "Udemy",
    date: "2022",
    icon: <FaGitAlt size={28} />,
    color: "#FF9800",
    link: "https://drive.google.com/file/d/1Kgrh015VJbjAs9087GGBf9vQxZEhaNFT/view?usp=sharing"
  },
  {
    name: { pt: "Arquitetura de Redes", en: "Network Architecture" },
    institution: "Udemy",
    date: "2023",
    icon: <FaNetworkWired size={28} />,
    color: "#9C27B0",
    link: "https://drive.google.com/file/d/1u-_zNT4k-cAbBc5vBg73ONCtUj-3-jxD/view?usp=sharing"
  },
  {
    name: { pt: "Proxmox - Professional", en: "Proxmox - Professional" },
    institution: "Udemy",
    date: "2023",
    icon: <FaDocker size={28} />,
    color: "#00ACC1",
    link: "https://drive.google.com/file/d/1xQC7fbBYRnFmgEG8sqMlX8-rObgjOuQ5/view?usp=sharing"
  },
];

export function CertificatesPage() {
  const theme = useTheme();
  const { language } = useLanguage();

  return (
    <Box sx={{ position: "relative", width: "100%", minHeight: "100vh", overflow: "hidden" }}>
      <Box
        component={motion.div}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        sx={{
          position: "relative",
          zIndex: 1,
          maxWidth: "1100px",
          margin: "auto",
          padding: "6rem 1rem",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography
          component={motion.h2}
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          fontWeight="bold"
          mb={4}
          sx={{
            fontSize: "3rem",
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
          {language === "pt" ? "Minhas Certificações" : "My Certification Journey"} ✨
        </Typography>

        <Grid container spacing={4} justifyContent="center">
          {certificates.map((cert, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Paper
                component={motion.div}
                whileHover={{ scale: 1.05, boxShadow: `0px 0px 15px ${cert.color}` }}
                transition={{ duration: 0.2 }}
                elevation={8}
                sx={{
                  height: "220px",
                  padding: "2rem",
                  borderRadius: "15px",
                  backgroundColor: theme.colors.cardBackground,
                  textAlign: "center",
                  cursor: "pointer",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "10px",
                  border: `3px solid ${cert.color}`,
                  transition: "0.3s ease-in-out",
                  "&:hover": {
                    transform: "scale(1.05)",
                    backgroundColor: "rgba(255, 255, 255, 0.1)",
                  },
                }}
                onClick={() => window.open(cert.link, "_blank")}
              >
                <Box sx={{ display: "flex", alignItems: "center", gap: "10px", color: cert.color, fontWeight: "bold", fontSize: "1.3rem" }}>
                  {cert.icon}
                  {cert.name[language as keyof typeof cert.name]}
                </Box>
                <Typography variant="body2" color={theme.colors.textSecondary}>
                  📍 {cert.institution}
                </Typography>
                <Typography variant="body2" color={theme.colors.textSecondary}>
                  📅 {cert.date}
                </Typography>
                {cert.name.pt === "FrontEnd - Módulo 1 - LAB365" && (
                  <Typography variant="body2" fontWeight="bold" color={theme.colors.textPrimary}>
                    ⭐ {language === "pt" ? "Média Final" : "Final Score"}: {cert.score}
                  </Typography>
                )}
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
}
