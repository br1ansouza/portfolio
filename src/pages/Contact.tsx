import { Box, Typography } from "@mui/material";
import { useTheme } from "styled-components";
import { FaDiscord, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "../contexts/LanguageContext";

export function Contact() {
  const theme = useTheme();
  const { language } = useLanguage();

  const messages = {
    pt: {
      title: "Entre em Contato",
      subtitle: "Quer bater um papo? Me envie uma mensagem no LinkedIn ou utilize uma das opções abaixo. 🚀",
      email: "E-mail",
      linkedin: "LinkedIn",
      discord: "Discord",
    },
    en: {
      title: "Get in Touch",
      subtitle: "Want to chat? Send me a message on LinkedIn or use one of the options below. 🚀",
      email: "Email",
      linkedin: "LinkedIn",
      discord: "Discord",
    },
  };

  return (
    <Box
      component={motion.div}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      sx={{
        maxWidth: "700px",
        margin: "auto",
        padding: "5rem 1.5rem",
        textAlign: "center",
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
        ✉️
        <AnimatePresence mode="wait">
          <motion.span
            key={language}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.3 }}
          >
            {messages[language as keyof typeof messages].title}
          </motion.span>
        </AnimatePresence>
      </Typography>

      <Typography
        variant="h5"
        color={theme.colors.textSecondary}
        fontWeight="300"
        mb={5}
        sx={{ fontFamily: "'Inter', sans-serif", lineHeight: "1.6" }}
      >
        {messages[language as keyof typeof messages].subtitle}
      </Typography>

      <Box sx={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
        <Box
          component="a"
          href="mailto:briandesouza1597@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "12px",
            padding: "1.3rem",
            borderRadius: "14px",
            backgroundColor: theme.colors.cardBackground,
            color: theme.colors.textPrimary,
            textDecoration: "none",
            fontSize: "1.3rem",
            fontWeight: "500",
            transition: "0.3s",
            boxShadow: "0 4px 14px rgba(0,0,0,0.1)",
            "&:hover": {
              backgroundColor: theme.colors.hover,
              color: theme.colors.textPrimary,
              transform: "scale(1.05)",
              boxShadow: "0 8px 18px rgba(255,255,255,0.15)",
            },
          }}
        >
          <FaEnvelope size={26} />
          {messages[language as keyof typeof messages].email}: briandesouza1597@gmail.com
        </Box>

        <Box
          component="a"
          href="https://www.linkedin.com/in/brian-souza/"
          target="_blank"
          rel="noopener noreferrer"
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "12px",
            padding: "1.3rem",
            borderRadius: "14px",
            backgroundColor: theme.colors.cardBackground,
            color: theme.colors.textPrimary,
            textDecoration: "none",
            fontSize: "1.3rem",
            fontWeight: "500",
            transition: "0.3s",
            boxShadow: "0 4px 14px rgba(0,0,0,0.1)",
            "&:hover": {
              backgroundColor: theme.colors.hover,
              color: theme.colors.textPrimary,
              transform: "scale(1.05)",
              boxShadow: "0 8px 18px rgba(255,255,255,0.15)",
            },
          }}
        >
          <FaLinkedin size={26} />
          {messages[language as keyof typeof messages].linkedin}: linkedin.com/in/brian-souza
        </Box>

        <Box
          component="a"
          href="https://discord.com/users/br1ansouza"
          target="_blank"
          rel="noopener noreferrer"
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "12px",
            padding: "1.3rem",
            borderRadius: "14px",
            backgroundColor: theme.colors.cardBackground,
            color: theme.colors.textPrimary,
            textDecoration: "none",
            fontSize: "1.3rem",
            fontWeight: "500",
            transition: "0.3s",
            boxShadow: "0 4px 14px rgba(0,0,0,0.1)",
            "&:hover": {
              backgroundColor: theme.colors.hover,
              color: theme.colors.textPrimary,
              transform: "scale(1.05)",
              boxShadow: "0 8px 18px rgba(255,255,255,0.15)",
            },
          }}
        >
          <FaDiscord size={26} />
          {messages[language as keyof typeof messages].discord}: br1ansouza
        </Box>
      </Box>
    </Box>
  );
}
