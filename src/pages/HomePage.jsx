// src/pages/HomePage.jsx
import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

// Import background images
import background from '../assets/background.png';
import teamcaptains from '../assets/teamcaptains.png';
import cclbackground from '../assets/cclbackground.png';
import CCLWhite from '../assets/CCLWhite.png';

// Import team logos
import bengal from '../assets/bengal.png';
import chennai from '../assets/chennai.png';
import kerala from '../assets/kerala.png';
import mumbai from '../assets/mumbai.png';
import bhojpuri from '../assets/bhojpuri.png';
import karnataka from '../assets/karnataka.png';
import punjab from '../assets/punjab.png';
import telugu from '../assets/telugu.png';

// Import captain images
import Akhil from '../assets/Akhil.png';
import Sudeep from '../assets/Sudeep.png';
import indrajith from '../assets/indrajith.png';
import Sonu from '../assets/Sonu.png';

// Styled Components
const PageContainer = styled.div`
  width: 100%;
  overflow: hidden;
`;

const HeroSection = styled.section`
  position: relative;
  height: 100vh;
  width: 100%;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  padding-bottom: 4rem;
  background-image: url(${background});
  background-size: cover;
  background-position: center;

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(to top, rgba(0,0,0,0.5), transparent);
  }
`;

const SectionContainer = styled.div`
  max-width: 1440px;
  margin: 0 auto;
  padding: 0 1.25rem;
  width: 100%;
  position: relative;
  z-index: 1;

  @media (min-width: 1024px) {
    padding: 0 2.5rem;
  }
`;

const TeamsSection = styled.section`
  background: white;
  padding: 5rem 0;
`;

const SectionTitle = styled.div`
  text-align: center;
  position: relative;
  margin-bottom: 4rem;

  &::before,
  &::after {
    content: '';
    position: absolute;
    top: 50%;
    width: 200px;
    height: 2px;
    background: #214592;
  }

  &::before {
    right: calc(50% + 120px);
  }

  &::after {
    left: calc(50% + 120px);
  }

  h2 {
    font-size: 2.25rem;
    font-weight: bold;
    color: #214592;
  }
`;

const TeamsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
  
  @media (min-width: 768px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

const TeamCard = styled(motion.div)`
  text-align: center;
  padding: 1rem;
  
  img {
    width: 100%;
    max-width: 150px;
    height: auto;
    margin: 0 auto 1rem;
  }
  
  p {
    color: #214592;
    font-weight: 600;
    font-size: 0.875rem;
    
    @media (min-width: 768px) {
      font-size: 1rem;
    }
  }
`;

const CaptainsSection = styled.section`
  background-image: url(${teamcaptains});
  background-size: cover;
  background-position: center;
  padding: 5rem 0;
`;

const CaptainsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 2rem;
  
  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (min-width: 1024px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

const CaptainCard = styled(motion.div)`
  text-align: center;
  
  .image-container {
    position: relative;
    overflow: hidden;
    border-radius: 0.5rem;
    margin-bottom: 1rem;
    
    &::before {
      content: '';
      position: absolute;
      inset: 0;
      background: linear-gradient(to top, rgba(0,0,0,0.5), transparent);
      opacity: 0;
      transition: opacity 0.3s ease;
    }
    
    &:hover::before {
      opacity: 1;
    }
    
    img {
      width: 100%;
      max-width: 200px;
      margin: 0 auto;
      transition: transform 0.3s ease;
    }
    
    &:hover img {
      transform: scale(1.1);
    }
  }
  
  h3 {
    color: white;
    font-weight: bold;
    margin-bottom: 0.25rem;
  }
  
  p {
    color: #cccccc;
    font-size: 0.875rem;
  }
`;

const InfoSection = styled.section`
  position: relative;
  background-image: url(${cclbackground});
  background-size: cover;
  background-position: center;
  padding: 8rem 0;
  text-align: center;
  
  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: rgba(0,0,0,0.4);
  }
`;

const HomePage = () => {
  const teams = [
    { img: bengal, name: 'BENGAL TIGERS' },
    { img: chennai, name: 'CHENNAI RHINOS' },
    { img: kerala, name: 'C3 KERALA STRIKERS' },
    { img: mumbai, name: 'MUMBAI HEROES' },
    { img: bhojpuri, name: 'BHOJPURI DABANGGS' },
    { img: karnataka, name: 'KARNATAKA BULLDOZERS' },
    { img: punjab, name: 'PUNJAB DE SHER' },
    { img: telugu, name: 'TELUGU WARRIORS' }
  ];

  const captains = [
    { img: Akhil, name: 'AKHIL AKKINENI', team: 'TELUGU WARRIORS' },
    { img: Sudeep, name: 'SUDEEP KICHCHA', team: 'KARNATAKA BULLDOZERS' },
    { img: indrajith, name: 'INDRAJITH SUKUMARAN', team: 'C3 KERALA STRIKERS' },
    { img: Sonu, name: 'SONU SOOD', team: 'PUNJAB DE SHER' }
  ];

  return (
    <PageContainer>
      <HeroSection>
        <SectionContainer>
          <motion.h1
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            style={{
              fontSize: '2.5rem',
              fontWeight: 'bold',
              color: 'white',
              textShadow: '2px 2px 4px rgba(0,0,0,0.5)',
              textAlign: 'center',
              position: 'relative'
            }}
          >
            JANUARY 31ST 2025 ONWARDS
          </motion.h1>
        </SectionContainer>
      </HeroSection>

      <TeamsSection>
        <SectionContainer>
          <SectionTitle>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              CCL 2025 TEAMS
            </motion.h2>
          </SectionTitle>

          <TeamsGrid>
            {teams.map((team, index) => (
              <TeamCard
                key={team.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                <img src={team.img} alt={team.name} />
                <p>{team.name}</p>
              </TeamCard>
            ))}
          </TeamsGrid>
        </SectionContainer>
      </TeamsSection>

      <CaptainsSection>
        <SectionContainer>
          <SectionTitle>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              style={{ color: 'white' }}
            >
              TEAM CAPTAINS
            </motion.h2>
          </SectionTitle>

          <CaptainsGrid>
            {captains.map((captain, index) => (
              <CaptainCard
                key={captain.name}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
              >
                <div className="image-container">
                  <img src={captain.img} alt={captain.name} />
                </div>
                <h3>{captain.name}</h3>
                <p>{captain.team}</p>
              </CaptainCard>
            ))}
          </CaptainsGrid>
        </SectionContainer>
      </CaptainsSection>

      <InfoSection>
        <SectionContainer>
          <motion.img
            src={CCLWhite}
            alt="CCL Logo"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            style={{
              width: '200px',
              marginBottom: '2rem',
              position: 'relative'
            }}
          />
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            style={{
              fontSize: '2rem',
              fontWeight: 'bold',
              color: 'white',
              position: 'relative'
            }}
          >
            EVERYTHING YOU NEED TO KNOW
          </motion.h2>
        </SectionContainer>
      </InfoSection>
    </PageContainer>
  );
};

export default HomePage;