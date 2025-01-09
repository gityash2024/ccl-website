import React from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { motion } from 'framer-motion';

import BENGALTIGERS from '../assets/BENGALTIGERS.png';
import thebengal from '../assets/thebengal.png';
import bengalbackground from '../assets/bengalbackground.png';
import bengal_1 from '../assets/bengal_1.png';
import teamowners_1 from '../assets/teamowners_1.png';
import teamowners_2 from '../assets/teamowners_2.png';
import brandambassadors from '../assets/brandambassadors.png';
import THETEAM from '../assets/THETEAM.png';
import uday from '../assets/uday.png';
import indrasish from '../assets/indrasish.png';
import jisshu from '../assets/jisshu.png';
import mohan from '../assets/mohan.png';
import suman from '../assets/suman.png';
import joy from '../assets/joy.png';
import joe from '../assets/joe.png';
import yusuf from '../assets/yusuf.png';
import commanboll from '../assets/commanboll.png';


const TeamContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  background: linear-gradient(180deg, #FFFFFF 0%, #E8E8FF 50%, #D51256 100%);
`;

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

const OwnersSection = styled.div`
  max-width: 1200px;
  margin: 60px auto;
  padding: 0 20px;
`;

const SectionTitle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 40px;

  h2 {
    color: white;
    font-size: 24px;
    font-weight: bold;
  }
`;

const ProfileGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 30px;
  margin-top: 30px;
`;

const ProfileCard = styled(motion.div)`
  text-align: center;

  img {
    width: 180px;
    height: 180px;
    border-radius: 10px;
    margin-bottom: 15px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }

  h3 {
    color: #214592;
    font-weight: bold;
    margin-bottom: 5px;
  }

  p {
    color: #666;
    font-size: 14px;
  }
`;

// const TeamGrid = styled.div`
//   display: grid;
//   grid-template-columns: repeat(5, 1fr);
//   gap: 20px;
//   margin-top: 40px;

//   @media (max-width: 1024px) {
//     grid-template-columns: repeat(3, 1fr);
//   }

//   @media (max-width: 768px) {
//     grid-template-columns: repeat(2, 1fr);
//   }
// `;

const TeamSection = styled.div`
  max-width: 1000px;
  margin: 40px auto;
  text-align: center;
  padding: 0 20px;
`;

const TeamTitle = styled.div`
  position: relative;
  margin-bottom: 40px;

  img {
    max-width: 300px;
    margin: 0 auto;
  }
`;

const TeamGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 15px;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 100%;
    height: 100%;
    background: url(${bengalbackground}) no-repeat center;
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

const PlayerCard = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;
`;

const PlayerImage = styled.div`
  width: 150px;
  height: 150px;
  border-radius: 10px;
  overflow: hidden;
  margin-bottom: 10px;
  border: 2px solid #214592;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  &.placeholder {
    background: #f0f0f0;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

const PlayerInfo = styled.div`
  text-align: center;

  h3 {b
    color: #214592;
    font-size: 14px;
    font-weight: bold;
    margin-bottom: 4px;
  }

  p {
    color: #666;
    font-size: 12px;
    font-style: italic;
  }
`;



const Bengal = () => {
  return (
    <TeamContainer>
      <TitleSection>
        <motion.img 
          src={BENGALTIGERS}
          alt="Bengal Tigers"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
        />
        <Description>
          The Bengal Tigers is a Cricket Franchise of Celebrity Cricket League. The Franchise is owned by Mr. Boney Kapoor, Mrs. Sridevi Kapoor and Mr. Raj Shah with the best of Bengal Film Industry coming together in an exciting match of cricket.
        </Description>
      </TitleSection>

      <TeamPhoto>
        <motion.img 
          src={bengal_1}
          alt="Bengal Tigers Team"
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6 }}
        />
      </TeamPhoto>

      <OwnersSection>
        <SectionTitle>
          <h2>TEAM OWNERS</h2>
          <h2>BRAND AMBASSADORS</h2>
        </SectionTitle>

        <ProfileGrid>
          <ProfileCard>
            <img src={teamowners_1} alt="Mr. Boney Kapoor" />
            <h3>Mr. Boney Kapoor</h3>
          </ProfileCard>
          <ProfileCard>
            <img src={teamowners_2} alt="Mr. Raj Shah" />
            <h3>Mr. Raj Shah</h3>
          </ProfileCard>
          <ProfileCard>
            <img src={brandambassadors} alt="SAYANTIKA" />
            <h3>SAYANTIKA</h3>
          </ProfileCard>
        </ProfileGrid>

        <motion.img 
          src={THETEAM}
          alt="The Team"
          style={{ margin: "60px auto 40px", display: "block" }}
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
        />

        <TeamGrid>
          {[
             { name: "Uday", role: "All Rounder", img: uday },
             { name: "Indrasish", role: "All Rounder", img: indrasish },
             { name: "JISSHU SENGUPTA", role: "CAPTAIN", img: jisshu },
             { name: "MOHAN", role: "Bowler", img: mohan },
             { name: "SUMAN", role: "All Rounder", img: suman },
             { name: "JOY", role: "All Rounder", img: joy },
             { name: "JOE", role: "All Rounder", img: joe },
             { name: "Yusuf", role: "All Rounder", img: yusuf },
           

            // Add placeholder images for remaining team members
            { name: "SANDY", role: "All Rounder" },
            { name: "Aditya Roy Banerjee", role: "All Rounder" },
            { name: "Arman Ahamed", role: "All Rounder" },
            { name: "Ratnadip Ghosh", role: "All Rounder" },
            { name: "Ananda Chowdhury", role: "All Rounder" },
            { name: "Manty", role: "Bowler" },
            { name: "Rahul Mazumder", role: "All Rounder" },
            { name: "Gaurav Chakrabarty", role: "All Rounder" },
            { name: "Boney", role: "All Rounder" },
            { name: "Sourav Das", role: "All Rounder" }
           
          ].map((player, index) => (
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
      </OwnersSection>
    </TeamContainer>
  );
};


export default Bengal;