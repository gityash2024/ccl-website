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
import twoFebruary from '../assets/twoFebruary.png';
import keralastrikers from '../assets/keralastrikers.png';
import bengaltigers from '../assets/bengaltigers.png';
import karnatakabulldozers from '../assets/karnatakabulldozers.png';
import sevenFebruary from '../assets/sevenFebruary.png';
import kolkata from '../assets/kolkata.png';
import eightFebruary from '../assets/eightFebruary.png';
import tbc from '../assets/tbc.png';
import nineFebruary from '../assets/nineFebruary.png';
import fourthyFebruary from '../assets/fourthyFebruary.png';
import bangalore from '../assets/bangalore.png';
import fivthyFebruary from '../assets/fivthyFebruary.png';
import sixtyFebruary from '../assets/sixtyFebruary.png';
import twintytwoFebruary from '../assets/twintytwoFebruary.png';
import vizag from '../assets/vizag.png';
import semifinalone from '../assets/semifinalone.png';
import one from '../assets/one.png';
import four from '../assets/four.png';
import semifinaltwo from '../assets/semifinaltwo.png';
import two from '../assets/two.png';
import three from '../assets/three.png';
import twintythirdFebruary from '../assets/twintythirdFebruary.png';
import final from '../assets/final.png';
import semifinalonewinner from '../assets/semifinalonewinner.png';
import semifinatwowinner from '../assets/semifinalonewinner.png';

const HomeContainer = styled.div`
  width: 100%;
  overflow-x: hidden;
  background: white;
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

const HeroTitle = styled(motion.h1)`
  font-size: 48px;
  color: white;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  margin-bottom: 20px;
`;

const ScheduleContainer = styled.div`
  width: 100%;
  padding: 40px 20px;
`;

const DateSection = styled.div`
  margin-bottom: 60px;
  width: 100%;
`;

// const DateTitle = styled.div`
//   text-align: center;
//   margin-bottom: 20px;
//   img {
//     max-width: 800px;
//     width: 90%;
//     margin: 0 auto;
//   }
// `;

// const VenueTitle = styled.div`
//   text-align: center;
//   margin-bottom: 40px;
//   img {
//     max-width: 300px;
//     width: 90%;
//     margin: 0 auto;
//   }
// `;

const MatchContainer = styled.div`
  max-width: 1000px;
  margin: 0 auto 40px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
`;

const TeamLogo = styled.div`
  width: 200px;
  text-align: center;
  img {
    width: 150px;
    height: auto;
    margin-bottom: 15px;
  }
  h3 {
    color: #214592;
    font-size: 16px;
    text-transform: uppercase;
    font-weight: 500;
  }
`;

const VersusContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
  img {
    width: 100px;
  }
  .time {
    img {
      width: 200px;
    }
  }
`;

const DateTitle = styled.div`
  text-align: center;
  margin-bottom: 20px;
  position: relative;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  &::before,
  &::after {
    content: '';
    height: 1px;
    background-color: #214592;
    flex: 1;
  }

  &::before {
    margin-right: 20px;
  }

  &::after {
    margin-left: 20px;
  }

  img {
    max-width: 800px;
    width: 90%;
    margin: 0 auto;
  }
`;

const VenueTitle = styled.div`
  text-align: center;
  margin-bottom: 40px;
  img {
    max-width: 300px;
    width: 90%;
    margin: 0 auto;
  }
`;

// const SemiFinalTitle = styled.div`
//   text-align: center;
//   margin: 30px 0;
  
//   img {
//     max-width: 500px;
//     width: 90%;
//   }
// `;

const CircleNumber = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  border: 2px solid #214592;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 32px;
  color: #214592;
  background: white;
  margin: 0 auto;
`;

const FinalTitle = styled.div`
  text-align: center;
  margin: 30px 0;
  
  img {
    max-width: 400px;
    width: 90%;
  }
`;

// const WinnerCircle = styled.div`
//   width: 150px;
//   height: 150px;
//   border-radius: 50%;
//   border: 2px solid #214592;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   text-align: center;
//   font-size: 18px;
//   color: #214592;
//   background: white;
//   margin: 0 auto;
//   padding: 10px;
//   line-height: 1.3;
// `;

// const SemiFinalTitle = styled.div`
//   text-align: center;
//   margin: 30px 0;
  
//   img {
//     max-width: 500px;
//     width: 90%;
//   }
// `;

const SemiFinalSection = styled.div`
  position: relative;
  margin-bottom: 40px;
`;

// const CircleContainer = styled.div`
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   max-width: 800px;
//   margin: 20px auto;
//   padding: 0 20px;
// `;

// const NumberCircle = styled.div`
//   width: 150px;
//   height: 150px;
//   border-radius: 50%;
//   border: 2px solid #214592;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   font-size: 48px;
//   color: #214592;
//   background: white;
//   box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.1);
//   position: relative;

