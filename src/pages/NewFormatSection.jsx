import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import excitinglogo from '../assets/excitinglogo.png';
import exciting from '../assets/exciting.png';
import INNINGS from '../assets/2INNINGS.png';
import EXCITING from '../assets/EXCITING NEW FORMAT.png';
import theteam from '../assets/theteam.png';
import excitingbackground from '../assets/excitingbackground.png';

const FormatContainer = styled.section`
  background: url(${excitingbackground}) center;
  background-size: cover;
  padding: 40px 20px;
  position: relative;
  min-height: 400px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Logo = styled.img`
  position: absolute;
  top: 20px;
  right: 20px;
  width: 120px;
  height: auto;
`;

const Content = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  color: white;
`;

const Title = styled(motion.h2)`
  font-size: 48px;
  font-weight: bold;
  margin-bottom: 30px;
`;

const InningsText = styled(motion.div)`
  font-size: 36px;
  color: #FFD700;
  font-weight: bold;
  margin-bottom: 30px;
`;

const WinText = styled(motion.div)`
  font-size: 32px;
  max-width: 500px;
  line-height: 1.3;
`;

const NewFormatSection = () => {
  return (
    <FormatContainer>
      <Logo src={excitinglogo} alt="CCL Logo" />
      <Content>
        <Title
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          EXCITING NEW FORMAT!
        </Title>
        <InningsText
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          2 INNINGS OF 10 OVERS EACH.
        </InningsText>
        <WinText
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          THE TEAM WITH THE MOST<br />
          RUNS IN BOTH INNINGS WINS!
        </WinText>
      </Content>
    </FormatContainer>
  );
};

export default NewFormatSection;