import { Box, Paper, Tooltip } from "@mui/material";
import { motion } from "framer-motion";
import { useTheme } from "styled-components";
import {
  SiJavascript,
  SiTypescript,
  SiReact,
  SiBootstrap,
  SiMui,
  SiNodedotjs,
  SiPostgresql,
  SiMariadb,
  SiGit,
  SiPostman,
} from "react-icons/si";

const technologies = [
  { icon: <SiJavascript size="2rem" />, name: "JavaScript", color: "#F7DF1E" },
  { icon: <SiTypescript size="2rem" />, name: "TypeScript", color: "#3178C6" },
  { icon: <SiReact size="2rem" />, name: "React", color: "#61DAFB" },
  { icon: <SiBootstrap size="2rem" />, name: "Bootstrap", color: "#7952B3" },
  { icon: <SiMui size="2rem" />, name: "MUI", color: "#007FFF" },
  { icon: <SiNodedotjs size="2rem" />, name: "Node.js", color: "#8CC84B" },
  { icon: <SiPostgresql size="2rem" />, name: "PostgreSQL", color: "#336791" },
  { icon: <SiMariadb size="2rem" />, name: "MariaDB", color: "#003545" },
  { icon: <SiGit size="2rem" />, name: "Git", color: "#F05032" },
  { icon: <SiPostman size="2rem" />, name: "Postman", color: "#ee6d3f" },
];

export function Technologies() {
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
        padding: "1.5rem",
        borderRadius: "22px",
        display: "flex",
        justifyContent: "center",
        gap: "1.5rem",
        flexWrap: "wrap",
        border: `1px solid ${theme.colors.border}`,
      }}
    >
      {technologies.map((tech, index) => (
        <Tooltip key={index} title={tech.name} arrow>
          <Box
            component={motion.div}
            whileHover={{ scale: 1.2, color: tech.color, transition: { duration: 0.3 } }}
            sx={{
              color: theme.colors.textSecondary,
              transition: "color 0.3s ease-in-out",
            }}
          >
            {tech.icon}
          </Box>
        </Tooltip>
      ))}
    </Paper>
  );
}
