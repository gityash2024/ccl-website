import React from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { motion } from 'framer-motion';

import newupperbackground from '../assets/newupperbackground.png';
import VIDEOGALLERY from '../assets/VIDEOGALLERY.png';
import video_1 from '../assets/video_1.png';
import video_2 from '../assets/video_2.png';
import video_3 from '../assets/video_3.png';
import video_4 from '../assets/video_4.png';
import video_5 from '../assets/video_5.png';
import video_6 from '../assets/video_6.png';
import video_7 from '../assets/video_7.png';
import video_8 from '../assets/video_8.png';
import video_9 from '../assets/video_9.png';
import video_10 from '../assets/video_10.png';
import video_11 from '../assets/video_11.png';
import video_12 from '../assets/video_12.png';
import video_13 from '../assets/video_13.png';
import video_14 from '../assets/video_14.png';
import video_15 from '../assets/video_15.png';
import video_16 from '../assets/video_16.png';
import video_17 from '../assets/video_17.png';
import video_18 from '../assets/video_18.png';
import videobackground from '../assets/videobackground.png'

const VideoContainer = styled.div`
  width: 100%;
  min-height: 100vh;
`;

const HeaderSection = styled.div`
  background: url(${newupperbackground});
  background-size: cover;
  background-position: center;
  height: 250px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Wave = styled.div`
  position: absolute;
  bottom: -1px;
  left: 0;
  width: 100%;
  height: 100px;
  background: #ffffff;
  clip-path: polygon(0 100%, 0 50%, 50% 80%, 100% 50%, 100% 100%);
`;

const GalleryTitle = styled(motion.img)`
  max-width: 500px;
  width: 90%;
  position: relative;
  z-index: 2;
`;

const VideoGrid = styled.div`
  max-width: 1200px;
  margin: 40px auto;
  padding: 0 20px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 25px;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`;

const VideoCard = styled(motion.div)`
  border: 4px solid #214592;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  position: relative;
  aspect-ratio: 16/9;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  &::before {
    content: '▶';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 48px;
    color: white;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  &:hover::before {
    opacity: 1;
  }
`;

const Pagination = styled.div`
  max-width: 600px;
  margin: 40px auto;
  background: #214592;
  border-radius: 30px;
  padding: 10px;
  display: flex;
  justify-content: center;
  gap: 20px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const PageNumber = styled.button`
  color: white;
  padding: 5px 15px;
  border-radius: 5px;
  background: ${props => props.active ? '#E04837' : 'transparent'};
  border: none;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background: ${props => props.active ? '#E04837' : 'rgba(255, 255, 255, 0.1)'};
  }
`;


const VideoGallery = () => {
  const videos = [
    video_1, video_2, video_3, video_4, video_5, video_6,
    video_7, video_8, video_9, video_10, video_11, video_12
  ];

  return (
    <VideoContainer>
      <HeaderSection>
        <GalleryTitle
          src={VIDEOGALLERY}
          alt="Video Gallery"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
        />
        <Wave />
      </HeaderSection>

      <VideoGrid>
        {videos.map((video, index) => (
          <VideoCard
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ scale: 1.02 }}
          >
            <img src={video} alt={`Video thumbnail ${index + 1}`} />
          </VideoCard>
        ))}
      </VideoGrid>

      <Pagination>
        <PageNumber active>1</PageNumber>
        <PageNumber>2</PageNumber>
        <PageNumber>3</PageNumber>
        <PageNumber>4</PageNumber>
        <PageNumber>5</PageNumber>
        <PageNumber>6</PageNumber>
      </Pagination>
    </VideoContainer>
  );
};

export default VideoGallery;
