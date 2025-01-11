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
  background: white;
  padding-bottom: 60px;
`;

const HeaderSection = styled.div`
  width: 100%;
  background: url(${newupperbackground});
  background-size: cover;
  background-position: center;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 320px;
  padding-top: 20px;
  margin-bottom: 40px;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(180deg, 
      rgba(79, 55, 139, 0.9) 0%, 
      rgba(213, 87, 126, 0.9) 50%, 
      rgba(255, 255, 255, 0) 100%
    );
    z-index: 1;
  }
`;

const Wave = styled.div`
  position: absolute;
  bottom: -2px;
  left: 0;
  width: 100%;
  overflow: hidden;

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: -5%;
    width: 110%;
    height: 150px;
    background: white;
    border-radius: 50% 50% 0 0;
    transform: scaleX(1.1);
  }
`;

const GalleryTitle = styled(motion.img)`
  max-width: 500px;
  width: 90%;
  position: relative;
  z-index: 2;
  margin-bottom: 40px;
`;

const GallerySection = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
`;

const PhotoGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
  margin-bottom: 30px;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`;

const TrophySection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;

  > div {
    max-width: 400px;
    width: 100%;
  }
`;

const PhotoCard = styled(motion.div)`
  border: 4px solid #214592;
  border-radius: 15px;
  overflow: hidden;
  width: 100%;
  aspect-ratio: ${props => props.isTrophy ? '3/4' : '16/9'};
  position: relative;

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
  // Dynamic photo data with metadata
  const photos = [
    {
      id: 1,
      src: photo_1,
      title: 'Match Celebration',
      category: 'match'
    },
    {
      id: 2,
      src: photo_2,
      title: 'Team Spirit',
      category: 'match'
    },
    {
      id: 3,
      src: photo_3,
      title: 'Player Interaction',
      category: 'match'
    },
    {
      id: 4,
      src: photo_4,
      title: 'Game Action',
      category: 'match'
    },
    {
      id: 5,
      src: photo_5,
      title: 'Team Huddle',
      category: 'match'
    },
    {
      id: 6,
      src: photo_6,
      title: 'Trophy Celebration',
      category: 'match'
    },
    {
      id: 7,
      src: photo_7,
      title: 'Team Photo',
      category: 'match'
    },
    {
      id: 8,
      src: photo_8,
      title: 'Match Moment',
      category: 'match'
    },
    {
      id: 9,
      src: photo_9,
      title: 'Victory Celebration',
      category: 'match'
    },
    {
      id: 18,
      src: photo_18,
      title: 'Championship Trophy',
      category: 'trophy'
    }
  ];

  // Group photos by section (excluding trophy)
  const matchPhotos = photos.filter(photo => photo.category === 'match');
  const trophyPhoto = photos.find(photo => photo.category === 'trophy');
  
  // Split match photos into sections of 3
  const photoSections = matchPhotos.reduce((acc, photo, index) => {
    const sectionIndex = Math.floor(index / 3);
    if (!acc[sectionIndex]) {
      acc[sectionIndex] = [];
    }
    acc[sectionIndex].push(photo);
    return acc;
  }, []);

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

      <GallerySection>
        {photoSections.map((section, sectionIndex) => (
          <PhotoGrid key={`section-${sectionIndex}`}>
            {section.map((photo, photoIndex) => (
              <PhotoCard
                key={photo.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: photoIndex * 0.1 }}
                whileHover={{ scale: 1.02 }}
              >
                <img 
                  src={photo.src} 
                  alt={photo.title}
                  loading="lazy"
                />
              </PhotoCard>
            ))}
          </PhotoGrid>
        ))}

        {trophyPhoto && (
          <TrophySection>
            <PhotoCard
              isTrophy
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 }}
              whileHover={{ scale: 1.02 }}
            >
              <img 
                src={trophyPhoto.src} 
                alt={trophyPhoto.title}
                loading="lazy"
              />
            </PhotoCard>
          </TrophySection>
        )}
      </GallerySection>
    </GalleryContainer>
  );
};

export default Photo;