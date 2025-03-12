import { Box, Typography, Modal, Button, Chip } from '@mui/material';
import styled from 'styled-components';
import { useTheme } from 'styled-components';

interface Project {
  title: string;
  description: string;
  fullDescription?: string;
  technologies: string[];
  images?: string[];
  keyFeatures?: string[];
}

interface ProjectModalProps {
  open: boolean;
  handleClose: () => void;
  project: Project | null;
}

const ModalContent = styled(Box)`
  padding: 2rem;
  background-color: ${({ theme }) => theme.colors.cardBackground};
  border-radius: 16px;
  outline: none;
  max-width: 900px;
  width: 90%;
  max-height: 90vh;
  overflow-y: auto;
  box-shadow: 0px 10px 40px rgba(0, 0, 0, 0.5);
  animation: fadeSlideIn 0.3s ease-out forwards;

  @keyframes fadeSlideIn {
    from { opacity: 0; transform: translateY(-50px); }
    to { opacity: 1; transform: translateY(0); }
  }
`;

const StyledButton = styled(Button)`
  background-color: ${({ theme }) => theme.colors.buttonBackground};
  color: ${({ theme }) => theme.colors.buttonText};
  border-radius: 10px;
  padding: 10px 20px;
  text-transform: none;
  font-weight: bold;
  border: 2px solid ${({ theme }) => theme.colors.border};
  transition: background-color 0.3s, transform 0.2s, border 0.2s;

  &:hover {
    background-color: ${({ theme }) => theme.colors.buttonHover};
    transform: scale(1.05);
    border: 2px solid ${({ theme }) => theme.colors.buttonHover};
  }
`;

const ImageContainer = styled(Box)`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 15px;
  margin-top: 1rem;

  img {
    width: 100%;
    height: auto;
    border-radius: 8px;
    box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.2);
    transition: transform 0.3s, box-shadow 0.3s;

    &:hover {
      transform: scale(1.05);
      box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.3);
    }
  }
`;

const TechContainer = styled(Box)`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin: 1rem 0;
`;

const StyledChip = styled(Chip)`
  background-color: #ff5722;
  color: white;
  font-weight: bold;
  border-radius: 20px;
  padding: 8px 16px;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.2);
  transition: background-color 0.3s, transform 0.2s;

  &:hover {
    background-color: #e64a19;
    transform: scale(1.05);
  }
`;

const StyledTypography = styled(Typography)`
  color: ${({ theme }) => theme.colors.textPrimary};
  font-weight: bold;
  font-size: 2rem;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3);
  margin-bottom: 2rem;
`;

const Description = styled(Typography)`
  font-size: 1.1rem;
  color: ${({ theme }) => theme.colors.textSecondary};
  margin-bottom: 1rem;
  line-height: 1.6;
`;

const FeatureList = styled.ul`
  padding-left: 20px;
  color: ${({ theme }) => theme.colors.textSecondary};

  li {
    margin-bottom: 5px;
  }
`;

const ProjectModal: React.FC<ProjectModalProps> = ({ open, handleClose, project }) => {
  const theme = useTheme();

  return (
    <Modal open={open} onClose={handleClose} closeAfterTransition>
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
        <ModalContent>
          {project && (
            <>
              <StyledTypography mt={2} mb={2}>{project.title}</StyledTypography>
              {project.images && project.images.length > 0 && (
                <ImageContainer>
                  {project.images.map((image, index) => (
                    <img key={index} src={image} alt={`Project ${project.title} - ${index + 1}`} />
                  ))}
                </ImageContainer>
              )}
              <Description>{project.description}</Description>
              {project.fullDescription && (
                <Description>{project.fullDescription}</Description>
              )}
              <TechContainer>
                {project.technologies.map((tech, index) => (
                  <StyledChip key={index} label={tech} />
                ))}
              </TechContainer>
              {project.keyFeatures && (
                <Box>
                  <Typography variant="h6" fontWeight="bold" mb={1} color={theme.colors.textPrimary}>Funcionalidades</Typography>
                  <FeatureList>
                    {project.keyFeatures.map((feature, index) => (
                      <li key={index}>{feature}</li>
                    ))}
                  </FeatureList>
                </Box>
              )}
              <StyledButton onClick={handleClose} sx={{ mt: 3 }}>Close</StyledButton>
            </>
          )}
        </ModalContent>
      </Box>
    </Modal>
  );
};

export default ProjectModal;
