import { Box, Typography, Paper, Grid } from "@mui/material";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "styled-components";
import styled from 'styled-components';
import { useLanguage } from "../contexts/LanguageContext";
import { FaCode, FaNetworkWired, FaGitAlt, FaServer, FaDocker } from "react-icons/fa";

const StyledTitle = styled(Typography)`
  font-weight: 900 !important;
  margin-bottom: 3rem !important; 
  font-size: 3.5rem !important;
  font-family: 'Raleway', sans-serif !important;
  background: linear-gradient(90deg, #ff0080, #00bfff, #ff0080);
  background-size: 200% auto !important;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: gradientAnimation 4s linear infinite;
  transition: transform 0.3s ease;

  @keyframes gradientAnimation {
    0% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
  }
`;

const certificates = [
  {
    name: { pt: "BackEnd - Módulo 2 - LAB365", en: "BackEnd - Module 2 - LAB365" },
    institution: "LAB365",
    date: "2025",
    icon: <FaCode size={28} />,
    score: "8.99",
    color: "#E91E63",
    link: "https://drive.google.com/file/d/1iL9Pg_g_AwZO15JNWQqso0OJFRXS73Ls/view?usp=sharing",
  },
  {
    name: { pt: "FrontEnd - Módulo 1 - LAB365", en: "FrontEnd - Module 1 - LAB365" },
    institution: "LAB365",
    date: "2024",
    icon: <FaCode size={28} />,
    score: "9.73",
    color: "#2196F3",
    link: "https://drive.google.com/file/d/1-XHxEg9cCRRAyv5e_1Io2noM_zjEIgb1/view?usp=sharing",
  },
  {
    name: { pt: "Desenvolvimento Web Compacto e Completo", en: "Complete and Compact Web Development" },
    institution: "Udemy",
    date: "2023",
    icon: <FaCode size={28} />,
    color: "#9C27B0",
    link: "https://drive.google.com/file/d/1F7iHWIBZL1z_ESQ8g4nn_zHeedvTjOjF/view?usp=sharing",
  },
  {
    name: { pt: "Fundamentos de Programação", en: "Programming Fundamentals" },
    institution: "Udemy",
    date: "2022",
    icon: <FaServer size={28} />,
    color: "#4CAF50",
    link: "https://drive.google.com/file/d/1AUksurChYYHK9Xk61tbU8iOD1BNWe0ad/view?usp=sharing",
  },
  {
    name: { pt: "Git", en: "Git" },
    institution: "Udemy",
    date: "2022",
    icon: <FaGitAlt size={28} />,
    color: "#FF9800",
    link: "https://drive.google.com/file/d/1Kgrh015VJbjAs9087GGBf9vQxZEhaNFT/view?usp=sharing",
  },
  {
    name: { pt: "Arquitetura de Redes", en: "Network Architecture" },
    institution: "Udemy",
    date: "2023",
    icon: <FaNetworkWired size={28} />,
    color: "#00ACC1",
    link: "https://drive.google.com/file/d/1u-_zNT4k-cAbBc5vBg73ONCtUj-3-jxD/view?usp=sharing",
  },
  {
    name: { pt: "Proxmox - Professional", en: "Proxmox - Professional" },
    institution: "Udemy",
    date: "2023",
    icon: <FaDocker size={28} />,
    color: "#673AB7",
    link: "https://drive.google.com/file/d/1xQC7fbBYRnFmgEG8sqMlX8-rObgjOuQ5/view?usp=sharing",
  },
];

export function CertificatesPage() {
  const theme = useTheme();
  const { language } = useLanguage();

  return (
    <Box sx={{ position: "relative", width: "100%", minHeight: "100vh", overflow: "hidden", backgroundColor: theme.colors.background }}>
      <Box
        component={motion.div}
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
        sx={{
          position: "relative",
          zIndex: 1,
          maxWidth: "1100px",
          margin: "auto",
          padding: "2rem 1rem",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={language}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            style={{
              width: "100%",
              display: "flex",
              flexDirection: "column",
              alignItems: "center"
            }}
          >
            <StyledTitle>
              {language === "pt" ? "Minhas Certificações" : "My Certification Journey"} ✨
            </StyledTitle>
            <Grid container spacing={4} justifyContent="center">
              {certificates.map((cert, index) => (
                <Grid item xs={12} sm={6} md={4} key={index}>
                  <motion.div
                    whileHover={{ scale: 1.05, rotate: 1 }}
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
                  >
                    <Paper
                      elevation={5}
                      sx={{
                        height: "230px",
                        padding: "1.5rem",
                        borderRadius: "12px",
                        backgroundColor: theme.colors.cardBackground,
                        textAlign: "center",
                        cursor: "pointer",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center",
                        gap: "10px",
                        position: "relative",
                        overflow: "hidden",
                        boxShadow: "0 4px 12px rgba(0, 0, 0, 0.15)",
                        transition: "transform 0.3s ease, box-shadow 0.3s ease",
                        "&:hover": {
                          transform: "scale(1.05)",
                          boxShadow: "0 6px 18px rgba(0, 0, 0, 0.3)",
                        },
                      }}
                      onClick={() => window.open(cert.link, "_blank")}
                    >
                      <Box
                        sx={{
                          width: "100%",
                          height: "6px",
                          background: cert.color,
                          position: "absolute",
                          top: 0,
                          left: 0,
                        }}
                      />
                      <Box sx={{ display: "flex", alignItems: "center", gap: "10px", color: theme.colors.textPrimary }}>
                        <Box sx={{ fontSize: "2rem", color: cert.color }}>{cert.icon}</Box>
                        <Typography variant="h6" fontWeight="bold">
                          {cert.name[language as keyof typeof cert.name]}
                        </Typography>
                      </Box>
                      <Typography variant="body2" color={theme.colors.textSecondary}>
                        📍 {cert.institution}
                      </Typography>
                      <Typography variant="body2" color={theme.colors.textSecondary}>
                        📅 {cert.date}
                      </Typography>
                      {["FrontEnd - Módulo 1 - LAB365", "BackEnd - Módulo 2 - LAB365"].includes(cert.name.pt) && (
                        <Typography variant="body2" fontWeight="bold" color={theme.colors.textPrimary}>
                          ⭐ {language === "pt" ? "Média Final" : "Final Score"}: {cert.score}
                        </Typography>
                      )}
                    </Paper>
                  </motion.div>
                </Grid>
              ))}
            </Grid>
          </motion.div>
        </AnimatePresence>
      </Box>
    </Box>
  );
}