//   &::after {
//     content: '';
//     position: absolute;
//     width: 100%;
//     height: 100%;
//     border-radius: 50%;
//     box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
//     z-index: -1;
//   }
// `;

const VersusSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;

  img {
    height: 40px;
  }

  .time {
    img {
      height: auto;
      width: 200px;
    }
  }
`;

const CircleContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  max-width: 1000px;
  margin: 30px auto;
  padding: 0 20px;
`;

const NumberCircle = styled.div`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  border: 2px solid #214592;
  background: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 48px;
  color: #214592;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const SemiFinalTitle = styled.div`
  text-align: center;
  margin: 30px 0;
  img {
    max-width: 500px;
    width: 90%;
  }
`;

const SemiFinalBlock = styled.div`
  margin-bottom: 40px;
`;

const SemiFinalTitleImage = styled(motion.img)`
  width: 100%;
  max-width: 600px;
  display: block;
  margin: 0 auto 30px;
`;

const MatchCircles = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 800px;
  margin: 0 auto;
  padding: 0 20px;
`;


const FinalBlock = styled.div`
  margin-bottom: 40px;
`;

const FinalTitleImage = styled(motion.img)`
  width: 100%;
  max-width: 400px;
  display: block;
  margin: 0 auto 30px;
`;

const WinnerCircle = styled.div`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  border: 2px solid #214592;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  font-size: 24px;
  line-height: 1.2;
  color: #214592;
  background: white;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 20px;
`;

