import React from 'react';
import { motion } from 'framer-motion';
import background from '../assets/background.png';
import CCL2025SCHEDULE from '../assets/CCL2025SCHEDULE.png';
import mumbaiheros from '../assets/mumbaiheros.png';
import teluguwarriors from '../assets/teluguwarriors.png';
import bhojpuridabangge from '../assets/bhojpuridabangge.png';
import punjabdesher from '../assets/punjabdesher.png';
import chennairhinors from '../assets/chennairhinors.png';
import keralastrikers from '../assets/keralastrikers.png';
import bengaltigers from '../assets/bengaltigers.png';
import karnatakabulldozers from '../assets/karnatakabulldozers.png';

const CclSchedule = () => {
  const scheduleData = [
    {
      date: '8th Feb',
      venue: 'BENGALURU',
      matches: [
        {
          team1: { logo: chennairhinors, name: 'CHENNAI RHINOS' },
          team2: { logo: bengaltigers, name: 'BENGAL TIGERS' },
          time: '2:00 PM to 6:00 PM'
        },
        {
          team1: { logo: karnatakabulldozers, name: 'KARNATAKA BULLDOZERS' },
          team2: { logo: teluguwarriors, name: 'TELUGU WARRIORS' },
          time: '6:30 PM to 10:30 PM'
        }
      ]
    },
    {
      date: '9th Feb',
      venue: 'DELHI',
      matches: [
        {
          team1: { logo: bengaltigers, name: 'BENGAL TIGERS' },
          team2: { logo: punjabdesher, name: 'PUNJAB DE SHER' },
          time: '2:00 PM to 6:00 PM'
        },
        {
          team1: { logo: mumbaiheros, name: 'MUMBAI HEROES' },
          team2: { logo: bhojpuridabangge, name: 'BHOJPURI DABANGGS' },
          time: '6:30 PM to 10:30 PM'
        }
      ]
    },
    {
      date: '14th Feb',
      venue: 'HYDERABAD',
      matches: [
        {
          team1: { logo: chennairhinors, name: 'CHENNAI RHINOS' },
          team2: { logo: karnatakabulldozers, name: 'KARNATAKA BULLDOZERS' },
          time: '2:00 PM to 6:00 PM'
        },
        {
          team1: { logo: bhojpuridabangge, name: 'BHOJPURI DABANGGS' },
          team2: { logo: teluguwarriors, name: 'TELUGU WARRIORS' },
          time: '6:30 PM to 10:30 PM'
        }
      ]
    },
    {
      date: '15th Feb',
      venue: 'HYDERABAD',
      matches: [
        {
          team1: { logo: mumbaiheros, name: 'MUMBAI HEROES' },
          team2: { logo: karnatakabulldozers, name: 'KARNATAKA BULLDOZERS' },
          time: '2:00 PM to 6:00 PM'
        },
        {
          team1: { logo: chennairhinors, name: 'CHENNAI RHINOS' },
          team2: { logo: teluguwarriors, name: 'TELUGU WARRIORS' },
          time: '6:30 PM to 10:30 PM'
        }
      ]
    },
    {
      date: '16th Feb',
      venue: 'CUTTACK',
      matches: [
        {
          team1: { logo: punjabdesher, name: 'PUNJAB DE SHER' },
          team2: { logo: bhojpuridabangge, name: 'BHOJPURI DABANGGS' },
          time: '2:00 PM to 6:00 PM'
        },
        {
          team1: { logo: mumbaiheros, name: 'MUMBAI HEROES' },
          team2: { logo: bengaltigers, name: 'BENGAL TIGERS' },
          time: '6:30 PM to 10:30 PM'
        }
      ]
    },
    {
      date: '22nd Feb',
      venue: 'SURAT',
      matches: [
        {
          team1: { logo: bhojpuridabangge, name: 'BHOJPURI DABANGGS' },
          team2: { logo: chennairhinors, name: 'CHENNAI RHINOS' },
          time: '2:00 PM to 6:00 PM'
        },
        {
          team1: { logo: punjabdesher, name: 'PUNJAB DE SHER' },
          team2: { logo: karnatakabulldozers, name: 'KARNATAKA BULLDOZERS' },
          time: '6:30 PM to 10:30 PM'
        }
      ]
    },
    {
      date: '23rd Feb',
      venue: 'SURAT',
      matches: [
        {
          team1: { logo: bengaltigers, name: 'BENGAL TIGERS' },
          team2: { logo: teluguwarriors, name: 'TELUGU WARRIORS' },
          time: '2:00 PM to 6:00 PM'
        },
        {
          team1: { logo: mumbaiheros, name: 'MUMBAI HEROES' },
          team2: { logo: punjabdesher, name: 'PUNJAB DE SHER' },
          time: '6:30 PM to 10:30 PM'
        }
      ]
    },
    {
      date: '1st March',
      venue: 'TBC',
      isSemiFinals: true,
      matches: [
        {
          title: 'Semi Final 1: 1 vs 4',
          time: '2:00 PM to 6:00 PM'
        },
        {
          title: 'Semi Final 2: 2 vs 3',
          time: '6:30 PM to 10:30 PM'
        }
      ]
    },
    {
      date: '2nd March',
      venue: 'TBC',
      isFinal: true,
      matches: [
        {
          title: 'FINAL',
          time: '6:30 PM to 10:30 PM'
        }
      ]
    }
  ];

  const pageVariants = {
    initial: { 
      scale: 0.8,
      opacity: 0,
      rotateX: 45,
      y: 100
    },
    visible: { 
      scale: 1,
      opacity: 1,
      rotateX: 0,
      y: 0,
      transition: {
        type: "spring",
        duration: 0.8,
        bounce: 0.3
      }
    },
    exit: { 
      scale: 0.8,
      opacity: 0,
      rotateX: -45,
      y: -100,
      transition: {
        duration: 0.6
      }
    }
  };

  const matchVariants = {
    initial: { 
      x: -20,
      opacity: 0
    },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.4
      }
    }
  };

  return (
    <div className="min-h-screen bg-[#111827] perspective-1000">
      <div className="relative h-screen w-full flex items-center justify-center bg-cover bg-center" style={{ backgroundImage: `url(${background})` }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full px-4 md:px-6 lg:px-8"
        >
          <img src={CCL2025SCHEDULE} alt="CCL 2025 Schedule" className="w-full max-w-4xl mx-auto" />
        </motion.div>
      </div>

      <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8 py-16 space-y-8">
        {scheduleData.map((day, dayIndex) => (
          <motion.div
            key={day.date}
            variants={pageVariants}
            initial="initial"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="bg-[#1F2937] rounded-xl border border-gray-800 shadow-xl overflow-hidden transform-gpu"
          >
            <motion.div 
              className="bg-gradient-to-r from-[#312E81] to-[#4C1D95] p-4 md:p-6"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <div className="text-center">
                <h2 className="text-2xl md:text-3xl font-bold text-white">{day.date}</h2>
                <h3 className="text-lg md:text-xl text-gray-200 mt-2">{day.venue}</h3>
              </div>
            </motion.div>

            <div className="p-4 md:p-6 space-y-4 md:space-y-6">
              {day.isSemiFinals || day.isFinal ? (
                day.matches.map((match, matchIndex) => (
                  <motion.div
                    key={matchIndex}
                    variants={matchVariants}
                    initial="initial"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="text-center p-4 md:p-6 bg-[#374151] rounded-lg"
                  >
                    <h3 className="text-xl md:text-2xl font-bold text-white">{match.title}</h3>
                    <p className="text-gray-300 mt-2 text-sm md:text-base">{match.time}</p>
                  </motion.div>
                ))
              ) : (
                day.matches.map((match, matchIndex) => (
                  <motion.div
                    key={matchIndex}
                    variants={matchVariants}
                    initial="initial"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="bg-[#374151] rounded-lg p-4 md:p-6"
                  >
                    <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
                      <div className="flex flex-col md:flex-row items-center md:space-x-4 space-y-2 md:space-y-0">
                        <div className="w-16 h-16 md:w-20 md:h-20 bg-gray-800 rounded-full p-2">
                          <img src={match.team1.logo} alt={match.team1.name} className="w-full h-full object-contain" />
                        </div>
                        <span className="text-base md:text-lg font-medium text-white text-center md:text-left">{match.team1.name}</span>
                      </div>

                      <div className="flex flex-col items-center px-4 md:px-6">
                        <span className="text-xl md:text-2xl font-bold text-white">VS</span>
                        <span className="text-gray-400 mt-2 text-xs md:text-sm text-center">{match.time}</span>
                      </div>

                      <div className="flex flex-col md:flex-row items-center md:space-x-4 space-y-2 md:space-y-0">
                        <span className="text-base md:text-lg font-medium text-white order-2 md:order-1 text-center md:text-right">{match.team2.name}</span>
                        <div className="w-16 h-16 md:w-20 md:h-20 bg-gray-800 rounded-full p-2 order-1 md:order-2">
                          <img src={match.team2.logo} alt={match.team2.name} className="w-full h-full object-contain" />
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default CclSchedule;