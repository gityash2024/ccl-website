import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, ArrowUpRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import logo from '../assets/logo.png';

const NavContainer = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 80px;
  z-index: 50;
  background: ${props => props.$isScrolled ? 'rgba(33, 69, 146, 0.95)' : '#214592'};
  backdrop-filter: ${props => props.$isScrolled ? 'blur(8px)' : 'none'};
  transition: all 0.3s ease;
`;

const NavWrapper = styled.div`
  max-width: 1440px;
  margin: 0 auto;
  padding: 0 1.5rem;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const LogoContainer = styled(Link)`
  display: flex;
  align-items: center;
  z-index: 10;
  
  img {
    height: 50px;
    width: auto;
    transition: transform 0.3s ease;
    
    &:hover {
      transform: scale(1.05);
    }
  }
`;

const DesktopNav = styled.div`
  display: none;
  gap: 0.5rem;
  margin-left: 2rem;
  
  @media (min-width: 768px) {
    display: flex;
    align-items: center;
  }
`;

const NavItem = styled(motion.div)`
  position: relative;
`;

const NavLink = styled(Link)`
  position: relative;
  display: flex;
  align-items: center;
  padding: 0.5rem 1rem;
  color: white;
  font-weight: 600;
  text-decoration: none;
  transition: color 0.3s ease;
  
  &:hover {
    color: #E04837;
  }

  &.active {
    color: #E04837;
    
    &::after {
      content: '';
      position: absolute;
      bottom: -2px;
      left: 1rem;
      right: 1rem;
      height: 2px;
      background: #E04837;
      border-radius: 2px;
      transform-origin: center;
      animation: slideIn 0.3s ease forwards;
    }
  }

  @keyframes slideIn {
    from {
      transform: scaleX(0);
    }
    to {
      transform: scaleX(1);
    }
  }
`;

const DropdownButton = styled.button`
  display: flex;
  align-items: center;
  gap: 0.25rem;
  padding: 0.5rem 1rem;
  color: white;
  font-weight: 600;
  background: none;
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;
  
  svg {
    transition: transform 0.3s ease;
  }
  
  &:hover {
    color: #E04837;
    
    svg {
      transform: rotate(180deg);
    }
  }
  
  &.active {
    color: #E04837;
  }
`;

const DropdownContent = styled(motion.div)`
  position: absolute;
  top: 100%;
  left: 0;
  min-width: 260px;
  background: white;
  border-radius: 8px;
  padding: 0.5rem;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  transform-origin: top;
`;

const DropdownLink = styled(Link)`
  display: block;
  padding: 0.75rem 1rem;
  color: #214592;
  text-decoration: none;
  font-weight: 500;
  border-radius: 6px;
  transition: all 0.2s ease;

  &:hover {
    background: #f8f9fa;
    color: #E04837;
    transform: translateX(5px);
  }

  &.active {
    background: #E04837;
    color: white;
  }
`;

const PoweredBy = styled.a`
  display: none;
  align-items: center;
  padding: 0.5rem 1rem;
  color: white;
  font-size: 0.875rem;
  text-decoration: none;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 6px;
  transition: all 0.3s ease;
  margin-left: auto;
  
  @media (min-width: 1024px) {
    display: flex;
  }
  
  span {
    font-weight: 700;
    margin-left: 0.25rem;
  }
  
  &:hover {
    background: #E04837;
    transform: translateY(-2px);
  }
`;

const MobileMenuButton = styled.button`
  display: flex;
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

const MobileNav = styled(motion.div)`
  position: fixed;
  top: 80px;
  left: 0;
  right: 0;
  bottom: 0;
  background: #214592;
  padding: 1rem;
  overflow-y: auto;
  
  @media (min-width: 768px) {
    display: none;
  }
