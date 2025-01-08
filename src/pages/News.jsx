import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import newupperbackground from '../assets/newupperbackground.png';
import news from '../assets/news.png';
import Nationalnews from '../assets/Nationalnews.png';
import regionalnews from '../assets/regionalnews.png';
import newpaper from '../assets/newpaper.png';

const NewsContainer = styled.div`
  width: 100%;
  min-height: 100vh;
`;

const HeaderSection = styled.div`
  background: url(${newupperbackground});
  background-size: cover;
  background-position: center;
  height: 300px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(180deg, rgba(79, 55, 139, 0.8) 0%, rgba(213, 18, 86, 0.8) 100%);
  }
`;

const NewsTitle = styled(motion.img)`
  position: relative;
  z-index: 2;
  max-width: 300px;
  width: 100%;
`;

const NewsContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 40px 20px;
`;

const NewsSection = styled.div`
  margin: 40px 0;
`;

const SectionTitle = styled(motion.img)`
  max-width: 400px;
  width: 100%;
  margin-bottom: 30px;
`;

const NewsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 20px;
  margin-top: 20px;
`;

const NewsCard = styled(motion.div)`
  background: white;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }

  img {
    width: 100%;
    height: 200px;
    object-fit: cover;
  }
`;

const Wave = styled.div`
  position: absolute;
  bottom: -2px;
  left: 0;
  width: 100%;
  height: 50px;
  background: white;
  clip-path: path('M0,50 C300,0 700,100 1200,30 L1200,50 L0,50 Z');
`;

const News = () => {
  const newsItems = Array(12).fill({
    image: newpaper,
    title: "News Title",
    date: "January 31, 2025"
  });

  return (
    <NewsContainer>
      <HeaderSection>
        <NewsTitle
          src={news}
          alt="News"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
        />
        <Wave />
      </HeaderSection>

      <NewsContent>
        <NewsSection>
          <SectionTitle 
            src={Nationalnews}
            alt="National News"
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
          />
          <NewsGrid>
            {newsItems.slice(0, 6).map((item, index) => (
              <NewsCard
                key={`national-${index}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <img src={item.image} alt={item.title} />
              </NewsCard>
            ))}
          </NewsGrid>
        </NewsSection>

        <NewsSection>
          <SectionTitle 
            src={regionalnews}
            alt="Regional News"
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
          />
          <NewsGrid>
            {newsItems.slice(6).map((item, index) => (
              <NewsCard
                key={`regional-${index}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <img src={item.image} alt={item.title} />
              </NewsCard>
            ))}
          </NewsGrid>
        </NewsSection>
      </NewsContent>
    </NewsContainer>
  );
};

export default News;