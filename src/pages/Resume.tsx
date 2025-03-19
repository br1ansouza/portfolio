import { Box, Typography, Grid } from '@mui/material';
import { Download } from '@mui/icons-material';
import styled from 'styled-components';

const ResumeContainer = styled(Box)`
  width: 100%;
  max-width: 900px;
  margin: 0 auto;
  padding: 2rem;
  display: flex;
  flex-direction: column;
`;

const SectionTitle = styled(Typography)`
  font-size: 2rem;
  font-weight: bold;
  background: linear-gradient(90deg, #ff0080, #00bfff, #ff0080);
  background-size: 200% auto;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: gradientAnimation 4s linear infinite;

  @keyframes gradientAnimation {
    0% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
  }
`;

const ResumeCard = styled(Box)`
  background-color: ${({ theme }) => theme.colors.hover};
  border-radius: 12px;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.2);
  padding: 1.5rem;
  transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
  width: 100%;
  min-height: 180px;
  
  &:hover {
    transform: scale(1.02);
    box-shadow: 0px 6px 18px rgba(0, 0, 0, 0.3);
  }
`;

const DownloadButton = styled.a`
  background-color: transparent;
  color: ${({ theme }) => theme.colors.textPrimary};
  font-size: 1.8rem;
  padding: 8px;
  min-width: auto;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.2s ease-in-out, color 0.2s;
  text-decoration: none;
  margin-left: auto;
  
  &:hover {
    transform: scale(1.1);
    color: ${({ theme }) => theme.colors.hover};
  }
`;

export function ResumeSection() {
    return (
        <ResumeContainer>
            <Box display="flex" alignItems="center" justifyContent="space-between" marginBottom="1.5rem">
                <SectionTitle>Resumo Profissional</SectionTitle>
                <DownloadButton href="/Profile.pdf" download>
                    <Download />
                </DownloadButton>
            </Box>

            <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                    <ResumeCard>
                        <Typography fontSize="1.5rem" fontWeight="bold">Sobre Mim</Typography>
                        <Typography fontSize="1rem" color="textSecondary">
                            Estudante de <strong>Análise e Desenvolvimento de Sistemas</strong> e <strong>Desenvolvimento Full Stack</strong>,
                            apaixonado por tecnologia e inovação. Experiência em redes e desenvolvimento Frontend.
                        </Typography>
                    </ResumeCard>
                </Grid>

                <Grid item xs={12} md={6}>
                    <ResumeCard>
                        <Typography fontSize="1.5rem" fontWeight="bold">Habilidades</Typography>
                        <Typography fontSize="1rem" color="textSecondary">
                            - Network Architecture<br />
                            - Azure DevOps<br />
                            - PostgreSQL<br />
                        </Typography>
                    </ResumeCard>
                </Grid>

                <Grid item xs={12} md={6}>
                    <ResumeCard>
                        <Typography fontSize="1.5rem" fontWeight="bold">Certificações</Typography>
                        <Typography fontSize="1rem" color="textSecondary">
                            - <strong>Arquitetura de Redes</strong><br />
                            - <strong>Proxmox + Hyper-V Server</strong><br />
                            - <strong>Desenvolvimento Web Compacto e Completo</strong><br />
                        </Typography>
                    </ResumeCard>
                </Grid>

                <Grid item xs={12} md={6}>
                    <ResumeCard>
                        <Typography fontSize="1.5rem" fontWeight="bold">Experiência</Typography>
                        <Typography fontSize="1rem" color="textSecondary">
                            <strong>Norus</strong> - Desenvolvimento Frontend e Redes (Junho de 2023 - Presente)<br />
                            <strong>Jomani | Corretora de Seguros</strong> - Auxiliar de TI (Ago 2021 - Mar 2023) <br />
                        </Typography>
                    </ResumeCard>
                </Grid>

                <Grid item xs={12} md={6}>
                    <ResumeCard>
                        <Typography fontSize="1.5rem" fontWeight="bold">Formação Acadêmica</Typography>
                        <Typography fontSize="1rem" color="textSecondary">
                            - <strong>Análise e Desenvolvimento de Sistemas</strong> - Universidade do Sul de Santa Catarina (2024 - 2025)<br />
                            - <strong>Dev Full-Stack Jr</strong> - SENAI/SC (Julho 2024 - Maio 2025)<br />
                        </Typography>
                    </ResumeCard>
                </Grid>
            </Grid>
        </ResumeContainer>
    );
}