`;

const MobileNavItem = styled.div`
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
`;

const MobileNavLink = styled(Link)`
  display: flex;
  align-items: center;
  padding: 1rem;
  color: white;
  text-decoration: none;
  font-weight: 600;
  transition: all 0.3s ease;
  
  &.active {
    color: #E04837;
    background: rgba(224, 72, 55, 0.1);
    border-radius: 6px;
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
  font-weight: 600;
  cursor: pointer;
  
  svg {
    transition: transform 0.3s ease;
    transform: ${props => props.$isOpen ? 'rotate(180deg)' : 'none'};
  }
`;

const MobileDropdown = styled(motion.div)`
  background: rgba(0, 0, 0, 0.1);
  overflow: hidden;
  padding: 0.5rem;
`;

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [mobileDropdowns, setMobileDropdowns] = useState({});
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
    setActiveDropdown(null);
    setMobileDropdowns({});
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

  const dropdownVariants = {
    hidden: { 
      opacity: 0,
      y: -10,
      scale: 0.95,
    },
    visible: { 
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 30
      }
    },
    exit: {
      opacity: 0,
      y: -10,
      scale: 0.95,
      transition: {
        duration: 0.2
      }
    }
  };

  const mobileNavVariants = {
    hidden: { x: "100%" },
    visible: { 
      x: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30
      }
    },
    exit: {
      x: "100%",
      transition: {
        duration: 0.3
      }
    }
  };

  const mobileDropdownVariants = {
    hidden: { height: 0 },
    visible: { 
      height: "auto",
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    }
  };

  return (
    <NavContainer $isScrolled={isScrolled}>
      <NavWrapper>
        <LogoContainer to="/">
          <img src={logo} alt="CCL Logo" />
        </LogoContainer>

        <DesktopNav>
          {navItems.map((item) => (
            <NavItem 
              key={item.label}
              onMouseEnter={() => setActiveDropdown(item.label)}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              {item.dropdown ? (
                <>
                  <DropdownButton 
                    className={item.dropdown.some(dropItem => 
                      location.pathname === dropItem.path
                    ) ? 'active' : ''}
                  >
                    {item.label}
                    <ChevronDown size={16} />
                  </DropdownButton>
                  <AnimatePresence>
                    {activeDropdown === item.label && (
                      <DropdownContent
                        variants={dropdownVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                      >
                        {item.dropdown.map((dropItem) => (
                          <DropdownLink
                            key={dropItem.path}
                            to={dropItem.path}
                            className={location.pathname === dropItem.path ? 'active' : ''}
                          >
                            {dropItem.label}
                          </DropdownLink>
                        ))}
                      </DropdownContent>
                    )}
                  </AnimatePresence>
                </>
              ) : (
                <NavLink 
                  to={item.path}
                  className={location.pathname === item.path ? 'active' : ''}
                >
                  {item.label}
                </NavLink>
              )}
            </NavItem>
          ))}
        </DesktopNav>

        <PoweredBy 
        
          href="https://colladome.com" 
          target="_blank" 
          rel="noopener noreferrer"
        >
          Powered by <span>COLLADOME </span>
        </PoweredBy>

        <MobileMenuButton onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </MobileMenuButton>

        <AnimatePresence>
          {isMobileMenuOpen && (
            <MobileNav
              variants={mobileNavVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              {navItems.map((item) => (
                <MobileNavItem key={item.label}>
                  {item.dropdown ? (
                    <>
                      <MobileDropdownButton
                        $isOpen={mobileDropdowns[item.label]}
                        onClick={() => setMobileDropdowns(prev => ({
                          ...prev,
                          [item.label]: !prev[item.label]
                        }))}
                      >
                        {item.label}
                        <ChevronDown size={20} />
                      </MobileDropdownButton>
                      <AnimatePresence>
                        {mobileDropdowns[item.label] && (
                          <MobileDropdown
                            variants={mobileDropdownVariants}
                            initial="hidden"
                            animate="visible"
                            exit="hidden"
                          >
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
                        )}
                      </AnimatePresence>
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
            </MobileNav>
          )}
        </AnimatePresence>
      </NavWrapper>
    </NavContainer>
  );
};

export default Navbar;