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
  background: white;
`;

const HeaderSection = styled.div`
  width: 100%;
  height: 300px;
  background-image: url(${newupperbackground});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 40px;
`;

const NewsTitle = styled(motion.img)`
  position: relative;
  z-index: 2;
  max-width: 300px;
  width: 100%;
`;

const NewsContent = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 20px;
  display: flex;
  gap: 40px;

  @media (max-width: 1024px) {
    flex-direction: column;
  }
`;

const NewsSection = styled.div`
  flex: 1;
`;

const SectionTitleWrapper = styled.div`
  margin-bottom: 40px;
`;

const SectionTitle = styled(motion.img)`
  max-width: 400px;
  width: 100%;
  height: auto;
`;

const NewsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;

  @media (max-width: 1400px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;

const NewsCard = styled(motion.div)`
  background: white;
  border-radius: 15px;
  overflow: hidden;
  transition: transform 0.3s ease;
  cursor: pointer;
  display: flex;
  flex-direction: column;

  &:hover {
    transform: translateY(-5px);
  }

  img {
    width: 100%;
    height: 180px;
    object-fit: cover;
  }
`;

const NewsCardContent = styled.div`
  padding: 16px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  
  h3 {
    color: #333;
    font-size: 15px;
    font-weight: normal;
    margin: 0;
  }

  p {
    color: #666;
    font-size: 14px;
    margin: 0;
  }
`;

const News = () => {
  const newsData = {
    national: Array(6).fill(null).map((_, index) => ({
      id: `national-${index}`,
      image: newpaper,
      title: `National News Article ${index + 1}`,
      date: "11/01/2025"
    })),
    regional: Array(6).fill(null).map((_, index) => ({
      id: `regional-${index}`,
      image: newpaper,
      title: `Regional News Article ${index + 1}`,
      date: "11/01/2025"
    }))
  };

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
      </HeaderSection>

      <NewsContent>
        <NewsSection>
          <SectionTitleWrapper>
            <SectionTitle
              src={Nationalnews}
              alt="National News"
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
            />
          </SectionTitleWrapper>
          <NewsGrid>
            {newsData.national.map((item, index) => (
              <NewsCard
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <img src={item.image} alt={item.title} />
                <NewsCardContent>
                  <h3>{item.title}</h3>
                  <p>{item.date}</p>
                </NewsCardContent>
              </NewsCard>
            ))}
          </NewsGrid>
        </NewsSection>

        <NewsSection>
          <SectionTitleWrapper>
            <SectionTitle
              src={regionalnews}
              alt="Regional News"
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
            />
          </SectionTitleWrapper>
          <NewsGrid>
            {newsData.regional.map((item, index) => (
              <NewsCard
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <img src={item.image} alt={item.title} />
                <NewsCardContent>
                  <h3>{item.title}</h3>
                  <p>{item.date}</p>
                </NewsCardContent>
              </NewsCard>
            ))}
          </NewsGrid>
        </NewsSection>
      </NewsContent>
    </NewsContainer>
  );
};

export default News;