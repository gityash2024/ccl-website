import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import MUMBAIHEROES from '../assets/MUMBAIHEROES.png';
import bhojpuribackground from '../assets/bhojpuribackground.png';
import munbaibackground from '../assets/munbaibackground.png';
import commanboll from '../assets/commanboll.png';
import mumaiowner_1 from '../assets/mumaiowner_1.png';
import mumaiowner_2 from '../assets/mumaiowner_2.png';
import mumaiowner_3 from '../assets/mumaiowner_3.png';
import dummyowner from '../assets/dummyowner.png';
import THETEAM from '../assets/THETEAM.png';
import mumbaiteam from '../assets/mumbaiteam.png';
import mumai_1 from '../assets/mumai_1.jpg';
import mumai_2 from '../assets/mumai_2.jpg';
import mumai_3 from '../assets/mumai_3.jpg';
import mumai_4 from '../assets/mumai_4.jpg';
import mumai_6 from '../assets/mumai_6.jpg';
import mumai_7 from '../assets/mumai_7.jpg';
import mumai_8 from '../assets/mumai_8.jpg';
import mumai_9 from '../assets/mumai_9.jpg';
import mumai_10 from '../assets/mumai_10.jpg';
import mumai_11 from '../assets/mumai_11.jpg';
import mumai_12 from '../assets/mumai_12.jpg';
import mumai_13 from '../assets/mumai_13.jpg';
import mumai_14 from '../assets/mumai_14.jpg';
import mumai_15 from '../assets/mumai_15.jpg';

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

  img {
    width: 100%;
    border-radius: 20px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
`;

const TeamSection = styled.div`
  max-width: 1200px;
  margin: 40px auto;
  text-align: center;
  padding: 0 20px;
`;

const TeamTitle = styled.div`
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

  &::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 100%;
    height: 100%;
    background: url(${mumbaiteam}) no-repeat center;
    background-size: contain;
    transform: translate(-50%, -50%);
    opacity: 0.1;
    pointer-events: none;
    z-index: -1;
  }

  @media (max-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
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

const ManagementSection = styled.div`
  background: linear-gradient(90deg, #4F378B 0%, #D51256 100%);
  padding: 40px 20px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Categories = styled.div`
  max-width: 1200px;
  display: flex;
  justify-content: space-between;
  gap: 40px;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const CategoryBlock = styled.div`
  flex: 1;
  text-align: center;

  h2 {
    color: white;
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 20px;
    text-transform: uppercase;
  }
`;

const BrandAmbassadors = styled.div`
  display: flex;
  gap: 20px;
  justify-content: center;
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

const Mumbai = () => {
  const [visiblePlayers, setVisiblePlayers] = useState(10);

  const teamMembers = [
    { img: mumai_1, name: "Abhilash Chaudhary", role: "All Rounder" },
    { img: mumai_2, name: "Aftab Shivdasani ", role: "All Rounder" },
    { img: mumai_3, name: "Riteish Deshmukh", role: "CAPTAIN" },
    { img: mumai_4, name: "Apoorva Lakhia.", role: "All Rounder" },
    { img: mumai_6, name: "Madhav Deochake", role: "All Rounder" },
    { img: mumai_7, name: "Tomar", role: "Bowler" },
    { img: mumai_8, name: "Raja", role: "All Rounder" },
    { img: mumai_9, name: "Samir", role: "All Rounder" },
    { img: mumai_10, name: "Sandeep Juwatkar", role: "All Rounder" },
    { img: mumai_11, name: "Saqib", role: "All Rounder" },
    { img: mumai_12, name: "Shabbir Aluwalia", role: "All Rounder" },
    { img: mumai_13, name: "Sidhaant", role: "All Rounder" },
    { img: mumai_14, name: "Sohil Khan", role: "All Rounder" },
    { img: mumai_15, name: "Vatsal Sheth", role: "All Rounder"},
  ];

  const loadMore = () => {
    setVisiblePlayers(prev => Math.min(prev + 5, teamMembers.length));
  };

  return (
    <TeamContainer>
      <ContentWrapper>
        <TopSection>
          <motion.img 
            src={MUMBAIHEROES}
            alt="Mumbai Heroes"
            style={{ maxWidth: '600px', width: '100%', margin: '0 auto', display: 'block' }}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
          />
          <Description>
          The Mumbai Heroes is a Cricket Franchise of Celebrity Cricket League, based in the state of Mumbai. The Franchise is owned by Sohail Khan, Adil Jagmagia and Jordy Patel with the best of Bollywood coming together in an exciting match of cricket.
          </Description>
          <TeamPhoto>
            <img src={munbaibackground} alt="Mumbai Heroes Team" />
          </TeamPhoto>
        </TopSection>

        <ManagementSection>
          <Categories>
            <CategoryBlock>
              <h2>TEAM OWNERS</h2>
              <BrandAmbassadors>
                <ProfileCard>
                  <img src={mumaiowner_1} alt="Sohail Khan" />
                  <h3>Sohail Khan</h3>
                </ProfileCard>
                <ProfileCard>
                  <img src={mumaiowner_2} alt="Adil Jagmagia" />
                  <h3>Adil Jagmagia</h3>
                </ProfileCard>
                <ProfileCard>
                  <img src={mumaiowner_3} alt="Jordy Patel" />
                  <h3>Jordy Patel</h3>
                </ProfileCard>
              </BrandAmbassadors>
            </CategoryBlock>



            <CategoryBlock>
            <h2 style={{ whiteSpace: 'nowrap' }}>BRAND AMBASSADORS</h2>

              <BrandAmbassadors>
                <ProfileCard>
                  <img src={dummyowner} alt="REGINA CASSANDRA" />
                </ProfileCard>
              </BrandAmbassadors>
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

export default Mumbai;