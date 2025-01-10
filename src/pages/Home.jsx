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

const PageContainer = styled.div`
 width: 100%;
 overflow: hidden;
`;

const HeroSection = styled.section`
 position: relative;
 height: 80vh;
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
 &::before {
   content: '';
   position: absolute;
   inset: 0;
   background: linear-gradient(to top, rgba(0,0,0,0.5), rgba(0,0,0,0.2));
   z-index: 1;
 }
 &:hover {
   transform: scale(1.01);
   &::before {
     background: linear-gradient(to top, rgba(0,0,0,0.6), rgba(0,0,0,0.3));
   }
 }
 @media (max-width: 768px) {
   height: 60vh;
   background-size: cover;
 }
 h1 {
   color: white;
   font-size: 3rem;
   font-weight: bold;
   text-align: center;
   position: relative;
   z-index: 2;
   text-shadow: 2px 2px 4px rgba(0,0,0,0.5);
   transition: all 0.3s ease;
   &:hover {
     transform: scale(1.05);
     text-shadow: 3px 3px 6px rgba(0,0,0,0.7);
   }
   @media (max-width: 768px) {
     font-size: 2rem;
     padding: 0 1rem;
   }
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

const SectionTitle = styled.div`
 text-align: center;
 position: relative;
 margin-bottom: 4rem;
 display: flex;
 align-items: center;
 justify-content: center;
 gap: 2rem;
 padding: 0 2rem;
 h2 {
   font-size: 2.25rem;
   font-weight: bold;
   color: #214592;
   white-space: nowrap;
   @media (max-width: 768px) {
     font-size: 1.75rem;
   }
 }
 &::before, &::after {
   content: '';
   height: 2px;
   background: #214592;
   flex: 1;
   max-width: 200px;
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

const CaptainsSection = styled.section`
 background-image: url(${teamcaptains});
 background-size: cover;
 background-position: center;
 padding: 5rem 0;
 width: 100%;
 @media (max-width: 768px) {
   padding: 3rem 0;
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

const CaptainCard = styled(motion.div)`
 background: rgba(0,0,0,0.5);
 padding: 2rem;
 border-radius: 10px;
 text-align: center;
 height: 100%;
 transition: all 0.3s ease;
 &:hover {
   transform: translateY(-5px);
   background: rgba(0,0,0,0.7);
 }
 .image-container {
   width: 200px;
   height: 200px;
   margin: 0 auto 1.5rem;
   border-radius: 10px;
   overflow: hidden;
   @media (max-width: 768px) {
     width: 160px;
     height: 160px;
   }
   img {
     width: 100%;
     height: 100%;
     object-fit: cover;
     object-position: top;
     transition: transform 0.3s ease;
     &:hover {
       transform: scale(1.1);
     }
   }
 }
 h3 {
   color: white;
   font-weight: bold;
   margin-bottom: 0.5rem;
 }
 p {
   color: white;
   font-size: 0.875rem;
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
   right: 2rem;
 }
 .swiper-button-prev {
   left: 2rem;
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
   { img: Sonu, name: 'SONU SOOD', team: 'PUNJAB DE SHER' }
 ];

 const carouselImages = Array(4).fill(CCLWhite);

 return (
   <PageContainer>
     <HeroSection>
       
     </HeroSection>

     <TeamsSection>
       <SectionTitle>
         <motion.h2
           initial={{ opacity: 0, y: -20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
         >
           CCL 2025 TEAMS
         </motion.h2>
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
         <motion.h2
           initial={{ opacity: 0, y: -20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           style={{ color: '#214592' }}
         >
           TEAM CAPTAINS
         </motion.h2>
       </SectionTitle>
       <CaptainsGrid
         variants={containerVariants}
         initial="hidden"
         whileInView="visible"
         viewport={{ once: true }}
       >
         {captains.map((captain, index) => (
           <CaptainCard
             key={captain.name}
             custom={index}
             variants={cardVariants}
             whileHover={{ scale: 1.02 }}
           >
             <div className="image-container">
               <img src={captain.img} alt={captain.name} />
             </div>
             <h3>{captain.name}</h3>
             <p>{captain.team}</p>
           </CaptainCard>
         ))}
       </CaptainsGrid>
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