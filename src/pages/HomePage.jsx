import React from 'react';
import styled from 'styled-components';

const HomeContainer = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  padding: 2rem 1rem;
`;

const HeroSection = styled.section`
  text-align: center;
  padding: 4rem 0;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  font-weight: bold;
  margin-bottom: 1rem;
  color: #214592;

  @media (min-width: 768px) {
    font-size: 3.5rem;
  }
`;

const Subtitle = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: #E04837;

  @media (min-width: 768px) {
    font-size: 2rem;
  }
`;

const Description = styled.p`
  color: #666;
  max-width: 600px;
  margin: 0 auto;
  font-size: 1.125rem;
`;

const TeamsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin-top: 4rem;
`;

const TeamCard = styled.div`
  text-align: center;
  img {
    width: 100%;
    max-width: 200px;
    height: auto;
    margin-bottom: 1rem;
  }
`;

const HomePage = () => {
  return (
    <HomeContainer>
      <HeroSection>
        <Title>Celebrity Cricket League 2025</Title>
        <Subtitle>January 31st 2025 Onwards</Subtitle>
        <Description>
          Everything you need to know about CCL 2025
        </Description>
      </HeroSection>

      {/* You can add the team logos and other sections here once you have the assets */}
      <TeamsGrid>
        {/* Team logos will go here */}
      </TeamsGrid>
    </HomeContainer>
  );
};

export default HomePage;