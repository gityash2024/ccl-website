
import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import background from '../assets/background.png';
import bengal from '../assets/bengal.png';
import chennai from '../assets/chennai.png';
import kerala from '../assets/kerala.png';
import mumbai from '../assets/mumbai.png';
import bhojpuri from '../assets/bhojpuri.png';
import karnataka from '../assets/karnataka.png';
import punjab from '../assets/punjab.png';
import telugu from '../assets/telugu.png';
import PngItem from '../assets/PngItem.png';
import teamcaptains from '../assets/teamcaptains.png';
import Akhil from '../assets/Akhil.png';
import Sudeep from '../assets/Sudeep.png';
import indrajith from '../assets/indrajith.png';
import Sonu from '../assets/Sonu.png';
import cclbackground from '../assets/cclbackground.png';
import ccl from '../assets/ccl.png';
import CCLWhite from '../assets/CCLWhite.png';
import 'swiper/css';
import 'swiper/css/navigation';

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

const TeamsContainer = styled.div`
  padding: 50px 20px;
  background: white;
`;

const TeamsTitle = styled.div`
  text-align: center;
  position: relative;
  margin-bottom: 50px;

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
    color: #214592;
    font-size: 36px;
    font-weight: bold;
  }
`;

const TeamsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 30px;
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const TeamCard = styled(motion.div)`
  text-align: center;

  img {
    width: 100%;
    max-width: 150px;
    height: auto;
    margin-bottom: 15px;
  }

  p {
    color: #214592;
    font-weight: 600;
    font-size: 14px;
  }
`;

const CaptainsSection = styled.div`
  background: url(${teamcaptains});
  background-size: cover;
  padding: 50px 20px;
  margin-top: 50px;
`;

const CaptainsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  max-width: 1200px;
  margin: 0 auto;
  
  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const CaptainCard = styled(motion.div)`
  text-align: center;
  
  img {
    width: 100%;
    max-width: 200px;
    border-radius: 10px;
    margin-bottom: 15px;
  }

  h3 {
    color: white;
    font-weight: bold;
    margin-bottom: 5px;
  }

  p {
    color: #cccccc;
    font-size: 14px;
  }
`;

const InfoSection = styled.div`
  background: url(${cclbackground});
  background-size: cover;
  padding: 100px 20px;
  text-align: center;
  
  img {
    max-width: 300px;
    margin-bottom: 30px;
  }

  h2 {
    color: white;
    font-size: 36px;
    font-weight: bold;
  }
`;

const SchedulePage = () => {
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
    <HomeContainer>
      <HeroSection>
        <HeroTitle
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          JANUARY 31ST 2025 ONWARDS
        </HeroTitle>
      </HeroSection>

      <TeamsContainer>
        <TeamsTitle>
          <h2>CCL 2025 TEAMS</h2>
        </TeamsTitle>

        <TeamsGrid>
          {teams.map((team, index) => (
            <TeamCard
              key={team.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
            >
              <img src={team.img} alt={team.name} />
              <p>{team.name}</p>
            </TeamCard>
          ))}
        </TeamsGrid>
      </TeamsContainer>

      <CaptainsSection>
        <TeamsTitle>
          <h2>TEAM CAPTAINS</h2>
        </TeamsTitle>

        <CaptainsGrid>
          {captains.map((captain, index) => (
            <CaptainCard
              key={captain.name}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.2 }}
            >
              <img src={captain.img} alt={captain.name} />
              <h3>{captain.name}</h3>
              <p>{captain.team}</p>
            </CaptainCard>
          ))}
        </CaptainsGrid>
      </CaptainsSection>

      <InfoSection>
        <motion.img
          src={CCLWhite}
          alt="CCL Logo"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        />
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          EVERYTHING YOU NEED TO KNOW
        </motion.h2>
      </InfoSection>
    </HomeContainer>
  );
};

export default SchedulePage;