const CclSchedule = () => {
  const scheduleData = [
    {
      date: JanuaryFriday,
      venue: HYDERABAAD,
      matches: [
        {
          team1: { logo: mumbaiheros, name: "MUMBAI HEROES" },
          team2: { logo: teluguwarriors, name: "TELUGU WARRIORS" },
          time: sixtoten
        }
      ]
    },
    {
      date: onefebruary,
      venue: HYDERABAAD,
      matches: [
        {
          team1: { logo: bhojpuridabangge, name: "BHOJPURI DABANGGS" },
          team2: { logo: punjabdesher, name: "PUNJAB DE SHER" },
          time: twotosiz
        },
        {
          team1: { logo: chennairhinors, name: "CHENNAI RHINOS" },
          team2: { logo: mumbaiheros, name: "MUMBAI HEROES" },
          time: sixtotenthird
        }
      ]
    },
    {
      date: twoFebruary,
      venue: HYDERABAAD,
      matches: [
        {
          team1: { logo: keralastrikers, name: "C3 KERALA STRIKERS" },
          team2: { logo: bengaltigers, name: "BENGAL TIGERS" },
          time: twotosiz
        },
        {
          team1: { logo: teluguwarriors, name: "TELUGU WARRIORS" },
          team2: { logo: karnatakabulldozers, name: "KARNATAKA BULLDOZERS" },
          time: sixtotenthird
        }
      ]
    },
    {
      date: sevenFebruary,
      venue: kolkata,
      matches: [
        {
          team1: { logo: mumbaiheros, name: "MUMBAI HEROES" },
          team2: { logo: bengaltigers, name: "BENGAL TIGERS" },
          time: sixtotenthird
        }
      ]
    },
    {
      date: eightFebruary,
      venue: tbc,
      matches: [
        {
          team1: { logo: teluguwarriors, name: "TELUGU WARRIORS" },
          team2: { logo: punjabdesher, name: "PUNJAB DE SHER" },
          time: twotosiz
        },
        {
          team1: { logo: chennairhinors, name: "CHENNAI RHINOS" },
          team2: { logo: keralastrikers, name: "C3 KERALA STRIKERS" },
          time: sixtotenthird
        }
      ]
    },
    {
      date: nineFebruary,
      venue: tbc,
      matches: [
        {
          team1: { logo: bengaltigers, name: "BENGAL TIGERS" },
          team2: { logo: punjabdesher, name: "PUNJAB DE SHER" },
          time: twotosiz
        },
        {
          team1: { logo: chennairhinors, name: "CHENNAI RHINOS" },
          team2: { logo: karnatakabulldozers, name: "KARNATAKA BULLDOZERS" },
          time: sixtotenthird
        }
      ]
    },
    {
      date: fourthyFebruary,
      venue: bangalore,
      matches: [
        {
          team1: { logo: bhojpuridabangge, name: "BHOJPURI DABANGGS" },
          team2: { logo: keralastrikers, name: "KERALA STRIKERS" },
          time: twotosiz
        },
        {
          team1: { logo: karnatakabulldozers, name: "KARNATAKA BULLDOZERS" },
          team2: { logo: bengaltigers, name: "BENGAL TIGERS" },
          time: sixtotenthird
        }
      ]
    },
    {
      date: fivthyFebruary,
      venue: bangalore,
      matches: [
        {
          team1: { logo: teluguwarriors, name: "TELUGU WARRIORS" },
          team2: { logo: keralastrikers, name: "KERALA STRIKERS" },
          time: twotosiz
        },
        {
          team1: { logo: karnatakabulldozers, name: "KARNATAKA BULLDOZERS" },
          team2: { logo: bhojpuridabangge, name: "BHOJPURI DABANGGS" },
          time: sixtotenthird
        }
      ]
    },
    {
      date: sixtyFebruary,
      venue: bangalore,
      matches: [
        {
          team1: { logo: chennairhinors, name: "CHENNAI RHINOS" },
          team2: { logo: punjabdesher, name: "PUNJAB DE SHER" },
          time: twotosiz
        },
        {
          team1: { logo: mumbaiheros, name: "MUMBAI HEROES" },
          team2: { logo: bhojpuridabangge, name: "BHOJPURI DABANGGS" },
          time: sixtotenthird
        }
      ]
    },{
      date: twintytwoFebruary,
      venue: vizag,
      isSemiFinals: true,
      matches: [
        {
          titleImage: semifinalone,
          team1: "1",
          team2: "4",
          time: twotosiz
        },
        {
          titleImage: semifinaltwo,
          team1: "2",
          team2: "3",
          time: sixtotenthird
        }
      ]
    },
    
    {
      date: twintythirdFebruary,
      venue: vizag,
      isFinal: true,
      matches: [
        {
          titleImage: final,
          team1: "SEMI FINAL 1 WINNER",
          team2: "SEMI FINAL 2 WINNER",
          time: sixtotenthird
        }
      ]
    }
    
  ];
  

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
            alt="CCL 2025 Schedule"
            style={{ maxWidth: '600px', margin: '0 auto', display: 'block' }}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
          />
        </HeroTitle>
      </HeroSection>

      <ScheduleContainer>
        {scheduleData.map((dateSection, dateIndex) => (
          <DateSection key={dateIndex}>
            <DateTitle>
              <motion.img
                src={dateSection.date}
                alt="Date"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: dateIndex * 0.2 }}
              />
            </DateTitle>
            <VenueTitle>
              <motion.img
                src={dateSection.venue}
                alt="Venue"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: dateIndex * 0.2 + 0.1 }}
              />
            </VenueTitle>
            {dateSection.isSemiFinals ? (
              <>
                {dateSection.matches.map((match, index) => (
                  <SemiFinalBlock key={index}>
                    <SemiFinalTitleImage
                      src={match.titleImage}
                      alt={`Semi Final ${index + 1}`}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6 }}
                    />
                    <MatchCircles>
                      <NumberCircle>{match.team1}</NumberCircle>
                      <VersusSection>
                        <motion.img
                          src={vs}
                          alt="VS"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: 0.2 }}
                        />
                        <div className="time">
                          <motion.img
                            src={match.time}
                            alt="Time"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.3 }}
                          />
                        </div>
                      </VersusSection>
                      <NumberCircle>{match.team2}</NumberCircle>
                    </MatchCircles>
                  </SemiFinalBlock>
                ))}
              </>
            ) : dateSection.isFinal ? (
              <>
                {dateSection.matches.map((match, index) => (
                  <FinalBlock key={index}>
                    <FinalTitleImage
                      src={match.titleImage}
                      alt="Final"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6 }}
                    />
                    <MatchCircles>
                      <WinnerCircle>{match.team1}</WinnerCircle>
                      <VersusSection>
                        <motion.img
                          src={vs}
                          alt="VS"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: 0.2 }}
                        />
                        <div className="time">
                          <motion.img
                            src={match.time}
                            alt="Time"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.3 }}
                          />
                        </div>
                      </VersusSection>
                      <WinnerCircle>{match.team2}</WinnerCircle>
                    </MatchCircles>
                  </FinalBlock>
                ))}
              </>
            ) : (
              dateSection.matches.map((match, matchIndex) => (
                <MatchContainer key={matchIndex}>
                  <TeamLogo>
                    <motion.img
                      src={match.team1.logo}
                      alt={match.team1.name}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: matchIndex * 0.2 + 0.2 }}
                    />
                    <h3>{match.team1.name}</h3>
                  </TeamLogo>
                  <VersusContainer>
                    <motion.img
                      src={vs}
                      alt="VS"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: matchIndex * 0.2 + 0.3 }}
                    />
                    <div className="time">
                      <motion.img
                        src={match.time}
                        alt="Match Time"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: matchIndex * 0.2 + 0.4 }}
                      />
                    </div>
                  </VersusContainer>
                  <TeamLogo>
                    <motion.img
                      src={match.team2.logo}
                      alt={match.team2.name}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: matchIndex * 0.2 + 0.2 }}
                    />
                    <h3>{match.team2.name}</h3>
                  </TeamLogo>
                </MatchContainer>
              ))
            )}
          </DateSection>
        ))}
      </ScheduleContainer>
    </HomeContainer>
  );
};

export default CclSchedule;