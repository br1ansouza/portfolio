import { Box, Typography } from "@mui/material";
import { useTheme } from "styled-components";
import { FaDiscord, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "../contexts/useLanguage";
import { useState } from "react";

export function Contact() {
  const theme = useTheme();
  const { language } = useLanguage();
  const [hoveredEmoji, setHoveredEmoji] = useState(false);
  
  const messages = {
    pt: {
      title: "Entre em Contato",
      subtitle: "Quer bater um papo? Me envie uma mensagem no LinkedIn ou utilize uma das opções abaixo.",
    },
    en: {
      title: "Get in Touch",
      subtitle: "Want to chat? Send me a message on LinkedIn or use one of the options below.",
    },
  };
  
  const emojiVariants = {
    hover: {
      rotate: [0, -15, 15, -10, 10, 0],
      scale: 1.2,
      transition: {
        duration: 0.8,
        ease: "easeInOut",
        times: [0, 0.2, 0.4, 0.6, 0.8, 1],
      }
    },
    idle: {
      rotate: 0,
      scale: 1,
      transition: {
        duration: 0.5,
      }
    }
  };
  
  const contactItemsVariants = {
    hidden: { opacity: 0 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.15,
        duration: 0.5,
      }
    })
  };
  
  const rocketVariants = {
    animate: {
      y: [0, -15, 0],
      x: [0, 5, 0, -5, 0],
      rotate: [0, 5, 0, -5, 0],
      scale: [1, 1.1, 1],
      transition: {
        duration: 3,
        repeat: Infinity,
        repeatType: "reverse" as const,
        ease: "easeInOut",
      }
    }
  };

  return (
    <Box
      component={motion.div}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      sx={{
        maxWidth: "700px",
        margin: "auto",
        padding: "5rem 1.5rem",
        textAlign: "center",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <motion.div
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.2 }}
      >
        <Typography
          variant="h2"
          fontWeight="bold"
          mb={4}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "12px",
            fontFamily: "'Poppins', sans-serif",
            letterSpacing: "1px",
            color: theme.colors.hover,
          }}
        >
          <motion.div
            variants={emojiVariants}
            animate={hoveredEmoji ? "hover" : "idle"}
            onMouseEnter={() => setHoveredEmoji(true)}
            onMouseLeave={() => setHoveredEmoji(false)}
            style={{ display: "inline-block", cursor: "pointer" }}
          >
            ✉️
          </motion.div>
          <AnimatePresence mode="wait">
            <motion.span
              key={language}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              transition={{ duration: 0.3 }}
            >
              {messages[language as keyof typeof messages].title}
            </motion.span>
          </AnimatePresence>
        </Typography>
      </motion.div>

      <motion.div
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.4 }}
      >
        <Typography
          variant="h5"
          color={theme.colors.textSecondary}
          fontWeight="300"
          mb={5}
          sx={{ fontFamily: "'Inter', sans-serif", lineHeight: "1.6", display: "flex", alignItems: "center", justifyContent: "center", gap: "10px" }}
        >
          {messages[language as keyof typeof messages].subtitle}
          <motion.span
            style={{ display: "inline-block", fontSize: "1.8rem" }}
            variants={rocketVariants}
            animate="animate"
          >
            🚀
          </motion.span>
        </Typography>
      </motion.div>

      <Box sx={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
        {[
          { href: "mailto:briandesouza1597@gmail.com", icon: <FaEnvelope size={26} />, text: "briandesouza1597@gmail.com" },
          { href: "https://www.linkedin.com/in/brian-souza/", icon: <FaLinkedin size={26} />, text: "linkedin.com/in/brian-souza" },
          { href: "https://discord.com/users/br1ansouza", icon: <FaDiscord size={26} />, text: "br1ansouza" }
        ].map((item, i) => (
          <motion.div
            key={i}
            custom={i}
            initial="hidden"
            animate="visible"
            variants={contactItemsVariants}
          >
            <ContactItem {...item} />
          </motion.div>
        ))}
      </Box>
    </Box>
  );
}

const ContactItem = ({ href, icon, text }: { href: string; icon: React.ReactNode; text: string }) => {
  const theme = useTheme();
  const [isHovered, setIsHovered] = useState(false);

  const iconVariants = {
    initial: { scale: 1, rotate: 0 },
    hover: { scale: 1.3, rotate: 5, transition: { duration: 0.3 } }
  };

  return (
    <Box
      component={motion.a}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={{ 
        scale: 1.05, 
        boxShadow: "0 10px 20px rgba(0,0,0,0.12)", 
        backgroundColor: theme.colors.hover,
        color: theme.colors.textPrimary,
      }}
      transition={{ type: "spring", stiffness: 500, damping: 20 }}
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "12px",
        padding: "1.3rem",
        borderRadius: "14px",
        backgroundColor: theme.colors.cardBackground,
        color: theme.colors.textPrimary,
        textDecoration: "none",
        fontSize: "1.3rem",
        fontWeight: "500",
        boxShadow: "0 4px 14px rgba(0,0,0,0.1)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <motion.span
        variants={iconVariants}
        animate={isHovered ? "hover" : "initial"}
      >
        {icon}
      </motion.span>
      <motion.span
        initial={{ x: 0 }}
        animate={isHovered ? { x: [0, -3, 3, -2, 2, 0] } : { x: 0 }}
        transition={{ duration: 0.4 }}
      >
        {text}
      </motion.span>
      
      {isHovered && (
        <motion.div
          initial={{ opacity: 0, scale: 0, top: "50%", left: "50%" }}
          animate={{ opacity: 1, scale: [0, 1.5, 1] }}
          transition={{ duration: 0.4 }}
          style={{
            position: "absolute",
            width: "150%",
            height: "150%",
            top: "50%",
            left: "50%",
            background: `radial-gradient(circle, ${theme.colors.hover}22 0%, transparent 70%)`,
            transform: "translate(-50%, -50%)",
            zIndex: -1,
          }}
        />
      )}
    </Box>
  );
};