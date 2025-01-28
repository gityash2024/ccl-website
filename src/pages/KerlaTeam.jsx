import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import keralaheadingimage from '../assets/keralaheadingimage.png';
import KERALASTRIKERS from '../assets/KERALA STRIKERS.png';
import keralabackground from '../assets/keralabackground.png';
import bhojpuribackground from '../assets/bhojpuribackground.png';
import kerala from '../assets/kerala.png';
import THETEAM from '../assets/THETEAM.png';
import keralateamowners_1 from '../assets/keralateamowners_1.png';
import keralateamowners_2 from '../assets/keralateamowners_2.png';
import keralateamowners_3 from '../assets/keralateamowners_3.png';
import keralateamowners_4 from '../assets/keralateamowners_4.png';
import keralateamowners_5 from '../assets/keralateamowners_5.png';
import commanboll from '../assets/commanboll.png';
import kerala_7 from '../assets/kerala_7.png';
import kerala_8 from '../assets/kerala_8.png';
import kerala_9 from '../assets/kerala_9.png';
import kerala_10 from '../assets/kerala_10.png';
import kerala_11 from '../assets/kerala_11.png';
import kerala_12 from '../assets/kerala_12.png';
import kerala_13 from '../assets/kerala_13.png';
import kerala_14 from '../assets/kerala_14.png';
import kerala_15 from '../assets/kerala_15.png';
import kerala_16 from '../assets/kerala_16.png';
import kerala_17 from '../assets/kerala_17.png';
import kerala_18 from '../assets/kerala_18.png';
import kerala_19 from '../assets/kerala_18.png';
import kerala_20 from '../assets/kerala_20.png';
import kerala_21 from '../assets/kerala_21.png';
import kerala_22 from '../assets/kerala_22.png';
import kerala_23 from '../assets/kerala_23.png';
import kerala_24 from '../assets/kerala_24.png';
import kerala_25 from '../assets/kerala_25.png';
import kerala_26 from '../assets/kerala_26.png';
import kerala_27 from '../assets/kerala_27.png';

const TeamContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  background: url(${bhojpuribackground}) no-repeat center center;
  background-size: cover;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: rgba(255, 255, 255, 0.9);
    z-index: 1;
  }
`;

const ContentWrapper = styled.div`
  position: relative;
  z-index: 2;
`;

const TopSection = styled.div`
  background: linear-gradient(135deg, #F5F5F5 0%, #E8E8FF 100%);
  padding: 60px 20px;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: -50px;
    left: -50px;
    width: 300px;
    height: 300px;
    background: url(${commanboll}) no-repeat;
    background-size: contain;
    opacity: 0.1;
    transform: rotate(-15deg);
  }
`;

const TeamLogo = styled(motion.img)`
  max-width: 600px;
  width: 90%;
  margin: 0 auto;
  display: block;
`;

const Description = styled.p`
  max-width: 900px;
  margin: 30px auto;
  text-align: center;
  color: #214592;
  font-size: 1.125rem;
  line-height: 1.8;
  padding: 0 20px;
`;

const TeamPhoto = styled.div`
  max-width: 1000px;
  margin: 40px auto;
  padding: 0 20px;
  
  img {
    width: 100%;
    border-radius: 20px;
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12);
    transition: transform 0.3s ease;
    
    &:hover {
      transform: scale(1.02);
    }
  }
`;

const ManagementSection = styled.div`
  background: linear-gradient(135deg, #214592 0%, #4F378B 100%);
  padding: 80px 20px;
`;

const SectionTitle = styled.h2`
  color: white;
  font-size: 2.5rem;
  font-weight: bold;
  text-align: center;
  margin-bottom: 50px;
  text-transform: uppercase;
  letter-spacing: 2px;
  position: relative;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const OwnersGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 30px;
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 20px;

  @media (max-width: 1400px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const OwnerCard = styled(motion.div)`
  text-align: center;
  padding: 20px;
  transition: transform 0.3s ease;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 16px;
  backdrop-filter: blur(8px);

  .image-container {
    width: 240px;
    height: 240px;
    margin: 0 auto 20px;
    overflow: hidden;
    border-radius: 12px;
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s ease;
  }

  h3 {
    color: white;
    font-size: 1.5rem;
    font-weight: bold;
    margin: 0 0 8px;
  }

  p {
    color: rgba(255, 255, 255, 0.9);
    font-size: 1rem;
  }

  &:hover {
    transform: translateY(-5px);
    
    img {
      transform: scale(1.05);
    }
  }

  h3 {
    color: #214592;
    font-size: 1.25rem;
    font-weight: bold;
    margin: 0;
  }

  p {
    color: #666;
    font-size: 0.875rem;
    margin-top: 4px;
  }

  &:hover {
    transform: translateY(-5px);
  }
`;

const TeamSection = styled.div`
  background: linear-gradient(135deg, #F5F5F5 0%, #E8E8FF 100%);
  padding: 80px 20px;
  margin: 0;
`;

const TeamTitle = styled.div`
  text-align: center;
  margin-bottom: 60px;
  
  img {
    max-width: 300px;
    margin: 0 auto;
  }
`;

const TeamGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 40px;
  max-width: 1400px;
  margin: 0 auto;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    inset: 0;
    background: url(${kerala}) no-repeat center;
    background-size: contain;
    opacity: 0.15;
    pointer-events: none;
    z-index: 1;
  }
`;

const PlayerCard = styled(motion.div)`
  background: white;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12);
  transition: transform 0.3s ease;
  position: relative;
  z-index: 2;

  .image-container {
    width: 100%;
    height: 320px;
    position: relative;
    overflow: hidden;

    img {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: transform 0.3s ease;
    }
  }

  .player-info {
    padding: 24px;
    text-align: center;
    background: white;
    border-top: 1px solid rgba(0, 0, 0, 0.05);
  }

  h3 {
    color: #214592;
    font-size: 1.25rem;
    font-weight: bold;
    margin: 0 0 8px;
  }

  p {
    color: #666;
    font-size: 1rem;
    margin: 0;
  }

  &:hover {
    transform: translateY(-8px);

    .image-container img {
      transform: scale(1.08);
    }
  }

  h3 {
    color: #214592;
    font-size: 1.125rem;
    font-weight: bold;
    margin: 0 0 4px;
  }

  p {
    color: #666;
    font-size: 0.875rem;
    margin: 0;
  }
