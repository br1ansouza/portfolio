import { useTheme } from "styled-components";
import { useLanguage } from "../contexts/LanguageContext";
import { Grid, Paper, Typography } from "@mui/material";
import { FaFileAlt, FaProjectDiagram, FaEnvelope, FaGithub } from "react-icons/fa";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function ActionButtons() {
  const theme = useTheme();
  const { language } = useLanguage();
  const [githubHover, setGithubHover] = useState(false);

  type LanguageKeys = "pt" | "en";

  const buttons = [
    {
      key: "resume",
      label: { pt: "Resumo", en: "Resume" } as Record<LanguageKeys, string>,
      description: { pt: "Baixe meu currículo", en: "Download my resume" } as Record<LanguageKeys, string>,
      icon: <FaFileAlt size={24} />,
      url: "#",
    },
    {
      key: "projects",
      label: { pt: "Projetos", en: "Projects" } as Record<LanguageKeys, string>,
      description: { pt: "Veja meus projetos", en: "See my projects" } as Record<LanguageKeys, string>,
      icon: <FaProjectDiagram size={24} />,
      url: "#",
    },
    {
      key: "contact",
      label: { pt: "Contato", en: "Contact" } as Record<LanguageKeys, string>,
      description: { pt: "Entre em contato", en: "Get in touch" } as Record<LanguageKeys, string>,
      icon: <FaEnvelope size={24} />,
      url: "mailto:your.email@example.com",
    },
  ];

  return (
    <Grid container spacing={1.5} sx={{ maxWidth: 500 }}>
      <Grid item xs={6}>
        <Paper
          component="a"
          href="https://github.com/br1ansouza"
          target="_blank"
          rel="noopener noreferrer"
          elevation={6}
          sx={{
            textDecoration: "none",
            backgroundColor: theme.colors.cardBackground,
            padding: "1.5rem",
            borderRadius: "12px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            border: `1px solid ${theme.colors.border}`,
            height: "100%",
            transition: "0.3s",
            cursor: "pointer",
            "&:hover": {
              transform: "scale(1.05)",
              boxShadow: `0px 0px 10px ${theme.colors.hover}`,
            },
          }}
          onMouseEnter={() => setGithubHover(true)}
          onMouseLeave={() => setGithubHover(false)}
        >
          <FaGithub
            size={50}
            color={githubHover ? theme.colors.hover : theme.colors.textSecondary}
            style={{ transition: "color 0.3s ease-in-out" }}
          />
        </Paper>
      </Grid>

      {buttons.map((button) => (
        <Grid item xs={6} key={button.key}>
          <Paper
            component="a"
            href={button.url}
            target="_blank"
            rel="noopener noreferrer"
            elevation={6}
            sx={{
              textDecoration: "none",
              backgroundColor: theme.colors.cardBackground,
              padding: "1.5rem",
              borderRadius: "12px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              border: `1px solid ${theme.colors.border}`,
              height: "100%",
              transition: "0.3s",
              cursor: "pointer",
              "&:hover": {
                transform: "scale(1.05)",
                boxShadow: `0px 0px 10px ${theme.colors.hover}`,
              },
            }}
          >
            {button.icon}
            <AnimatePresence mode="wait">
              <motion.div
                key={language}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{ duration: 0.4 }}
              >
                <Typography variant="h6" fontWeight="bold" color={theme.colors.textPrimary} sx={{ mt: 1 }}>
                  {button.label[language as LanguageKeys]}
                </Typography>
              </motion.div>
            </AnimatePresence>

            <AnimatePresence mode="wait">
              <motion.div
                key={language + "-desc"}
                initial={{ opacity: 0, y: -5 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 5 }}
                transition={{ duration: 0.4 }}
              >
                <Typography variant="body2" color={theme.colors.textSecondary} sx={{ textAlign: "center", mt: 1 }}>
                  {button.description[language as LanguageKeys]}
                </Typography>
              </motion.div>
            </AnimatePresence>
          </Paper>
        </Grid>
      ))}
    </Grid>
  );
}
