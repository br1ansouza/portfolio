import { Box, Typography, Grid, Button } from '@mui/material';
import { Download } from '@mui/icons-material';
import styled from 'styled-components';
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "../contexts/useLanguage";
import { useEffect } from "react";

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
  font-weight: 900 !important;
  font-size: 3.5rem !important;
  font-family: 'Raleway', sans-serif !important;
  background: linear-gradient(90deg, #ff0080, #00bfff, #ff0080);
  background-size: 200% auto !important;
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
  font-size: 1.2rem !important;
  color: ${({ theme }) => theme.colors.textSecondary};
  margin-bottom: 2rem;
`;

const Title = styled(Typography)`
  font-size: 1.5rem !important;
  font-weight: bold !important;
  color: #b561ed !important;
  margin-bottom: 0.5rem !important;
  position: relative;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3) !important;
`;

const BodyText = styled(Typography)`
  font-size: 0.9rem !important;
  color: ${({ theme }) => theme.colors.textSecondary};
`;

// Card unificado com o mesmo estilo do "Sobre Mim"
const ResumeCard = styled(Box) <{ position?: string }>`
  background: linear-gradient(145deg, 
    ${({ theme }) => theme.colors.cardBackground}, 
    ${({ theme }) => `${theme.colors.cardBackground}e0`});
  border-left: 4px solid #b561ed;
  border-radius: 10px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
  padding: 1.8rem;
  position: relative;
  transition: all 0.3s ease;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  
  &:before {
    content: '';
    position: absolute;
    left: -2px;
    top: 0;
    bottom: 0;
    width: 4px;
    background: linear-gradient(to bottom, #ff0080, #00bfff);
    border-radius: 2px;
    opacity: 0;
    transition: opacity 0.3s ease;
  }
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 12px 28px rgba(0, 0, 0, 0.25);
    
    &:before {
      opacity: 1;
    }
  }
  
  &:after {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    width: 100px;
    height: 100px;
    background: radial-gradient(circle, rgba(181, 97, 237, 0.1) 0%, rgba(0, 0, 0, 0) 70%);
    border-radius: 50%;
    transform: translate(30%, -30%);
    pointer-events: none;
  }
  
  ${({ position }) => position === 'top' && `
    &:after {
      content: '';
      position: absolute;
      left: -2px;
      bottom: -20px;
      width: 4px;
      height: 20px;
      background: linear-gradient(to bottom, #b561ed, transparent);
      z-index: 0;
    }
  `}

  ${({ position }) => position === 'middle' && `
    &:before, &:after {
      content: '';
      position: absolute;
      left: -2px;
      width: 4px;
      z-index: 0;
    }
    
    &:before {
      top: -20px;
      height: 20px;
      background: linear-gradient(to bottom, transparent, #b561ed);
    }
    
    &:after {
      bottom: -20px;
      height: 20px;
      background: linear-gradient(to bottom, #b561ed, transparent);
    }
  `}

  ${({ position }) => position === 'bottom' && `
    &:before {
      content: '';
      position: absolute;
      left: -2px;
      top: -20px;
      width: 4px;
      height: 20px;
      background: linear-gradient(to bottom, transparent, #b561ed);
      z-index: 0;
    }
  `}
`;

const ListItem = styled(Typography) <{ dotColor: string }>`
  font-size: 0.9rem !important;
  color: ${({ theme }) => theme.colors.textPrimary};
  margin-bottom: 0.5rem;
  display: flex;
  align-items: center;

  &:before {
    content: '';
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background-color: ${({ dotColor }) => dotColor};
    margin-right: 10px;
    box-shadow: 0 0 5px ${({ dotColor }) => dotColor};
  }
