import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { Menu, X } from 'lucide-react';

const NavContainer = styled.nav`
  background: #214592;
  width: 100%;
`;

const NavContent = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 64px;
`;

const Logo = styled(Link)`
  font-size: 24px;
  font-weight: bold;
  color: white;
  text-decoration: none;
`;

const NavLinks = styled.div`
  display: none;
  @media (min-width: 768px) {
    display: flex;
    gap: 2rem;
  }
`;

const NavLink = styled(Link)`
  color: white;
  text-decoration: none;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  transition: background-color 0.2s;

  &.active {
    background: #E04837;
  }

  &:hover {
    background: rgba(255, 255, 255, 0.1);
  }
`;

const MobileMenuButton = styled.button`
  color: white;
  display: flex;
  align-items: center;
  @media (min-width: 768px) {
    display: none;
  }
`;

const MobileMenu = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem;
  background: #214592;

  @media (min-width: 768px) {
    display: none;
  }
`;

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <NavContainer>
      <NavContent>
        <Logo to="/">CCL</Logo>
        
        <NavLinks>
          <NavLink 
            to="/teams" 
            className={location.pathname === '/teams' ? 'active' : ''}
          >
            Teams
          </NavLink>
          <NavLink 
            to="/schedule"
            className={location.pathname === '/schedule' ? 'active' : ''}
          >
            Schedule
          </NavLink>
          <NavLink 
            to="/gallery"
            className={location.pathname === '/gallery' ? 'active' : ''}
          >
            Gallery
          </NavLink>
        </NavLinks>

        <MobileMenuButton onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </MobileMenuButton>
      </NavContent>

      {isOpen && (
        <MobileMenu>
          <NavLink 
            to="/teams"
            className={location.pathname === '/teams' ? 'active' : ''}
          >
            Teams
          </NavLink>
          <NavLink 
            to="/schedule"
            className={location.pathname === '/schedule' ? 'active' : ''}
          >
            Schedule
          </NavLink>
          <NavLink 
            to="/gallery"
            className={location.pathname === '/gallery' ? 'active' : ''}
          >
            Gallery
          </NavLink>
        </MobileMenu>
      )}
    </NavContainer>
  );
};

export default Navbar;