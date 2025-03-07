import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import styled, { keyframes } from "styled-components";

const LoadingScreen = ({ onLoaded }: { onLoaded: () => void }) => {
  const [progress, setProgress] = useState(0);
  const totalLoadingTime = 1600;
  const steps = 10;
  const increment = 100 / steps;

  useEffect(() => {
    let count = 0;
    const interval = setInterval(() => {
      count += 1;
      setProgress(count * increment);
      const progressBar = document.getElementById("progress-bar") as HTMLElement & { set: (value: number) => void };
      progressBar?.set(count * increment);
        
      if (count >= steps) {
        clearInterval(interval);
        setTimeout(onLoaded, 500);
      }
    }, totalLoadingTime / steps);
  
    return () => clearInterval(interval);
  }, [onLoaded, increment]);
  

  return (
    <Container
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.5 } }}
    >
      <Title>
        <span>Welcome to</span> <span className="highlight">My Portfolio</span>
      </Title>

      <Subtitle>
        <span className="loading">Loading</span>{" "}
        <span className="creative">Creative</span> <span>Experience</span>
      </Subtitle>
      <ProgressBar>
        <motion.div
          className="progress"
          initial={{ width: "0%" }}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
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
  background: #212224;
  color: #d2e5e9;
  text-align: center;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  font-weight: bold;
  margin-bottom: 20px;
  animation: ${fadeIn} 1s ease-in-out;

  .highlight {
    color: #b561ed;
    font-style: italic;
  }
`;

const Subtitle = styled.p`
  font-size: 1.2rem;
  margin-bottom: 15px;
  color: #b0d69b;
  animation: ${fadeIn} 1.4s ease-in-out;

  .loading {
    color: #ffcc00;
    font-weight: bold;
  }

  .creative {
    color: #b561ed;
    font-style: italic;
  }
`;

const ProgressBar = styled.div`
  width: 250px;
  height: 6px;
  background: #222;
  border-radius: 10px;
  overflow: hidden;
  margin-top: 15px;
  animation: ${fadeIn} 1.6s ease-in-out;

  .progress {
    height: 100%;
    background: linear-gradient(90deg, #b561ed, #ffcc00);
    box-shadow: 0px 0px 8px rgba(181, 97, 237, 0.8);
  }
`;
