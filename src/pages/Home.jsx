import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import background from '../assets/background.png';
import teamcaptains from '../assets/teamcaptains.png';
import cclbackground from '../assets/cclbackground.png';
import CCLWhite from '../assets/CCLWhite.png';
import bengal from '../assets/bengal.png';
import chennai from '../assets/chennai.png';
import kerala from '../assets/kerala.png';
import mumbai from '../assets/mumbai.png';
import bhojpuri from '../assets/bhojpuri.png';
import karnataka from '../assets/karnataka.png';
import punjab from '../assets/punjab.png';
import telugu from '../assets/telugu.png';
import Akhil from '../assets/Akhil.png';
import Sudeep from '../assets/Sudeep.png';
import indrajith from '../assets/indrajith.png'; 
import Sonu from '../assets/Sonu.png';
import Januaryonwards from '../assets/Januaryonwards.png';
import cclteams from '../assets/cclteams.png';
import teamCaptain from '../assets/teamCaptain.png';
import AryaCaptain from '../assets/AryaCaptain.jpg';
import bhojpuri_3 from '../assets/bhojpuri_3.png';
import jisshu from '../assets/jisshu.png';
import mumai_3 from '../assets/mumai_3.jpg';
 import bhojpuribackground_3 from '../assets/bhojpuribackground_3.png';
 import punjab_3 from '../assets/punjab_3.jpg';
 import PngItem from '../assets/PngItem.png';

const PageContainer = styled.div`
 width: 100%;
 overflow: hidden;
`;

const HeroSection = styled.section`
  position: relative;
  height: 500px;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: url(${background});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  overflow: hidden;
  transition: all 0.3s ease-in-out;
  
  img {
    width: 100%;
    max-width: 900px;
    object-fit: contain;
    position: relative;
    z-index: 2;
  }

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(to top, rgba(0,0,0,0.5), rgba(0,0,0,0.2));
    z-index: 1;
  }
`;

const SectionTitle = styled.div`
  text-align: center;
  position: relative;
  margin-bottom: 4rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  padding: 0 2rem;

  img {
    max-width: 400px;
    width: 100%;
    height: auto;
  }

  &::before, &::after {
    content: '';
    height: 2px;
    background: #214592;
    flex: 1;
    max-width: 200px;
  }
`;

const SectionContainer = styled.div`
 max-width: 1440px;
 margin: 0 auto;
 padding: 0 1.25rem;
 width: 100%;
 position: relative;
 z-index: 1;
`;

const TeamsSection = styled.section`
 background: white;
 padding: 5rem 0;
 width: 100%;
 @media (max-width: 768px) {
   padding: 3rem 0;
 }
`;

const TeamsGrid = styled(motion.div)`
 display: grid;
 grid-template-columns: repeat(4, 1fr);
 gap: 3rem;
 max-width: 1200px;
 margin: 0 auto;
 padding: 0 2rem;
 @media (max-width: 1024px) {
   grid-template-columns: repeat(2, 1fr);
 }
 @media (max-width: 480px) {
   grid-template-columns: 1fr;
   gap: 2rem;
 }
`;

const TeamCard = styled(motion.div)`
 background: white;
 padding: 2rem;
 border-radius: 10px;
 box-shadow: 0 4px 6px rgba(0,0,0,0.1);
 display: flex;
 flex-direction: column;
 align-items: center;
 justify-content: center;
 min-height: 250px;
 transition: all 0.3s ease;
 &:hover {
   transform: translateY(-5px);
   box-shadow: 0 8px 12px rgba(0,0,0,0.15);
 }
 @media (max-width: 768px) {
   min-height: 200px;
 }
 img {
   width: 120px;
   height: 120px;
   object-fit: contain;
   margin-bottom: 1.5rem;
   transition: transform 0.3s ease;
   &:hover {
     transform: scale(1.1);
   }
   @media (max-width: 768px) {
     width: 100px;
     height: 100px;
   }
 }
 p {
   color: #214592;
   font-weight: 600;
   font-size: 1rem;
   text-align: center;
 }
`;

