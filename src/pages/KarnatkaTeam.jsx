import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import KARNATAKABULLDOZERS from '../assets/KARNATAKABULLDOZERS.png';
import karnatkateam from '../assets/karnatkateam.png';
import bhojpuribackground from '../assets/bhojpuribackground.png';
import bhojpuribackground_2 from '../assets/bhojpuribackground_2.png';
import THETEAM from '../assets/THETEAM.png'; 
import commanboll from '../assets/commanboll.png';
import karnatakabackground from '../assets/karnatakabackground.png';
import karnatkateowner from '../assets/karnatkateowner.png';
import karnatkateabassadors from '../assets/karnatkateabassadors.png';
import karnatkateabassadors_1 from '../assets/karnatkateabassadors_1.png';
import bhojpuribackground_3 from '../assets/bhojpuribackground_3.png';
import karnatka_1 from '../assets/karnatka_1.jpg';
import karnatka_2 from '../assets/karnatka_2.jpg';
import karnatka_3 from '../assets/karnatka_3.jpg';
import karnatka_4 from '../assets/karnatka_4.jpg';
import karnatka_5 from '../assets/karnatka_5.jpg';
import karnatka_6 from '../assets/karnatka_6.jpg';
import karnatka_7 from '../assets/karnatka_7.jpg';
import karnatka_8 from '../assets/karnatka_8.jpg';
import karnatka_9 from '../assets/karnatka_9.jpg';
import karnatka_10 from '../assets/karnatka_10.jpg';
import karnatka_11 from '../assets/karnatka_11.jpg';
import karnatka_12 from '../assets/karnatka_12.jpg';
import karnatakaheadingimage from '../assets/karnatakaheadingimage.png';

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
    background: url(${bhojpuribackground_3}) no-repeat center;
    background-size: cover;
    opacity: 0.1;
  }
`;

const Categories = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 2fr;
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
  
  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 80%;
    height: 80%;
    transform: translate(-50%, -50%);
    background: url(${karnatakabackground}) no-repeat center;
    background-size: contain;
    opacity: 0.1;
    z-index: 1;
  }
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

const Karnataka = () => {
  const [visiblePlayers, setVisiblePlayers] = useState(10);

  const teamMembers = [
    { img: karnatka_1, name: "Arjun Yogi", role: "All Rounder" },
    { img: karnatka_2, name: "Chandan", role: "All Rounder" },
    { img: karnatka_3, name: "Sudeep Kichcha", role: "CAPTAIN" },
    { img: karnatka_4, name: "Ganesh", role: "All Rounder" },
    { img: karnatka_5, name: " Jayram", role: "All Rounder" },
    { img: karnatka_6, name: "Karan", role: "All Rounder" },
    { img: karnatka_7, name: "Krishna Ganesh", role: "All Rounder" },
    { img: karnatka_8, name: "Nirup", role: "All Rounder" },
    { img: karnatka_9, name: "Padeep", role: "All Rounder" },
    { img: karnatka_10, name: "Prathap", role: "All Rounder" },
    { img: karnatka_11, name: "Rajeev Hanu ", role: "All Rounder" },
    { img: karnatka_12, name: "Suneel", role: "All Rounder" },
  ];

  const loadMore = () => {
    setVisiblePlayers(prev => Math.min(prev + 5, teamMembers.length));
  };

  return (
    <TeamContainer>
      <ContentWrapper>
        <TopSection>
          <motion.img 
            src={KARNATAKABULLDOZERS}
            alt="Karnataka Bulldozers"
            style={{ maxWidth: '600px', width: '100%', margin: '0 auto', display: 'block' }}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
          />
          <Description>
            The Karnataka Bulldozers is a Cricket Franchise of Celebrity Cricket League.The Franchise is owned by Mr. Ashok Kheny with the best of Kannada Film Industry coming together in an exciting match of cricket.
          </Description>
          <TeamPhoto>
            <motion.img 
              src={karnatkateam} 
              alt="Karnataka Bulldozers Team"
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
              <ProfileCard
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
              >
                <img src={karnatkateowner} alt="Mr. Ashok Kheny" />
                <h3>Mr. ASHOK KHENY</h3>
              </ProfileCard>
            </CategoryBlock>

            <CategoryBlock>
              <h2>BRAND AMBASSADORS</h2>
              <BrandAmbassadors>
                <ProfileCard
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  <img src={karnatkateabassadors} alt="Shanvi" />
                  <h3>SHANVI</h3>
                </ProfileCard>
                <ProfileCard
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  <img src={karnatkateabassadors_1} alt="Sapthani Gowda" />
                  <h3>SAPTHANI GOWDA</h3>
                </ProfileCard>
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

export default Karnataka;