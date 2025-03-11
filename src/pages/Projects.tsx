import { useState } from 'react';
import { Box, Typography, Paper, Grid, Chip } from '@mui/material';
import { motion } from 'framer-motion';
import { useTheme } from 'styled-components';
import styled from 'styled-components';
import { projects } from '../components/ProjectsScreen/ProjectsCard';
import { useLanguage } from '../contexts/LanguageContext';
import ProjectModal from '../components/ProjectsScreen/ProjectModal';

const ProjectsContainer = styled(Box)`
  position: relative;
  width: 100%;
  min-height: 100vh;
  overflow: hidden;
  padding: 2rem 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.background};
`;

const ProjectCard = styled(Paper)`
  position: relative;
  overflow: hidden;
  width: 300px;
  height: 350px;
  border-radius: 16px;
  cursor: pointer;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  background-color: ${({ theme }) => theme.colors.cardBackground};

  &:hover {
    transform: scale(1.05);
    box-shadow: 0px 6px 25px ${({ theme }) => theme.colors.hover};
  }
`;

const ProjectImage = styled(Box)`
  width: 100%;
  height: 220px;
  background-size: cover;
  background-position: center;
  border-radius: 16px 16px 0 0;
`;

const ProjectInfo = styled(Box)`
  padding: 2rem;
  position: relative;
  border-radius: 0 0 16px 16px;
`;

const TechChip = styled(Chip)`
  background-color: ${({ theme }) => theme.colors.border};
  color: ${({ theme }) => theme.colors.textPrimary};
  margin: 6px;
  transition: transform 0.2s;

  &:hover {
    transform: scale(1.1);
  }
`;

export function Projects() {
  const { language } = useLanguage();
  const theme = useTheme();
  const [open, setOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

  const handleOpen = (project: typeof projects[0]) => {
    setSelectedProject(project);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedProject(null);
  };

  return (
    <ProjectsContainer>
      <Typography
        component={motion.h2}
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        fontWeight="bold"
        mb={4}
        sx={{
          fontSize: "3rem",
          fontFamily: "'Poppins', sans-serif",
          background: "linear-gradient(90deg, #ff0080, #00bfff, #ff0080)",
          backgroundSize: "200% auto",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          animation: "gradientAnimation 4s linear infinite",
          "@keyframes gradientAnimation": {
            "0%": { backgroundPosition: "0% 50%" },
            "50%": { backgroundPosition: "100% 50%" },
            "100%": { backgroundPosition: "0% 50%" }
          },
        }}
      >
        {language === "pt" ? "Projetos em Destaque" : "Featured Projects"} ✨
      </Typography>

      <Grid container spacing={4} justifyContent="center">
        {projects.map((project, index) => (
          <Grid item key={index}>
            <motion.div whileHover={{ scale: 1.05 }}>
              <ProjectCard onClick={() => handleOpen(project)}>
                {project.coverImage && (
                  <ProjectImage style={{ backgroundImage: `url(${project.coverImage})` }} />
                )}
                <ProjectInfo>
                  <Typography variant="h6" fontWeight="bold" mb={1} color={theme.colors.textPrimary}>
                    {project.title}
                  </Typography>
                  <Typography variant="body2" mb={2} color={theme.colors.textSecondary}>
                    {project.description}
                  </Typography>
                  <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
                    {project.technologies.map((tech, i) => <TechChip key={i} label={tech} />)}
                  </Box>
                </ProjectInfo>
              </ProjectCard>
            </motion.div>
          </Grid>
        ))}
      </Grid>

      <ProjectModal open={open} handleClose={handleClose} project={selectedProject} />
    </ProjectsContainer>
  );
}

export default Projects;
