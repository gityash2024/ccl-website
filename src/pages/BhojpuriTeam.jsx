import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import bhojpuriparagraphheading from '../assets/bhojpuriparagraphheading.png';
import BHOJPURIDABANGGS from '../assets/BHOJPURIDABANGGS.png';
import bhojpuribackground from '../assets/bhojpuribackground.png';
import bhojpuribackground_2 from '../assets/bhojpuribackground_2.png';
import bhojuripimage from '../assets/bhojuripimage.png';
import owners_1 from '../assets/owners_1.png';
import owners_2 from '../assets/owners_2.png';
import owners_3 from '../assets/owners_3.png';
import owners_4 from '../assets/owners_4.png';
import teamAB from '../assets/teamAB.png';
import THETEAM from '../assets/THETEAM.png';
import bhojpuri_1 from '../assets/bhojpuri_1.jpg';
import bhojpuri_2 from '../assets/bhojpuri_2.jpg';
import bhojpuri_3 from '../assets/bhojpuri_3.jpg';
import bhojpuribackground_3 from '../assets/bhojpuribackground_3.png';
import bhopuribackground from '../assets/bhopuribackground.png';
import commanboll from '../assets/commanboll.png';
import bhojpuri_4 from '../assets/bhojpuri_4.jpg';
import bhojpuri_5 from '../assets/bhojpuri_5.jpg';
import bhojpuri_6 from '../assets/bhojpuri_6.jpg';
import bhojpuri_7 from '../assets/bhojpuri_7.jpg';
import bhojpuri_8 from '../assets/bhojpuri_8.jpg';
import bhojpuri_9 from '../assets/bhojpuri_9.jpg';
import bhojpuri_10 from '../assets/bhojpuri_10.jpg';
import bhojpuri_11 from '../assets/bhojpuri_11.jpg';
import KanishkSheel from '../assets/KanishkSheel.png';
import RahulMishra from '../assets/RahulMishra.png';
import sushilmalik from '../assets/sushilmalik.png';
import SushilSharma from '../assets/SushilSharma.png';
import SEO from '../components/SEO';

const TeamContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  background: url(${bhojpuribackground}) no-repeat center top fixed;
  background-size: cover;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(180deg, rgba(255, 255, 255, 0.95) 0%, rgba(255, 255, 255, 0.9) 50%, rgba(255, 255, 255, 0.95) 100%);
    z-index: 1;
  }
`;

const ContentWrapper = styled.div`
  position: relative;
  z-index: 2;
`;

const TitleSection = styled.div`
  text-align: center;
  padding: 40px 20px;
  background: url(${bhojpuribackground_2}) no-repeat center;
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
  
  .title-img {
    max-width: 600px;
    width: 90%;
    margin: 0 auto 30px;
    position: relative;
    z-index: 2;
  }

  .description-img {
    max-width: 800px;
    width: 90%;
    margin: 0 auto;
    position: relative;
    z-index: 2;
  }
`;

const TeamPhoto = styled.div`
  max-width: 1200px;
  margin: 40px auto;
  padding: 0 20px;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 75%;
    border-radius: 20px;
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
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

const TeamSection = styled.div`
  padding: 60px 20px;
  background: url(${bhopuribackground}) no-repeat center;
  background-size: cover;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(255, 255, 255, 0.95);
    z-index: 1;
  }

  > * {
    position: relative;
    z-index: 2;
  }
`;


const CategoryTitle = styled.h2`
  color: white;
  text-align: center;
  font-size: 32px;
  margin-bottom: 40px;
  text-transform: uppercase;
  font-weight: bold;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
  position: relative;
  z-index: 2;
`;

const TeamHeader = styled.div`
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

const ProfileCard = styled(motion.div)`
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
      height: 140%;
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

const ManagementCard = styled(ProfileCard)`
  max-width: 220px;
  
  .image-container {
    padding-top: 100%;
  }

  h3 {
    color: #4F378B;
    padding: 15px;
    background: white;
    font-size: 14px;
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

const ManagementGrid = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  position: relative;
  z-index: 2;

  @media (max-width: 1200px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 480px) {
    grid-template-columns: repeat(2, 1fr);
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
const Bhojpuri = () => {
  const [visiblePlayers, setVisiblePlayers] = useState(10);

  const management = [
    { img: KanishkSheel, name: "Kanishk Sheel", role: "OWNER" },
    { img: RahulMishra, name: "Rahul Mishra", role: "OWNER" },
    { img: sushilmalik, name: "sushil Malik", role: "OWNER" },
    { img: SushilSharma, name: "Sushil Sharma", role: "OWNER" },
    // { img: teamAB, name: "REGINA CASSANDRA", role: "BRAND AMBASSADOR" }
  ];

  const teamMembers = [
    { img: bhojpuri_1, name: 'Vikranh', role: "All Rounder" },
    { img: bhojpuri_2, name: 'Vaibhav', role: "All Rounder" },
    { img: bhojpuri_3, name: 'Manoj Tiwari', role: "CAPTAIN" },
    { img: bhojpuri_4, name: 'Uday', role: "All Rounder" },
    { img: bhojpuri_5, name: 'Ravi Kishan', role: "All Rounder" },
    { img: bhojpuri_6, name: 'Raghav', role: "All Rounder" },
    { img: bhojpuri_7, name: 'Pravesh', role: "All Rounder" },
    { img: bhojpuri_8, name: 'Nirahua', role: "All Rounder" },
    { img: bhojpuri_9, name: 'Jay', role: "All Rounder" },
    { img: bhojpuri_10, name: 'Anshuman', role: "All Rounder" },
    { img: bhojpuri_11, name: 'Aditya', role: "All Rounder" }
  ];

  const loadMore = () => {
    setVisiblePlayers(prev => Math.min(prev + 5, teamMembers.length));
  };

  return (
    <>
       <SEO
        title="Teams - Bhojpuri Dabanggs"
        description="Join the excitement of the Celebrity Cricket League! Catch live matches, cheer for the Bhojpuri Dabanggs, and support your favorite team in every thrilling moment!"
      />
    <TeamContainer>
      <ContentWrapper>
        <TitleSection>
          <motion.img 
            className="title-img"
            src={BHOJPURIDABANGGS}
            alt="Bhojpuri Dabanggs"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
          />
          <motion.img 
            className="description-img"
            src={bhojpuriparagraphheading}
            alt="Team Description"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          />
        </TitleSection>

        <TeamPhoto>
          <motion.img 
            src={bhojuripimage}
            alt="Team Photo"
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8 }}
          />
        </TeamPhoto>

        <ManagementSection>
          <CategoryTitle>TEAM MANAGEMENT</CategoryTitle>
          <ManagementGrid>
            {management.map((person, index) => (
              <ManagementCard
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="image-container">
                  <img src={person.img} alt={person.name} />
                </div>
                <h3>{person.name}</h3>
                <p className="info-container">{person.role}</p>
              </ManagementCard>
            ))}
          </ManagementGrid>
        </ManagementSection>

        <TeamSection>
  <TeamHeader>
    <motion.img 
      src={THETEAM}
      alt="The Team"
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
    />
  </TeamHeader>

  <TeamGrid>
    {teamMembers.slice(0, visiblePlayers).map((player, index) => (
      <motion.div
        key={index}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: index * 0.1 }}
      >
        <ProfileCard>
          <div className="image-container">
            <img src={player.img} alt={player.name} />
          </div>
          <div className="info-container">
            <h3>{player.name}</h3>
            <p>{player.role}</p>
          </div>
        </ProfileCard>
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
    </>
);
};

export default Bhojpuri;