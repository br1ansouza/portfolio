import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import styled, { keyframes } from "styled-components";

type LoadingScreenProps = {
  onLoaded: () => void;
};

const LoadingScreen = ({ onLoaded }: LoadingScreenProps) => {
  const [progress, setProgress] = useState(0);
  const [dots, setDots] = useState(0);
  const totalLoadingTime = 1700;
  const steps = 12;

  useEffect(() => {
    let count = 0;
    const interval = setInterval(() => {
      count += 1;
      setProgress((count / steps) * 100);
      if (count >= steps) {
        clearInterval(interval);
        setTimeout(onLoaded, 600);
      }
    }, totalLoadingTime / steps);
    return () => clearInterval(interval);
  }, [onLoaded]);

  useEffect(() => {
    const dotsInterval = setInterval(() => {
      setDots((prev) => (prev + 1) % 4);
    }, 400);
    return () => clearInterval(dotsInterval);
  }, []);

  const dotString = ".".repeat(dots);

  return (
    <Container
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.6 } }}
    >
      <Content>
        <LoaderContainer>
          <CodeSymbol>
            <LeftBracket>&lt;</LeftBracket>
            <RightBracket>/&gt;</RightBracket>
          </CodeSymbol>
        </LoaderContainer>

        <TitleContainer>
          <Title>
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              Welcome to my <span className="highlight">Portfolio</span>
            </motion.span>
          </Title>

          <Subtitle>
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              <span className="loading">Loading</span>{dotString}
            </motion.span>
          </Subtitle>
        </TitleContainer>

        <ProgressBarContainer>
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
          <ProgressText>{Math.round(progress)}%</ProgressText>
        </ProgressBarContainer>
      </Content>
    </Container>
  );
};

export default LoadingScreen;

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(-10px); }
  to { opacity: 1; transform: translateY(0); }
`;

const gradientAnimation = keyframes`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`;

const bracketAnimLeft = keyframes`
  0%, 100% { transform: translateX(0); opacity: 1; }
  50% { transform: translateX(-8px); opacity: 0.7; }
`;

const bracketAnimRight = keyframes`
  0%, 100% { transform: translateX(0); opacity: 1; }
  50% { transform: translateX(8px); opacity: 0.7; }
`;

const pulseAnimation = keyframes`
  0%, 100% { filter: drop-shadow(0 0 6px rgba(181, 97, 237, 0.6)); }
  50% { filter: drop-shadow(0 0 12px rgba(181, 97, 237, 0.9)); }
`;

const Container = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100%;
  background: linear-gradient(135deg,rgb(23, 19, 26) 0%,rgb(37, 30, 40) 100%);
  color: #ffffff;
  position: relative;
  overflow: hidden;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 2;
  width: 100%;
  max-width: 600px;
  padding: 0 20px;
`;

const LoaderContainer = styled.div`
  margin-bottom: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CodeSymbol = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 5rem;
  font-weight: bold;
  animation: ${pulseAnimation} 2s ease-in-out infinite;
`;

const LeftBracket = styled.span`
  color: #b561ed;
  animation: ${bracketAnimLeft} 2s ease-in-out infinite;
`;

const RightBracket = styled.span`
  color: #b561ed;
  animation: ${bracketAnimRight} 2s ease-in-out infinite;
`;

const TitleContainer = styled.div`
  text-align: center;
  margin-bottom: 40px;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 15px;
  animation: ${fadeIn} 0.8s ease-in-out;
  letter-spacing: 1px;

  .highlight {
    background: linear-gradient(90deg, #673AB7,rgb(176, 3, 244));
    background-size: 200% auto;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    animation: ${gradientAnimation} 5s linear infinite;
  }
`;

const Subtitle = styled.p`
  font-size: 1.2rem;
  margin-top: 5px;
  color: #b8c6db;
  animation: ${fadeIn} 1.2s ease-in-out;

  .loading {
    font-weight: 500;
    letter-spacing: 0.5px;
  }
`;

const ProgressBarContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ProgressBar = styled.div`
  width: 300px;
  height: 6px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 10px;
  overflow: hidden;
  animation: ${fadeIn} 1.4s ease-in-out;

  .progress {
    height: 100%;
    background: linear-gradient(90deg, #673AB7,rgb(219, 154, 245));
    border-radius: 10px;
    box-shadow: 0 0 15px rgba(103, 58, 183, 0.5);
  }
`;

const ProgressText = styled.div`
  font-size: 0.9rem;
  color: #b8c6db;
  margin-top: 10px;
  font-weight: 500;
`;
