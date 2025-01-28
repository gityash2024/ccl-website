import React from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import mumbaiheadingimage from '../assets/mumbaiheadingimage.svg';
import MUMBAIHEROES from '../assets/MUMBAIHEROES.png';
import bhojpuribackground from '../assets/bhojpuribackground.png';
import munbaibackground from '../assets/munbaibackground.png';
import bhojpuribackground_2 from '../assets/bhojpuribackground_2.png';
import mumaiowner_1 from '../assets/mumaiowner_1.png';
import mumaiowner_2 from '../assets/mumaiowner_2.png';
import mumaiowner_3 from '../assets/mumaiowner_3.png';
import dummyowner from '../assets/dummyowner.png';
import THETEAM from '../assets/THETEAM.png';
import commanboll from '../assets/commanboll.png';
import mumbaiteam from '../assets/mumbaiteam.png';
import mumai_1 from '../assets/mumai_1.jpg';
import mumai_2 from '../assets/mumai_2.jpg';
import mumai_3 from '../assets/mumai_3.jpg';
import bhojpuribackground_3 from '../assets/bhojpuribackground_3.png';
import mumai_4 from '../assets/mumai_4.jpg';
import mumai_5 from '../assets/mumai_5.jpg';
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

const mumbai = () => {
  const teamMembers = [
    { img: mumai_1, name: "Abhilash Chaudhary", role: "All Rounder" },
    { img: mumai_2, name: "Aftab Shivdasani ", role: "All Rounder" },
    { img: mumai_3, name: "RITEISH DESHMUKH", role: "CAPTAIN" },
    { img: mumai_4, name: "Apoorva Lakhia.", role: "All Rounder" },
    { img: mumai_6, name: "Madhav Deochake", role: "All Rounder" },
    { img: mumai_7, name: "Manoje ", role: "All Rounder" },
    { img: mumai_8, name: "Navdeep Tomar ", role: "All Rounder" },
    { img: mumai_9, name: "Raja Bherwani ", role: "All Rounder" },
    { img: mumai_10, name: "Samir Khochar ", role: "All Rounder" },
    { img: mumai_11, name: "Sandeep Juwatkar", role: "All Rounder" },
    { img: mumai_12, name: "Saqib Saleem ", role: "All Rounder" },
    { img: mumai_13, name: "Shabbir Aluwalia", role: "All Rounder" },
    { img: mumai_14, name: "Sidhaant Muley ", role: "All Rounder" },
    { img: mumai_15, name: "Sohil Khan", role: "All Rounder"},
   
  ];

  return (
    <TeamContainer>
    <ContentWrapper>
      <TopSection>
        <motion.img 
          src={MUMBAIHEROES}
          alt="Telugu Warriors"
          style={{ maxWidth: '600px', margin: '0 auto', display: 'block' }}
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
        />
        <Description>
        The Mumbai Heroes is a Cricket Franchise of Celebrity Cricket League, based in the state of Mumbai. The Franchise is owned by Sohail Khan, Adil Jagmagia and Jordy Patel with the best of Bollywood coming together in an exciting match of cricket.
        </Description>
        <TeamPhoto>
          <img src={munbaibackground} alt="Telugu Warriors Team" />
        </TeamPhoto>
      </TopSection>

      <ManagementSection>
        <Categories>
          <CategoryBlock>
            <h2>TEAM OWNERS</h2>
            <ProfileCard>
              <img src={mumaiowner_1} alt="Sohail Khan" />
              <h3>Sohail Khan</h3>
            </ProfileCard>
          </CategoryBlock>

          <CategoryBlock>
            <h2>MENTOR</h2>
            <ProfileCard>
              <img src={mumaiowner_2} alt="Adil Jagmagia" />
              <h3>Adil Jagmagia</h3>
            </ProfileCard>

            <ProfileCard>
              <img src={mumaiowner_3} alt="Jordy Patel" />
              <h3>Jordy Patel</h3>
            </ProfileCard>
          </CategoryBlock>

          <CategoryBlock>
            <h2>BRAND AMBASSADORS</h2>
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

export default mumbai;