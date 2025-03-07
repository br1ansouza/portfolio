import { useState } from "react";
import { Box, Typography, Avatar, Paper, Collapse } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { motion, AnimatePresence } from "framer-motion";
import profileImage from "../assets/profile-images/profile-image.jpg";
import { useTheme } from "styled-components";
import { useLanguage } from "../contexts/LanguageContext";

export function ProfileCard() {
  const [expanded, setExpanded] = useState(false);
  const theme = useTheme();
  const { language } = useLanguage();

  const profileText =
    language === "pt"
      ? `Sou estudante de Análise e Desenvolvimento de Sistemas e Desenvolvedor Full Stack, apaixonado por tecnologia e inovação.
         Tenho experiência na configuração de equipamentos de rede e servidores em ambientes Ubuntu/Debian e Windows, além de certificações
         em arquitetura de redes e fundamentos de programação.

         Possuo sólidos conhecimentos em desenvolvimento web, com foco em tecnologias Front-end como HTML5, CSS, JavaScript, TypeScript e React Native.
         Estou sempre aprimorando minhas habilidades e buscando soluções inovadoras para construir aplicações eficientes, seguras e escaláveis.`
      : `I am a student of Systems Analysis and Development and a Full Stack Developer, passionate about technology and innovation.
         I have experience in configuring network equipment and servers in Ubuntu/Debian and Windows environments, as well as certifications
         in network architecture and programming fundamentals.

         I have solid knowledge in web development, focusing on Frontend technologies such as HTML5, CSS, JavaScript, TypeScript, and React Native.
         I am constantly improving my skills and seeking innovative solutions to build efficient, secure, and scalable applications.`;

  return (
    <Paper
      component={motion.div}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      elevation={6}
      onClick={() => setExpanded(!expanded)}
      sx={{
        backgroundColor: theme.colors.cardBackground,
        borderRadius: "12px",
        padding: "1.5rem",
        width: "100%",
        maxWidth: "950px",
        cursor: "pointer",
        border: `2px solid ${expanded ? theme.colors.hover : "transparent"}`,
        position: "relative",
        "&:hover": {
          transform: "scale(1.02)",
          boxShadow: `0px 0px 15px ${theme.colors.hover}`,
          borderColor: theme.colors.hover,
        },
      }}
    >
      <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 1 }}>
        <Avatar
          src={profileImage}
          sx={{
            width: 100,
            height: 100,
            border: `3px solid ${theme.colors.hover}`,
          }}
        />

        <AnimatePresence mode="wait">
          <motion.div
            key={language}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.4 }}
          >
            <Typography variant="h5" fontWeight="bold" color={theme.colors.textPrimary}>
              {language === "pt" ? "Olá! Eu sou Brian 👋" : "Hi! I'm Brian 👋"}
            </Typography>
          </motion.div>
        </AnimatePresence>

        {!expanded && (
          <AnimatePresence mode="wait">
            <motion.div
              key={language + "-sub"}
              initial={{ opacity: 0, y: -5 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 5 }}
              transition={{ duration: 0.4 }}
            >
              <Typography variant="body1" color={theme.colors.textSecondary} sx={{ textAlign: "center", mt: 0.5 }}>
                {language === "pt" ? "Apaixonado por desenvolvimento Front-end" : "Passionate about Frontend Development"}
              </Typography>
            </motion.div>
          </AnimatePresence>
        )}
      </Box>

      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          mt: 1,
          transition: "transform 0.3s ease-in-out",
        }}
      >
        <motion.div
          animate={{ rotate: expanded ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <ExpandMoreIcon
            sx={{
              color: theme.colors.textSecondary,
              fontSize: "2rem",
            }}
          />
        </motion.div>
      </Box>

      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <AnimatePresence mode="wait">
          <motion.div
            key={language + "-text"}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 10 }}
            transition={{ duration: 0.4 }}
          >
            <Typography
              variant="body1"
              sx={{
                mt: 2,
                color: theme.colors.textPrimary,
                whiteSpace: "pre-line",
                textAlign: "justify",
                lineHeight: "1.6",
                transition: "opacity 0.3s ease-in-out",
              }}
            >
              {profileText}
            </Typography>
          </motion.div>
        </AnimatePresence>
      </Collapse>
    </Paper>
  );
}
