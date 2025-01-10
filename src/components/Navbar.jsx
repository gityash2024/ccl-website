import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, ChevronRight } from 'lucide-react';
import logo from '../assets/logo.png';

const NavContainer = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 80px;
  background: #214592;
  z-index: 50;
  transition: background-color 0.3s ease;
`;

const NavBackground = styled.div`
  position: absolute;
  inset: 0;
  background: inherit;
  transform: skewX(12deg);
  transform-origin: top right;
  z-index: -1;
`;

const NavWrapper = styled.div`
  max-width: 1440px;
  margin: 0 auto;
  padding: 0 1.5rem;
  height: 100%;
`;

const NavContent = styled.div`
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
`;

const PoweredByLink = styled.a`
  display: none;
  color: white;
  font-size: 0.75rem;
  font-weight: 500;
  text-decoration: none;
  padding: 0.25rem 0.75rem;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 4px;
  transition: all 0.3s ease;
  white-space: nowrap;
  
  @media (min-width: 1024px) {
    display: flex;
    align-items: center;
  }

  &:hover {
    background: #E04837;
    transform: translateY(-1px);
  }

  span {
    font-weight: 700;
    margin-left: 0.25rem;
  }
`;

const NavigationSection = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-right: auto;
`;

const LogoLink = styled(Link)`
  display: flex;
  align-items: center;
  z-index: 10;
  
  img {
    height: 50px;
    width: auto;
  }
`;

const DesktopNav = styled.div`
  display: none;
  
  @media (min-width: 768px) {
    display: flex;
    align-items: center;
    gap: 1rem;
  }
`;

const NavItem = styled.div`
  position: relative;
`;

const NavLink = styled(Link)`
  display: flex;
  align-items: center;
  padding: 0.5rem 1rem;
  color: white;
  font-weight: bold;
  text-decoration: none;
  transition: all 0.3s ease;

  &.active {
    background: #E04837;
    clip-path: polygon(10% 0%, 90% 0%, 100% 100%, 0% 100%);
  }

  &:hover:not(.active) {
    background: rgba(255, 255, 255, 0.1);
  }

  svg {
    margin-left: 0.25rem;
    transition: transform 0.3s ease;
  }

  &:hover svg {
    transform: rotate(180deg);
  }
`;

const Dropdown = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  min-width: 260px;
  background: #214592;
  border-radius: 0 0 8px 8px;
  padding: 0.5rem;
  opacity: ${props => props.$isOpen ? 1 : 0};
  visibility: ${props => props.$isOpen ? 'visible' : 'hidden'};
  transform: translateY(${props => props.$isOpen ? '0' : '-10px'});
  transition: all 0.3s ease;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
`;

const DropdownLink = styled(Link)`
  display: block;
  padding: 0.75rem 1rem;
  color: white;
  text-decoration: none;
  transition: all 0.2s ease;
  font-size: 0.875rem;
  border-radius: 4px;

  &:hover {
    background: #E04837;
    transform: translateX(5px);
  }
`;

const MobileMenuButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem;
  color: white;
  background: none;
  border: none;
  cursor: pointer;
  z-index: 10;

  @media (min-width: 768px) {
    display: none;
  }
`;

const MobileNav = styled.div`
  position: fixed;
  top: 80px;
  left: 0;
  right: 0;
  bottom: 0;
  background: #214592;
  padding: 1rem;
  transform: translateX(${props => props.$isOpen ? '0' : '-100%'});
  transition: transform 0.3s ease;
  overflow-y: auto;
  z-index: 40;

  @media (min-width: 768px) {
    display: none;
  }
`;

const MobileNavItem = styled.div`
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
`;

const MobileNavLink = styled(Link)`
  display: block;
  padding: 1rem;
  color: white;
  text-decoration: none;
  font-weight: bold;
  
  &.active {
    background: #E04837;
  }
`;

const MobileDropdownButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 1rem;
  color: white;
  background: none;
  border: none;
  font-weight: bold;
  cursor: pointer;
  
  svg {
    transition: transform 0.3s ease;
    transform: ${props => props.$isOpen ? 'rotate(90deg)' : 'none'};
  }
`;

const MobileDropdown = styled.div`
  padding-left: 1rem;
  background: rgba(0, 0, 0, 0.1);
  display: ${props => props.$isOpen ? 'block' : 'none'};
