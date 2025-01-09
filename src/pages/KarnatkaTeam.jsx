import React from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import KARNATAKABULLDOZERS from '../assets/KARNATAKABULLDOZERS.png';
import karnatkateam from '../assets/karnatkateam.png';
import bhojpuribackground from '../assets/bhojpuribackground.png';
import bhojpuribackground_2 from '../assets/bhojpuribackground_2.png';
import THETEAM from '../assets/THETEAM.png'; 
import commanboll from '../assets/commanboll.png';
import karnatakabackground from '../assets/karnatakabackground.png';
import karnatkateowner from '../assets/karnatkateowner.png';
import karnatkateabassadors from '../assets/karnatkateabassadors.png';
import karnatkateabassadors_1 from '../assets/karnatkateabassadors_1.png';
// import THETEAM from '../assets/THETEAM.png';
import karnatka_1 from '../assets/karnatka_1.png';
import karnatka_2 from '../assets/karnatka_2.png';
import karnatka_3 from '../assets/karnatka_3.png';
import bhojpuribackground_3 from '../assets/bhojpuribackground_3.png';
import karnatka_4 from '../assets/karnatka_4.png';
import karnatka_5 from '../assets/karnatka_5.png';
import karnatka_6 from '../assets/karnatka_6.png';
import karnatka_7 from '../assets/karnatka_7.png';
import karnatka_8 from '../assets/karnatka_8.png';
import karnatka_9 from '../assets/karnatka_9.png';
import karnatka_10 from '../assets/karnatka_10.png';
import karnatka_11 from '../assets/karnatka_11.png';
import karnatka_12 from '../assets/karnatka_12.png';
import karnatka_13 from '../assets/karnatka_13.png';
import karnatka_14 from '../assets/karnatka_14.png';
 


const karnataka = () => {
  const { teamId } = useParams();

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">karnataka</h1>
      <div className="grid gap-6">
        {/* Team details content will go here */}
      </div>
    </div>
  );
};

export default karnataka;