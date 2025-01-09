import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import newupperbackground from '../assets/newupperbackground.png';
import PHOTOGALLERY from '../assets/PHOTOGALLERY.png';
import photo_1 from '../assets/photo_1.png';
import photo_2 from '../assets/photo_2.png';
import photo_3 from '../assets/photo_3.png';
import photo_4 from '../assets/photo_4.png';
import photo_5 from '../assets/photo_5.png';
import photo_6 from '../assets/photo_6.png';
import photo_7 from '../assets/photo_7.png';
import photo_8 from '../assets/photo_8.png';
import photo_9 from '../assets/photo_9.png';
import photo_10 from '../assets/photo_10.png';
import photo_11 from '../assets/photo_11.png';
import photo_12 from '../assets/photo_12.png';
import photo_13 from '../assets/photo_13.png';
import photo_14 from '../assets/photo_14.png';
import photo_15 from '../assets/photo_15.png';
import photo_16 from '../assets/photo_16.png';
import photo_17 from '../assets/photo_17.png';
import photo_18 from '../assets/photo_18.png';

const GalleryContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  background: #ffffff;
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
  margin-bottom: 40px;
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

// const GalleryGrid = styled.div`
//   max-width: 1200px;
//   margin: 0 auto;
//   padding: 0 20px;
//   display: grid;
//   grid-template-columns: repeat(3, 1fr);
//   gap: 25px;

//   @media (max-width: 1024px) {
//     grid-template-columns: repeat(2, 1fr);
//   }

//   @media (max-width: 640px) {
//     grid-template-columns: 1fr;
//   }
// `;

// const PhotoCard = styled(motion.div)`
//   border: 3px solid #214592;
//   border-radius: 15px;
//   overflow: hidden;
//   box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
//   aspect-ratio: 16/9;

//   img {
//     width: 100%;
//     height: 100%;
//     object-fit: cover;
//     transition: transform 0.3s ease;
//   }

//   &:hover img {
//     transform: scale(1.05);
//   }
// `;


const GalleryGrid = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 25px;

  &.first-row {
    margin-bottom: 25px;
  }

  &.second-row {
    margin-bottom: 25px;
  }

  &.third-row {
    margin-bottom: 25px;
  }

  &.trophy-row {
    display: flex;
    justify-content: center;
    margin-bottom: 50px;

    > div {
      width: 400px;
    }
  }

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
    
    &.trophy-row > div {
      width: 300px;
    }
  }

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
    
    &.trophy-row > div {
      width: 100%;
    }
  }
`;

const PhotoCard = styled(motion.div)`
  border: 4px solid #214592;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  aspect-ratio: 16/9;
  width: 100%;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s ease;
  }

  &:hover img {
    transform: scale(1.05);
  }
`;

const Photo = () => {
  const galleryPhotos = [
    { id: 1, src: photo_1 },
    { id: 2, src: photo_2 },
    { id: 3, src: photo_3 },
    { id: 4, src: photo_4 },
    { id: 5, src: photo_5 },
    { id: 6, src: photo_6 },
    { id: 7, src: photo_7 },
    { id: 8, src: photo_8 },
    { id: 9, src: photo_9 },
    { id: 10, src: photo_10 },
    { id: 11, src: photo_11 },
    { id: 12, src: photo_12 },
    { id: 13, src: photo_13 },
    { id: 14, src: photo_14 },
    { id: 15, src: photo_15 },
    { id: 16, src: photo_16 },
    { id: 17, src: photo_17 },
    { id: 18, src: photo_18 }
  ];

  return (
    <GalleryContainer>
      <HeaderSection>
        <GalleryTitle
          src={PHOTOGALLERY}
          alt="Photo Gallery"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
        />
        <Wave />
      </HeaderSection>

      <GalleryGrid className="first-row">
      {[photo_1, photo_2, photo_3].map((photo, index) => (
        <PhotoCard
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
          whileHover={{ scale: 1.02 }}
        >
          <img src={photo} alt={`Gallery photo ${index + 1}`} />
        </PhotoCard>
      ))}
    </GalleryGrid>

    <GalleryGrid className="second-row">
      {[photo_4, photo_5, photo_6].map((photo, index) => (
        <PhotoCard
          key={index + 3}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: (index + 3) * 0.1 }}
          whileHover={{ scale: 1.02 }}
        >
          <img src={photo} alt={`Gallery photo ${index + 4}`} />
        </PhotoCard>
      ))}
    </GalleryGrid>

    <GalleryGrid className="third-row">
      {[photo_7, photo_8, photo_9].map((photo, index) => (
        <PhotoCard
          key={index + 6}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: (index + 6) * 0.1 }}
          whileHover={{ scale: 1.02 }}
        >
          <img src={photo} alt={`Gallery photo ${index + 7}`} />
        </PhotoCard>
      ))}
    </GalleryGrid>

    <GalleryGrid className="trophy-row">
      <PhotoCard
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.9 }}
        whileHover={{ scale: 1.02 }}
      >
        <img src={photo_18} alt="Trophy" />
      </PhotoCard>
    </GalleryGrid>

    </GalleryContainer>
  );
};

export default Photo;