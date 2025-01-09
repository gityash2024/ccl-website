import React from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { motion } from 'framer-motion';


import bhojpuribackground from '../assets/bhojpuribackground.png';
// import PUNJABDESHER from '../assets/PUNJABDESHER.png';
import punjabimage from '../assets/punjabimage.png';
import punjabowner_1 from '../assets/punjabowner_1.png';
import punjabowner_2 from '../assets/punjabowner_2.png';
import punjanbrand_1 from '../assets/punjanbrand_1.png';
import punjanbrand_2 from '../assets/punjanbrand_2.png';
import THETEAM from '../assets/THETEAM.png';
import punjab_1 from '../assets/punjab_1.png';
import bhojpuribackground_2 from '../assets/bhojpuribackground_2.png';
import punjab_2 from '../assets/punjab_2.png';
import punjab_3 from '../assets/punjab_3.png';
import punjab_4 from '../assets/punjab_4.png';
import punjab_5 from '../assets/punjab_5.png';
import punjab_6 from '../assets/punjab_6.png';
import punjab_7 from '../assets/punjab_7.png';
import punjab_8 from '../assets/punjab_8.png';
import punjab_9 from '../assets/punjab_9.png';
import punjab_10 from '../assets/punjab_10.png';
import punjab_11 from '../assets/punjab_11.png';
import punjab_12 from '../assets/punjab_12.png';
import punjab_13 from '../assets/punjab_13.png';
import punjab_14 from '../assets/punjab_14.png';
import punjab_15 from '../assets/punjab_15.png';
import punjab_16 from '../assets/punjab_16.png';
import punjab_17 from '../assets/punjab_17.png';
import punjabteambackgroud from '../assets/punjabteambackgroud.png';



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

const Title = styled.h1`
  font-size: 48px;
  color: #214592;
  font-weight: bold;
  margin-bottom: 30px;
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

  @media (max-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const PlayerCard = styled(motion.div)`
  text-align: center;
  
  img {
    width: 150px;
    height: 150px;
    border-radius: 10px;
    margin-bottom: 10px;
  }

  h3 {
    font-size: 14px;
    font-weight: bold;
    color: #214592;
    margin-bottom: 5px;
  }

  p {
    font-size: 12px;
    color: #666;
  }
`;

const Punjab = () => {
  const teamMembers = [
    { img: punjab_1, name: "GURPREET GHUGGI", role: "Batsman" },
    { img: punjab_2, name: "BINNU DHILLON", role: "Batsman" },
    { img: punjab_3, name: "Sonu Sood", role: "CAPTAIN" },
    { img: punjab_4, name: "RAHUL DEV", role: "Batsman" },
    { img: punjab_5, name: "GAVIE CHAHAL", role: "Batsman" },
    { img: punjab_6, name: "RAJA BHERWANI", role: "All Rounder" },
    { img: punjab_7, name: "GULZAR CHAHAL", role: "Batsman" },
    { img: punjab_8, name: "ARYAMAN SAPRU", role: "Batsman" },
    { img: punjab_9, name: "NAVRAJ HANS", role: "Batsman" },
    { img: punjab_10, name: "YUVRAJ HANS", role: "Batsman" }
    // Add the rest of the players
  ];

  return (
    <TeamContainer>
      <ContentWrapper>
        <TopSection>
          <Title>PUNJAB DE SHER</Title>
          <Description>
            The Punjab De Sher is a Cricket Franchise of Celebrity Cricket League. The Franchise is owned by Mr. Navraj Hans and Mr. Puneet Singh with the best of Punjab Film Industry coming together in an exciting match of cricket.
          </Description>
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
            {teamMembers.map((player, index) => (
              <PlayerCard
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <img src={player.img} alt={player.name} />
                <h3>{player.name}</h3>
                <p>{player.role}</p>
              </PlayerCard>
            ))}
          </TeamGrid>
        </TeamSection>
      </ContentWrapper>
    </TeamContainer>
  );
};

export default Punjab;
