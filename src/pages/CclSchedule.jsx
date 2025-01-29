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

  return (
    <div className="min-h-screen bg-[#111827]">
      <div className="relative h-screen flex items-center justify-center" style={{ backgroundImage: `url(${background})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full max-w-6xl px-4"
        >
          <img src={CCL2025SCHEDULE} alt="CCL 2025 Schedule" className="w-full max-w-4xl mx-auto" />
        </motion.div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-16 space-y-8">
        {scheduleData.map((day, dayIndex) => (
          <motion.div
            key={day.date}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: dayIndex * 0.1 }}
            className="bg-[#1F2937] rounded-xl border border-gray-800 shadow-xl overflow-hidden"
          >
            <div className="bg-gradient-to-r from-[#312E81] to-[#4C1D95] p-6">
              <div className="text-center">
                <h2 className="text-3xl font-bold text-white">{day.date}</h2>
                <h3 className="text-xl text-gray-200 mt-2">{day.venue}</h3>
              </div>
            </div>

            <div className="p-6 space-y-6">
              {day.isSemiFinals || day.isFinal ? (
                day.matches.map((match, matchIndex) => (
                  <motion.div
                    key={matchIndex}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.2 }}
                    className="text-center p-6 bg-[#374151] rounded-lg"
                  >
                    <h3 className="text-2xl font-bold text-white">{match.title}</h3>
                    <p className="text-gray-300 mt-2">{match.time}</p>
                  </motion.div>
                ))
              ) : (
                day.matches.map((match, matchIndex) => (
                  <motion.div
                    key={matchIndex}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.2 }}
                    className="bg-[#374151] rounded-lg p-6"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <div className="w-20 h-20 bg-gray-800 rounded-full p-2">
                          <img src={match.team1.logo} alt={match.team1.name} className="w-full h-full object-contain" />
                        </div>
                        <span className="text-lg font-medium text-white">{match.team1.name}</span>
                      </div>

                      <div className="flex flex-col items-center px-6">
                        <span className="text-2xl font-bold text-white">VS</span>
                        <span className="text-gray-400 mt-2 text-sm">{match.time}</span>
                      </div>

                      <div className="flex items-center space-x-4">
                        <span className="text-lg font-medium text-white">{match.team2.name}</span>
                        <div className="w-20 h-20 bg-gray-800 rounded-full p-2">
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