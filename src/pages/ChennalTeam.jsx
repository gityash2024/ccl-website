import React from 'react';
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
import chennai_1 from '../assets/chennai_1.png';
import chennai_2 from '../assets/chennai_2.png';
import bhojpuribackground_3 from '../assets/bhojpuribackground_3.png';
import chennai_3 from '../assets/chennai_3.png';
import chennai_4 from '../assets/chennai_4.png';
import chennai_5 from '../assets/chennai_5.png';
import chennai_6 from '../assets/chennai_6.png';
import chennai_7 from '../assets/chennai_7.png';
import chennai_8 from '../assets/chennai_8.png';
import chennai_9 from '../assets/chennai_9.png';
import chennai_10 from '../assets/chennai_10.png';
import chennai_11 from '../assets/chennai_11.png';
import chennai_12 from '../assets/chennai_12.png';
import chennai_13 from '../assets/chennai_13.png';
import chennai_14 from '../assets/chennai_14.png';
import chennai_15 from '../assets/chennai_15.png';
import chennai_16 from '../assets/chennai_16.png';

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
    background: url(${chennaibackground}) no-repeat center;
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

const Chennai = () => {
  const teamMembers = [
    {  image: chennai_1 , name: "Vishnu Vishal", role: "All Rounder",},
    {  image: chennai_2 , name: "Jiva", role: "All Rounder", },
    {  image: chennai_3 , name: "Arya", role: "Captain", },
    {  image: chennai_4 , name: "Vikranth", role: "All Rounder", },
    {  image: chennai_5 , name: "Shantanu", role: "All Rounder",  },
    {  image: chennai_6 , name: "Prithivi", role: "Bowler", },
    {  image: chennai_7 , name: "Ashok Selvan", role: "All Rounder",},
    {  image: chennai_8 , name: "Kalai Arasan", role: "Bowler",  },
    {  image: chennai_9 , name: "Mirchi Shiva", role: "All Rounder", },
    {  image: chennai_10 , name: "Bharath Niwas", role: "Batsman",  },
    { image: chennai_11, name: "Ramana", role: "All Rounder", },
    {  image: chennai_12 , name: "Sharan", role: "Bowler", },
    {  image: chennai_13, name: "Aadhav", role: "All Rounder",  },
    {  image: chennai_14, name: "SATYA",  },
    {  image: chennai_15, name: "DASARATHAN",  },
    {  image: chennai_16, name: "BALASARAVANAN",  },
  ];

  return (
    <TeamContainer>
    <ContentWrapper>
      <TopSection>
        <motion.img 
          src={CHENNAIRHINOS}
          alt="Telugu Warriors"
          style={{ maxWidth: '600px', margin: '0 auto', display: 'block' }}
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
        />
        <Description>
        Chennai Rhinos established themselves as strong contenders of CCL and emerged as the Champions of the inaugural CCL season in 2011. Chennai Rhinos have proved themselves as one of the most popular teams and finished as Runners of the tournament in 2015.
        </Description>
        <TeamPhoto>
          <img src={channelimg} alt="Telugu Warriors Team" />
        </TeamPhoto>
      </TopSection>

      <ManagementSection>
        <Categories>
          <CategoryBlock>
            <h2>TEAM OWNERS</h2>
            <ProfileCard>
              <img src={dummyowner} alt="Mr. Sachin J Joshi" />
              <h3>Mr. Sachin J Joshi</h3>
            </ProfileCard>
          </CategoryBlock>

          {/* <CategoryBlock>
            <h2>MENTOR</h2>
            <ProfileCard>
              <img src={teluguowner_2} alt="Venkatesh" />
              <h3>Venkatesh</h3>
            </ProfileCard>
          </CategoryBlock> */}

          <CategoryBlock>
            <h2>BRAND AMBASSADORS</h2>
            <BrandAmbassadors>
              <ProfileCard>
                <img src={dummyabmastment} alt="REGINA CASSANDRA" />
                <h3>REGINA CASSANDRA</h3>
              </ProfileCard>
              {/* <ProfileCard>
                <img src={telugubrand_2} alt="PRANITHA SUBHASH" />
                <h3>PRANITHA SUBHASH</h3>
              </ProfileCard>
              <ProfileCard>
                <img src={telugubrand_3} alt="ADAH SHARMA" />
                <h3>ADAH SHARMA</h3>
              </ProfileCard> */}
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

export default Chennai;