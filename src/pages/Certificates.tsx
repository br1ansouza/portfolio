import { Box, Typography, Paper, Grid } from "@mui/material";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "styled-components";
import styled from 'styled-components';
import { useLanguage } from "../contexts/useLanguage";
import { FaCode, FaNetworkWired, FaGitAlt, FaServer, FaDocker, FaAward } from "react-icons/fa";
import { useState } from "react";

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
  text-align: center;
  
  @media (max-width: 600px) {
    font-size: 2.5rem !important;
  }

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
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  return (
    <Box sx={{ position: "relative", width: "100%", minHeight: "100vh", overflow: "hidden", backgroundColor: theme.colors.background }}>
      <Box
        component={motion.div}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
        sx={{
          position: "relative",
          zIndex: 1,
          maxWidth: "1200px",
          margin: "auto",
          padding: "3rem 1rem",
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
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <StyledTitle>
                {language === "pt" ? "Minhas Certificações" : "My Certification Journey"} ✨
              </StyledTitle>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              style={{ width: "100%" }}
            >
              {certificates.map((cert, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  onHoverStart={() => setHoveredCard(index)}
                  onHoverEnd={() => setHoveredCard(null)}
                >
                  <Paper
                    elevation={hoveredCard === index ? 8 : 2}
                    sx={{
                      position: "relative",
                      marginBottom: "20px",
                      borderRadius: "12px",
                      backgroundColor: theme.colors.cardBackground,
                      transition: "all 0.3s ease",
                      overflow: "hidden",
                      cursor: "pointer",
                      display: "flex",
                      flexDirection: { xs: "column", sm: "row" },
                      alignItems: "center",
                      border: `1px solid ${cert.color}25`,
                      boxShadow: hoveredCard === index 
                        ? `0 8px 20px ${cert.color}30` 
                        : `0 2px 8px rgba(0,0,0,0.1)`,
                    }}
                    onClick={() => window.open(cert.link, "_blank")}
                  >
                    <Box
                      sx={{
                        background: `linear-gradient(135deg, ${cert.color}, ${cert.color}80)`,
                        width: { xs: "100%", sm: "120px" },
                        height: { xs: "100px", sm: "100%" },
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        padding: "20px",
                        color: "#fff",
                        position: "relative",
                        overflow: "hidden",
                      }}
                    >
                      <motion.div
                        animate={{
                          scale: hoveredCard === index ? [1, 1.2, 1] : 1,
                          rotate: hoveredCard === index ? [0, 10, 0, -10, 0] : 0
                        }}
                        transition={{
                          duration: 1,
                          repeat: hoveredCard === index ? Infinity : 0,
                          repeatDelay: 1
                        }}
                        style={{ fontSize: "2.5rem" }}
                      >
                        {cert.icon}
                      </motion.div>
                      
                      <Box sx={{
                        position: "absolute",
                        top: "-20px",
                        left: "-20px",
                        width: "100px",
                        height: "100px",
                        borderRadius: "50%",
                        background: "rgba(255,255,255,0.1)",
                      }} />
                      <Box sx={{
                        position: "absolute",
                        bottom: "-30px",
                        right: "-30px",
                        width: "120px",
                        height: "120px",
                        borderRadius: "50%",
                        background: "rgba(255,255,255,0.1)",
                      }} />
                    </Box>
                    
                    <Box sx={{
                      flex: 1,
                      padding: "20px",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                    }}>
                      <Typography 
                        variant="h6" 
                        fontWeight="bold"
                        sx={{ 
                          color: theme.colors.textPrimary,
                          mb: 1,
                          transition: "color 0.3s ease",
                        }}
                      >
                        {cert.name[language as keyof typeof cert.name]}
                      </Typography>
                      
                      <Grid container spacing={2} sx={{ mb: 1 }}>
                        <Grid item>
                          <Typography 
                            variant="body2" 
                            sx={{ 
                              color: theme.colors.textSecondary,
                              display: "flex",
                              alignItems: "center",
                              gap: "5px"
                            }}
                          >
                            📍 {cert.institution}
                          </Typography>
                        </Grid>
                        <Grid item>
                          <Typography 
                            variant="body2" 
                            sx={{ 
                              color: theme.colors.textSecondary,
                              display: "flex",
                              alignItems: "center",
                              gap: "5px"
                            }}
                          >
                            📅 {cert.date}
                          </Typography>
                        </Grid>
                      </Grid>
                      
                      {["FrontEnd - Módulo 1 - LAB365", "BackEnd - Módulo 2 - LAB365"].includes(cert.name.pt) && (
                        <Box
                          component={motion.div}
                          animate={{
                            scale: hoveredCard === index ? [1, 1.05, 1] : 1
                          }}
                          transition={{ duration: 0.7, repeat: hoveredCard === index ? Infinity : 0 }}
                          sx={{
                            display: "inline-flex",
                            alignItems: "center",
                            gap: "5px",
                            background: `${cert.color}15`,
                            padding: "4px 12px",
                            borderRadius: "8px",
                            marginTop: "5px",
                            width: "fit-content"
                          }}
                        >
                          <FaAward size={16} color={cert.color} />
                          <Typography 
                            variant="body2" 
                            fontWeight="bold"
                            sx={{ color: cert.color }}
                          >
                            {language === "pt" ? "Média Final" : "Final Score"}: {cert.score}
                          </Typography>
                        </Box>
                      )}
                    </Box>
                    
                    <Box sx={{
                      position: "absolute",
                      top: 0,
                      right: 0,
                      width: "0",
                      height: "0",
                      borderStyle: "solid",
                      borderWidth: "0 40px 40px 0",
                      borderColor: `transparent ${cert.color} transparent transparent`,
                      opacity: hoveredCard === index ? 1 : 0,
                      transition: "opacity 0.3s ease",
                    }} />
                    
                    <motion.div
                      style={{
                        position: "absolute",
                        bottom: 0,
                        left: 0,
                        height: "3px",
                        background: cert.color,
                        width: "0%"
                      }}
                      animate={{ 
                        width: hoveredCard === index ? "100%" : "0%" 
                      }}
                      transition={{ duration: 0.5 }}
                    />
                  </Paper>
                </motion.div>
              ))}
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.6 }}
              style={{ marginTop: "3rem", textAlign: "center" }}
            >
              <Paper
                elevation={3}
                sx={{
                  padding: "1.5rem",
                  borderRadius: "12px",
                  background: "rgba(255,255,255,0.05)",
                  backdropFilter: "blur(10px)",
                  border: "1px solid rgba(255,255,255,0.1)",
                  display: "flex",
                  flexDirection: { xs: "column", sm: "row" },
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "2rem"
                }}
              >
                <AnimatedCounter 
                  number={certificates.length} 
                  label={language === "pt" ? "Certificados Totais" : "Total Certificates"}
                  color="#2196F3"
                />
                
                <Box sx={{ 
                  width: { xs: "80%", sm: "2px" }, 
                  height: { xs: "2px", sm: "50px" }, 
                  background: "rgba(255,255,255,0.1)" 
                }} />
                
                <AnimatedCounter 
                  number={2} 
                  label={language === "pt" ? "Instituições" : "Institutions"}
                  color="#E91E63"
                />
                
                <Box sx={{ 
                  width: { xs: "80%", sm: "2px" }, 
                  height: { xs: "2px", sm: "50px" }, 
                  background: "rgba(255,255,255,0.1)" 
                }} />
                
                <AnimatedCounter 
                  number={9.36} 
                  label={language === "pt" ? "Média Geral" : "Overall Score"}
                  color="#FF9800"
                  isDecimal
                />
              </Paper>
            </motion.div>
          </motion.div>
        </AnimatePresence>
      </Box>
    </Box>
  );
}

