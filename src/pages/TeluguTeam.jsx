import React from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import bhojpuribackground from '../assets/bhojpuribackground.png';
import commanboll from '../assets/commanboll.png';
import TELUGUWARRIORS from '../assets/TELUGUWARRIORS.png';
import teluguwaimage from '../assets/teluguwaimage.png';
import teluguowner_1 from '../assets/teluguowner_1.png';
import teluguowner_2 from '../assets/teluguowner_2.png';
import telugubrand_1 from '../assets/telugubrand_1.png';
import telugubrand_2 from '../assets/telugubrand_2.png';
import telugubrand_3 from '../assets/telugubrand_3.png';
import telugubackground from '../assets/telugubackground.png';
import THETEAM from '../assets/THETEAM.png';
import teluguteam_1 from '../assets/teluguteam_1.jpg';
import teluguteam_2 from '../assets/teluguteam_2.png';
import teluguteam_3 from '../assets/teluguteam_3.jpg';
import bhojpuribackground_3 from '../assets/bhojpuribackground_3.png';
import teluguteam_4 from '../assets/teluguteam_4.jpg';
import teluguteam_5 from '../assets/teluguteam_5.jpg';
import teluguteam_6 from '../assets/teluguteam_6.png';
import teluguteam_7 from '../assets/teluguteam_7.jpg';
import teluguteam_8 from '../assets/teluguteam_8.jpg';
import teluguteam_9 from '../assets/teluguteam_9.jpg';
import teluguteam_10 from '../assets/teluguteam_10.jpg';
import teluguteam_11 from '../assets/teluguteam_11.jpg';




const TitleSection = styled.div`
  text-align: center;
  padding: 40px 20px;

  img {
    max-width: 600px;
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
    background: url(${telugubackground}) no-repeat center;
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
    color: white;
    font-size: 16px;
    font-weight: bold;
  }
`;

const Telugu = () => {
  const teamMembers = [
    { img: teluguteam_1, name: "Ashwin Babu", role: "All Rounder" },
    { img: teluguteam_2, name: "Nanda Kishore", role: "All Rounder" },
    { img: teluguteam_3, name: "Akhil Akkineni", role: "CAPTAIN" },
    { img: teluguteam_4, name: "Nikhil", role: "All Rounder" },
    { img: teluguteam_5, name: "Prince", role: "All Rounder" },
    { img: teluguteam_6, name: "Raghu", role: "All Rounder" },
    { img: teluguteam_7, name: "Roshan", role: "All Rounder" },
    { img: teluguteam_8, name: "Sudheer", role: "All Rounder" },
    { img: teluguteam_9, name: "Sushanth", role: "All Rounder" },
    { img: teluguteam_10, name: "Thaman", role: "All Rounder" },
    { img: teluguteam_11, name: "Vishwa", role: "All Rounder" },
   
  ];

  return (
    <TeamContainer>
    <ContentWrapper>
      <TopSection>
        <motion.img 
          src={TELUGUWARRIORS}
          alt="Telugu Warriors"
          style={{ maxWidth: '600px', margin: '0 auto', display: 'block' }}
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
        />
        <Description>
          The Telugu Warriors is a Cricket Franchise of Celebrity Cricket League, based in the states of Telangana & Andhra Pradesh. The Franchise is owned by Mr. Sachiin J Joshi and Mr. Suresh Babu with the best of Tollywood coming together in an exciting match of cricket.
        </Description>
        <TeamPhoto>
          <img src={teluguwaimage} alt="Telugu Warriors Team" />
        </TeamPhoto>
      </TopSection>

      <ManagementSection>
        <Categories>
          <CategoryBlock>
            <h2>TEAM OWNERS</h2>
            <ProfileCard>
              <img src={teluguowner_1} alt="Mr. Sachin J Joshi" />
              <h3>Mr. Sachin J Joshi</h3>
            </ProfileCard>
          </CategoryBlock>

          <CategoryBlock>
            <h2>MENTOR</h2>
            <ProfileCard>
              <img src={teluguowner_2} alt="Venkatesh" />
              <h3>Venkatesh</h3>
            </ProfileCard>
          </CategoryBlock>

          <CategoryBlock>
            <h2>BRAND AMBASSADORS</h2>
            <BrandAmbassadors>
              <ProfileCard>
                <img src={telugubrand_1} alt="REGINA CASSANDRA" />
                <h3>REGINA CASSANDRA</h3>
              </ProfileCard>
              <ProfileCard>
                <img src={telugubrand_2} alt="PRANITHA SUBHASH" />
                <h3>PRANITHA SUBHASH</h3>
              </ProfileCard>
              <ProfileCard>
                <img src={telugubrand_3} alt="ADAH SHARMA" />
                <h3>ADAH SHARMA</h3>
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
              <p>{player.role}</p>
            </ProfileCard>
          ))}
        </TeamGrid>
      </TeamSection>

   </ContentWrapper>
  </TeamContainer>

  );
};

export default Telugu;
