import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import PUNJABDESHER from '../assets/PUNJABDESHER.png';
import bhojpuribackground from '../assets/bhojpuribackground.png';

import punjabimage from '../assets/punjabimage.png';
import punjabowner_1 from '../assets/punjabowner_1.png';
import punjabowner_2 from '../assets/punjabowner_2.png';
import punjanbrand_1 from '../assets/punjanbrand_1.png';
import punjanbrand_2 from '../assets/punjanbrand_2.png';
import THETEAM from '../assets/THETEAM.png';
import punjab_1 from '../assets/punjab_1.jpg';
import punjab_2 from '../assets/punjab_2.jpg';
import punjab_3 from '../assets/punjab_3.jpg';
import punjab_4 from '../assets/punjab_4.jpg';
import punjab_5 from '../assets/punjab_5.jpg';
import punjab_6 from '../assets/punjab_6.jpg';
import punjab_7 from '../assets/punjab_7.jpg';
import punjab_8 from '../assets/punjab_8.jpg';
import punjab_9 from '../assets/punjab_9.jpg';
import punjab_10 from '../assets/punjab_10.jpg';
import punjab_11 from '../assets/punjab_11.jpg';
import punjab_12 from '../assets/punjab_12.jpg';
import punjab_13 from '../assets/punjab_13.jpg';
import punjab_14 from '../assets/punjab_14.jpg';
import punjab_15 from '../assets/punjab_15.jpg';
import punjabteambackgroud from '../assets/punjabteambackgroud.png';
import punjabheadingimage from '../assets/punjabheadingimage.png';

const TitleSection = styled.div`
  text-align: center;
  padding: 40px 20px;
  
  .title-img {
    max-width: 600px;
    width: 90%;
    margin: 0 auto 30px;
  }

  .description-img {
    max-width: 800px;
    width: 90%;
    margin: 0 auto;
  }

  @media (max-width: 768px) {
    .title-img {
      max-width: 350px !important;
    }
  }
`;

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
  text-align: center;
`;

const TeamPhoto = styled.div`
  max-width: 1000px;
  margin: 40px auto;
  padding: 0 20px;

  img {
    width: 100%;
    border-radius: 20px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
`;

const ManagementSection = styled.div`
  background: linear-gradient(90deg, #4F378B 0%, #D51256 100%);
  padding: 40px 20px;
`;

const Categories = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;
`;

const CategoryBlock = styled.div`
  h2 {
    color: white;
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 20px;
    text-align: center;
  }
`;

const ProfileGrid = styled.div`
  display: flex;
  justify-content: center;
  gap: 30px;
`;

const ProfileCard = styled(motion.div)`
  text-align: center;

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
  }
`;

const TeamSection = styled.div`
  max-width: 1200px;
  margin: 40px auto;
  padding: 40px 20px;
  background: url(${punjabteambackgroud}) no-repeat center;
  background-size: contain;
`;

const TeamTitle = styled.div`
  text-align: center;
  margin-bottom: 40px;
  
  img {
    max-width: 300px;
    margin: 0 auto;
  }
`;

const TeamGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 20px;
  position: relative;
  z-index: 2;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
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

const Punjab = () => {
  const [visiblePlayers, setVisiblePlayers] = useState(10);

  const teamMembers = [
    { img: punjab_1, name: "Amit Bhalla", role: "All Rounder" },
    { img: punjab_2, name: "Anuj", role: "All Rounder" },
    { img: punjab_3, name: "Sonu Sood", role: "CAPTAIN" },
    { img: punjab_4, name: "Apar Shakti Khurana", role: "All Rounder" },
    { img: punjab_5, name: "Babbal Rai", role: "All Rounder" },
    { img: punjab_6, name: "Binnu Dhillon", role: "All Rounder" },
    { img: punjab_7, name: "Dakssh Ajit Singh", role: "All Rounder" },
    { img: punjab_8, name: "Dev Kharod", role: "All Rounder" },
    { img: punjab_9, name: "Gavie Chahal", role: "All Rounder" },
    { img: punjab_10, name: "Hardy Sandu", role: "All Rounder" },
    { img: punjab_11, name: "Harmeet Singh", role: "All Rounder" },
    { img: punjab_12, name: "Manmeet Singh", role: "All Rounder" },
    { img: punjab_13, name: "Manmeet Singh", role: "All Rounder" },
    { img: punjab_14, name: "Mayur Mehta", role: "All Rounder" },
    { img: punjab_15, name: "Mayur Mehta", role: "All Rounder" },
  ];

  const loadMore = () => {
    setVisiblePlayers(prev => Math.min(prev + 5, teamMembers.length));
  };

  return (
    <TeamContainer>
      <ContentWrapper>
        <TopSection>
           <motion.img 
                          className="title-img"
                          src={PUNJABDESHER}
                          alt="Punjab De Sher"
                          style={{ maxWidth: '600px', width: '100%', margin: '0 auto', display: 'block' }}
                          initial={{ y: 20, opacity: 0 }}
                          animate={{ y: 0, opacity: 1 }}
                          transition={{ duration: 0.6 }}
                        />
                        <motion.img 
                          className="description-img"
                          src={punjabheadingimage}
                          alt="Punjab De Sher Description"
                          style={{margin: '048px auto', display: 'block' }}
                          initial={{ y: 20, opacity: 0 }}
                          animate={{ y: 0, opacity: 1 }}
                          transition={{ duration: 0.6, delay: 0.2 }}
                        />
         
          <TeamPhoto>
            <img src={punjabimage} alt="Punjab De Sher Team" />
          </TeamPhoto>
        </TopSection>

        <ManagementSection>
          <Categories>
            <CategoryBlock>
              <h2>TEAM OWNERS</h2>
              <ProfileGrid>
                <ProfileCard>
                  <img src={punjabowner_1} alt="Mr. Navraj Hans" />
                  <h3>Mr. Navraj Hans</h3>
                </ProfileCard>
                <ProfileCard>
                  <img src={punjabowner_2} alt="Mr. Puneet Singh" />
                  <h3>Mr. Puneet Singh</h3>
                </ProfileCard>
              </ProfileGrid>
            </CategoryBlock>

            <CategoryBlock>
              <h2>BRAND AMBASSADORS</h2>
              <ProfileGrid>
                <ProfileCard>
                  <img src={punjanbrand_1} alt="DALER MEHNDI" />
                  <h3>DALER MEHNDI</h3>
                </ProfileCard>
                <ProfileCard>
                  <img src={punjanbrand_2} alt="MIKA SINGH" />
                  <h3>MIKA SINGH</h3>
                </ProfileCard>
              </ProfileGrid>
            </CategoryBlock>
          </Categories>
        </ManagementSection>

        <TeamSection>
          <TeamTitle>
            <img src={THETEAM} alt="The Team" />
          </TeamTitle>
          <TeamGrid>
            {teamMembers.slice(0, visiblePlayers).map((player, index) => (
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

export default Punjab;