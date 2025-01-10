import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import styled from 'styled-components';
import logo from '../assets/logo.png';

const NavContainer = styled.nav`
  position: relative;
  width: 100%;
`;

const NavBackground = styled.div`
  position: absolute;
  inset: 0;
  background: #214592;
  transform: skewX(12deg);
  transform-origin: top right;
`;

const NavWrapper = styled.div`
  position: relative;
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 1rem;
  height: 5rem;
`;

const NavContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
`;

const Logo = styled(Link)`
  position: relative;
  z-index: 10;
  img {
    width: 4rem;
    height: 4rem;
  }
`;

const NavLinks = styled.div`
  display: none;
  @media (min-width: 768px) {
    display: flex;
    gap: 2rem;
    align-items: center;
  }
`;

const NavLink = styled(Link)`
  position: relative;
  color: white;
  font-weight: bold;
  padding: 0.5rem 1.5rem;
  transition: all 0.3s;

  &.active {
    background: #E04837;
    clip-path: polygon(10% 0%, 90% 0%, 100% 100%, 0% 100%);
  }

  &:hover:not(.active) {
    background: rgba(255, 255, 255, 0.2);
  }
`;

const DropdownContainer = styled.div`
  position: relative;
`;

const DropdownMenu = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  min-width: 260px;
  background: #214592;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
  border-radius: 0 0 8px 8px;
  padding: 0.5rem;
  z-index: 50;
  opacity: ${props => props.$isOpen ? 1 : 0};
  transform: translateY(${props => props.$isOpen ? '0' : '-10px'});
  visibility: ${props => props.$isOpen ? 'visible' : 'hidden'};
  transition: all 0.3s ease;
`;

const DropdownLink = styled(Link)`
  display: block;
  color: white;
  padding: 0.75rem 1.5rem;
  font-weight: 500;
  border-radius: 4px;
  transition: all 0.2s;

  &:hover {
    background: #E04837;
    transform: translateX(5px);
  }
`;

const MobileButton = styled.button`
  position: relative;
  z-index: 10;
  color: white;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0.5rem;
  @media (min-width: 768px) {
    display: none;
  }
`;

const MobileMenu = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  background: #214592;
  padding: 1rem;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
  z-index: 20;
  transform: translateY(${props => props.$isOpen ? '0' : '-10px'});
  opacity: ${props => props.$isOpen ? 1 : 0};
  visibility: ${props => props.$isOpen ? 'visible' : 'hidden'};
  transition: all 0.3s ease;
`;

const MobileLink = styled(Link)`
  display: block;
  color: white;
  font-weight: bold;
  padding: 1rem 1.5rem;
  border-radius: 4px;
  transition: all 0.2s;

  &.active {
    background: #E04837;
  }

  &:hover:not(.active) {
    background: rgba(255, 255, 255, 0.1);
  }
`;

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const location = useLocation();

  const teamsDropdownItems = [
    { to: "/bengal", label: "BENGAL TIGERS" },
    { to: "/bhojpuri", label: "BHOJPURI DABANGGS" },
    { to: "/chennal", label: "CHENNAI RHINOS" },
    { to: "/karnatka", label: "KARNATAKA BULLDOZERS" },
    { to: "/kerla", label: "C3 KERALA STRIKERS" },
    { to: "/mumbai", label: "MUMBAI HEROES" },
    { to: "/punjab", label: "PUNJAB DE SHER" },
    { to: "/telugu", label: "TELUGU WARRIORS" }
  ];

  const ccl2025DropdownItems = [
    { to: "/cclschedule", label: "SCHEDULE" },
    // { to: "/standings", label: "STANDINGS" }
  ];

  const galleryDropdownItems = [
    { to: "/photo", label: "PHOTOS" },
    { to: "/video", label: "VIDEOS" }
  ];

  return (
    <NavContainer>
      <NavBackground />
      <NavWrapper>
        <NavContent>
          <Logo to="/">
            <img src={logo} alt="logo"/>
          </Logo>
          
          <NavLinks>
            <NavLink to="/home" className={location.pathname === '/home' ? 'active' : ''}>
              HOME
            </NavLink>
            
            <DropdownContainer 
              onMouseEnter={() => setActiveDropdown('teams')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <NavLink to="/teams" className={location.pathname === '/teams' ? 'active' : ''}>
                TEAMS
              </NavLink>
              <DropdownMenu $isOpen={activeDropdown === 'teams'}>
                {teamsDropdownItems.map(item => (
                  <DropdownLink key={item.to} to={item.to}>
                    {item.label}
                  </DropdownLink>
                ))}
              </DropdownMenu>
            </DropdownContainer>

            <DropdownContainer
              onMouseEnter={() => setActiveDropdown('ccl2025')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <NavLink to="/schedule" className={location.pathname === '/schedule' ? 'active' : ''}>
                CCL 2025
              </NavLink>
              <DropdownMenu $isOpen={activeDropdown === 'ccl2025'}>
                {ccl2025DropdownItems.map(item => (
                  <DropdownLink key={item.to} to={item.to}>
                    {item.label}
                  </DropdownLink>
                ))}
              </DropdownMenu>
            </DropdownContainer>

            <DropdownContainer
              onMouseEnter={() => setActiveDropdown('gallery')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <NavLink to="/gallery" className={location.pathname === '/gallery' ? 'active' : ''}>
                GALLERY
              </NavLink>
              <DropdownMenu $isOpen={activeDropdown === 'gallery'}>
                {galleryDropdownItems.map(item => (
                  <DropdownLink key={item.to} to={item.to}>
                    {item.label}
                  </DropdownLink>
                ))}
              </DropdownMenu>
            </DropdownContainer>

            <NavLink to="/news" className={location.pathname === '/news' ? 'active' : ''}>
              NEWS
            </NavLink>
            
            <NavLink to="/aboutus" className={location.pathname === '/aboutus' ? 'active' : ''}>
              ABOUT US
            </NavLink>
          </NavLinks>

          <MobileButton onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </MobileButton>
        </NavContent>
      </NavWrapper>

      <MobileMenu $isOpen={isOpen}>
        <MobileLink to="/home" className={location.pathname === '/home' ? 'active' : ''}>
          HOME
        </MobileLink>
        <MobileLink to="/teams" className={location.pathname === '/teams' ? 'active' : ''}>
          TEAMS
        </MobileLink>
        <MobileLink to="/schedule" className={location.pathname === '/schedule' ? 'active' : ''}>
          CCL 2025
        </MobileLink>
        <MobileLink to="/gallery" className={location.pathname === '/gallery' ? 'active' : ''}>
          GALLERY
        </MobileLink>
        <MobileLink to="/news" className={location.pathname === '/news' ? 'active' : ''}>
          NEWS
        </MobileLink>
        <MobileLink to="/aboutus" className={location.pathname === '/aboutus' ? 'active' : ''}>
          ABOUT US
        </MobileLink>
      </MobileMenu>
    </NavContainer>
  );
};

export default Navbar;