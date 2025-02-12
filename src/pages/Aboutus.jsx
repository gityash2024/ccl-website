import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import background from '../assets/background.png';
import Aboutus_logo from '../assets/Aboutus.png';
import welcometoccl from '../assets/welcometoccl.png';
import it from '../assets/It.png';
import SEO from '../components/SEO';

const HomeContainer = styled.div`
  width: 100%;
  overflow-x: hidden;
`;

const HeroSection = styled.div`
  position: relative;
  width: 100%;
  height: 500px;
  background: url(${background});
  background-size: cover;
  background-position: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  padding-bottom: 50px;
`;

const HeroTitle = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-bottom: 20px;

  img {
    max-width: 400px;
    width: 100%;
    height: auto;
  }
    @media (max-width: 768px) {
      margin-bottom: 50px;
    }

  
`;

const ContentSection = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 60px 20px;
`;

const WelcomeTitle = styled(motion.div)`
  display: flex;
  justify-content: center;
  margin-bottom: 40px;

  img {
    max-width: 600px;
    width: 100%;
    height: auto;
  }
`;

const StoryContent = styled(motion.div)`
  color: #214592;
  font-size: 18px;
  line-height: 1.8;
  text-align: justify;
  max-width: 900px;
  margin: 0 auto;
  padding: 20px;
  font-family: 'Oswald';
  letter-spacing: 0.5px;

  .intro-image {
    width: 100%;
    max-width: 800px;
    margin: 0 auto 20px;
    display: block;
  }

  p {
    margin-bottom: 20px;
  }
`;

const AboutContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  background-color: #f8f9fa;
`;

const AboutUsPage = () => {
  return (
    <>
      <SEO
        title="About Us - CCL (Celebrity Cricket League 2025)"
        description="Catch the action of the Celebrity Cricket League! Follow live matches, explore player profiles, and discover what makes our league a must-watch event."
      />
    <AboutContainer>
      <HeroSection>
        <HeroTitle>
          <img src={Aboutus_logo} alt="About Us" />
        </HeroTitle>
      </HeroSection>

      <ContentSection>
        <WelcomeTitle
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <img src={welcometoccl} alt="Welcome to CCL" />
        </WelcomeTitle>

        <StoryContent
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <img src={it} alt="CCL Introduction" className="intro-image" />
         
        </StoryContent>
      </ContentSection>
    </AboutContainer>
    </>
  );
};

export default AboutUsPage;