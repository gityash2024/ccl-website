import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import KERALASTRIKERS from '../assets/KERALA STRIKERS.png';
import keralabackground from '../assets/keralabackground.png';
import bhojpuribackground from '../assets/bhojpuribackground.png';
import THETEAM from '../assets/THETEAM.png';
import commanboll from '../assets/commanboll.png';
import keralateamowners_1 from '../assets/keralateamowners_1.png';
import keralateamowners_2 from '../assets/keralateamowners_2.png';
import keralateamowners_3 from '../assets/keralateamowners_3.png';
import keralateamowners_4 from '../assets/keralateamowners_4.png';
import keralateamowners_5 from '../assets/keralateamowners_5.png';
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
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(255, 255, 255, 0.9);
    z-index: 1;
  }
`;

const ContentWrapper = styled.div`
  position: relative;
  z-index: 2;
`;

const TopSection = styled.div`
  background: #F5F5F5;
  padding: 40px 20px;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 200px;
    height: 200px;
    background: url(${commanboll}) no-repeat;
    background-size: contain;
    opacity: 0.1;
  }
`;

const Description = styled.p`
  max-width: 1000px;
  margin: 30px auto;
  text-align: center;
  color: #214592;
  font-size: 18px;
  line-height: 1.6;
  padding: 0 20px;
`;

const TeamPhoto = styled.div`
  max-width: 1000px;
  margin: 40px auto;
  padding: 0 20px;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 75%;
    border-radius: 20px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
`;

const ManagementSection = styled.div`
  background: linear-gradient(90deg, #4F378B 0%, #D51256 100%);
  padding: 60px 20px;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: url(${bhojpuribackground}) no-repeat center;
    background-size: cover;
    opacity: 0.1;
  }
`;

const Categories = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  // grid-template-columns: 1fr 2fr;
  gap: 40px;
  position: relative;
  z-index: 2;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const CategoryBlock = styled.div`
  h2 {
    color: white;
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 20px;
    text-transform: uppercase;
    text-align: center;
  }
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const BrandAmbassadors = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  flex-wrap: nowrap;
`;

const ProfileCard = styled(motion.div)`
  img {
    width: 180px;
    height: 180px;
    border-radius: 10px;
    margin-bottom: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }

  h3 {
    color: white;
    font-size: 16px;
    font-weight: bold;
    text-align: center;
  }
`;

const TeamSection = styled.div`
  padding: 60px 20px;
  background: white;
  position: relative;
`;

const TeamTitle = styled.div`
  text-align: center;
  margin-bottom: 60px;
  position: relative;
  z-index: 2;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    max-width: 300px;
    width: 90%;
  }
`;

const TeamGrid = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 20px;
  position: relative;
  z-index: 2;

  @media (max-width: 1200px) {
    grid-template-columns: repeat(4, 1fr);
    gap: 20px;
  }

  @media (max-width: 992px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 480px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 15px;
  }
`;

const PlayerCard = styled(motion.div)`
  background: white;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
  max-width: 280px;
  margin: 0 auto;
  width: 100%;

  &:hover {
    transform: translateY(-5px);
  }

  .image-container {
    width: 100%;
    padding-top: 100%;
    position: relative;
    overflow: hidden;

    img {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 125%;
      object-fit: cover;
      transition: transform 0.3s ease;
    }
  }

  &:hover .image-container img {
    transform: scale(1.05);
  }

  .info-container {
    padding: 15px;
    text-align: center;
    background: linear-gradient(to right, #4F378B, #D51256);
  }

  h3 {
    color: white;
    font-size: 16px;
    margin: 0 0 5px;
    font-weight: bold;
    font-family: 'days-one';
  }

  p {
    color: rgba(255, 255, 255, 0.9);
    font-size: 14px;
    margin: 0;
    font-family: 'days-one';
  }
`;

const LoadMoreButton = styled.button`
  background: linear-gradient(to right, #4F378B, #D51256);
  color: white;
  border: none;
  padding: 12px 24px;
  border-radius: 8px;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  margin: 40px auto 0;
  display: block;
  position: relative;
  z-index: 10;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    background: linear-gradient(to right, #5F479B, #E51266);
    box-shadow: 0 4px 15px rgba(79, 55, 139, 0.4);
  }

  &:active {
    transform: translateY(0);
  }
`;

const Kerala = () => {
  const [visiblePlayers, setVisiblePlayers] = useState(10);

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

  const loadMore = () => {
    setVisiblePlayers(prev => Math.min(prev + 5, teamMembers.length));
  };

  return (
    <TeamContainer>
      <ContentWrapper>
        <TopSection>
          <motion.img 
            src={KERALASTRIKERS}
            alt="Kerala Strikers"
            style={{ maxWidth: '600px', width: '100%', margin: '0 auto', display: 'block' }}
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
            <motion.img 
              src={keralabackground} 
              alt="Kerala Team"
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8 }}
            />
          </TeamPhoto>
        </TopSection>

        <ManagementSection>
  <Categories>
    <CategoryBlock>
      <h2>TEAM OWNERS</h2>
      <BrandAmbassadors>
        {owners.map((owner, index) => (
          <ProfileCard
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <img src={owner.img} alt={owner.name} />
            <h3>{owner.name}</h3>
          </ProfileCard>
        ))}
      </BrandAmbassadors>
    </CategoryBlock>
  </Categories>
</ManagementSection>
        <TeamSection>
          <TeamTitle>
            <motion.img 
              src={THETEAM}
              alt="The Team"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
            />
          </TeamTitle>

          <TeamGrid>
            {teamMembers.slice(0, visiblePlayers).map((player, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <PlayerCard>
                  <div className="image-container">
                    <img src={player.img} alt={player.name} />
                  </div>
                  <div className="info-container">
                    <h3>{player.name}</h3>
                    <p>{player.role}</p>
                  </div>
                </PlayerCard>
              </motion.div>
            ))}
          </TeamGrid>
          {visiblePlayers < teamMembers.length && (
            <LoadMoreButton onClick={loadMore}>
              Load More Players
            </LoadMoreButton>
          )}
        </TeamSection>
      </ContentWrapper>
    </TeamContainer>
  );
};

export default Kerala;