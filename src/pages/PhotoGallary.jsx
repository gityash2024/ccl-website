import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import newupperbackground from '../assets/newupperbackground.png';
import PHOTOGALLERY from '../assets/PHOTOGALLERY.png';
import photo_1 from '../assets/photo_1.jpg';
import photo_2 from '../assets/photo_2.jpg';
import photo_3 from '../assets/photo_3.jpg';
import photo_4 from '../assets/photo_4.jpg';
import photo_5 from '../assets/photo_5.jpg';
import photo_6 from '../assets/photo_6.jpg';
import photo_7 from '../assets/photo_7.jpg';
import photo_8 from '../assets/photo_8.jpg';
import photo_9 from '../assets/photo_9.jpg';
import photo_10 from '../assets/photo_10.jpg';
import photo_11 from '../assets/photo_11.jpg';
import photo_12 from '../assets/photo_12.jpg';
import photo_13 from '../assets/photo_13.jpg';
import photo_14 from '../assets/photo_14.jpg';
import photo_15 from '../assets/photo_15.jpg';
import photo_16 from '../assets/photo_16.jpg';
import photo_17 from '../assets/photo_17.jpg';
import photo_18 from '../assets/photo_18.jpg';
import photo_19 from '../assets/photo_19.jpg';
import photo_20 from '../assets/photo_20.jpg';
import photo_21 from '../assets/photo_21.jpg';
import photo_22 from '../assets/photo_22.jpg';
import photo_23 from '../assets/photo_23.jpg';
import photo_24 from '../assets/photo_24.jpg';
import photo_25 from '../assets/photo_25.jpg';
import photo_26 from '../assets/photo_26.jpg';
import photo_27 from '../assets/photo_27.jpg';
import photo_28 from '../assets/photo_28.jpg';
import photo_29 from '../assets/photo_29.jpg';
import photo_30 from '../assets/photo_30.jpg';
import photo_31 from '../assets/photo_31.jpg';
import photo_32 from '../assets/photo_32.jpg';
import photo_33 from '../assets/photo_33.jpg';
import photo_34 from '../assets/photo_34.jpg';
import photo_35 from '../assets/photo_35.jpg';
import photo_36 from '../assets/photo_36.jpg';
import photo_37 from '../assets/photo_37.jpg';
import photo_38 from '../assets/photo_38.jpg';
import photo_39 from '../assets/photo_39.jpg';
import photo_40 from '../assets/photo_40.jpg';
import photo_41 from '../assets/photo_41.jpg';
import photo_42 from '../assets/photo_42.jpg';
import photo_43 from '../assets/photo_43.jpg';
import photo_44 from '../assets/photo_44.jpg';
import photo_45 from '../assets/photo_45.jpg';
import photo_46 from '../assets/photo_46.jpg';
import photo_47 from '../assets/photo_47.jpg';
import photo_48 from '../assets/photo_48.jpg';
import photo_49 from '../assets/photo_49.jpg';
import photo_50 from '../assets/photo_50.jpg';
import photo_51 from '../assets/photo_51.jpg';
import photo_52 from '../assets/photo_52.jpg';
import photo_53 from '../assets/photo_53.jpg';
import photo_54 from '../assets/photo_54.jpg';
import photo_55 from '../assets/photo_55.jpg';
import photo_56 from '../assets/photo_56.jpg';
import photo_57 from '../assets/photo_57.jpg';
import photo_58 from '../assets/photo_58.jpg';
import photo_59 from '../assets/photo_59.jpg';
import photo_60 from '../assets/photo_60.png';

const PHOTOS_PER_PAGE = 9;

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

const TrophySection = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  margin-top: 40px;

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
  cursor: pointer;

  img {
    width: 100%;
    height: 125%;
    object-fit: cover;
    transition: transform 0.3s ease;
  }

  &:hover img {
    transform: scale(1.05);
  }

  &::after {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(to top, rgba(0,0,0,0.3), transparent);
    opacity: 0;
    transition: opacity 0.3s ease;
  }

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

