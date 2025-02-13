import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import bhojpuribackground from '../assets/bhojpuribackground.png';
import CHENNAIRHINOS from '../assets/CHENNAIRHINOS.png';
import THETEAM from '../assets/THETEAM.png';
import dummyowner from '../assets/dummyowner.png';
import dummyabmastment from '../assets/dummyabmastment.png';
import chennaibackground from '../assets/chennaibackground.png';
import commanboll from '../assets/commanboll.png';
import channelimg from '../assets/channelimg.png';
import bhojpuribackground_3 from '../assets/bhojpuribackground_3.png';
import Adhav from '../assets/Adhav.jpg';
import Balasaravanan from '../assets/Balasaravanan.jpg';
import AryaCaptain from '../assets/AryaCaptain.jpg';
import Dasarathi from '../assets/Dasarathi.jpg';
import Jivva from '../assets/Jivva.jpg';
import Prithvi from '../assets/Prithvi.jpg';
import Ramana from '../assets/Ramana.jpg';
import Shantanu from '../assets/Shantanu.jpg';
import Sharan from '../assets/Sharan.jpg';
import vikranth from '../assets/vikranth.jpg';
import VishnuVishal from '../assets/VishnuVishal.jpg';
import chennaiheadingimage from '../assets/chennaiheadingimage.svg';
import SEO from '../components/SEO';

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

  @media (max-width: 768px) {
    background-attachment: scroll;
  }
`;

const ContentWrapper = styled.div`
  position: relative;
  z-index: 2;
  width: 100%;
  overflow: hidden;
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

  @media (max-width: 768px) {
    padding: 20px 10px;

    img.title-img {
      max-width: 90% !important;
    }

    img.description-img {
      max-width: 95% !important;
      margin: 30px auto !important;
    }
  }
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

  @media (max-width: 768px) {
    padding: 0 10px;
    margin: 20px auto;

    img {
      width: 100%;
    }
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

  @media (max-width: 768px) {
    padding: 40px 15px;
  }
`;

const Categories = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;
  position: relative;
  z-index: 2;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 30px;
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

  @media (max-width: 768px) {
    h2 {
      font-size: 20px;
      margin-bottom: 15px;
    }
  }
`;

const ManagementCard = styled(motion.div)`
  background: white;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
  max-width: 220px;
  width: 100%;
  
  img {
    width: 100%;
    height: 200px;
    object-fit: cover;
  }

  h3 {
    color: #4F378B;
    padding: 10px;
    background: white;
    font-size: 14px;
    margin: 0;
    text-align: center;
  }

  p {
    padding: 10px;
    margin: 0;
    background: linear-gradient(to right, #4F378B, #D51256);
    color: white;
    text-align: center;
  }

  @media (max-width: 768px) {
    max-width: 180px;

    img {
      height: 180px;
    }

    h3 {
      font-size: 13px;
    }
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
    background: url(${chennaibackground}) no-repeat center;
    background-size: contain;
    opacity: 0.1;
    z-index: 1;
  }

  @media (max-width: 768px) {
    padding: 40px 15px;
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

  @media (max-width: 768px) {
    margin-bottom: 40px;

    img {
      max-width: 250px;
    }
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
    gap: 15px;
  }

  @media (max-width: 992px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 12px;
    padding: 0 10px;
  }

  @media (max-width: 480px) {
    grid-template-columns: repeat(1, 1fr);
    max-width: 280px;
    margin: 0 auto;
  }
`;

const PlayerCard = styled(motion.div)`
  background: white;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
  width: 100%;
  margin: 0 auto;

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

  @media (max-width: 768px) {
    .info-container {
      padding: 12px;
    }

    h3 {
      font-size: 14px;
      margin: 0 0 3px;
    }

    p {
      font-size: 12px;
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

  @media (max-width: 768px) {
    padding: 10px 20px;
    font-size: 14px;
    margin: 30px auto 0;
  }
`;

const Chennai = () => {
  const [visiblePlayers, setVisiblePlayers] = useState(10);

  const teamMembers = [
    { img: Adhav, name: 'Adhav', role: "All Rounder" },
    { img: Balasaravanan, name: 'Balasaravanan', role: "All Rounder" },
    { img: AryaCaptain, name: 'Arya', role: "CAPTAIN" },
    { img: Dasarathi, name: 'Dasarathi', role: "All Rounder" },
    { img: Jivva, name: 'Jivva', role: "All Rounder" },
    { img: Prithvi, name: 'Prithvi', role: "All Rounder" },
    { img: Ramana, name: 'Ramana', role: "All Rounder" },
    { img: Shantanu, name: 'Shantanu', role: "All Rounder" },
    { img: Sharan, name: 'Sharan', role: "All Rounder" },
    { img: vikranth, name: 'vikranth', role: "All Rounder" },
    { img: VishnuVishal, name: 'VishnuVishal', role: "All Rounder" },
  ];

  const loadMore = () => {
    setVisiblePlayers(prev => Math.min(prev + 5, teamMembers.length));
  };

  return (
    <>
     <SEO 
        title="Teams - Chennai Rhinos"
        description="Join the excitement of the Celebrity Cricket League! Catch live matches, cheer for the Chennai Rhinos, and support your favorite team in every thrilling moment!"
      />
    <TeamContainer>
      <ContentWrapper>
        <TopSection>
          <motion.img 
            className="title-img"
            src={CHENNAIRHINOS}
            alt="Chennai Rhinos"
            style={{ maxWidth: '600px',width: '100%', margin: '0 auto', display: 'block' }}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
          />
          <motion.img 
            className="description-img"
            src={chennaiheadingimage}
            alt="Chennai Rhinos Description"
            style={{ maxWidth: '800px', margin: '50px auto', display: 'block' }}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          />
      
          <TeamPhoto>
            <motion.img 
              src={channelimg} 
              alt="Chennai Rhinos Team"
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8 }}
            />
          </TeamPhoto>
        </TopSection>

        {/* <ManagementSection>
          <Categories>
            <CategoryBlock>
              <h2>TEAM OWNERS</h2>
              <ManagementCard
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
              >
                <img src={dummyowner} alt="Mr. Sachin J Joshi" />
                <h3>Mr. Sachin J Joshi</h3>
                <p>OWNER</p>
              </ManagementCard>
            </CategoryBlock>

            <CategoryBlock>
              <h2>BRAND AMBASSADORS</h2>
              <ManagementCard
                initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <img src={dummyabmastment} alt="REGINA CASSANDRA" />
                <h3>REGINA CASSANDRA</h3>
                <p>BRAND AMBASSADOR</p>
              </ManagementCard>
            </CategoryBlock>
          </Categories>
        </ManagementSection> */}

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
    </>
  );
};

export default Chennai;