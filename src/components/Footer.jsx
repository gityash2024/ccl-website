// src/components/Footer.jsx
import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Youtube } from 'lucide-react';
import footerbackground from '../assets/footerbackground.png';
import logo from '../assets/logo.png';

const FooterContainer = styled.footer`
  background: linear-gradient(180deg, #4F378B 40.98%, #D51256 100%);
  color: white;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: url(${footerbackground}) no-repeat;
    background-size: cover;
    opacity: 0.1;
    z-index: 1;
  }
`;

const FooterContent = styled.div`
  position: relative;
  z-index: 2;
  max-width: 1440px;
  margin: 0 auto;
  padding: 4rem 1.5rem;
`;

const FooterGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 3rem;

  @media (min-width: 768px) {
    grid-template-columns: 2fr 1fr 1fr;
  }
`;

const DescriptionSection = styled.div`
  img {
    height: 60px;
    width: auto;
    margin-bottom: 1.5rem;
  }

  p {
    color: rgba(255, 255, 255, 0.9);
    line-height: 1.6;
    margin-bottom: 2rem;
    font-size: 0.875rem;
    max-width: 600px;
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;
`;

const SocialLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  background: white;
  border-radius: 50%;
  transition: transform 0.3s ease, background-color 0.3s ease;

  &:hover {
    transform: translateY(-3px);
    background: rgba(255, 255, 255, 0.9);
  }

  svg {
    width: 20px;
    height: 20px;
    color: #4F378B;
  }
`;

const LinksSection = styled.div`
  h3 {
    color: white;
    font-size: 1.125rem;
    font-weight: 600;
    margin-bottom: 1.5rem;
  }
`;

const LinksList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;

const FooterLink = styled(Link)`
  color: rgba(255, 255, 255, 0.8);
  text-decoration: none;
  font-size: 0.875rem;
  transition: all 0.3s ease;
  display: inline-block;

  &:hover {
    color: white;
    transform: translateX(5px);
  }
`;

const Copyright = styled.div`
  position: relative;
  z-index: 2;
  text-align: center;
  padding: 1.5rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  margin-top: 3rem;

  p {
    color: rgba(255, 255, 255, 0.6);
    font-size: 0.875rem;
  }
`;

const Footer = () => {
  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Youtube, href: '#', label: 'YouTube' }
  ];

  const teamLinks = [
    { name: 'BENGAL TIGERS', path: '/teams/bengal-tigers' },
    { name: 'BHOJPURI DABANGGS', path: '/teams/bhojpuri-dabanggs' },
    { name: 'CHENNAI RHINOS', path: '/teams/chennai-rhinos' },
    { name: 'KARNATAKA BULLDOZERS', path: '/teams/karnataka-bulldozers' },
    { name: 'C3 KERALA STRIKERS', path: '/teams/kerala-strikers' },
    { name: 'MUMBAI HEROES', path: '/teams/mumbai-heroes' },
    { name: 'PUNJAB DE SHER', path: '/teams/punjab-de-sher' },
    { name: 'TELUGU WARRIORS', path: '/teams/telugu-warriors' }
  ];

  const quickLinks = [
    { name: 'News', path: '/news' },
    { name: 'Schedule', path: '/schedule' },
    { name: 'Photos', path: '/photos' },
    { name: 'Videos', path: '/videos' },
    { name: 'About Us', path: '/aboutus' },
    { name: 'Contact Us', path: '/contact' },
    { name: 'CCL SUPER FAN T&C', path: '/ccl-super-fan' }
  ];

  return (
    <FooterContainer>
      <FooterContent>
        <FooterGrid>
          <DescriptionSection>
            <img src={logo} alt="CCL Logo" />
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
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <SocialLink 
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                >
                  <Icon />
                </SocialLink>
              ))}
            </SocialLinks>
          </DescriptionSection>

          <LinksSection>
            <h3>TEAMS</h3>
            <LinksList>
              {teamLinks.map((link) => (
                <li key={link.path}>
                  <FooterLink to={link.path}>{link.name}</FooterLink>
                </li>
              ))}
            </LinksList>
          </LinksSection>

          <LinksSection>
            <h3>QUICK LINKS</h3>
            <LinksList>
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <FooterLink to={link.path}>{link.name}</FooterLink>
                </li>
              ))}
            </LinksList>
          </LinksSection>
        </FooterGrid>
      </FooterContent>

      <Copyright>
        <p>All Rights Reserved @Colladome</p>
      </Copyright>
    </FooterContainer>
  );
};

export default Footer;