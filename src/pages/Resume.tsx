import { Box, Typography, Grid, Button } from '@mui/material';
import { Download } from '@mui/icons-material';
import styled from 'styled-components';
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "../contexts/useLanguage";

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

const ResumeCard = styled(Box) <{ height?: string }>`
  background-color: ${({ theme }) => theme.colors.cardBackground};
  border-radius: 6px;
  padding: 1.5rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  width: 100%;
  max-width: 100%;
  text-align: left;
  display: flex;
  flex-direction: column;
  height: ${({ height }) => height || 'auto'};
  overflow: hidden;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: scale(1.03);
    box-shadow: 1px 6px 20px rgba(0, 0, 0, 0.3);
  }
`;

const ListItem = styled(Typography) <{ dotColor: string }>`
  font-size: 0.9rem !important;
  color: ${({ theme }) => theme.colors.textPrimary};
  margin-bottom: 0.5rem;
  display: flex;
  align-items: center;

  &:before {
    content: '•';
    color: ${({ dotColor }) => dotColor};
    font-weight: bold;
    font-size: 1.2rem !important;
    margin-right: 8px;
  }
`;

const DownloadButton = styled(Button)`
  background: linear-gradient(135deg, #007bff, #0056b3);
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
    const { language } = useLanguage();
    const lang = language as "pt" | "en";
  
    const sectionTitle = lang === "pt" ? "Resumo Profissional" : "Professional Summary";
    const subtitle = lang === "pt"
      ? "Desenvolvedor com experiência em criação de interfaces modernas e soluções web"
      : "Developer with experience in building modern interfaces and web solutions";
  
    const aboutTitle = lang === "pt" ? "Sobre Mim" : "About Me";
    const aboutText = lang === "pt"
    ? `Desenvolvedor Front End com experiência em redes, infraestrutura e desenvolvimento de aplicações web e mobile. Trabalho com React, TypeScript, React Native no Front-end e Node.js, Express, TypeORM no Back-end, utilizando bancos de dados PostgreSQL e MariaDB. Tenho experiência com autenticação JWT, segurança e ferramentas como Git, Docker, Postman e Swagger.`
    : `Front End Developer with experience in networking, infrastructure, and web and mobile application development. I work with React, TypeScript, React Native on the Front-end and Node.js, Express, TypeORM on the Back-end, using PostgreSQL and MariaDB databases. I have experience with JWT authentication, security, and tools like Git, Docker, Postman, and Swagger.`;
  
    const skillsTitle = lang === "pt" ? "Habilidades" : "Skills";
    const skillsList = lang === "pt"
      ? ["Desenvolvimento Frontend (React, TypeScript, JavaScript)", "Arquitetura de Redes", "Azure DevOps", "PostgreSQL"]
      : ["Frontend Development (React, TypeScript, JavaScript)", "Network Architecture", "Azure DevOps", "PostgreSQL"];
  
    const experienceTitle = lang === "pt" ? "Experiência" : "Experience";
    const certificationsTitle = lang === "pt" ? "Certificações" : "Certifications";
    const educationTitle = lang === "pt" ? "Formação Acadêmica" : "Academic Background";
    const downloadText = lang === "pt" ? "Baixar CV" : "Download Resume";
  
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
  
            <Grid container spacing={3} alignItems="flex-start">
              {/* Sobre Mim */}
              <Grid item xs={12} md={6}>
                <ResumeCard style={{ minHeight: "200px", overflowY: "auto" }}>
                  <Title>{aboutTitle}</Title>
                  <BodyText>{aboutText}</BodyText>
                </ResumeCard>
              </Grid>
  
              {/* Habilidades */}
              <Grid item xs={12} md={6}>
                <ResumeCard height="200px">
                  <Title>{skillsTitle}</Title>
                  {skillsList.map((item, i) => (
                    <ListItem dotColor="green" key={i}>{item}</ListItem>
                  ))}
                </ResumeCard>
              </Grid>
  
              {/* Experiência */}
              <Grid item xs={12} md={6}>
                <ResumeCard style={{ minHeight: "290px", overflowY: "auto" }}>
                  <Title>{experienceTitle}</Title>
                  <BodyText fontWeight="bold">
                    Norus - {lang === "pt" ? "Desenvolvimento Frontend e Redes" : "Frontend Development and Networking"} (Jun 2023 - Present)
                  </BodyText>
                  <ListItem dotColor="orange">
                    {lang === "pt" ? "Desenvolvimento de interfaces modernas e manutenção de aplicações Frontend." :
                      "Development of modern interfaces and maintenance of frontend applications."}
                  </ListItem>
                  <ListItem dotColor="orange">
                    {lang === "pt" ? "Configuração e manutenção de redes e servidores." :
                      "Network and server setup and maintenance."}
                  </ListItem>
  
                  <BodyText fontWeight="bold" style={{ marginTop: "10px" }}>
                    Jomani | Corretora de Seguros - {lang === "pt" ? "Auxiliar de TI" : "IT Assistant"} (Aug 2020 - Mar 2023)
                  </BodyText>
                  <ListItem dotColor="orange">
                    {lang === "pt" ? "Suporte técnico, configuração e manutenção de infraestrutura de TI." :
                      "Tech support, setup and maintenance of IT infrastructure."}
                  </ListItem>
                  <ListItem dotColor="orange">
                    {lang === "pt" ? "Administração de redes e segurança da informação." :
                      "Network administration and information security."}
                  </ListItem>
                  <ListItem dotColor="orange">
                    {lang === "pt" ? "Atendimento e resolução de chamados internos." :
                      "Handling and resolving internal support tickets."}
                  </ListItem>
                </ResumeCard>
              </Grid>
  
              {/* Certificações */}
              <Grid item xs={12} md={6}>
                <ResumeCard style={{ minHeight: "290px", overflowY: "auto" }}>
                  <Title>{certificationsTitle}</Title>
                  <ListItem dotColor="purple">{lang === "pt" ? "Arquitetura de Redes" : "Network Architecture"}</ListItem>
                  <ListItem dotColor="purple">{lang === "pt" ? "Proxmox + Hyper-V Server" : "Proxmox + Hyper-V Server"}</ListItem>
                  <ListItem dotColor="purple">{lang === "pt" ? "Desenvolvimento Web Compacto e Completo" : "Complete Web Development"}</ListItem>
                  <ListItem dotColor="purple">{lang === "pt" ? "Git: Básico ao Avançado" : "Git: Beginner to Advanced"}</ListItem>
                  <ListItem dotColor="purple">{lang === "pt" ? "Fundamentos de Programação" : "Programming Fundamentals"}</ListItem>
                </ResumeCard>
              </Grid>
  
              {/* Formação Acadêmica */}
              <Grid item xs={12}>
                <ResumeCard height="auto">
                  <Title>{educationTitle}</Title>
                  <Grid container spacing={2}>
                    <Grid item xs={12} md={6}>
                      <BodyText fontWeight="bold">
                        {lang === "pt" ? "Análise e Desenvolvimento de Sistemas" : "Systems Analysis and Development"}
                      </BodyText>
                      <BodyText variant="body2">Universidade do Sul de Santa Catarina (2024 - 2025)</BodyText>
                    </Grid>
  
                    <Grid item xs={12} md={6}>
                      <BodyText fontWeight="bold">Dev Full-Stack Jr</BodyText>
                      <BodyText variant="body2">SENAI/SC (Jul 2024 - May 2025)</BodyText>
                    </Grid>
  
                    <Grid item xs={12} md={6}>
                      <BodyText fontWeight="bold">
                        {lang === "pt" ? "Gestão de Tecnologia da Informação" : "IT Management"}
                      </BodyText>
                      <BodyText variant="body2">Univates (2020 - 2022)</BodyText>
                    </Grid>
  
                    <Grid item xs={12} md={6}>
                      <BodyText fontWeight="bold">
                        {lang === "pt" ? "Ensino Médio Completo" : "High School Diploma"}
                      </BodyText>
                      <BodyText variant="body2">IECEG (2017 - 2019)</BodyText>
                    </Grid>
                  </Grid>
                </ResumeCard>
              </Grid>
            </Grid>
          </motion.div>
        </AnimatePresence>
      </ResumeContainer>
    );
  }