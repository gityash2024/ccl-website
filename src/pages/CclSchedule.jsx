import React from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { motion } from 'framer-motion';
// import CCL2025SCHEDULE from '../assets/CCL2025SCHEDULE.png';
// import JanuaryFriday from '../assets/JanuaryFriday.png';
// import HYDERABAAD from '../assets/HYDERABAAD.png';
// import vs from '../assets/vs.png';
// import sixtime from '../assets/sixtime.png';



const CclSchedule = () => {
  const { teamId } = useParams();

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">CclSchedule</h1>
      <div className="grid gap-6">
        {/* Team details content will go here */}
      </div>
    </div>
  );
};

export default CclSchedule;