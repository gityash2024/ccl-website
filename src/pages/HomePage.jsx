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
  width: 80vw;
  margin: 0 auto;
  overflow: hidden;
`;

const HeroSection = styled.section`
  position: relative;
  height: 80vh;
  width: 100%;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  padding-bottom: 4rem;
  background-image: url(${background});
  background-size: cover;
  background-position: center;
  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(to top, rgba(0,0,0,0.5), transparent);
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
`;

const SectionTitle = styled.div`
  text-align: center;
  position: relative;
  margin-bottom: 4rem;
  h2 {
    font-size: 2.25rem;
    font-weight: bold;
    color: #214592;
    display: inline-block;
    padding: 0 2rem;
    background: white;
    position: relative;
    z-index: 2;
  }
  &::before {
    content: '';
    position: absolute;
    left: 0;
    right: 0;
    top: 50%;
    height: 2px;
    background: #214592;
    z-index: 1;
  }
`;

const TeamsGrid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;
  align-items: center;
`;

const TeamCard = styled(motion.div)`
  text-align: center;
  padding: 1rem;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  img {
    width: 100%;
    max-width: 150px;
    height: auto;
    margin-bottom: 1rem;
  }
  p {
    color: #214592;
    font-weight: 600;
    font-size: 1rem;
  }
`;

const CaptainsSection = styled.section`
  background-image: url(${teamcaptains});
  background-size: cover;
  background-position: center;
  padding: 5rem 0;
`;

const CaptainsGrid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;
  align-items: center;
`;

const CaptainCard = styled(motion.div)`
  text-align: center;
  .image-container {
    position: relative;
    overflow: hidden;
    border-radius: 0.5rem;
    margin-bottom: 1rem;
    aspect-ratio: 1;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: transform 0.3s ease;
    }
    &:hover img {
      transform: scale(1.1);
    }
  }
  h3 {
    color: white;
    font-weight: bold;
    margin-bottom: 0.25rem;
  }
  p {
    color: #cccccc;
    font-size: 0.875rem;
  }
`;

const InfoSection = styled.section`
  position: relative;
  background-image: url(${cclbackground});
  background-size: cover;
  background-position: center;
  padding: 8rem 0;
  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: rgba(0,0,0,0.4);
  }
`;

const StyledSwiper = styled(Swiper)`
  width: 100%;
  height: 100%;
  .swiper-button-next, .swiper-button-prev {
    color: white;
  }
`;

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
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          style={{
            fontSize: '2.5rem',
            fontWeight: 'bold',
            color: 'white',
            textShadow: '2px 2px 4px rgba(0,0,0,0.5)',
            textAlign: 'center',
            position: 'relative'
          }}
        >
        </motion.h1>
      </HeroSection>

      <TeamsSection>
        <SectionContainer>
          <SectionTitle>
            <motion.h2
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              CCL 2025 TEAMS
            </motion.h2>
          </SectionTitle>

          <TeamsGrid
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              visible: { transition: { staggerChildren: 0.1 } }
            }}
          >
            {teams.map((team, index) => (
              <TeamCard
                key={team.name}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 }
                }}
                whileHover={{ scale: 1.05 }}
              >
                <img src={team.img} alt={team.name} />
                <p>{team.name}</p>
              </TeamCard>
            ))}
          </TeamsGrid>
        </SectionContainer>
      </TeamsSection>

      <CaptainsSection>
        <SectionContainer>
          <SectionTitle>
            <motion.h2
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              style={{ color: 'white', background: 'transparent' }}
            >
              TEAM CAPTAINS
            </motion.h2>
          </SectionTitle>

          <CaptainsGrid
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              visible: { transition: { staggerChildren: 0.1 } }
            }}
          >
            {captains.map((captain, index) => (
              <CaptainCard
                key={captain.name}
                variants={{
                  hidden: { opacity: 0, x: index % 2 === 0 ? -50 : 50 },
                  visible: { opacity: 1, x: 0 }
                }}
              >
                <div className="image-container">
                  <img src={captain.img} alt={captain.name} />
                </div>
                <h3>{captain.name}</h3>
                <p>{captain.team}</p>
              </CaptainCard>
            ))}
          </CaptainsGrid>
        </SectionContainer>
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