const PhotoOverlay = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.9);
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 40px;
`;

const OverlayImage = styled(motion.img)`
  max-width: 90%;
  max-height: 90vh;
  object-fit: contain;
  border-radius: 8px;
`;

const CloseButton = styled(motion.button)`
  position: absolute;
  top: 20px;
  right: 20px;
  background: white;
  border: none;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
`;

const Photo = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  const photoImports = {
    photo_1, photo_2, photo_3, photo_4, photo_5, photo_6, photo_7, photo_8, photo_9, photo_10,
    photo_11, photo_12, photo_13, photo_14, photo_15, photo_16, photo_17, photo_18, photo_19, photo_20,
    photo_21, photo_22, photo_23, photo_24, photo_25, photo_26, photo_27, photo_28, photo_29, photo_30,
    photo_31, photo_32, photo_33, photo_34, photo_35, photo_36, photo_37, photo_38, photo_39, photo_40,
    photo_41, photo_42, photo_43, photo_44, photo_45, photo_46, photo_47, photo_48, photo_49, photo_50,
    photo_51, photo_52, photo_53, photo_54, photo_55, photo_56, photo_57, photo_58, photo_59, photo_60
  };

  const allPhotos = [...Array(59).keys()].map(i => ({
    id: i + 1,
    src: photoImports[`photo_${i + 1}`],
    title: `Photo ${i + 1}`,
    category: i === 58 ? 'trophy' : 'match'
  }));

  const totalPages = Math.ceil(allPhotos.length / PHOTOS_PER_PAGE);
  const startIndex = (currentPage - 1) * PHOTOS_PER_PAGE;
  const visiblePhotos = allPhotos.slice(startIndex, startIndex + PHOTOS_PER_PAGE);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const containerVariants = {
    hidden: { opacity: 1 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    show: { 
      opacity: 1, 
      y: 0,
      transition: {
        type: "tween",
        duration: 0.2
      }
    }
  };

  const matchPhotos = visiblePhotos.filter(photo => photo.category === 'match');
  const trophyPhoto = allPhotos.find(photo => photo.category === 'trophy');
  const showTrophy = currentPage === totalPages;

  return (
    <GalleryContainer>
      <HeaderSection>
        <GalleryTitle
          src={PHOTOGALLERY}
          alt="Photo Gallery"
          initial={{ y: 0, opacity: 1 }}
          animate={{ y: 0, opacity: 1 }}
        />
        <Wave />
      </HeaderSection>

      <GallerySection>
        <PhotoGrid
          as={motion.div}
          variants={containerVariants}
          initial="hidden"
          animate="show"
        >
          {matchPhotos.map((photo) => (
            <PhotoCard
              key={photo.id}
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => setSelectedPhoto(photo)}
            >
              <img 
                src={photo.src} 
                alt={photo.title}
                loading="lazy"
              />
            </PhotoCard>
          ))}
        </PhotoGrid>

        {showTrophy && trophyPhoto && (
          <TrophySection
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
          >
            <PhotoCard
              isTrophy
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setSelectedPhoto(trophyPhoto)}
            >
              <img 
                src={trophyPhoto.src} 
                alt={trophyPhoto.title}
                loading="lazy"
              />
            </PhotoCard>
          </TrophySection>
        )}

        <PaginationWrapper>
          <Pagination>
            {[...Array(totalPages)].map((_, index) => (
              <PageButton
                key={index + 1}
                active={currentPage === index + 1}
                onClick={() => handlePageChange(index + 1)}
              >
                {index + 1}
              </PageButton>
            ))}
          </Pagination>
        </PaginationWrapper>
      </GallerySection>

      <AnimatePresence>
        {selectedPhoto && (
          <PhotoOverlay
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedPhoto(null)}
          >
            <OverlayImage
              src={selectedPhoto.src}
              alt={selectedPhoto.title}
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              transition={{ type: "tween", duration: 0.2 }}
            />
            <CloseButton
              onClick={(e) => {
                e.stopPropagation();
                setSelectedPhoto(null);
              }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              ×
            </CloseButton>
          </PhotoOverlay>
        )}
      </AnimatePresence>
    </GalleryContainer>
  );
};

export default Photo;