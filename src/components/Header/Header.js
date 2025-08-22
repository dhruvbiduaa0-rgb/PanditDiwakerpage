import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Phone, Mail, MapPin } from 'lucide-react';

const HeaderContainer = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: ${({ theme }) => theme.zIndex.sticky};
  background: ${({ scrolled, theme }) => 
    scrolled ? 'rgba(255, 255, 255, 0.95)' : 'rgba(255, 255, 255, 0.9)'};
  backdrop-filter: ${({ scrolled }) => scrolled ? 'blur(10px)' : 'blur(5px)'};
  border-bottom: ${({ scrolled, theme }) => 
    scrolled ? `1px solid ${theme.colors.borderLight}` : 'none'};
  transition: all 0.3s ease;
`;

const TopBar = styled.div`
  background: ${({ theme }) => theme.colors.primary};
  color: white;
  padding: 0.8rem 0;
  font-size: 1.4rem;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    display: none;
  }
`;

const TopBarContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 120rem;
  margin: 0 auto;
  padding: 0 2rem;
`;

const TopBarInfo = styled.div`
  display: flex;
  gap: 2rem;
  align-items: center;
`;

const TopBarItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  
  svg {
    width: 1.4rem;
    height: 1.4rem;
  }
`;

const TopBarContact = styled.div`
  display: flex;
  gap: 2rem;
  align-items: center;
`;

const TopBarLink = styled.a`
  color: white;
  text-decoration: none;
  transition: opacity 0.3s ease;
  
  &:hover {
    opacity: 0.8;
  }
`;

const MainHeader = styled.div`
  padding: 1.6rem 0;
`;

const HeaderContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 120rem;
  margin: 0 auto;
  padding: 0 2rem;
`;

const Logo = styled(Link)`
  display: flex;
  align-items: center;
  gap: 1.2rem;
  text-decoration: none;
  color: ${({ theme }) => theme.colors.heading};
  
  img {
    width: 4rem;
    height: 4rem;
  }
  
  span {
    font-size: 2.4rem;
    font-weight: ${({ theme }) => theme.fontWeights.bold};
    font-family: ${({ theme }) => theme.fonts.decorative};
    color: ${({ theme }) => theme.colors.primary};
  }
`;

const Navigation = styled.nav`
  display: flex;
  gap: 3.2rem;
  align-items: center;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    display: none;
  }
`;

const NavLink = styled(Link)`
  color: ${({ theme, active }) => 
    active ? theme.colors.primary : theme.colors.text};
  text-decoration: none;
  font-weight: ${({ theme, active }) => 
    active ? theme.fontWeights.medium : theme.fontWeights.normal};
  padding: 0.8rem 1.2rem;
  border-radius: 0.6rem;
  transition: all 0.3s ease;
  position: relative;
  
  &:hover {
    color: ${({ theme }) => theme.colors.primary};
    background: ${({ theme }) => theme.colors.primaryLighter};
  }
  
  &::after {
    content: '';
    position: absolute;
    bottom: -0.2rem;
    left: 50%;
    transform: translateX(-50%);
    width: ${({ active }) => active ? '100%' : '0'};
    height: 2px;
    background: ${({ theme }) => theme.colors.primary};
    transition: width 0.3s ease;
  }
  
  &:hover::after {
    width: 100%;
  }
`;

const HeaderActions = styled.div`
  display: flex;
  gap: 1.6rem;
  align-items: center;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    display: none;
  }
`;

const ActionButton = styled(Link)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 1rem 2rem;
  border-radius: 0.8rem;
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  text-decoration: none;
  transition: all 0.3s ease;
  cursor: pointer;
  border: none;
  font-size: 1.4rem;
  
  &.btn--primary {
    background-color: ${({ theme }) => theme.colors.primary};
    color: white;
    
    &:hover {
      background-color: ${({ theme }) => theme.colors.primaryDark};
      transform: translateY(-2px);
      box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
    }
  }
  
  &.btn--outline {
    background-color: transparent;
    color: ${({ theme }) => theme.colors.primary};
    border: 2px solid ${({ theme }) => theme.colors.primary};
    
    &:hover {
      background-color: ${({ theme }) => theme.colors.primary};
      color: white;
    }
  }
`;

const MobileMenuButton = styled.button`
  display: none;
  background: none;
  border: none;
  color: ${({ theme }) => theme.colors.text};
  cursor: pointer;
  padding: 0.5rem;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    display: block;
  }
  
  svg {
    width: 2.4rem;
    height: 2.4rem;
  }
