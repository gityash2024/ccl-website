import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import background from '../assets/background.png';

const PageContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  background: #ffffff;
`;
const HeroSection = styled.div`
  background: url(${background});
  background-size: cover;
  background-position: center top;
  height: 300px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(180deg, rgba(33, 69, 146, 0.8) 0%, rgba(213, 18, 86, 0.8) 100%);
  }
`;
const HeroTitle = styled(motion.h1)`
  font-size: 48px;
  font-weight: bold;
  color: white;
  text-align: center;
  text-transform: uppercase;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
  position: relative;
  z-index: 2;
  letter-spacing: 2px;
`;

const Wave = styled.div`
  position: absolute;
  bottom: -2px;
  left: 0;
  width: 100%;
  height: 50px;
  background: white;
  clip-path: polygon(0 100%, 0 50%, 50% 80%, 100% 50%, 100% 100%);
`;

const ContentSection = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 40px 20px;
`;

const ScoreboardContainer = styled.div`
  background: white;
  border-radius: 16px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  margin: 20px 0;
`;

const ScoreboardHeader = styled.div`
  background: linear-gradient(90deg, #214592 0%, #4F378B 100%);
  padding: 20px;
  color: white;
  text-align: center;
  
  h2 {
    font-size: 24px;
    font-weight: bold;
    margin: 0;
  }
`;

const IframeWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 800px;
  background: white;
  
  iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: none;
  }
`;

const LoadingOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: white;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;
`;

const LoadingSpinner = styled.div`
  width: 50px;
  height: 50px;
  border: 5px solid #f3f3f3;
  border-top: 5px solid #214592;
  border-radius: 50%;
  animation: spin 1s linear infinite;
  
  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`;

const CCL2025 = () => {
  const [isLoading, setIsLoading] = React.useState(true);

  const handleIframeLoad = () => {
    setIsLoading(false);
  };

  return (
    <PageContainer>
      {/* <HeroSection>
        <HeroTitle
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
        </HeroTitle>
        <Wave />
      </HeroSection> */}

      <ContentSection>
        <ScoreboardContainer>
          {/* <ScoreboardHeader>
            <h2>CCL SEASON 11 - LIVE SCORES</h2>
          </ScoreboardHeader> */}
          <IframeWrapper>
            {isLoading && (
              <LoadingOverlay>
                <LoadingSpinner />
              </LoadingOverlay>
            )}
            <iframe
              src="https://cricheroes.com/tournament/1322253/celebrity-cricket-league-season-11/matches/past-matches?type=m&colorcode=214592"
              title="CCL Tournament Scores"
              onLoad={handleIframeLoad}
            />
          </IframeWrapper>
        </ScoreboardContainer>
      </ContentSection>
    </PageContainer>
  );
};

export default CCL2025;