const CaptainsGrid = styled(motion.div)`
 display: grid;
 grid-template-columns: repeat(4, 1fr);
 gap: 3rem;
 max-width: 1200px;
 margin: 0 auto;
 padding: 0 2rem;
 @media (max-width: 1024px) {
   grid-template-columns: repeat(2, 1fr);
 }
 @media (max-width: 480px) {
   grid-template-columns: 1fr;
 }
`;

const CaptainsSection = styled.section`
  width: 100%;
  padding: 5rem 0;
  background: url(${bhojpuribackground_3});
  background-size: cover;
  background-position: center;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(180deg,
      rgba(255, 255, 255, 1) 0%,
      rgba(255, 246, 214, 0.9) 20%,
      rgba(255, 182, 193, 0.9) 60%,
      rgba(147, 112, 219, 0.95) 100%
    );
  }
`;

const CaptainsSwiper = styled(Swiper)`
  max-width: 1400px;
  margin: 0 auto;
  padding: 20px;

  .swiper-button-next,
  .swiper-button-prev {
    width: 50px;
    height: 50px;
    color: #214592;
    background: rgba(255, 255, 255, 0.9);
    border-radius: 50%;
    
    &::after {
      font-size: 24px;
    }

    &:hover {
      background: white;
    }
  }

  .swiper-button-prev {
    left: 10px;
  }

  .swiper-button-next {
    right: 10px;
  }
`;

const CaptainCard = styled(motion.div)`
  text-align: center;
  padding: 2rem;
  
  img {
    width: 250px;
    height: 300px;
    object-fit: cover;
    border-radius: 10px;
    margin-bottom: 1.5rem;
    background: radial-gradient(circle at center, rgba(255, 255, 0, 0.3), transparent);
  }

  h3 {
    color: #214592;
    font-size: 1.5rem;
    font-weight: bold;
    margin: 1rem 0 0.5rem;
    text-transform: uppercase;
  }

  p {
    color: #214592;
    font-size: 1rem;
    text-transform: uppercase;
  }
`;

const InfoSection = styled.section`
 position: relative;
 background-image: url(${cclbackground});
 background-size: cover;
 background-position: center;
 padding: 8rem 0;
 width: 100%;
 &::before {
   content: '';
   position: absolute;
   inset: 0;
   background: rgba(0,0,0,0.4);
 }
 @media (max-width: 768px) {
   padding: 4rem 0;
 }
`;

const StyledSwiper = styled(Swiper)`
 width: 100%;
 height: 100%;
 .swiper-button-next {
   right: 15rem;
 }
 .swiper-button-prev {
   left:15rem;
 }
 .swiper-button-next, .swiper-button-prev {
   color: white;
   &::after {
     font-size: 2rem;
   }
   @media (max-width: 768px) {
     display: none;
   }
 }
`;

const containerVariants = {
 hidden: { opacity: 0 },
 visible: {
   opacity: 1,
   transition: {
     staggerChildren: 0.2
   }
 }
};

const cardVariants = {
 hidden: { 
   opacity: 0,
   x: i => i % 2 === 0 ? -50 : 50,
   y: 20
 },
 visible: {
   opacity: 1,
   x: 0,
   y: 0,
   transition: {
     type: "spring",
     damping: 12
   }
 }
};

