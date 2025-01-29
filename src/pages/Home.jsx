import React from 'react';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, EffectFade, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';
import ScrollToTop from '../components/ScrollToTop';
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
import corousel1 from '../assets/corousel1.png';
import corousel2 from '../assets/corousel2.png';

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
    { img: AryaCaptain, name: 'ARYA', team: 'CHENNAI RHINOS' },
    { img: bhojpuri_3, name: 'MANOJ TIWARI', team: 'BHOJPURI DABANGGS' },
    { img: jisshu, name: 'JISSHU SENGUPTA', team: 'BENGAL TIGERS' },
    { img: mumai_3, name: 'RITEISH DESHMUKH', team: 'MUMBAI HEROES' },
    { img: Sonu, name: 'SONU SOOD', team: 'PUNJAB DE SHER' }
  ];

  const banners = [
    { img: cclbackground, title: 'EVERYTHING YOU NEED TO KNOW' },
    { img: corousel1, title: 'WITNESS THE EXCITEMENT' },
    { img: corousel2, title: 'JOIN THE CELEBRATION' }
  ];

  return (
    <div className="min-h-screen bg-white overflow-hidden">
      <div className="relative h-screen w-full bg-cover bg-center" style={{ backgroundImage: `url(${background})` }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="absolute inset-0 flex items-center justify-center px-4 md:px-6 lg:px-8"
        >
        </motion.div>
      </div>

      <div className="py-16 md:py-24 bg-white">
        <div className="relative flex items-center justify-center gap-8 mb-16">
          <div className="hidden md:block h-0.5 bg-[#214592] flex-1 max-w-sm"></div>
          <motion.img
            src={cclteams}
            alt="CCL 2025 Teams"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-sm w-full"
          />
          <div className="hidden md:block h-0.5 bg-[#214592] flex-1 max-w-sm"></div>
        </div>

        <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 max-w-7xl mx-auto px-4 md:px-6">
          {teams.map((team, index) => (
            <motion.div
              key={team.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-8 rounded-lg shadow-lg flex flex-col items-center gap-6 hover:transform hover:-translate-y-2 transition-transform duration-300"
            >
              <img src={team.img} alt={team.name} className="w-32 h-32 object-contain" />
              <p className="text-[#214592] font-semibold text-center">{team.name}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <div className="py-16 md:py-24 relative bg-cover bg-center" style={{ backgroundImage: `url(${bhojpuribackground_3})` }}>
        <div className="absolute inset-0 bg-gradient-to-b from-white via-[rgba(255,246,214,0.9)] to-[rgba(147,112,219,0.95)]"></div>
        
        <div className="relative">
          <div className="flex items-center justify-center gap-8 mb-16">
            <div className="hidden md:block h-0.5 bg-[#214592] flex-1 max-w-sm"></div>
            <motion.img
              src={teamCaptain}
              alt="Team Captains"
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-sm w-full"
            />
            <div className="hidden md:block h-0.5 bg-[#214592] flex-1 max-w-sm"></div>
          </div>

          <Swiper
            modules={[Navigation, Autoplay, Pagination]}
            navigation
            pagination={{ clickable: true }}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            loop={true}
            effect="coverflow"
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={1}
            breakpoints={{
              768: { slidesPerView: 3 }
            }}
            speed={800}
            className="max-w-6xl mx-auto px-4 md:px-8"
          >
            {captains.map((captain) => (
              <SwiperSlide key={captain.name}>
                <motion.div className="flex flex-col items-center p-8 text-center">
                  <motion.img
                    src={captain.img}
                    alt={captain.name}
                    whileHover={{ scale: 1.05 }}
                    className="w-64 h-80 object-cover rounded-lg shadow-xl"
                  />
                  <h3 className="text-[#214592] text-xl font-bold mt-4">{captain.name}</h3>
                  <p className="text-gray-600 text-lg mt-2">{captain.team}</p>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      <div className="h-[55vh] relative">
        <Swiper
          modules={[Autoplay, EffectFade]}
          effect="fade"
          loop
          autoplay={{ delay: 3000 }}
          speed={1000}
          className="h-full"
        >
          {banners.map((banner, index) => (
            <SwiperSlide key={index} className="h-full">
              <div className="relative h-full">
                <img src={banner.img} alt={banner.title} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center p-8">
                  <img src={CCLWhite} alt="CCL Logo" className="w-48 mb-8" />
                  <h2 className="text-white text-2xl md:text-4xl font-bold text-center">{banner.title}</h2>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <ScrollToTop />
    </div>
  );
};

export default HomePage;