import { Paper, Typography } from "@mui/material";
import { FaGithub } from "react-icons/fa";
import { useTheme } from "styled-components";

export function GitHubCard() {
  const theme = useTheme();

  return (
    <Paper
      component="a"
      href="https://github.com/br1ansouza"
      target="_blank"
      rel="noopener noreferrer"
      elevation={6}
      sx={{
        textDecoration: "none",
        backgroundColor: theme.colors.cardBackground,
        borderRadius: "22px",
        padding: "1.5rem",
        width: "235px",
        height: "150px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-between",
        border: `1px solid ${theme.colors.border}`,
        transition: "0.3s",
        "&:hover": {
          borderColor: theme.colors.hover,
          
        },
      }}
    >
      <FaGithub size={50} color={theme.colors.textSecondary} />
      <Typography
        variant="h6"
        fontWeight="bold"
        color={theme.colors.textPrimary}
        sx={{ mt: 2 }}
      >
        GitHub
      </Typography>
    </Paper>
  );
}