const HomePage = () => {
 const teams = [
   { img: bengal, name: 'BENGAL TIGERS' },
   { img: chennai, name: 'CHENNAI RHINOS' },
   { img: kerala, name: 'C3 KERALA STRIKERS' },
   { img: mumbai, name: 'MUMBAI HEROES' },
   { img: bhojpuri, name: 'BHOJPURI DABANGGS' },
   { img: karnataka, name: 'KARNATAKA BULLDOZERS' },
   { img: punjab, name: 'PUNJAB DE SHER' },
   { img: telugu, name: 'TELUGU WARRIORS' }
 ];

 const captains = [
   { img: Akhil, name: 'AKHIL AKKINENI', team: 'TELUGU WARRIORS' },
   { img: Sudeep, name: 'SUDEEP KICHCHA', team: 'KARNATAKA BULLDOZERS' },
   { img: indrajith, name: 'INDRAJITH SUKUMARAN', team: 'C3 KERALA STRIKERS' },
   { img: AryaCaptain, name: 'AryaCaptain', team: 'Chennai Rhinos' },
   { img: bhojpuri_3, name: 'Manoj Twari', team: 'Bhojpuri Dabanggs' },
   { img: jisshu, name: 'Jisshu Sengupta', team: 'Bengal Tigers' },
   { img: mumai_3, name: 'Riteish Deshmukh', team: 'MUMBAI HEROES' },
   { img: punjab_3, name: 'SONU SOOD', team: 'PUNJAB DE SHER' },
 ];

 const carouselImages = Array(4).fill(CCLWhite);

return (
  <PageContainer>
    <HeroSection>
      <motion.img
        src={Januaryonwards}
        alt="January 31st 2025 Onwards"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      />
    </HeroSection>

    <TeamsSection>
      <SectionTitle>
        <motion.img
          src={cclteams}
          alt="CCL 2025 Teams"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        />
      </SectionTitle>
      <TeamsGrid
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {teams.map((team, index) => (
          <TeamCard
            key={team.name}
            custom={index}
            variants={cardVariants}
            whileHover={{ scale: 1.05 }}
          >
            <img src={team.img} alt={team.name} />
            <p>{team.name}</p>
          </TeamCard>
        ))}
      </TeamsGrid>
    </TeamsSection>

    <CaptainsSection>
  <SectionTitle>
    <motion.img
      src={teamCaptain}
      alt="Team Captains"
      initial={{ opacity: 0, y: -20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    />
  </SectionTitle>
  
  <CaptainsSwiper
    modules={[Navigation, Autoplay]}
    navigation
    autoplay={{ delay: 3000, disableOnInteraction: false }}
    loop={true}
    spaceBetween={30}
    slidesPerView={4}
    breakpoints={{
      320: {
        slidesPerView: 1,
        spaceBetween: 20
      },
      640: {
        slidesPerView: 2,
        spaceBetween: 20
      },
      968: {
        slidesPerView: 3,
        spaceBetween: 30
      },
      1200: {
        slidesPerView: 4,
        spaceBetween: 30
      }
    }}
  >
    {captains.map((captain, index) => (
      <SwiperSlide key={captain.name}>
        <CaptainCard
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.2 }}
        >
          <motion.img
            src={captain.img}
            alt={captain.name}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          />
          <motion.h3
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            {captain.name}
          </motion.h3>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            {captain.team}
          </motion.p>
        </CaptainCard>
      </SwiperSlide>
    ))}
  </CaptainsSwiper>
</CaptainsSection>

    <InfoSection>
      <SectionContainer>
        <StyledSwiper
          modules={[Navigation, Autoplay]}
          navigation
          autoplay={{ delay: 2000 }}
          loop
          slidesPerView={1}
        >
          {carouselImages.map((image, index) => (
            <SwiperSlide key={index}>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                style={{ textAlign: 'center' }}
              >
                <img
                  src={image}
                  alt="CCL Logo"
                  style={{ width: '200px', marginBottom: '2rem' }}
                />
                <h2 style={{
                  fontSize: '2rem',
                  fontWeight: 'bold',
                  color: 'white',
                  position: 'relative'
                }}>
                  EVERYTHING YOU NEED TO KNOW
                </h2>
              </motion.div>
            </SwiperSlide>
          ))}
        </StyledSwiper>
      </SectionContainer>
    </InfoSection>
  </PageContainer>
);
};

export default HomePage;