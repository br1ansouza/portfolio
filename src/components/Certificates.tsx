import { useState } from "react";
import { 
  Typography, IconButton, Collapse, Grid, Paper, Box
} from "@mui/material";
import { FaAward } from "react-icons/fa";
import { motion } from "framer-motion";
import { useTheme } from "styled-components";

const certificates = [
  { name: "FrontEnd - Módulo 1 - LAB365", link: "https://drive.google.com/file/d/1-XHxEg9cCRRAyv5e_1Io2noM_zjEIgb1/view?usp=sharing" },
  { name: "Desenvolvimento Web Compacto e Completo", link: "https://drive.google.com/file/d/1F7iHWIBZL1z_ESQ8g4nn_zHeedvTjOjF/view?usp=sharing" },
  { name: "Fundamento de Programação", link: "https://drive.google.com/file/d/1AUksurChYYHK9Xk61tbU8iOD1BNWe0ad/view?usp=sharing" },
  { name: "Git", link: "https://drive.google.com/file/d/1Kgrh015VJbjAs9087GGBf9vQxZEhaNFT/view?usp=sharing" },
  { name: "Arquitetura de Redes", link: "https://drive.google.com/file/d/1u-_zNT4k-cAbBc5vBg73ONCtUj-3-jxD/view?usp=sharing" },
  { name: "Proxmox - Professional", link: "https://drive.google.com/file/d/1xQC7fbBYRnFmgEG8sqMlX8-rObgjOuQ5/view?usp=sharing" },
];

export function Certificates() {
  const [expanded, setExpanded] = useState(false);
  const theme = useTheme();

  return (
    <Paper
      component={motion.div}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      elevation={6}
      sx={{
        backgroundColor: theme.colors.cardBackground,
        borderRadius: "22px",
        padding: "1.5rem",
        width: "100%",
        maxWidth: "300px",
        cursor: "pointer",
        border: `1px solid ${theme.colors.border}`,
        transition: "0.3s",
        "&:hover": {
          borderColor: theme.colors.hover,
        },
      }}
      onClick={() => setExpanded(!expanded)}
    >
      <Grid container alignItems="center" justifyContent="space-between">
        <Typography variant="h5" fontWeight="bold" color={theme.colors.textPrimary}>
          Certificates
        </Typography>

        <IconButton sx={{ color: theme.colors.textSecondary }}>
          <FaAward style={{ fontSize: "1.5rem" }} />
        </IconButton>
      </Grid>

      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <Box sx={{ mt: 2, paddingX: 1 }}>
          {certificates.map((cert, index) => (
            <Box
              key={index}
              sx={{
                display: "flex",
                alignItems: "center",
                padding: "8px",
                borderRadius: "8px",
                transition: "0.3s",
                "&:hover": {
                  backgroundColor: theme.colors.hover,
                },
              }}
            >
              <Typography variant="body1" sx={{ fontWeight: "500" }}>
                📜{" "}
                <a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    color: theme.colors.textPrimary,
                    textDecoration: "none",
                    fontWeight: "500",
                    transition: "color 0.3s ease-in-out",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = theme.colors.hover)}
                  onMouseLeave={(e) => (e.currentTarget.style.color = theme.colors.textPrimary)}
                >
                  {cert.name}
                </a>
              </Typography>
            </Box>
          ))}
        </Box>
      </Collapse>
    </Paper>
  );
}
