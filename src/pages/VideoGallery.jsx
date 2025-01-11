import React, { useState, useEffect } from 'react';
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
  background: white;
`;

const HeaderSection = styled.div`
  width: 100%;
  height: 300px;
  background: url(${newupperbackground});
  background-size: cover;
  background-position: center;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(180deg, 
      rgba(82, 45, 168, 0.95) 0%,
      rgba(211, 87, 126, 0.9) 35%,
      rgba(255, 234, 244, 0.85) 70%,
      rgba(255, 255, 255, 1) 100%
    );
  }
`;

const Wave = styled.div`
  position: absolute;
  bottom: -2px;
  left: 0;
  width: 100%;
  height: 150px;
  
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: white;
    clip-path: path('M0,150 C250,30 950,150 1200,30 L1200,150 L0,150 Z');
  }
`;

const GalleryTitle = styled(motion.img)`
  max-width: 700px;
  width: 90%;
  position: relative;
  z-index: 2;
  margin-top: -30px;
  margin-bottom: 30px;
`;

const VideoGrid = styled.div`
  max-width: 1200px;
  margin: 40px auto;
  padding: 0 20px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`;

const VideoCard = styled(motion.div)`
  border: 4px solid #214592;
  border-radius: 15px;
  overflow: hidden;
  position: relative;
  aspect-ratio: 16/9;
  cursor: pointer;
  background: black;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: opacity 0.3s ease;
  }

  &:hover img {
    opacity: 0.7;
  }

  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 60px;
    height: 60px;
    background: rgba(255, 255, 255, 0.9);
    border-radius: 50%;
    z-index: 2;
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  &::after {
    content: '▶';
    position: absolute;
    top: 50%;
    left: 52%;
    transform: translate(-50%, -50%);
    font-size: 24px;
    color: #214592;
    z-index: 3;
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  &:hover::before,
  &:hover::after {
    opacity: 1;
  }
`;

const PaginationWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin: 40px 0;
`;

const Pagination = styled.div`
  background: #214592;
  border-radius: 30px;
  padding: 8px;
  display: flex;
  gap: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const PageButton = styled.button`
  background: ${props => props.active ? '#E04837' : 'transparent'};
  color: white;
  border: none;
  padding: 8px 20px;
  border-radius: 20px;
  cursor: pointer;
  transition: all 0.3s ease;
  font-weight: ${props => props.active ? 'bold' : 'normal'};

  &:hover {
    background: ${props => props.active ? '#E04837' : 'rgba(255, 255, 255, 0.1)'};
  }
`;

const VideoModal = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.9);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const VideoPlayer = styled.div`
  width: 80%;
  max-width: 1000px;
  aspect-ratio: 16/9;
  position: relative;
  
  iframe {
    width: 100%;
    height: 100%;
    border: none;
  }
`;

const CloseButton = styled.button`
  position: absolute;
  top: -40px;
  right: 0;
  background: none;
  border: none;
  color: white;
  font-size: 24px;
  cursor: pointer;
`;

const VideoGallery = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedVideo, setSelectedVideo] = useState(null);
  const itemsPerPage = 9;

  // Sample dynamic video data
  const videos = [
    { id: 1, thumbnail: video_1, title: "CCL Match Highlights", videoId: "video_url_1" },
    { id: 2, thumbnail: video_2, title: "Team Celebration", videoId: "video_url_2" },
    { id: 3, thumbnail: video_3, title: "Match Moments", videoId: "video_url_3" },
    // ... add more videos
  ].map(video => ({
    ...video,
    youtubeUrl: `https://www.youtube.com/embed/${video.videoId}`
  }));

  const totalPages = Math.ceil(videos.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentVideos = videos.slice(startIndex, startIndex + itemsPerPage);

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
        {currentVideos.map((video, index) => (
          <VideoCard
            key={video.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            onClick={() => setSelectedVideo(video)}
          >
            <img src={video.thumbnail} alt={video.title} loading="lazy" />
          </VideoCard>
        ))}
      </VideoGrid>

      <PaginationWrapper>
        <Pagination>
          {[...Array(totalPages)].map((_, index) => (
            <PageButton
              key={index + 1}
              active={currentPage === index + 1}
              onClick={() => setCurrentPage(index + 1)}
            >
              {index + 1}
            </PageButton>
          ))}
        </Pagination>
      </PaginationWrapper>

      {selectedVideo && (
        <VideoModal
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <VideoPlayer>
            <CloseButton onClick={() => setSelectedVideo(null)}>×</CloseButton>
            <iframe
              src={selectedVideo.youtubeUrl}
              title={selectedVideo.title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </VideoPlayer>
        </VideoModal>
      )}
    </VideoContainer>
  );
};

export default VideoGallery;
