import React from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import BENGALTIGERS from '../assets/BENGALTIGERS.png';
import thebengal from '../assets/thebengal.png';
import bengalbackground from '../assets/bengalbackground.png';
import bengal_1 from '../assets/bengal_1.png';
import bengal from '../assets/bengal.png';
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
import JeetuKamal from '../assets/JeetuKamal.png';
import Jammy from '../assets/Jammy.png';
import RatnadipGhosh from '../assets/RatnadipGhosh.png';
import AnandaChowdhury from '../assets/AnandaChowdhury.png';
import SANDY from '../assets/SANDY.png';
import AdityaRoyBanerjee from '../assets/AdityaRoyBanerjee.png';
import ArmanAhamed from '../assets/ArmanAhamed.png';
import Manty from '../assets/Manty.png';
import RahulMazumder from '../assets/RahulMazumder.png';
import GauravChakrabarty from '../assets/GauravChakrabarty.png';
import Boney from '../assets/Boney.png';
import SouravDas from '../assets/SouravDas.png';
import commanboll from '../assets/commanboll.png';


const TeamContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  background: linear-gradient(180deg, #FFFFFF 0%, rgba(232, 232, 255, 0.8) 50%, rgba(213, 18, 86, 0.9) 100%);
  padding-bottom: 60px;
`;

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

const TeamPhoto = styled.div`
  max-width: 1000px;
  margin: 40px auto;
  padding: 0 20px;

  img {
    width: 100%;
    border-radius: 30px;
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
  }
`;

const OwnersSection = styled.div`
  width: 100%;
  position: relative;
  padding: 60px 0;
  background: url(${bengalbackground}) no-repeat center;
  background-size: cover;
  text-align: center;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
      to bottom,
      rgba(255, 255, 255, 0.1) 0%,
      rgba(213, 18, 86, 0.95) 100%
    );
  }
`;

const OwnersSectionHeader = styled.div`
  position: relative;
  z-index: 2;
  display: flex;
  justify-content: space-around;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto 40px;
  padding: 0 20px;

  h2 {
    color: white;
    font-size: 32px;
    font-weight: bold;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
  }
`;

const ProfilesGrid = styled.div`
  position: relative;
  z-index: 2;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 40px;
  max-width: 1000px;
  margin: 0 auto;
  padding: 0 20px;

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;

const ProfileCard = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  
  img {
    width: 200px;
    height: 200px;
    border-radius: 15px;
    margin-bottom: 15px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }

  h3 {
    color: white;
    font-size: 18px;
    margin-top: 10px;
    text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3);
  }
`;

const TeamSection = styled.div`
  position: relative;
  width: 100%;
  padding: 60px 0;
  margin: 0 auto;
  text-align: center;
  background: white;

  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 80%;
    height: 80%;
    transform: translate(-50%, -50%);
    background: url(${bengal}) no-repeat center;
    background-size: contain;
    opacity: 0.1;
    z-index: 1;
  }
`;

const TeamGrid = styled.div`
  position: relative;
  z-index: 2;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 20px;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const PlayerCard = styled(motion.div)`
  position: relative;
  background: white;
  padding: 10px;
  border-radius: 10px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);

  img {
    width: 100%;
    aspect-ratio: 1;
    border-radius: 8px;
    object-fit: cover;
  }

  h3 {
    color: #214592;
    font-size: 14px;
    margin: 8px 0 4px;
    font-weight: bold;
  }

  p {
    color: #214592;
    font-size: 12px;
    opacity: 0.8;
  }
`;

const Bengal = () => {
  const teamPlayers = [
    { name: "Uday", role: "All Rounder", img: uday },
    { name: "Indrasish", role: "All Rounder", img: indrasish },
    { name: "JISSHU SENGUPTA", role: "CAPTAIN", img: jisshu },
    { name: "MOHAN", role: "Bowler", img: mohan },
    { name: "SUMAN", role: "All Rounder", img: suman },
    { name: "JOY", role: "Batsman", img: joy },
    { name: "JOE", role: "All Rounder", img: joe },
    { name: "Yusuf", role: "Batsman/Wk", img: yusuf },
    { name: "Jeetu Kamal", role: "All Rounder", img: JeetuKamal },
    { name: "Jammy", role: "All Rounder", img: Jammy },
    { name: "Ratnadip Ghosh", role: "All Rounder", img: RatnadipGhosh },
    { name: "Ananda Chowdhury", role: "All Rounder", img: AnandaChowdhury },
    { name: "SANDY", role: "All Rounder", img: SANDY },
    { name: "Aditya Roy Banerjee", role: "All Rounder", img: AdityaRoyBanerjee },
    { name: "Arman Ahamed", role: "All Rounder", img: ArmanAhamed },
    { name: "Manty", role: "Bowler", img: Manty },
    { name: "Rahul Mazumder", role: "All Rounder", img: RahulMazumder },
    { name: "Gaurav Chakrabarty", role: "All Rounder", img: GauravChakrabarty },
    { name: "Boney", role: "All Rounder", img: Boney },
    { name: "Sourav Das", role: "All Rounder", img: SouravDas }
  ];



  return (
    <TeamContainer>
      <TitleSection>
        <motion.img 
          className="title-img"
          src={BENGALTIGERS}
          alt="Bengal Tigers"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
        />
        <motion.img 
          className="description-img"
          src={thebengal}
          alt="Bengal Tigers Description"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        />
      </TitleSection>

      <TeamPhoto>
        <motion.img 
          src={bengal_1}
          alt="Bengal Tigers Team"
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8 }}
        />
      </TeamPhoto>

      <OwnersSection>
        <OwnersSectionHeader>
          <motion.h2
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            TEAM OWNERS
          </motion.h2>
          <motion.h2
            initial={{ x: 20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            BRAND AMBASSADORS
          </motion.h2>
        </OwnersSectionHeader>

        <ProfilesGrid>
          {[
            { img: teamowners_1, name: "Mr. Boney Kapoor" },
            { img: teamowners_2, name: "Mr. Raj Shah" },
            { img: brandambassadors, name: "SAYANTIKA" }
          ].map((profile, index) => (
            <ProfileCard
              key={index}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: index * 0.2 }}
            >
              <img src={profile.img} alt={profile.name} />
              <h3>{profile.name}</h3>
            </ProfileCard>
          ))}
        </ProfilesGrid>
      </OwnersSection>

      <TeamSection>
        <motion.img 
          src={THETEAM}
          alt="The Team"
          style={{ maxWidth: "400px", width: "90%", marginBottom: "40px" }}
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
        />

        <TeamGrid>
          {teamPlayers.map((player, index) => (
            <PlayerCard
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <img 
                src={player.img || '/placeholder.png'} 
                alt={player.name} 
              />
              <h3>{player.name}</h3>
              <p>{player.role}</p>
            </PlayerCard>
          ))}
        </TeamGrid>
      </TeamSection>
    </TeamContainer>
  );
};

export default Bengal;