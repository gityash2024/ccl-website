import React from 'react';
import { useParams } from 'react-router-dom';
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



const CategoryRow = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const SectionTitle = styled.h2`
  color: white;
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 20px;
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
    background: url(${bhopuribackground}) no-repeat center;
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
`;

const Categories = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr 2fr;
  gap: 40px;

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
    color: #214592;
    font-size: 16px;
    font-weight: bold;
    font-family: 'days-one';
  }
`;

const Bhojpuri = () => {
  const teamMembers = [
    { img: bhojpuri_1,  name: 'Vikranh', role: "All Rounder" },
    { img: bhojpuri_2, name: 'Vaibhav', role: "All Rounder" },
    { img: bhojpuri_3, name: 'Manoj Tiwari', role: "CAPTAIN" },
    { img: bhojpuri_4, name: 'Uday', role: "All Rounder" },
    { img: bhojpuri_5, name: 'Ravi Kishan', role: "All Rounder" },
    { img: bhojpuri_6, name: 'Raghav', role: "All Rounder" },
    { img: bhojpuri_7, name: 'Pravesh', role: "All Rounder" },
    { img: bhojpuri_8, name: 'Nirahua', role: "All Rounder" },
    { img: bhojpuri_9,name: 'Jay', role: "All Rounder" },
    { img: bhojpuri_10,  name: 'Anshuman', role: "All Rounder" },
    { img: bhojpuri_11, name: 'Aditya', role: "All Rounder" },
  
  ];

  return (
    <TeamContainer>
    <ContentWrapper>
        <TitleSection>
              <motion.img 
                className="title-img"
                src={BHOJPURIDABANGGS}
                alt="Bengal Tigers"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6 }}
              />
              <motion.img 
                className="description-img"
                src={bhojpuriparagraphheading}
                alt="Bengal Tigers Description"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              />
            </TitleSection>
      <TopSection>
        <TeamPhoto>
          <img src={bhojuripimage} alt="Telugu Warriors Team" />
        </TeamPhoto>
      </TopSection>

      <ManagementSection>
        <Categories>
          <CategoryBlock>
            <h2>TEAM OWNERS</h2>
            <ProfileCard>
              <img src={owners_1} alt="Mr. Sachin J Joshi" />
              <h3>Mr. Sachin J Joshi</h3>
            </ProfileCard>
          </CategoryBlock>

          <CategoryBlock>
            <h2>MENTOR</h2>
            <ProfileCard>
              <img src={owners_2} alt="Venkatesh" />
              <h3>Venkatesh</h3>
            </ProfileCard>
            <ProfileCard>
              <img src={owners_3} alt="Venkatesh" />
              <h3>Venkatesh</h3>
            </ProfileCard>
            <ProfileCard>
              <img src={owners_4} alt="Venkatesh" />
              <h3>Venkatesh</h3>
            </ProfileCard>
          </CategoryBlock>

          <CategoryBlock>
            <h2>BRAND AMBASSADORS</h2>
            <BrandAmbassadors>
              <ProfileCard>
                <img src={teamAB} alt="REGINA CASSANDRA" />
                <h3>REGINA CASSANDRA</h3>
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
          {teamMembers.map((player, index) => (
            <ProfileCard
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <img src={player.img} alt={player.name} />
              <h3>{player.name}</h3>
              <p style={{ color: '#214592' }}>{player.role}</p>
            </ProfileCard>
          ))}
        </TeamGrid>
      </TeamSection>

   </ContentWrapper>
  </TeamContainer>

  );
};

export default Bhojpuri;
