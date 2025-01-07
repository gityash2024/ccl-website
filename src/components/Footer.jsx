import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Youtube } from 'lucide-react';

const FooterContainer = styled.footer`
  background: linear-gradient(180deg, #4F378B 40.98%, #D51256 100%);
  color: white;
  padding: 3rem 0 1rem 0;
`;

const FooterContent = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 1rem;
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;

  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const FooterSection = styled.div`
  h3 {
    font-size: 1.5rem;
    font-weight: bold;
    margin-bottom: 1rem;
  }
`;

const QuickLinks = styled.ul`
  list-style: none;
  padding: 0;

  li {
    margin-bottom: 0.5rem;
  }

  a {
    color: white;
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1rem;

  a {
    color: white;
    &:hover {
      opacity: 0.8;
    }
  }
`;

const Copyright = styled.div`
  text-align: center;
  margin-top: 3rem;
  padding-top: 1rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <FooterSection>
          <h3>CCL 2025</h3>
          <p>Celebrity Cricket League - India's biggest entertainment cricket league</p>
        </FooterSection>

        <FooterSection>
          <h3>Quick Links</h3>
          <QuickLinks>
            <li><Link to="/teams">Teams</Link></li>
            <li><Link to="/schedule">Schedule</Link></li>
            <li><Link to="/gallery">Gallery</Link></li>
          </QuickLinks>
        </FooterSection>

        <FooterSection>
          <h3>Follow Us</h3>
          <SocialLinks>
            <a href="#" aria-label="Facebook"><Facebook size={24} /></a>
            <a href="#" aria-label="Twitter"><Twitter size={24} /></a>
            <a href="#" aria-label="Instagram"><Instagram size={24} /></a>
            <a href="#" aria-label="YouTube"><Youtube size={24} /></a>
          </SocialLinks>
        </FooterSection>
      </FooterContent>

      <Copyright>
        © 2025 Celebrity Cricket League. All rights reserved.
      </Copyright>
    </FooterContainer>
  );
};

export default Footer;