type AnimatedCounterProps = {
  number: number;
  label: string;
  color: string;
  isDecimal?: boolean;
};

function AnimatedCounter({ number, label, color, isDecimal = false }: AnimatedCounterProps) {
  const theme = useTheme();
  const [count, setCount] = useState(0);
  
  return (
    <motion.div
      initial={{ scale: 0.9, opacity: 0 }}
      whileInView={{ scale: 1, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      onViewportEnter={() => {
        const step = isDecimal ? 0.1 : 1;
        const duration = 2000;
        const totalSteps = isDecimal ? number * 10 : number;
        const delay = duration / totalSteps;
  
        let current = 0;
        const interval = setInterval(() => {
          if (current < number) {
            current += step;
            setCount(current);
          } else {
            clearInterval(interval);
            setCount(number);
          }
        }, delay);
  
        return () => clearInterval(interval);
      }}
    >
  
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "8px"
        }}
      >
        <Typography
          variant="h4"
          sx={{
            fontWeight: "900",
            color: color,
            lineHeight: 1,
          }}
        >
          {isDecimal ? count.toFixed(2) : Math.round(count)}
        </Typography>
        <Typography
          variant="body2"
          sx={{
            color: theme.colors.textSecondary,
            fontSize: "0.9rem",
            fontWeight: "500"
          }}
        >
          {label}
        </Typography>
      </Box>
    </motion.div>
  );
}