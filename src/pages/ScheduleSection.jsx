import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import excitinglogo from '../assets/excitinglogo.png';
import schedule from '../assets/schedule.png';
import schedulebackground from '../assets/schedulebackground.png';

const ScheduleContainer = styled.section`
  background: url(${schedulebackground}) center;
  background-size: cover;
  padding: 40px 20px;
  min-height: 600px;
  position: relative;
`;

const Logo = styled.img`
  position: absolute;
  top: 20px;
  right: 20px;
  width: 120px;
  height: auto;
`;

const ScheduleTitle = styled(motion.h2)`
  font-size: 64px;
  color: #FFD700;
  text-align: right;
  margin-bottom: 40px;
  font-weight: bold;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
`;

const ScheduleGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
  max-width: 1200px;
  margin: 0 auto;
  color: white;
`;

const MatchRow = styled(motion.div)`
  display: flex;
  justify-content: space-between;
  padding: 10px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
`;

const ScheduleSection = () => {
  return (
    <ScheduleContainer>
      <Logo src={excitinglogo} alt="CCL Logo" />
      <ScheduleTitle
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        SCHEDULE
      </ScheduleTitle>
      <ScheduleGrid>
        {/* Add schedule data here */}
      </ScheduleGrid>
    </ScheduleContainer>
  );
};

export default ScheduleSection;