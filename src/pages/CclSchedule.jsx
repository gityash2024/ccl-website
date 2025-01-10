import React from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import background from '../assets/background.png';
import CCL2025SCHEDULE from '../assets/CCL2025SCHEDULE.png';
import teamcaptains from '../assets/teamcaptains.png';
import JanuaryFriday from '../assets/JanuaryFriday.png';
import HYDERABAAD from '../assets/HYDERABAAD.png';
import mumbaiheros from '../assets/mumbaiheros.png';
import vs from '../assets/vs.png';
import sixtoten from '../assets/sixtoten.png';
import teluguwarriors from '../assets/teluguwarriors.png';
import onefebruary from '../assets/onefebruary.png';
import bhojpuridabangge from '../assets/bhojpuridabangge.png';
import punjabdesher from '../assets/punjabdesher.png';
import twotosiz from '../assets/twotosiz.png';
import chennairhinors from '../assets/chennairhinors.png';
import sixtotenthird from '../assets/sixtotenthird.png';
import cclbackground from '../assets/cclbackground.png';

// 2 february
import twoFebruary from '../assets/twoFebruary.png';
import keralastrikers from '../assets/keralastrikers.png';
import bengaltigers from '../assets/bengaltigers.png';
import karnatakabulldozers from '../assets/karnatakabulldozers.png';
// 7 february
import sevenFebruary from '../assets/sevenFebruary.png';
import kolkata from '../assets/kolkata.png';
// 8 frbruary
import eightFebruary from '../assets/eightFebruary.png';
import tbc from '../assets/tbc.png';
// 9 february
import nineFebruary from '../assets/nineFebruary.png';
// 14 fourthyFebruary 
import fourthyFebruary from '../assets/fourthyFebruary.png';
import bangalore from '../assets/bangalore.png';
// 15 february 
import fivthyFebruary from '../assets/fivthyFebruary.png';
// 16 february 
import sixtyFebruary from '../assets/sixtyFebruary.png';
// 22 february
import twintytwoFebruary from '../assets/twintytwoFebruary.png';
import vizag from '../assets/vizag.png';
import semifinalone from '../assets/semifinalone.png';
import one from '../assets/one.png';
import four from '../assets/four.png';
import semifinaltwo from '../assets/semifinaltwo.png';
import two from '../assets/two.png';
import three from '../assets/three.png';
// 23 february 
import twintythirdFebruary from '../assets/twintythirdFebruary.png';
import final from '../assets/final.png';
import semifinalonewinner from '../assets/semifinalonewinner.png';
import semifinatwowinner from '../assets/semifinalonewinner.png';



const HomeContainer = styled.div`
  width: 100%;
  overflow-x: hidden;
`;
const HeroTitle = styled(motion.h1)`
  font-size: 48px;
  color: white;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  margin-bottom: 20px;
`;

const HeroSection = styled.div`
  position: relative;
  width: 100%;
  height: 600px;
  background: url(${background});
  background-size: cover;
  background-position: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  padding-bottom: 50px;
`;



const TeamsContainer = styled.div`
  padding: 50px 20px;
  background: white;
`;

const TeamsTitle = styled.div`
  text-align: center;
  position: relative;
  margin-bottom: 50px;

  &::before,
  &::after {
    content: '';
    position: absolute;
    top: 50%;
    width: 200px;
    height: 2px;
    background: #214592;
  }

  &::before {
    right: calc(50% + 120px);
  }

  &::after {
    left: calc(50% + 120px);
  }

  h2 {
    color: #214592;
    font-size: 36px;
    font-weight: bold;
  }
`;


const CaptainsSection = styled.div`
  background: url(${teamcaptains});
  background-size: cover;
  padding: 50px 20px;
  margin-top: 50px;
`;

const CaptainsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  max-width: 1200px;
  margin: 0 auto;
  
  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const CaptainCard = styled(motion.div)`
  text-align: center;
  
  img {
    width: 100%;
    max-width: 200px;
    border-radius: 10px;
    margin-bottom: 15px;
  }

  h3 {
    color: white;
    font-weight: bold;
    margin-bottom: 5px;
  }

  p {
    color: #cccccc;
    font-size: 14px;
  }
`;

const InfoSection = styled.div`
  background: url(${cclbackground});
  background-size: cover;
  padding: 100px 20px;
  text-align: center;
  
  img {
    max-width: 300px;
    margin-bottom: 30px;
  }

  h2 {
    color: white;
    font-size: 36px;
    font-weight: bold;
  }
`;

const CclSchedule = () => {
  const { teamId } = useParams();

  return (
    <HomeContainer>
    <HeroSection>
      <HeroTitle
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
         <motion.img 
                  src={CCL2025SCHEDULE}
                  alt="Telugu Warriors"
                  style={{ maxWidth: '600px', margin: '0 auto', display: 'block' }}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.6 }}
                />
      </HeroTitle>
    </HeroSection>
    </HomeContainer>
  );
};

export default CclSchedule;