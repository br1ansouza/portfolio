import { Box, Typography, Paper, Grid } from "@mui/material";
import { useTheme } from "styled-components";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "../contexts/LanguageContext";
import { FaAward, FaCode, FaNetworkWired, FaGitAlt, FaServer, FaDocker } from "react-icons/fa";

const certificates = [
  {
    name: { pt: "FrontEnd - Módulo 1 - LAB365", en: "FrontEnd - Module 1 - LAB365" },
    institution: "LAB365",
    date: "2024",
    icon: <FaCode size={24} />,
    color: "#E91E63",
    score: "9.73",
    link: "https://drive.google.com/file/d/1-XHxEg9cCRRAyv5e_1Io2noM_zjEIgb1/view?usp=sharing"
  },
  {
    name: { pt: "Desenvolvimento Web Compacto e Completo", en: "Complete and Compact Web Development" },
    institution: "Udemy",
    date: "2023",
    icon: <FaCode size={24} />,
    color: "#2196F3",
    link: "https://drive.google.com/file/d/1F7iHWIBZL1z_ESQ8g4nn_zHeedvTjOjF/view?usp=sharing"
  },
  {
    name: { pt: "Fundamentos de Programação", en: "Programming Fundamentals" },
    institution: "Udemy",
    date: "2022",
    icon: <FaServer size={24} />,
    color: "#4CAF50",
    link: "https://drive.google.com/file/d/1AUksurChYYHK9Xk61tbU8iOD1BNWe0ad/view?usp=sharing"
  },
  {
    name: { pt: "Git", en: "Git" },
    institution: "Udemy",
    date: "2022",
    icon: <FaGitAlt size={24} />,
    color: "#FF9800",
    link: "https://drive.google.com/file/d/1Kgrh015VJbjAs9087GGBf9vQxZEhaNFT/view?usp=sharing"
  },
  {
    name: { pt: "Arquitetura de Redes", en: "Network Architecture" },
    institution: "Udemy",
    date: "2023",
    icon: <FaNetworkWired size={24} />,
    color: "#9C27B0",
    link: "https://drive.google.com/file/d/1u-_zNT4k-cAbBc5vBg73ONCtUj-3-jxD/view?usp=sharing"
  },
  {
    name: { pt: "Proxmox - Professional", en: "Proxmox - Professional" },
    institution: "Udemy",
    date: "2023",
    icon: <FaDocker size={24} />,
    color: "#00ACC1",
    link: "https://drive.google.com/file/d/1xQC7fbBYRnFmgEG8sqMlX8-rObgjOuQ5/view?usp=sharing"
  },
];

export function CertificatesPage() {
  const theme = useTheme();
  const { language } = useLanguage();

  return (
    <Box
      component={motion.div}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      sx={{
        maxWidth: "1000px",
        margin: "auto",
        padding: "3rem 1rem",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Typography
        variant="h2"
        fontWeight="bold"
        mb={4}
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "12px",
          fontFamily: "'Poppins', sans-serif",
          letterSpacing: "1px",
          color: theme.colors.hover,
        }}
      >
        <FaAward size={32} />
        <AnimatePresence mode="wait">
          <motion.span
            key={language}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.3 }}
          >
            {language === "pt" ? "Minhas Certificações" : "My Certification Journey"}
          </motion.span>
        </AnimatePresence>
      </Typography>


      <Grid container spacing={3} justifyContent="center">
        {certificates.map((cert, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Paper
              component={motion.div}
              whileHover={{ scale: 1.03, boxShadow: "0px 0px 20px rgba(255, 255, 255, 0.1)" }}
              transition={{ duration: 0.3 }}
              elevation={6}
              sx={{
                height: "180px",
                padding: "1.5rem",
                borderRadius: "12px",
                backgroundColor: theme.colors.cardBackground,
                textAlign: "left",
                cursor: "pointer",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "flex-start",
                gap: "10px",
                borderLeft: `5px solid ${cert.color}`,
                transition: "0.3s",
                "&:hover": {
                  transform: "scale(1.02)",
                  filter: "brightness(1.1)",
                },
              }}
              onClick={() => window.open(cert.link, "_blank")}
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  color: cert.color,
                  fontWeight: "bold",
                  fontSize: "1.1rem",
                }}
              >
                {cert.icon}
                <AnimatePresence mode="wait">
                  <motion.span
                    key={language + cert.name.pt}
                    initial={{ opacity: 0, y: -5 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 5 }}
                    transition={{ duration: 0.3 }}
                  >
                    {cert.name[language as keyof typeof cert.name]}
                  </motion.span>
                </AnimatePresence>
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
  );
}
