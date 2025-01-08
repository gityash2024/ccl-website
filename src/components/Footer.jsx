import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import footerbackground from '../assets/footerbackground.png';
import facebook from '../assets/facebook.png';
import twitter from '../assets/twitter.png';
import insta from '../assets/insta.png';
import youtube from '../assets/youtube.png';

const FooterContainer = styled.footer`
  background: linear-gradient(180deg, #4F378B 40.98%, #D51256 100%);
  color: white;
  padding: 2rem 4rem;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: url(${footerbackground}) no-repeat;
    background-size: cover;
    opacity: 0.1;
    z-index: 1;
  }
`;

const FooterContent = styled.div`
  position: relative;
  z-index: 2;
  display: flex;
  justify-content: space-between;
  gap: 2rem;
  max-width: 1400px;
  margin: 0 auto;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const DescriptionSection = styled.div`
  flex: 2;
  max-width: 600px;

  img {
    width: 120px;
    margin-bottom: 1rem;
  }

  p {
    font-size: 1rem;
    line-height: 1.6;
    margin-top: 1rem;
  }
`;

const LinksSection = styled.div`
  flex: 1;

  h3 {
    color: white;
    font-size: 1.2rem;
    font-weight: 600;
    margin-bottom: 1rem;
  }
`;

const TeamsList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;

  li {
    margin-bottom: 0.5rem;
    
    a {
      color: white;
      text-decoration: none;
      font-size: 0.9rem;
      transition: opacity 0.3s;

      &:hover {
        opacity: 0.8;
      }
    }
  }
`;

const QuickLinksList = styled(TeamsList)``;

const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 2rem;

  a {
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: white;
    border-radius: 50%;
    transition: transform 0.3s;

    &:hover {
      transform: scale(1.1);
    }

    img {
      width: 24px;
      height: 24px;
    }
  }
`;

const Copyright = styled.div`
  text-align: center;
  margin-top: 2rem;
  font-size: 0.9rem;
  color: white;
  position: relative;
  z-index: 2;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <DescriptionSection>
          <img src="/logo.png" alt="CCL Logo" />
          <p>
            Celebrity Cricket League, brings together India's biggest entertainment industries-
            Cricket and Films, where India's top actors showcase their cricketing skills giving
            the audiences a sight of a thrilling run to the finish game. It is contested by eight
            teams comprising of film actors, representing eight major regional film industries
            of Indian Cinema. Commenced in 2011, CCL has grown leaps and bounds and
            has also increased in its television viewership, with its wide reporting done in the
            media, across India.
          </p>
          <SocialLinks>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <img src={facebook} alt="Facebook" />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <img src={twitter} alt="Twitter" />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <img src={insta} alt="Instagram" />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <img src={youtube} alt="YouTube" />
            </a>
          </SocialLinks>
        </DescriptionSection>

        <LinksSection>
          <h3>TEAMS</h3>
          <TeamsList>
            <li><Link to="/teams/bengal-tigers">BENGAL TIGERS</Link></li>
            <li><Link to="/teams/bhojpuri-dabanggs">BHOJPURI DABANGGS</Link></li>
            <li><Link to="/teams/chennai-rhinos">CHENNAI RHINOS</Link></li>
            <li><Link to="/teams/karnataka-bulldozers">KARNATAKA BULLDOZERS</Link></li>
            <li><Link to="/teams/kerala-strikers">C3 KERALA STRIKERS</Link></li>
            <li><Link to="/teams/mumbai-heroes">MUMBAI HEROES</Link></li>
            <li><Link to="/teams/punjab-de-sher">PUNJAB DE SHER</Link></li>
            <li><Link to="/teams/telugu-warriors">TELUGU WARRIORS</Link></li>
          </TeamsList>
        </LinksSection>

        <LinksSection>
          <h3>QUICK LINKS</h3>
          <QuickLinksList>
            <li><Link to="/news">News</Link></li>
            <li><Link to="/schedule">Schedule</Link></li>
            <li><Link to="/photos">Photos</Link></li>
            <li><Link to="/videos">Videos</Link></li>
            <li><Link to="/aboutus">About Us</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
            <li><Link to="/ccl-super-fan">CCL SUPER FAN T&C;</Link></li>
          </QuickLinksList>
        </LinksSection>
      </FooterContent>

      <Copyright>
        All Rights Reserved @Colladome
      </Copyright>
    </FooterContainer>
  );
};

export default Footer;