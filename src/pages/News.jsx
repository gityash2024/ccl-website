import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import newupperbackground from '../assets/newupperbackground.png';
import news from '../assets/news.png';
import Nationalnews from '../assets/Nationalnews.png';
import regionalnews from '../assets/regionalnews.png';
import newpaper_1 from '../assets/newpaper_1.png';
import newpaper_2 from '../assets/newpaper_2.png';
import newpaper_3 from '../assets/newpaper_3.png';
import newpaper_4 from '../assets/newpaper_4.png';
import newpaper_5 from '../assets/newpaper_5.png';
import newpaper_6 from '../assets/newpaper_6.png';

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
  grid-auto-rows: 1fr;

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

const NewsCard = styled(motion.a)`
  background: white;
  border-radius: 15px;
  overflow: hidden;
  transition: transform 0.3s ease;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  height: 100%;
  text-decoration: none;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 12px rgba(0, 0, 0, 0.15);
  }

  img {
    width: 100%;
    height: 180px;
    object-fit: cover;
    transition: transform 0.3s ease;
    flex-shrink: 0;
  }

  &:hover img {
    transform: scale(1.05);
  }
`;

const NewsCardContent = styled.div`
  padding: 16px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  flex: 1;
  
  h3 {
    color: #333;
    font-size: 15px;
    font-weight: 500;
    margin: 0;
    line-height: 1.4;
    flex: 1;
  }

  p {
    color: #666;
    font-size: 14px;
    margin: 0;
    margin-top: auto;
  }
`;

const News = () => {
  const newsData = {
    national: [
      {
        id: 'nat-1',
        image: newpaper_1,
        title: 'Celebrity Cricket League 2025 ticket bookings open now for all group stage matches',
        date: '11/01/2025',
        link: 'https://www.ottplay.com/news/celebrity-cricket-league-2025-ticket-bookings-open-now-for-all-group-stage-matches/fbb799cc04718'
      },
      {
        id: 'nat-2',
        image: newpaper_2,
        title: 'CCL 2025: When and where to watch Season 11 of star-led tournament',
        date: '12/01/2025',
        link: 'https://www.ottplay.com/news/celebrity-cricket-league-2025-when-and-where-to-watch-season-11-of-star-led-tournament/8c0d3169db641'
      },
      {
        id: 'nat-3',
        image: newpaper_3,
        title: 'Saqib Saleem takes charge as Mumbai Heroes captain',
        date: '13/01/2025',
        link: 'https://www.deccanchronicle.com/entertainment/saqib-saleem-takes-charge-as-mumbai-heroes-captain-1855866'
      }
    ],
    regional: [
      {
        id: 'reg-1',
        image: newpaper_4,
        title: 'CCL 2025: Karnataka Bulldozers gear up for new season',
        date: '14/01/2025',
        link: 'https://dhunt.in/YGwtB'
      },
      {
        id: 'reg-2',
        image: newpaper_5,
        title: 'Telugu Warriors announce their squad for CCL 2025',
        date: '15/01/2025',
        link: 'https://dhunt.in/YHVYP'
      },
      {
        id: 'reg-3',
        image: newpaper_6,
        title: 'Bengal Tigers ready to roar in CCL Season 11',
        date: '16/01/2025',
        link: 'https://dhunt.in/YHU7S'
      }
    ]
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
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
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
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
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