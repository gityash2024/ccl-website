import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Youtube, ArrowUpRight } from 'lucide-react';
import footerbackground from '../assets/footerbackground.png';
import logo from '../assets/logo.png';

const FooterContainer = styled.footer`
  background: linear-gradient(180deg, #4F378B 40.98%, #D51256 100%);
  color: white;
  position: relative;
  overflow: hidden;
`;

const BackgroundOverlay = styled.div`
  position: absolute;
  inset: 0;
  background: url(${footerbackground}) no-repeat;
  background-size: cover;
  opacity: 0.1;
  z-index: 1;
`;

const FooterContent = styled.div`
  position: relative;
  z-index: 2;
  max-width: 1440px;
  margin: 0 auto;
  padding: 4rem 1.5rem;

  @media (max-width: 768px) {
    padding: 1rem 1rem;
  }
`;

const FooterGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;

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
  flex-wrap: wrap;
`;

const SocialLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  background: white;
  border-radius: 50%;
  transition: all 0.3s ease;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);

  &:hover {
    transform: translateY(-3px);
    background: rgba(255, 255, 255, 0.9);
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
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
    // margin-bottom: 1.5rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  @media (max-width: 768px) {
    margin-top: 1rem;
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
  display: flex;
  align-items: center;
  gap: 0.5rem;

  &:hover {
    color: white;
    transform: translateX(5px);
  }
`;

const ExternalLink = styled.a`
  color: rgba(255, 255, 255, 0.8);
  text-decoration: none;
  font-size: 0.875rem;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 0.5rem;

  &:hover {
    color: white;
    transform: translateX(5px);
  }

  svg {
    width: 14px;
    height: 14px;
  }
`;

const Copyright = styled.div`
  position: relative;
  z-index: 2;
  text-align: center;
  padding: 1.5rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  // margin-top: 1rem;

  p {
    color: rgba(255, 255, 255, 0.6);
    font-size: 0.875rem;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
  }
`;

const CTAButton = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1.5rem;
  background: #D51256;
  color: white;
  text-decoration: none;
  border-radius: 8px;
  font-weight: 600;
  transition: all 0.3s ease;
  margin-top: 1.5rem;

  &:hover {
    transform: translateY(-2px);
    background: #E61864;
    box-shadow: 0 4px 15px rgba(213, 18, 86, 0.3);
  }

  svg {
    width: 16px;
    height: 16px;
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
    { name: 'Photos', path: '/photo' },
    { name: 'Videos', path: '/videos' },
    { name: 'About Us', path: '/aboutus' },
    { name: 'Contact Us', path: '/contact' },
    { name: 'CCL SUPER FAN T&C', path: '/ccl-super-fan' }
  ];

  return (
    <FooterContainer>
      <BackgroundOverlay />
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
            {/* <CTAButton
              href="https://colladome.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Visit Colladome <ArrowUpRight />
            </CTAButton> */}
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
              {/* <li>
                <ExternalLink
                  href="https://colladome.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  COLLADOME <ArrowUpRight />
                </ExternalLink>
              </li> */}
            </LinksList>
          </LinksSection>
        </FooterGrid>
      </FooterContent>

      <Copyright>
        <p>
          Powered by 
          <ExternalLink
            href="https://colladome.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            @Colladome <ArrowUpRight />
          </ExternalLink>
        </p>
      </Copyright>
    </FooterContainer>
  );
};

export default Footer;