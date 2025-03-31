import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import styled, { keyframes } from "styled-components";

type LoadingScreenProps = {
  onLoaded: () => void;
};

const LoadingScreen = ({ onLoaded }: LoadingScreenProps) => {
  const [progress, setProgress] = useState(0);
  const totalLoadingTime = 1600;
  const steps = 10;

  useEffect(() => {
    let count = 0;
    const interval = setInterval(() => {
      count += 1;
      setProgress((count / steps) * 100);

      if (count >= steps) {
        clearInterval(interval);
        setTimeout(onLoaded, 500);
      }
    }, totalLoadingTime / steps);

    return () => clearInterval(interval);
  }, [onLoaded]);

  return (
    <Container
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.5 } }}
    >
      <AnimatedIcon
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
      >
        ⚡
      </AnimatedIcon>

      <Title>
        Welcome to <span className="highlight">My Portfolio</span>
      </Title>

      <Subtitle>
        <span className="loading">Loading</span>{" "}
        <span className="creative">Creative</span> Experience...
      </Subtitle>

      <ProgressBar
        role="progressbar"
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={progress}
      >
        <motion.div
          className="progress"
          initial={{ width: "0%" }}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 0.2, ease: "easeInOut" }}
        />
      </ProgressBar>
    </Container>
  );
};

export default LoadingScreen;

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(-10px); }
  to { opacity: 1; transform: translateY(0); }
`;

const Container = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background: #1a1c1e;
  color: #e3eced;
  text-align: center;
`;

const gradientAnimation = keyframes`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`;

export const AnimatedIcon = styled(motion.div)`
  margin-bottom: 30px;
  font-size: 3rem;
  font-family: 'Poppins', sans-serif;
  background: linear-gradient(90deg, #ff0080, #00bfff, #ff0080);
  background-size: 200% auto;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: ${gradientAnimation} 4s linear infinite;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  font-weight: bold;
  margin-bottom: 20px;
  animation: ${fadeIn} 0.8s ease-in-out;

  .highlight {
    color: #9dbcbc;
    font-style: italic;
  }
`;

const Subtitle = styled.p`
  font-size: 1.2rem;
  margin-bottom: 15px;
  color: #9aa2a9;
  animation: ${fadeIn} 1.2s ease-in-out;

  .loading {
    color:rgb(184, 94, 244);
    font-weight: bold;
  }

  .creative {
    color: #9dbcbc;
    font-style: italic;
  }
`;

const ProgressBar = styled.div`
  width: 250px;
  height: 6px;
  background: #2c2f33;
  border-radius: 10px;
  overflow: hidden;
  margin-top: 15px;
  animation: ${fadeIn} 1.4s ease-in-out;

  .progress {
    height: 100%;
    background: linear-gradient(90deg,rgb(171, 157, 188),rgb(214, 94, 244));
    box-shadow: 0px 0px 8px rgba(176, 157, 188, 0.5);
    border-radius: 10px;
  }
`;
