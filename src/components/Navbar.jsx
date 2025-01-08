import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { Menu, X } from 'lucide-react';

const NavContainer = styled.nav`
  background: #214592;
  width: 100%;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const NavContent = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 70px;
`;

const Logo = styled(Link)`
  font-size: 24px;
  font-weight: bold;
  color: white;
  text-decoration: none;
  display: flex;
  align-items: center;
`;

const NavLinks = styled.div`
  display: none;
  @media (min-width: 768px) {
    display: flex;
    gap: 1.5rem;
  }
`;

const NavLink = styled(Link)`
  color: white;
  font-weight: bold;
  text-decoration: none;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  transition: all 0.3s ease;

  &.active {
    background: #e04837;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }

  &:hover {
    background: rgba(255, 255, 255, 0.2);
  }
`;

const Dropdown = styled.div`
  position: relative;
`;

const DropdownMenu = styled.div`
  display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};
  position: absolute;
  top: 100%;
  left: 0;
  background: #214592;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  border-radius: 8px;
  padding: 0.5rem 0;
  z-index: 10;

  a {
    display: block;
    padding: 0.5rem 1rem;
    color: white;
    text-decoration: none;
    transition: background-color 0.2s;

    &:hover {
      background: rgba(255, 255, 255, 0.2);
    }
  }
`;

const MobileMenuButton = styled.button`
  color: white;
  display: flex;
  align-items: center;
  background: none;
  border: none;
  cursor: pointer;
  @media (min-width: 768px) {
    display: none;
  }
`;

const MobileMenu = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 70px;
  left: 0;
  width: 100%;
  background: #214592;
  padding: 1rem;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  z-index: 10;

  @media (min-width: 768px) {
    display: none;
  }
`;

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const location = useLocation();

  return (
    <NavContainer>
      <NavContent>
        <Logo to="/">CCL</Logo>
        <NavLinks>
          <NavLink
            to="/home"
            className={location.pathname === '/home' ? 'active' : ''}
          >
            HOME
          </NavLink>
          <Dropdown
            onMouseEnter={() => setIsDropdownOpen(true)}
            onMouseLeave={() => setIsDropdownOpen(false)}
          >
            <NavLink
              to="/teams"
              className={location.pathname === '/teams' ? 'active' : ''}
            >
              TEAMS
            </NavLink>
            <DropdownMenu isOpen={isDropdownOpen}>
              <Link to="/">BENGAL TIGERS</Link>
              <Link to="/bengal">BHOJPURI DABANGGS</Link>
              <Link to="/teams/chennai-rhinos">CHENNAI RHINOS</Link>
              <Link to="/teams/karnataka-bulldozers">KARNATAKA BULLDOZERS</Link>
              <Link to="/teams/c3-kerala-strikers">C3 KERALA STRIKERS</Link>
              <Link to="/teams/mumbai-heroes">MUMBAI HEROES</Link>
              <Link to="/teams/punjab-de-sher">PUNJAB DE SHER</Link>
              <Link to="/teams/telugu-warriors">TELUGU WARRIORS</Link>
            </DropdownMenu>
          </Dropdown>
          <Dropdown
            onMouseEnter={() => setIsDropdownOpen(true)}
            onMouseLeave={() => setIsDropdownOpen(false)}
          >
          <NavLink
            to="/schedule"
            className={location.pathname === '/schedule' ? 'active' : ''}
          >
            CCL 2025
          </NavLink>
          <DropdownMenu isOpen={isDropdownOpen}>
              <Link to="/teams/bengal-tigers">BENGAL TIGERS</Link>
            </DropdownMenu>
          </Dropdown>

          <Dropdown
            onMouseEnter={() => setIsDropdownOpen(true)}
            onMouseLeave={() => setIsDropdownOpen(false)}
          >
          <NavLink
            to="/gallery"
            className={location.pathname === '/gallery' ? 'active' : ''}
          >
            
            GALLERY
          </NavLink>
          <DropdownMenu isOpen={isDropdownOpen}>
              <Link to="/teams/bengal-tigers">BENGAL TIGERS</Link>
              <Link to="/teams/bengal-tigers">BENGAL TIGERS</Link>
            </DropdownMenu>
          </Dropdown>
          <NavLink
            to="/news"
            className={location.pathname === '/news' ? 'active' : ''}
          >
            NEWS
          </NavLink>
          <NavLink
            to="/aboutus"
            className={location.pathname === '/aboutus' ? 'active' : ''}
          >
            ABOUT US
          </NavLink>
        </NavLinks>

        <MobileMenuButton onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </MobileMenuButton>
      </NavContent>

      {isOpen && (
        <MobileMenu>
          <NavLink
            to="/home"
            className={location.pathname === '/home' ? 'active' : ''}
            onClick={() => setIsOpen(false)}
          >
            HOME
          </NavLink>
          <NavLink
            to="/teams"
            className={location.pathname === '/teams' ? 'active' : ''}
            onClick={() => setIsOpen(false)}
          >
            TEAMS
          </NavLink>
          <NavLink
            to="/schedule"
            className={location.pathname === '/schedule' ? 'active' : ''}
            onClick={() => setIsOpen(false)}
          >
            CCL 2025
          </NavLink>
          <NavLink
            to="/gallery"
            className={location.pathname === '/gallery' ? 'active' : ''}
            onClick={() => setIsOpen(false)}
          >
            GALLERY
          </NavLink>
          <NavLink
            to="/news"
            className={location.pathname === '/news' ? 'active' : ''}
            onClick={() => setIsOpen(false)}
          >
            NEWS
          </NavLink>
          <NavLink
            to="/aboutus"
            className={location.pathname === '/aboutus' ? 'active' : ''}
            onClick={() => setIsOpen(false)}
          >
            ABOUT US
          </NavLink>
        </MobileMenu>
      )}
    </NavContainer>
  );
};

export default Navbar;
