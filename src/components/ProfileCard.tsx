import { useState } from "react";
import { Box, Typography, Avatar, IconButton, Paper, Collapse } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { motion } from "framer-motion";
import profileImage from "../assets/profile-image.jpg";
import { useTheme } from "styled-components";

export function ProfileCard() {
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
        maxWidth: "650px",
        cursor: "pointer",
        border: `1px solid ${theme.colors.border}`,
        transition: "0.3s",
        "&:hover": {
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

        <Typography variant="h5" fontWeight="bold" color={theme.colors.textPrimary}>
          Hi! I'm Brian 👋
        </Typography>
        {!expanded && (
          <Typography variant="body1" color={theme.colors.textSecondary} sx={{ textAlign: "center", mt: 0.5 }}>
            Passionate about Frontend Web Development
          </Typography>
        )}
      </Box>

      <Box sx={{ display: "flex", justifyContent: "center", mt: 1 }}>
        <IconButton onClick={() => setExpanded(!expanded)}>
          <ExpandMoreIcon sx={{ color: theme.colors.textSecondary, transform: expanded ? "rotate(180deg)" : "rotate(0deg)", transition: "0.3s" }} />
        </IconButton>
      </Box>

      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <Typography variant="body1" sx={{ mt: 2, color: theme.colors.textPrimary }}>
          A student of <strong>Systems Analysis and Development</strong> and <strong>Full Stack Development</strong>,
          passionate about technology and innovation. Currently, I am focused on networking, with experience in
          configuring network equipment and servers in <strong>Ubuntu/Debian</strong> and <strong>Windows</strong>
          environments. I hold certifications in <strong>network architecture</strong> and <strong>programming
          fundamentals</strong>.
        </Typography>
      </Collapse>
    </Paper>
  );
}
