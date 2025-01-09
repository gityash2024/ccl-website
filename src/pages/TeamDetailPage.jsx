import React from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { motion } from 'framer-motion';


const TeamDetailPage = () => {
  const { teamId } = useParams();

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Team Details</h1>
      <div className="grid gap-6">
        {/* Team details content will go here */}
      </div>
    </div>
  );
};

export default TeamDetailPage;