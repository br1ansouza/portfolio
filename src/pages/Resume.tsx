import { Box, Typography, Grid, Button } from '@mui/material';
import { Download } from '@mui/icons-material';
import styled from 'styled-components';

const ResumeContainer = styled(Box)`
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

const SectionTitle = styled(Typography)`
  font-weight: bold;
  margin-bottom: 4rem;
  font-size: 4rem !important;
  font-family: 'Poppins', sans-serif;
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

const Subtitle = styled(Typography)`
  font-size: 1.3rem;
  color: #fff;
  margin-bottom: 2rem;
`;

const titleColor = '#b561ed';

const Title = styled(Typography)`
  font-size: 1.5rem !important;
  font-weight: bold !important;
  color: ${titleColor} !important;
  margin-bottom: 0.5rem !important;
  position: relative;

  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3) !important;
`;

const BodyText = styled(Typography)`
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.textSecondary};
`;

const ResumeCard = styled(Box) <{ height?: string }>`
  background-color: rgba(71, 68, 68, 0.45);
  border-radius: 6px;
  padding: 1.5rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  width: 100%;
  text-align: left;
  margin-bottom:
  display: flex;
  flex-direction: column;
  height: ${({ height }) => height || 'auto'};
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: scale(1.03);
    box-shadow: 1px 6px 20px rgba(0, 0, 0, 0.3);
  }
`;

const ListItem = styled(Typography) <{ dotColor: string }>`
  font-size: 1rem;
  color: #fff;
  margin-bottom: 0.5rem;
  display: flex;
  align-items: center;

  &:before {
    content: '•';
    color: ${({ dotColor }) => dotColor};
    font-weight: bold;
    font-size: 1.5rem;
    margin-right: 8px;
  }
`;

const DownloadButton = styled(Button)`
  background: linear-gradient(135deg, #007bff, #0056b3);
  color: #ffffff !important; 
  font-size: 1rem;
  font-weight: bold;
  padding: 12px 24px;
  display: flex;
  align-items: center;
  gap: 8px;
  text-transform: none;
  border-radius: 8px;
  transition: all 0.3s ease-in-out;
  box-shadow: 0 4px 10px rgba(0, 123, 255, 0.3);

  &:hover {
    background: linear-gradient(135deg, #0056b3, #003f7f);
    box-shadow: 0 6px 15px rgba(0, 86, 179, 0.4);
    transform: translateY(-2px);
  }

  &:active {
    transform: scale(0.95);
    box-shadow: 0 2px 8px rgba(0, 86, 179, 0.3);
  }
`;


export function ResumeSection() {
    return (
        <ResumeContainer>
            <SectionTitle>Resumo Profissional</SectionTitle>
            <Subtitle>Desenvolvedor com experiência em criação de interfaces modernas e soluções web</Subtitle>

            <Box width="100%" display="flex" justifyContent="flex-end" sx={{ marginBottom: "15px" }}>
                <a href="/Profile.pdf" download style={{ textDecoration: 'none' }}>
                    <DownloadButton>
                        <Download style={{ marginRight: '8px' }} />
                        Baixar CV
                    </DownloadButton>
                </a>
            </Box>


            <Grid container spacing={3} alignItems="flex-start">
                <Grid item xs={12} md={6}>
                    <ResumeCard height="180px">
                        <Title>Sobre Mim</Title>
                        <BodyText>
                            Sou <strong>Frontend Developer</strong> e entusiasta de <strong>Networking & Cloud</strong>. Apaixonado por tecnologia e inovação,
                            com experiência em desenvolvimento web e infraestrutura de redes. Atuo na configuração de equipamentos de rede
                            e servidores Linux e Windows.
                        </BodyText>
                    </ResumeCard>
                </Grid>

                <Grid item xs={12} md={6}>
                    <ResumeCard height="230px">
                        <Title>Habilidades</Title>
                        <ListItem dotColor="green">Desenvolvimento Frontend (React, TypeScript, JavaScript)</ListItem>
                        <ListItem dotColor="green">Arquitetura de Redes</ListItem>
                        <ListItem dotColor="green">Azure DevOps</ListItem>
                        <ListItem dotColor="green">PostgreSQL</ListItem>
                    </ResumeCard>
                </Grid>

                <Grid item xs={12} md={6}>
                    <ResumeCard height="400px" style={{ marginTop: "-48px" }}>
                        <Title>Experiência</Title>
                        <BodyText fontWeight="bold">Norus - Desenvolvimento Frontend e Redes (Junho de 2023 - Presente)</BodyText>
                        <ListItem dotColor="orange">Desenvolvimento de interfaces modernas e manutenção de aplicações Frontend.</ListItem>
                        <ListItem dotColor="orange">Configuração e manutenção de redes e servidores.</ListItem>
                        <BodyText fontWeight="bold" style={{ marginTop: '10px' }}>
                            Jomani | Corretora de Seguros - Auxiliar de TI (Ago 2020 - Mar 2023)
                        </BodyText>
                        <ListItem dotColor="orange">Suporte técnico, configuração e manutenção de infraestrutura de TI.</ListItem>
                        <ListItem dotColor="orange">Apoio na administração de redes e segurança da informação.</ListItem>
                        <ListItem dotColor="orange">Atendimento e resolução de chamados internos.</ListItem>
                    </ResumeCard>
                </Grid>

                <Grid item xs={12} md={6}>
                    <ResumeCard height="350px">
                        <Title>Certificações</Title>
                        <ListItem dotColor="purple">Arquitetura de Redes</ListItem>
                        <ListItem dotColor="purple">Proxmox + Hyper-V Server</ListItem>
                        <ListItem dotColor="purple">Desenvolvimento Web Compacto e Completo</ListItem>
                        <ListItem dotColor="purple">Git: Básico ao Avançado</ListItem>
                        <ListItem dotColor="purple">Fundamentos de Programação</ListItem>
                    </ResumeCard>
                </Grid>

                <Grid item xs={12}>
                    <ResumeCard height="auto">
                        <Title>Formação Acadêmica</Title>
                        <Grid container spacing={2}>
                            <Grid item xs={12} md={6}>
                                <BodyText fontWeight="bold">Análise e Desenvolvimento de Sistemas</BodyText>
                                <BodyText variant="body2">
                                    Universidade do Sul de Santa Catarina (2024 - 2025)
                                </BodyText>
                            </Grid>

                            <Grid item xs={12} md={6}>
                                <BodyText fontWeight="bold">Dev Full-Stack Jr</BodyText>
                                <BodyText variant="body2">
                                    SENAI/SC (Julho 2024 - Maio 2025)
                                </BodyText>
                            </Grid>

                            <Grid item xs={12} md={6}>
                                <BodyText fontWeight="bold">Gestão de Tecnologia da Informação</BodyText>
                                <BodyText variant="body2">
                                    Univates (2020 - 2022)
                                </BodyText>
                            </Grid>

                            <Grid item xs={12} md={6}>
                                <BodyText fontWeight="bold">Ensino Médio Completo</BodyText>
                                <BodyText variant="body2">
                                    IECEG (2017 - 2019)
                                </BodyText>
                            </Grid>
                        </Grid>
                    </ResumeCard>
                </Grid>
            </Grid>
        </ResumeContainer>
    );
}