import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import background from '../assets/background.png';

const TermsContainer = styled.div`
  min-height: 100vh;
  background: url(${background}) no-repeat center center;
  background-size: cover;
  position: relative;
  padding: 60px 20px;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
      to bottom,
      rgba(33, 69, 146, 0.97),
      rgba(213, 18, 86, 0.97)
    );
    z-index: 1;
  }
`;

const ContentWrapper = styled.div`
  position: relative;
  z-index: 2;
  max-width: 1000px;
  margin: 0 auto;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border-radius: 20px;
  padding: 40px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
`;

const Title = styled(motion.h1)`
  color: white;
  font-size: 42px;
  text-align: center;
  margin-bottom: 40px;
  font-family: 'days-one';
`;

const Section = styled(motion.div)`
  margin-bottom: 30px;
`;

const SectionTitle = styled.h2`
  color: white;
  font-size: 24px;
  margin-bottom: 15px;
  font-weight: bold;
`;

const Text = styled.p`
  color: rgba(255, 255, 255, 0.9);
  font-size: 16px;
  line-height: 1.6;
  margin-bottom: 15px;
`;

const List = styled.ul`
  color: rgba(255, 255, 255, 0.9);
  margin-left: 20px;
  margin-bottom: 15px;

  li {
    margin-bottom: 10px;
    line-height: 1.6;
  }
`;

const LastUpdated = styled.p`
  color: rgba(255, 255, 255, 0.7);
  font-size: 14px;
  text-align: center;
  margin-top: 40px;
  font-style: italic;
`;

const Termsandcondition = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <TermsContainer>
      <ContentWrapper>
        <Title
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Terms and Conditions
        </Title>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <Section variants={itemVariants}>
            <SectionTitle>1. Acceptance of Terms</SectionTitle>
            <Text>
              By accessing and participating in the Celebrity Cricket League (CCL), you agree to be bound by these Terms and Conditions. These terms apply to all users, participants, and visitors of CCL events and digital platforms.
            </Text>
          </Section>

          <Section variants={itemVariants}>
            <SectionTitle>2. Event Participation</SectionTitle>
            <Text>
              Participation in CCL events is subject to the following conditions:
            </Text>
            <List>
              <li>All participants must adhere to official CCL rules and regulations</li>
              <li>Team registration must be completed through official channels</li>
              <li>Players must meet eligibility requirements as specified by CCL management</li>
              <li>Teams must maintain professional conduct during all CCL events</li>
            </List>
          </Section>

          <Section variants={itemVariants}>
            <SectionTitle>3. Broadcast and Media Rights</SectionTitle>
            <Text>
              CCL retains exclusive rights to all match broadcasts, recordings, and media content. Any unauthorized reproduction or distribution is strictly prohibited. Media coverage must be pre-approved by CCL management.
            </Text>
          </Section>

          <Section variants={itemVariants}>
            <SectionTitle>4. Code of Conduct</SectionTitle>
            <Text>
              All participants, including players, team officials, and support staff, must:
            </Text>
            <List>
              <li>Maintain professional behavior during matches and events</li>
              <li>Respect decisions made by match officials</li>
              <li>Avoid any form of discrimination or harassment</li>
              <li>Comply with anti-doping regulations</li>
            </List>
          </Section>

          <Section variants={itemVariants}>
            <SectionTitle>5. Safety and Security</SectionTitle>
            <Text>
              CCL prioritizes the safety of all participants and spectators. We implement comprehensive security measures at all venues and expect full cooperation from all attendees in following safety protocols.
            </Text>
          </Section>

          <Section variants={itemVariants}>
            <SectionTitle>6. Intellectual Property</SectionTitle>
            <Text>
              The CCL name, logo, and all related materials are protected intellectual property. Use of CCL branding requires written permission from management. Unauthorized use may result in legal action.
            </Text>
          </Section>

          <Section variants={itemVariants}>
            <SectionTitle>7. Privacy Policy</SectionTitle>
            <Text>
              CCL respects user privacy and handles personal information in accordance with our Privacy Policy. Data collected is used solely for CCL-related purposes and protected as per applicable laws.
            </Text>
          </Section>

          <Section variants={itemVariants}>
            <SectionTitle>8. Modifications</SectionTitle>
            <Text>
              CCL reserves the right to modify these terms and conditions at any time. Users will be notified of significant changes, and continued participation constitutes acceptance of modified terms.
            </Text>
          </Section>

          <LastUpdated variants={itemVariants}>
            Last Updated: January 28, 2025
          </LastUpdated>
        </motion.div>
      </ContentWrapper>
    </TermsContainer>
  );
};

export default Termsandcondition;