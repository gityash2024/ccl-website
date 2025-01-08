import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import background from '../assets/background.png';
import Aboutus from '../assets/Aboutus.png';
import welcometoccl from '../assets/welcometoccl.png';
import it from '../assets/It.png';

const HomeContainer = styled.div`
  width: 100%;
  overflow-x: hidden;
`;

const HeroSection = styled.div`
  position: relative;
  width: 100%;
  height: 600px;
  background: url(${background});
  background-size: cover;
  background-position: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  padding-bottom: 50px;
`;

const HeroTitle = styled(motion.h1)`
  font-size: 48px;
  color: white;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  margin-bottom: 20px;
`;

const ContentSection = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 60px 20px;
`;

const WelcomeTitle = styled(motion.div)`
  text-align: center;
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
  font-family: 'Arial', sans-serif;
  letter-spacing: 0.5px;

  p {
    margin-bottom: 20px;
  }
`;


const AboutContainer = styled.div`
  width: 100%;
  min-height: 100vh;
`;

// const HeroSection = styled.div`
//   width: 100%;
//   height: 500px;
//   background-image: url(${background});
//   background-size: cover;
//   background-position: center;
//   position: relative;
//   display: flex;
//   align-items: center;
//   justify-content: center;
  
//   &::before {
//     content: '';
//     position: absolute;
//     top: 0;
//     left: 0;
//     right: 0;
//     bottom: 0;
//     background: linear-gradient(90deg, 
//       rgba(33, 94, 147, 0.8) 0%, 
//       rgba(155, 89, 182, 0.8) 50%,
//       rgba(142, 68, 173, 0.8) 100%
//     );
//   }
// `;

const HeroContent = styled.div`
  position: relative;
  z-index: 2;
  width: 100%;
  max-width: 1200px;
  padding: 0 20px;
`;

const PageTitle = styled(motion.h1)`
  color: white;
  font-size: 64px;
  font-weight: bold;
  text-align: center;
  text-transform: uppercase;
  letter-spacing: 8px;
`;
const AboutUsPage = () => {
  return (
    <AboutContainer>
    <HeroSection>
        <HeroTitle
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          About us
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
          <p>
            It all started in February 2003 when we organised the first Film Stars T20 Cricket with Telugu Stars even before the first official Twenty20 matches were played on 13 June 2003. Trying to fit in 3 matches in one day brought about the T20 format way ahead of time setting a trend where stars fight the game of cricket with a sportive spirit.
          </p>
          
          <p>
            I had been pondering with the idea of having a Cricket Tournament between Film Stars from different languages for years then finally we arrived with the Celebrity Cricket League (CCL) incorporating the T20 League format in Oct 2010. According to many, the very thought of bringing together 60 artists from 4 different languages was a dream far from reality but it has been possible only because of the passion that the Stars have for Cricket.
          </p>
          
          <p>
            Our major challenge for Season 1 was to put up a show which is no less than any of the successful leagues but within the available resources and time frame. The strength of CCL is the support we derive from the Team Franchisee Owners and Cricket Loving Artists whose commitment towards the game is commendable.
          </p>
          
          <p>
            With the success of Season 1 & 2, we all believe that CCL will only get bigger and better over the years. Just like any Reality TV Show, CCL too will come and go in seasons; it will only be more real; more exciting; and more glamorous.
          </p>
        </StoryContent>
      </ContentSection>
    </AboutContainer>
  );
};

export default AboutUsPage;