`;

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [mobileDropdowns, setMobileDropdowns] = useState({});
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
    setActiveDropdown(null);
  }, [location]);

  const navItems = [
    { label: 'HOME', path: '/home' },
    {
      label: 'TEAMS',
      path: '/teams',
      dropdown: [
        { label: 'BENGAL TIGERS', path: '/bengal' },
        { label: 'BHOJPURI DABANGGS', path: '/bhojpuri' },
        { label: 'CHENNAI RHINOS', path: '/chennai' },
        { label: 'KARNATAKA BULLDOZERS', path: '/karnataka' },
        { label: 'C3 KERALA STRIKERS', path: '/kerala' },
        { label: 'MUMBAI HEROES', path: '/mumbai' },
        { label: 'PUNJAB DE SHER', path: '/punjab' },
        { label: 'TELUGU WARRIORS', path: '/telugu' }
      ]
    },
    {
      label: 'CCL 2025',
      path: '/ccl2025',
      dropdown: [
        { label: 'SCHEDULE', path: '/schedule' },
        { label: 'STANDINGS', path: '/standings' }
      ]
    },
    {
      label: 'GALLERY',
      path: '/gallery',
      dropdown: [
        { label: 'PHOTOS', path: '/photos' },
        { label: 'VIDEOS', path: '/videos' }
      ]
    },
    { label: 'NEWS', path: '/news' },
    { label: 'ABOUT US', path: '/aboutus' }
  ];

  const toggleMobileDropdown = (label) => {
    setMobileDropdowns(prev => ({
      ...prev,
      [label]: !prev[label]
    }));
  };

  return (
    <NavContainer style={{ 
      backgroundColor: isScrolled ? 'rgba(33, 69, 146, 0.95)' : '#214592',
      backdropFilter: isScrolled ? 'blur(8px)' : 'none'
    }}>
      <NavBackground />
      <NavWrapper>
        <NavContent>
          <NavigationSection>
            <LogoLink to="/">
              <img src={logo} alt="CCL Logo" />
            </LogoLink>

            <DesktopNav>
              {navItems.map((item) => (
                <NavItem
                  key={item.label}
                  onMouseEnter={() => setActiveDropdown(item.label)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <NavLink
                    to={item.path}
                    className={location.pathname === item.path ? 'active' : ''}
                  >
                    {item.label}
                    {item.dropdown && <ChevronDown size={16} />}
                  </NavLink>

                  {item.dropdown && (
                    <Dropdown $isOpen={activeDropdown === item.label}>
                      {item.dropdown.map((dropItem) => (
                        <DropdownLink
                          key={dropItem.path}
                          to={dropItem.path}
                        >
                          {dropItem.label}
                        </DropdownLink>
                      ))}
                    </Dropdown>
                  )}
                </NavItem>
              ))}
            </DesktopNav>
          </NavigationSection>

          <PoweredByLink 
            href="https://colladome.com" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            Powered by <span>COLLADOME</span>
          </PoweredByLink>

          <MobileMenuButton onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </MobileMenuButton>
        </NavContent>
      </NavWrapper>

      <MobileNav $isOpen={isMobileMenuOpen}>
        {navItems.map((item) => (
          <MobileNavItem key={item.label}>
            {item.dropdown ? (
              <>
                <MobileDropdownButton
                  $isOpen={mobileDropdowns[item.label]}
                  onClick={() => toggleMobileDropdown(item.label)}
                >
                  {item.label}
                  <ChevronRight size={20} />
                </MobileDropdownButton>
                <MobileDropdown $isOpen={mobileDropdowns[item.label]}>
                  {item.dropdown.map((dropItem) => (
                    <MobileNavLink
                      key={dropItem.path}
                      to={dropItem.path}
                      className={location.pathname === dropItem.path ? 'active' : ''}
                    >
                      {dropItem.label}
                    </MobileNavLink>
                  ))}
                </MobileDropdown>
              </>
            ) : (
              <MobileNavLink
                to={item.path}
                className={location.pathname === item.path ? 'active' : ''}
              >
                {item.label}
              </MobileNavLink>
            )}
          </MobileNavItem>
        ))}
        <MobileNavItem>
          <MobileNavLink 
            as="a"
            href="https://colladome.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            POWERED BY COLLADOME
          </MobileNavLink>
        </MobileNavItem>
      </MobileNav>
    </NavContainer>
  );
};

export default Navbar;