`;

const Kerala = () => {
  const owners = [
    { img: keralateamowners_1, name: "Mohanlal", role: "Owner" },
    { img: keralateamowners_2, name: "Sripriya", role: "Owner" },
    { img: keralateamowners_3, name: "Shaji", role: "Owner" },
    { img: keralateamowners_4, name: "Jaison", role: "Owner" },
    { img: keralateamowners_5, name: "Venkatesh", role: "Owner" }
  ];

  const teamMembers = [
    { img: kerala_7, name: "Asif Ali", role: "All Rounder" },
    { img: kerala_8, name: "Rajeev Pillai", role: "All Rounder/WK" },
    { img: kerala_9, name: "Indrajit Sukumaran", role: "Captain" },
    { img: kerala_10, name: "Unni Mukundan", role: "All Rounder" },
    { img: kerala_11, name: "Arjun Nandakumar", role: "All Rounder" },
    { img: kerala_12, name: "Manikuttan", role: "Bowler" },
    { img: kerala_13, name: "Vijay Yesudas", role: "Batsman" },
    { img: kerala_14, name: "Shafeeq Rahman", role: "All Rounder" },
    { img: kerala_15, name: "Vivek Gopan", role: "All Rounder/WK" },
    { img: kerala_16, name: "Saiju Kurup", role: "All Rounder" },
    { img: kerala_17, name: "Vinu Mohan", role: "Bowler" },
    { img: kerala_18, name: "Nikhil K Menon", role: "All Rounder/WK" },
    { img: kerala_19, name: "Prajod Kalabhavan", role: "Batsman" },
    { img: kerala_20, name: "Antony Pepe", role: "All Rounder" },
    { img: kerala_21, name: "Sanju Sivaram", role: "All Rounder" },
    { img: kerala_22, name: "Siju Wilson", role: "All Rounder" },
    { img: kerala_23, name: "Prashanth Alexander", role: "All Rounder" },
    { img: kerala_24, name: "Kunchacko Boban", role: "All Rounder" },
    { img: kerala_25, name: "Siddharth Menon", role: "All Rounder" },
    { img: kerala_26, name: "Jean Paul Lal", role: "All Rounder" },
  ];  
  return (
    <TeamContainer>
      <ContentWrapper>
        <TopSection>
          <TeamLogo 
            src={KERALASTRIKERS}
            alt="Kerala Strikers"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
          />
          <Description>
            The team Kerala Strikers is owned by Padma Shri Mohanlal, Mr. Rajkumar Sethupathy, 
            Mrs. Sripriya Rajkumar, Mr. PM Shaji and Mr. Jaison. Season 2023, Kerala Strikers 
            will be known as C3 Kerala Strikers.
          </Description>
          <TeamPhoto>
            <img src={keralabackground} alt="Kerala Team" />
          </TeamPhoto>
        </TopSection>

        <ManagementSection>
          <SectionTitle>Team Owners</SectionTitle>
          <OwnersGrid>
            {owners.map((owner, index) => (
              <OwnerCard
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="image-container">
                  <img src={owner.img} alt={owner.name} />
                </div>
                <h3>{owner.name}</h3>
                <p>{owner.role}</p>
              </OwnerCard>
            ))}
          </OwnersGrid>
        </ManagementSection>

        <TeamSection>
          <TeamTitle>
            <img src={THETEAM} alt="The Team" />
          </TeamTitle>
          <TeamGrid>
            {teamMembers.map((player, index) => (
              <PlayerCard
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="image-container">
                  <img src={player.img} alt={player.name} />
                </div>
                <div className="player-info">
                  <h3>{player.name}</h3>
                  <p>{player.role}</p>
                </div>
              </PlayerCard>
            ))}
          </TeamGrid>
        </TeamSection>
      </ContentWrapper>
    </TeamContainer>
  );
};

export default Kerala;

