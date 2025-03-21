import { Box, Typography, Modal, Chip, Button } from '@mui/material';
import styled from 'styled-components';
import { useTheme } from 'styled-components';
import { FaGithub } from "react-icons/fa";

interface Project {
  title: string;
  description: string;
  fullDescription?: string;
  technologies: string[];
  images?: string[];
  keyFeatures?: string[];
  githubUrl?: string;
}

interface ProjectModalProps {
  open: boolean;
  handleClose: () => void;
  project: Project | null;
}

const GithubButton = styled(Button)`
  background-color: #24292e;
  color: #ffffff;
  font-size: 1rem;
  font-weight: bold;
  padding: 10px 18px;
  display: flex;
  align-items: center;
  gap: 8px;
  text-transform: none;
  border-radius: 6px;
  transition: all 0.2s ease-in-out;

  &:hover {
    background-color: #2f363d;
  }

  &:active {
    background-color: #1b1f23;
    transform: scale(0.98);
  }
`;


const ModalContent = styled(Box)`
  position: relative;
  padding: 2rem;
  background-color: rgba(33, 34, 36, 0.85);
  border-radius: 16px;
  outline: none;
  max-width: 900px;
  width: 90%;
  max-height: 90vh;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  text-align: left;
  gap: 1.5rem;
`;

const ImageContainer = styled(Box)`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 20px;
  width: 100%;
  justify-content: center;
  align-items: center;
  margin-top: 1rem;

  img {
    width: 100%;
    height: auto;
    border-radius: 8px;
    box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.3);
    transition: transform 0.3s;

    &:hover {
      transform: scale(1.05);
    }
  }
`;

const TechContainer = styled(Box)`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  justify-content: center;
  padding-top: 1rem;
  width: 100%;
`;

const StyledChip = styled(Chip)`
  position: relative;
  overflow: hidden;
  background: linear-gradient(135deg,rgb(162, 0, 255),rgb(55, 0, 255)) !important;
  background-size: 250% 250% !important;
  color: white !important;
  padding: 5px 12px !important;
  font-size: 0.9rem !important;
  font-weight: bold !important;
  border-radius: 18px !important;
  border: none !important;
  transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out !important;

  &:hover {
    transform: scale(1.08);
    box-shadow: 0px 4px 15px rgba(128, 0, 255, 0.4);
  }

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    background: linear-gradient(135deg,rgb(55, 0, 255),rgb(162, 0, 255),rgb(55, 0, 255));
    background-size: 350% 350%;
    z-index: -1;
    animation: gradientMoveDiagonal 5s infinite alternate ease-in-out;
    border-radius: inherit;
  }

  @keyframes gradientMoveDiagonal {
    0% {
      background-position: 0% 0%;
    }
    100% {
      background-position: 100% 100%;
    }
  }
`;

const Description = styled(Typography)`
  font-size: 1.1rem;
  color: ${({ theme }) => theme.colors.modalTextSecondary};
  line-height: 1.6;
  max-width: 800px;
  text-align: left;
`;

const FullDescription = styled(Typography)`
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.modalTextSecondary};
  line-height: 1.6;
  max-width: 800px;
  text-align: left;
`;

const FeatureContainer = styled(Box)`
  width: 100%;
  max-width: 800px;
  text-align: left;
  margin-top: 2rem;
`;

const FeatureTitle = styled(Typography)`
  font-size: 1.3rem !important;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.modalTextPrimary};
  margin-bottom: 0.8rem !important;
`;

const StyledFeatureList = styled.ul`
  list-style: none;
  padding-left: 18px;
  font-size: 0.95rem;
  line-height: 1.6;
  color: ${({ theme }) => theme.colors.textLight};

  li {
    display: flex;
    align-items: center;
    gap: 8px;
    margin-bottom: 6px;
    transition: color 0.2s ease-in-out;

    &:before {
      content: "ᐅ";
      color: ${({ theme }) => theme.colors.hover};
      font-size: 1.2rem;
    }
  }
`;

const CloseButton = styled.button`
  position: absolute;
  top: 12px;
  right: 12px;
  background: transparent;
  border: none;
  color: ${({ theme }) => theme.colors.textPrimary};
  font-size: 1.8rem;
  cursor: pointer;
  transition: color 0.2s ease-in-out;

  &:hover {
    color: ${({ theme }) => theme.colors.hover};
  }
`;

const Backdrop = styled(Box)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(5px);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ProjectModal: React.FC<ProjectModalProps> = ({ open, handleClose, project }) => {
  const theme = useTheme();

  return (
    <Modal open={open} onClose={handleClose} closeAfterTransition>
      <Backdrop>
        <ModalContent>
          {project && (
            <>
              <Typography variant="h4" fontWeight="bold" color={theme.colors.modalTextPrimary}>
                {project.title}
              </Typography>
              <Description>{project.description}</Description>
              {project.images && project.images.length > 0 && (
                <ImageContainer>
                  {project.images.map((image, index) => (
                    <img key={index} src={image} alt={`Project ${project.title} - ${index + 1}`} />
                  ))}
                </ImageContainer>
              )}
              {project.fullDescription && <FullDescription>{project.fullDescription}</FullDescription>}
              <TechContainer>
                {project.technologies.map((tech, index) => (
                  <StyledChip key={index} label={tech} />
                ))}
              </TechContainer>
              {project.keyFeatures && project.keyFeatures.length > 0 && (
                <FeatureContainer>
                  <FeatureTitle>Key Features</FeatureTitle>
                  <StyledFeatureList>
                    {project.keyFeatures.map((feature, index) => (
                      <li key={index}>{feature}</li>
                    ))}
                  </StyledFeatureList>
                </FeatureContainer>
              )}
              {project.githubUrl && (
                <Box sx={{ width: "100%", display: "flex", justifyContent: "flex-end", marginTop: "1rem" }}>
                  <GithubButton onClick={() => window.open(project.githubUrl, "_blank")}>
                    <FaGithub size={20} />
                    Ver no GitHub
                  </GithubButton>
                </Box>
              )}
              <CloseButton onClick={handleClose}>&times;</CloseButton>
            </>
          )}
        </ModalContent>
      </Backdrop>
    </Modal>
  );
};


export default ProjectModal;
