import { motion } from "framer-motion";
import { Box } from "@mui/material";

const AnimatedBackground = ({ asText = false }: { asText?: boolean }) => {
  return (
    <Box
      component={motion.div}
      initial={{ backgroundPosition: "0% 50%" }}
      animate={{ backgroundPosition: "100% 50%" }}
      transition={{
        duration: 4,
        ease: "linear",
        repeat: Infinity,
      }}
      sx={{
        width: asText ? "auto" : "100%",
        height: asText ? "auto" : "100%",
        background: "linear-gradient(90deg, #ff0080, #00bfff, #ff0080)",
        backgroundSize: "200% auto",
        WebkitBackgroundClip: asText ? "text" : "border-box",
        WebkitTextFillColor: asText ? "transparent" : "inherit",
      }}
    />
  );
};

export default AnimatedBackground;
