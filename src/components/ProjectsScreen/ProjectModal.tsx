import { Box, Typography, Modal, Button } from '@mui/material';
import styled from 'styled-components';
import { useTheme } from 'styled-components';

interface Project {
  title: string;
  description: string;
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
  max-width: 700px;
  width: 90%;
  max-height: 85vh;
  overflow-y: auto;
  box-shadow: 0px 10px 40px rgba(0, 0, 0, 0.5);
  transform: translateY(-30px);
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
  transition: background-color 0.3s, transform 0.2s;

  &:hover {
    background-color: ${({ theme }) => theme.colors.buttonHover};
    transform: scale(1.05);
  }
`;

const ImageContainer = styled(Box)`
  display: flex;
  gap: 10px;
  overflow-x: auto;
  margin-top: 1rem;

  img {
    max-width: 30%;
    height: auto;
    border-radius: 8px;
    box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.2);
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
              <Typography variant="h5" fontWeight="bold" mb={2} color={theme.colors.textPrimary}>{project.title}</Typography>
              <Typography variant="body1" mb={2} color={theme.colors.textSecondary}>{project.description}</Typography>
              {project.images && (
                <ImageContainer>
                  {project.images.map((image, index) => (
                    <img key={index} src={image} alt={`Project ${project.title} - ${index + 1}`} />
                  ))}
                </ImageContainer>
              )}
              <StyledButton onClick={handleClose}>Close</StyledButton>
            </>
          )}
        </ModalContent>
      </Box>
    </Modal>
  );
};

export default ProjectModal;