`;

const MobileMenu = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.8);
  z-index: ${({ theme }) => theme.zIndex.modal};
  display: flex;
  align-items: center;
  justify-content: center;
  
  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    display: none;
  }
`;

const MobileMenuContent = styled(motion.div)`
  background: white;
  border-radius: 1.2rem;
  padding: 3.2rem;
  max-width: 40rem;
  width: 90%;
  max-height: 80vh;
  overflow-y: auto;
  position: relative;
`;

const MobileMenuClose = styled.button`
  position: absolute;
  top: 1.6rem;
  right: 1.6rem;
  background: none;
  border: none;
  color: ${({ theme }) => theme.colors.text};
  cursor: pointer;
  padding: 0.5rem;
  
  svg {
    width: 2.4rem;
    height: 2.4rem;
  }
`;

const MobileNav = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const MobileNavLink = styled(Link)`
  color: ${({ theme, active }) => 
    active ? theme.colors.primary : theme.colors.text};
  text-decoration: none;
  font-size: 1.8rem;
  font-weight: ${({ theme, active }) => 
    active ? theme.fontWeights.medium : theme.fontWeights.normal};
  padding: 1.2rem;
  border-radius: 0.8rem;
  transition: all 0.3s ease;
  
  &:hover {
    color: ${({ theme }) => theme.colors.primary};
    background: ${({ theme }) => theme.colors.primaryLighter};
  }
`;

const MobileActions = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  margin-top: 2rem;
  padding-top: 2rem;
  border-top: 1px solid ${({ theme }) => theme.colors.border};
`;

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  
  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  // Close mobile menu when route changes
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);
  
  const isActive = (path) => location.pathname === path;
  
  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/services', label: 'Services' },
    { path: '/content', label: 'Learn' },
    { path: '/about', label: 'About' },
    { path: '/contact', label: 'Contact' }
  ];
  
  return (
    <HeaderContainer scrolled={scrolled}>
      <TopBar>
        <TopBarContent>
          <TopBarInfo>
            <TopBarItem>
              <MapPin />
              <span>Varanasi, Uttar Pradesh, India</span>
            </TopBarItem>
            <TopBarItem>
              <Mail />
              <span>info@spiritualservices.com</span>
            </TopBarItem>
          </TopBarInfo>
          <TopBarContact>
            <TopBarLink href="tel:+919876543210">
              <TopBarItem>
                <Phone />
                <span>+91 98765 43210</span>
              </TopBarItem>
            </TopBarLink>
          </TopBarContact>
        </TopBarContent>
      </TopBar>
      
      <MainHeader>
        <HeaderContent>
          <Logo to="/">
            <img src="/images/icon-192.svg" alt="Spiritual Services" />
            <span>Spiritual Services</span>
          </Logo>
          
          <Navigation>
            {navItems.map((item) => (
              <NavLink 
                key={item.path} 
                to={item.path} 
                active={isActive(item.path)}
              >
                {item.label}
              </NavLink>
            ))}
          </Navigation>
          
          <HeaderActions>
            <ActionButton to="/contact" className="btn--outline">
              Get Quote
            </ActionButton>
            <ActionButton to="/services" className="btn--primary">
              Book Service
            </ActionButton>
          </HeaderActions>
          
          <MobileMenuButton onClick={() => setMobileMenuOpen(true)}>
            <Menu />
          </MobileMenuButton>
        </HeaderContent>
      </MainHeader>
      
      <AnimatePresence>
        {mobileMenuOpen && (
          <MobileMenu
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <MobileMenuContent
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <MobileMenuClose onClick={() => setMobileMenuOpen(false)}>
                <X />
              </MobileMenuClose>
              
              <MobileNav>
                {navItems.map((item) => (
                  <MobileNavLink 
                    key={item.path} 
                    to={item.path} 
                    active={isActive(item.path)}
                  >
                    {item.label}
                  </MobileNavLink>
                ))}
              </MobileNav>
              
              <MobileActions>
                <ActionButton to="/contact" className="btn--outline">
                  Get Quote
                </ActionButton>
                <ActionButton to="/services" className="btn--primary">
                  Book Service
                </ActionButton>
              </MobileActions>
            </MobileMenuContent>
          </MobileMenu>
        )}
      </AnimatePresence>
    </HeaderContainer>
  );
};

export default Header;