`;

const DownloadButton = styled(Button)`
  background: linear-gradient(135deg, #b561ed, #7939a5);
  color: #ffffff !important; 
  font-size: 0.9rem !important;
  font-weight: bold;
  padding: 12px 24px;
  display: flex;
  align-items: center;
  gap: 8px;
  text-transform: none;
  border-radius: 8px;
  transition: all 0.3s ease-in-out;
  box-shadow: 0 4px 10px rgba(181, 97, 237, 0.4);

  &:hover {
    background: linear-gradient(135deg, #a346e0, #6a2a9c);
    box-shadow: 0 6px 15px rgba(181, 97, 237, 0.5);
    transform: translateY(-2px);
  }

  &:active {
    transform: scale(0.95);
    box-shadow: 0 2px 8px rgba(181, 97, 237, 0.3);
  }
`;

const ConnectorLine = styled(Box)`
  position: relative;
  height: 2px;
  background: linear-gradient(to right, #b561ed, #00bfff);
  width: 100%;
  margin: 0 auto;
  opacity: 0.7;
`;

const AboutMeTitle = styled(Typography)`
  font-size: 1.8rem !important;
  font-weight: bold !important;
  margin-bottom: 1rem !important;
  position: relative;
  display: inline-block;
  color: ${({ theme }) => theme.colors.hover} !important;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3) !important;
`;

const AboutMeText = styled(Typography)`
  font-size: 1rem !important;
  line-height: 1.6 !important;
  color: ${({ theme }) => theme.colors.textPrimary};
  position: relative;
  z-index: 1;
`;

const AboutMeHighlight = styled('span')`
  color: #00bfff;
  font-weight: 500;
`;

export function ResumeSection() {
  const { language } = useLanguage();
  const lang = language as "pt" | "en";

  const sectionTitle = lang === "pt" ? "Resumo Profissional" : "Professional Summary";
  const subtitle = lang === "pt"
    ? "Desenvolvedor com experiência em criação de interfaces modernas e soluções web"
    : "Developer with experience in building modern interfaces and web solutions";

  const skillsTitle = lang === "pt" ? "Habilidades" : "Skills";
  const skillsList = lang === "pt"
    ? ["Desenvolvimento Frontend (React, TypeScript, JavaScript)", "Arquitetura de Redes", "Azure DevOps", "PostgreSQL"]
    : ["Frontend Development (React, TypeScript, JavaScript)", "Network Architecture", "Azure DevOps", "PostgreSQL"];

  const experienceTitle = lang === "pt" ? "Experiência" : "Experience";
  const certificationsTitle = lang === "pt" ? "Certificações" : "Certifications";
  const educationTitle = lang === "pt" ? "Formação Acadêmica" : "Academic Background";
  const downloadText = lang === "pt" ? "Baixar CV" : "Download Resume";

  useEffect(() => {
    const matchHeight = () => {
      const middleCards = document.querySelectorAll('.middle-card');
      if (middleCards.length > 0) {
        let maxHeight = 0;
        middleCards.forEach(card => {
          const cardElement = card as HTMLElement;
          cardElement.style.height = 'auto';
          maxHeight = Math.max(maxHeight, cardElement.clientHeight);
        });
        middleCards.forEach(card => {
          const cardElement = card as HTMLElement;
          cardElement.style.height = `${maxHeight}px`;
        });
      }
    };
  
    matchHeight();
    window.addEventListener('resize', matchHeight);
  
    return () => window.removeEventListener('resize', matchHeight);
  }, [language]);
  return (
    <ResumeContainer>
      <AnimatePresence mode="wait">
        <motion.div
          key={language}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
          style={{ width: "100%" }}
        >
          <SectionTitle>{sectionTitle}</SectionTitle>
          <Subtitle>{subtitle}</Subtitle>

          <Box width="100%" display="flex" justifyContent="flex-end" sx={{ marginBottom: "15px" }}>
            <a href="/Profile.pdf" download style={{ textDecoration: "none" }}>
              <DownloadButton>
                <Download style={{ marginRight: "4px" }} />
                {downloadText}
              </DownloadButton>
            </a>
          </Box>

          <Grid container spacing={3} alignItems="stretch">
            <Grid item xs={12} md={6} style={{ display: 'flex' }}>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                style={{ width: '100%', height: '100%', display: 'flex' }}
              >
                <ResumeCard position="top" className="about-card">
                  <AboutMeTitle>
                    {lang === "pt" ? "Sobre Mim" : "About Me"}
                  </AboutMeTitle>
                  <AboutMeText>
                    {lang === "pt" ? (
                      <>
                        Desenvolvedor <AboutMeHighlight>Front End</AboutMeHighlight> com experiência em redes, infraestrutura e desenvolvimento de aplicações web e mobile. Trabalho com React, TypeScript, React Native no Front-end e Node.js, Express, TypeORM no Back-end, utilizando bancos de dados PostgreSQL e MariaDB. Tenho experiência com autenticação JWT, segurança e ferramentas como Git, Docker, Postman e Swagger.
                      </>
                    ) : (
                      <>
                        <AboutMeHighlight>Front End Developer</AboutMeHighlight> with experience in networking, infrastructure, and web and mobile application development. I work with React, TypeScript, React Native on the Front-end and Node.js, Express, TypeORM on the Back-end, using PostgreSQL and MariaDB databases. I have experience with JWT authentication, security, and tools like Git, Docker, Postman, and Swagger.
                      </>
                    )}
                  </AboutMeText>
                </ResumeCard>
              </motion.div>
            </Grid>

            <Grid item xs={12} md={6} style={{ display: 'flex' }}>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                style={{ width: '100%', height: '100%', display: 'flex' }}
              >
                <ResumeCard position="top" className="skills-card">
                  <Title>{skillsTitle}</Title>
                  {skillsList.map((item, i) => (
                    <ListItem dotColor="#00bfff" key={i}>{item}</ListItem>
                  ))}
                </ResumeCard>
              </motion.div>
            </Grid>

            <Grid item xs={12}>
              <Box sx={{ py: 1 }}>
                <ConnectorLine />
              </Box>
            </Grid>

            <Grid item xs={12} md={6} style={{ display: 'flex' }}>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                style={{ width: '100%', height: '100%', display: 'flex' }}
              >
                <ResumeCard position="middle" className="middle-card">
                  <Title>{experienceTitle}</Title>
                  <BodyText fontWeight="bold">
                    Norus - {lang === "pt" ? "Desenvolvimento Frontend e Redes" : "Frontend Development and Networking"} (Jun 2023 - Present)
                  </BodyText>
                  <ListItem dotColor="#ff0080">
                    {lang === "pt" ? "Desenvolvimento de interfaces modernas e manutenção de aplicações Frontend." :
                      "Development of modern interfaces and maintenance of frontend applications."}
                  </ListItem>
                  <ListItem dotColor="#ff0080">
                    {lang === "pt" ? "Configuração e manutenção de redes e servidores." :
                      "Network and server setup and maintenance."}
                  </ListItem>

                  <BodyText fontWeight="bold" style={{ marginTop: "10px" }}>
                    Jomani | Corretora de Seguros - {lang === "pt" ? "Auxiliar de TI" : "IT Assistant"} (Aug 2020 - Mar 2023)
                  </BodyText>
                  <ListItem dotColor="#ff0080">
                    {lang === "pt" ? "Suporte técnico, configuração e manutenção de infraestrutura de TI." :
                      "Tech support, setup and maintenance of IT infrastructure."}
                  </ListItem>
                  <ListItem dotColor="#ff0080">
                    {lang === "pt" ? "Administração de redes e segurança da informação." :
                      "Network administration and information security."}
                  </ListItem>
                  <ListItem dotColor="#ff0080">
                    {lang === "pt" ? "Atendimento e resolução de chamados internos." :
                      "Handling and resolving internal support tickets."}
                  </ListItem>
                </ResumeCard>
              </motion.div>
            </Grid>

            <Grid item xs={12} md={6} style={{ display: 'flex' }}>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                style={{ width: '100%', height: '100%', display: 'flex' }}
              >
                <ResumeCard position="middle" className="middle-card">
                  <Title>{certificationsTitle}</Title>
                  <ListItem dotColor="#7b61ff">{lang === "pt" ? "Arquitetura de Redes" : "Network Architecture"}</ListItem>
                  <ListItem dotColor="#7b61ff">{lang === "pt" ? "Proxmox + Hyper-V Server" : "Proxmox + Hyper-V Server"}</ListItem>
                  <ListItem dotColor="#7b61ff">{lang === "pt" ? "Desenvolvimento Web Compacto e Completo" : "Complete Web Development"}</ListItem>
                  <ListItem dotColor="#7b61ff">{lang === "pt" ? "Git: Básico ao Avançado" : "Git: Beginner to Advanced"}</ListItem>
                  <ListItem dotColor="#7b61ff">{lang === "pt" ? "Fundamentos de Programação" : "Programming Fundamentals"}</ListItem>
                </ResumeCard>
              </motion.div>
            </Grid>

            <Grid item xs={12}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                style={{ width: '100%' }}
              >
                <ResumeCard position="bottom">
                  <Title>{educationTitle}</Title>
                  <Grid container spacing={2}>
                    <Grid item xs={12} md={6}>
                      <Box sx={{
                        p: 2,
                        borderRadius: 2,
                        background: 'rgba(181, 97, 237, 0.05)',
                        mb: { xs: 2, md: 0 },
                        transition: 'all 0.3s',
                        '&:hover': { background: 'rgba(181, 97, 237, 0.1)' }
                      }}>
                        <BodyText fontWeight="bold">
                          {lang === "pt" ? "Análise e Desenvolvimento de Sistemas" : "Systems Analysis and Development"}
                        </BodyText>
                        <BodyText variant="body2">Universidade do Sul de Santa Catarina (2024 - 2025)</BodyText>
                      </Box>
                    </Grid>

                    <Grid item xs={12} md={6}>
                      <Box sx={{
                        p: 2,
                        borderRadius: 2,
                        background: 'rgba(0, 191, 255, 0.05)',
                        mb: { xs: 2, md: 0 },
                        transition: 'all 0.3s',
                        '&:hover': { background: 'rgba(0, 191, 255, 0.1)' }
                      }}>
                        <BodyText fontWeight="bold">Dev Full-Stack Jr</BodyText>
                        <BodyText variant="body2">SENAI/SC (Jul 2024 - May 2025)</BodyText>
                      </Box>
                    </Grid>

                    <Grid item xs={12} md={6}>
                      <Box sx={{
                        p: 2,
                        borderRadius: 2,
                        background: 'rgba(255, 0, 128, 0.05)',
                        transition: 'all 0.3s',
                        '&:hover': { background: 'rgba(255, 0, 128, 0.1)' }
                      }}>
                        <BodyText fontWeight="bold">
                          {lang === "pt" ? "Gestão de Tecnologia da Informação" : "IT Management"}
                        </BodyText>
                        <BodyText variant="body2">Univates (2020 - 2022)</BodyText>
                      </Box>
                    </Grid>

                    <Grid item xs={12} md={6}>
                      <Box sx={{
                        p: 2,
                        borderRadius: 2,
                        background: 'rgba(123, 97, 255, 0.05)',
                        transition: 'all 0.3s',
                        '&:hover': { background: 'rgba(123, 97, 255, 0.1)' }
                      }}>
                        <BodyText fontWeight="bold">
                          {lang === "pt" ? "Ensino Médio Completo" : "High School Diploma"}
                        </BodyText>
                        <BodyText variant="body2">IECEG (2017 - 2019)</BodyText>
                      </Box>
                    </Grid>
                  </Grid>
                </ResumeCard>
              </motion.div>
            </Grid>
          </Grid>
        </motion.div>
      </AnimatePresence>
    </ResumeContainer>
  );
}