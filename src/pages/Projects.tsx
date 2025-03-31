import { useState } from 'react';
import { Box, Typography, Grid, Chip } from '@mui/material';
import { useTheme } from 'styled-components';
import styled from 'styled-components';
import { projects } from '../components/ProjectsScreen/ProjectsCard';
import { useLanguage } from '../contexts/LanguageContext';
import ProjectModal from '../components/ProjectsScreen/ProjectsModal';
import { motion, AnimatePresence } from 'framer-motion';

const ProjectsContainer = styled(Box)`
  position: relative;
  width: 100%;
  min-height: 100vh;
  overflow: hidden;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.background};
`;

const ProjectCard = styled(Box)`
  position: relative;
  overflow: hidden;
  width: 330px;
  height: 550px;
  border-radius: 12px;
  cursor: pointer;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  background-color: rgba(71, 68, 68, 0.45);
  border: 1px solid ${({ theme }) => theme.colors.border};
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(8px);

  &:hover {
    transform: scale(1.03);
    box-shadow: 1px 6px 20px rgba(0, 0, 0, 0.3);
  }

  &:hover .overlay {
    opacity: 1;
    backdrop-filter: blur(8px);
  }

  &:hover .overlay-text {
    opacity: 1;
    transform: translateY(0);
  }
`;

const ProjectImage = styled(Box)`
  width: 100%;
  height: 250px;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  border-radius: 0;
  position: relative;

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    background: rgba(0, 0, 0, 0.3);
    backdrop-filter: blur(0px);
    transition: backdrop-filter 0.3s ease-in-out, opacity 0.3s ease-in-out;
  }
`;

const Overlay = styled(Box)`
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.4);
  backdrop-filter: blur(0px);
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0;
  transition: opacity 0.3s ease-in-out, backdrop-filter 0.3s ease-in-out;
`;

const OverlayText = styled(Typography)`
  color: white;
  font-weight: bold;
  font-size: 1.2rem;
  opacity: 0;
  transform: translateY(10px);
  transition: opacity 0.3s ease-in-out, transform 0.3s ease-in-out;
`;

const TechChip = styled(Chip)`
  position: relative;
  overflow: hidden;
  background: linear-gradient(90deg, #00bfff, #8000ff) !important;
  background-size: 200% 200% !important;
  color: white !important;
  padding: 4px 10px !important;
  font-size: 0.85rem !important;
  font-weight: bold !important;
  border-radius: 16px !important;
  border: none !important;
  transition: transform 0.2s ease-in-out !important;
  
  &:hover {
    transform: scale(1.1);
  }

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    background: linear-gradient(90deg, #00bfff, #8000ff, #00bfff);
    background-size: 300% 300%;
    z-index: -1;
    animation: gradientMove 4s infinite linear;
    border-radius: inherit;
  }

  @keyframes gradientMove {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }
`;

const StyledTitle = styled(Typography)`
  font-weight: 900 !important;
  margin-bottom: 3rem !important;
  font-size: 3.5rem !important;
  font-family: 'Montserrat', sans-serif !important;
  background: linear-gradient(90deg, #ff0080, #00bfff, #ff0080);
  background-size: 200% auto;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: gradientAnimation 4s linear infinite;
  transition: transform 0.3s ease;

  @keyframes gradientAnimation {
    0% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
  }
`;

export function Projects() {
  const { language } = useLanguage();
  const lang = language as 'pt' | 'en';
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

  const sectionTitle = lang === "pt" ? "Projetos em Destaque" : "Featured Projects";
  const viewDetails = lang === "pt" ? "Ver Detalhes" : "View Details";

  return (
    <ProjectsContainer>
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
          <StyledTitle>{sectionTitle} ✨</StyledTitle>

          <Grid container spacing={4} justifyContent="center">
            {projects.map((project, index) => {
              const title = project.title[lang];
              const description = project.description[lang];

              return (
                <Grid item key={index}>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
                  >
                    <ProjectCard onClick={() => handleOpen(project)}>
                      <ProjectImage style={{ backgroundImage: `url(${project.coverImage})` }}>
                        <Overlay className="overlay">
                          <OverlayText className="overlay-text">{viewDetails}</OverlayText>
                        </Overlay>
                      </ProjectImage>

                      <Box padding="1.2rem" display="flex" flexDirection="column" alignItems="center">
                        <Typography variant="h6" fontWeight="bold" mb={1} color={theme.colors.textSecondary}>
                          {title}
                        </Typography>
                        <Typography variant="body2" mb={2} color={theme.colors.textLight}>
                          {description}
                        </Typography>
                        {project.technologies?.length > 0 && (
                          <Box display="flex" flexWrap="wrap" justifyContent="center" gap="8px" mt="auto">
                            {project.technologies.map((tech, i) => (
                              <TechChip key={i} label={tech} />
                            ))}
                          </Box>
                        )}
                      </Box>
                    </ProjectCard>
                  </motion.div>
                </Grid>
              );
            })}
          </Grid>
        </motion.div>
      </AnimatePresence>

      {open && <ProjectModal open={open} handleClose={handleClose} project={selectedProject} />}
    </ProjectsContainer>
  );
}

export default Projects;