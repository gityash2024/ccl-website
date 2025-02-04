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

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

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
        { label: 'KERALA STRIKERS', path: '/kerala' },
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

  return (
    <nav className={`fixed top-0 left-0 right-0 h-20 z-[9999] transition-all duration-300 ${isScrolled ? 'bg-[#214592]/95 backdrop-blur-md' : 'bg-[#214592]'}`}>
      <div className="max-w-7xl mx-auto px-4 h-full flex items-center justify-between relative">
        <Link to="/" className="flex items-center z-[9999]">
          <img src={logo} alt="CCL Logo" className="h-12 w-auto transition-transform duration-300 hover:scale-105" />
        </Link>

        <div className="hidden md:flex items-center gap-2 ml-8">
          {navItems.map((item) => (
            <div key={item.label} className="relative"
              onMouseEnter={() => setActiveDropdown(item.label)}
              onMouseLeave={() => setActiveDropdown(null)}>
              {item.dropdown ? (
                <>
                  <button className={`flex items-center gap-1 px-4 py-2 text-white font-semibold hover:text-[#E04837] transition-colors ${item.dropdown.some(dropItem => location.pathname === dropItem.path) ? 'text-[#E04837]' : ''}`}>
                    {item.label}
                    <ChevronDown size={16} className="transition-transform duration-300" />
                  </button>
                  <AnimatePresence>
                    {activeDropdown === item.label && (
                      <motion.div
                        initial={{ opacity: 0, y: -10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -10, scale: 0.95 }}
                        transition={{ type: "spring", stiffness: 400, damping: 30 }}
                        className="absolute top-full left-0 min-w-[260px] bg-white rounded-lg p-2 shadow-lg origin-top z-50"
                      >
                        {item.dropdown.map((dropItem) => (
                          <Link
                            key={dropItem.path}
                            to={dropItem.path}
                            className={`block px-4 py-3 text-[#214592] font-medium rounded-md transition-all hover:bg-gray-50 hover:text-[#E04837] hover:translate-x-1 ${location.pathname === dropItem.path ? 'bg-[#E04837] text-white' : ''}`}
                          >
                            {dropItem.label}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </>
              ) : (
                <Link
                  to={item.path}
                  className={`relative px-4 py-2 text-white font-semibold hover:text-[#E04837] transition-colors ${location.pathname === item.path ? 'text-[#E04837] after:content-[""] after:absolute after:bottom-0 after:left-4 after:right-4 after:h-0.5 after:bg-[#E04837] after:rounded after:animate-slideIn' : ''}`}
                >
                  {item.label}
                </Link>
              )}
            </div>
          ))}
        </div>

        <a href="https://colladome.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden lg:flex items-center px-4 py-2 text-white text-sm bg-white/10 rounded-lg transition-all hover:bg-[#E04837] hover:-translate-y-0.5 ml-auto"
        >
          Powered by <span className="font-bold ml-1">COLLADOME</span>
        </a>

        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden flex p-2 text-white z-[9999]"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="fixed md:hidden top-20 left-0 right-0 bottom-0 bg-[#214592] overflow-y-auto z-[9998] h-[calc(100vh-5rem)]"
            >
              <div className="p-4 space-y-2">
                {navItems.map((item) => (
                  <div key={item.label} className="border-b border-white/10">
                    {item.dropdown ? (
                      <>
                        <button
                          onClick={() => setMobileDropdowns(prev => ({
                            ...prev,
                            [item.label]: !prev[item.label]
                          }))}
                          className="flex items-center justify-between w-full p-4 text-white font-semibold"
                        >
                          {item.label}
                          <ChevronDown
                            size={20}
                            className={`transition-transform duration-300 ${mobileDropdowns[item.label] ? 'rotate-180' : ''}`}
                          />
                        </button>
                        <AnimatePresence>
                          {mobileDropdowns[item.label] && (
                            <motion.div
                              initial={{ height: 0 }}
                              animate={{ height: "auto" }}
                              exit={{ height: 0 }}
                              transition={{ duration: 0.3 }}
                              className="bg-black/10 overflow-hidden p-2"
                            >
                              {item.dropdown.map((dropItem) => (
                                <Link
                                  key={dropItem.path}
                                  to={dropItem.path}
                                  className={`block p-4 text-white font-semibold transition-colors ${location.pathname === dropItem.path ? 'text-[#E04837] bg-[#E04837]/10 rounded-lg' : ''}`}
                                >
                                  {dropItem.label}
                                </Link>
                              ))}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </>
                    ) : (
                      <Link
                        to={item.path}
                        className={`block p-4 text-white font-semibold transition-colors ${location.pathname === item.path ? 'text-[#E04837] bg-[#E04837]/10 rounded-lg' : ''}`}
                      >
                        {item.label}
                      </Link>
                    )}
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navbar;