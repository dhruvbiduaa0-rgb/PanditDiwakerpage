import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Phone, Mail, MapPin, Facebook, Twitter, Instagram, Youtube, Heart } from 'lucide-react';

const FooterContainer = styled.footer`
  background: ${({ theme }) => theme.colors.heading};
  color: white;
  padding: 6rem 0 2rem;
`;

const FooterContent = styled.div`
  max-width: 120rem;
  margin: 0 auto;
  padding: 0 2rem;
`;

const FooterMain = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(25rem, 1fr));
  gap: 4rem;
  margin-bottom: 4rem;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    grid-template-columns: 1fr;
    text-align: center;
  }
`;

const FooterSection = styled.div`
  h3 {
    font-size: 2rem;
    font-weight: ${({ theme }) => theme.fontWeights.bold};
    margin-bottom: 2rem;
    color: ${({ theme }) => theme.colors.primaryLight};
  }
  
  p {
    font-size: 1.6rem;
    line-height: 1.6;
    margin-bottom: 1.6rem;
    opacity: 0.9;
  }
`;

const FooterLinks = styled.ul`
  list-style: none;
  padding: 0;
  
  li {
    margin-bottom: 1.2rem;
    
    a {
      color: white;
      text-decoration: none;
      font-size: 1.6rem;
      opacity: 0.9;
      transition: all 0.3s ease;
      
      &:hover {
        opacity: 1;
        color: ${({ theme }) => theme.colors.primaryLight};
        padding-left: 0.8rem;
      }
    }
  }
`;

const ContactInfo = styled.div`
  .contact-item {
    display: flex;
    align-items: center;
    gap: 1.2rem;
    margin-bottom: 1.6rem;
    font-size: 1.6rem;
    opacity: 0.9;
    
    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
      justify-content: center;
    }
    
    svg {
      width: 2rem;
      height: 2rem;
      color: ${({ theme }) => theme.colors.primaryLight};
      flex-shrink: 0;
    }
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1.6rem;
  margin-top: 2rem;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    justify-content: center;
  }
  
  a {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 4.8rem;
    height: 4.8rem;
    background: ${({ theme }) => theme.colors.primary};
    color: white;
    border-radius: 50%;
    text-decoration: none;
    transition: all 0.3s ease;
    
    &:hover {
      background: ${({ theme }) => theme.colors.primaryDark};
      transform: translateY(-3px);
      box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3);
    }
    
    svg {
      width: 2.4rem;
      height: 2.4rem;
    }
  }
`;

const NewsletterSection = styled.div`
  background: ${({ theme }) => theme.colors.primary};
  border-radius: 1.6rem;
  padding: 3rem;
  margin-bottom: 4rem;
  text-align: center;
  
  h3 {
    font-size: 2.4rem;
    margin-bottom: 1.6rem;
  }
  
  p {
    font-size: 1.6rem;
    margin-bottom: 2.4rem;
    opacity: 0.9;
  }
  
  .newsletter-form {
    display: flex;
    gap: 1.6rem;
    max-width: 50rem;
    margin: 0 auto;
    
    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
      flex-direction: column;
    }
    
    input {
      flex: 1;
      padding: 1.2rem 1.6rem;
      border: none;
      border-radius: 0.8rem;
      font-size: 1.6rem;
      
      &:focus {
        outline: none;
        box-shadow: 0 0 0 3px rgba(255, 255, 255, 0.3);
      }
    }
    
    button {
      padding: 1.2rem 2.4rem;
      background: white;
      color: ${({ theme }) => theme.colors.primary};
      border: none;
      border-radius: 0.8rem;
      font-size: 1.6rem;
      font-weight: ${({ theme }) => theme.fontWeights.medium};
      cursor: pointer;
      transition: all 0.3s ease;
      
      &:hover {
        transform: translateY(-2px);
        box-shadow: 0 8px 25px rgba(0, 0, 0, 0.2);
      }
    }
  }
`;

const FooterBottom = styled.div`
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  padding-top: 2rem;
  text-align: center;
  
  p {
    font-size: 1.4rem;
    opacity: 0.8;
    
    a {
      color: ${({ theme }) => theme.colors.primaryLight};
      text-decoration: none;
      
      &:hover {
        text-decoration: underline;
      }
    }
  }
`;

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const quickLinks = [
    { path: '/', label: 'Home' },
    { path: '/services', label: 'Services' },
    { path: '/content', label: 'Learn' },
    { path: '/about', label: 'About Us' },
    { path: '/contact', label: 'Contact' }
  ];
  
  const services = [
    { path: '/services/ganesh-pooja', label: 'Ganesh Pooja' },
    { path: '/services/lakshmi-pooja', label: 'Lakshmi Pooja' },
    { path: '/services/navratri-durgapooja', label: 'Navratri Pooja' },
    { path: '/services/vivah-sanskar', label: 'Vivah Sanskar' },
    { path: '/services/mahamrtunjay-jap', label: 'Mahamrtunjay Jap' }
  ];
  
  const resources = [
    { path: '/content', label: 'Spiritual Articles' },
    { path: '/content', label: 'Mantra Guide' },
    { path: '/content', label: 'Pooja Instructions' },
    { path: '/content', label: 'Festival Calendar' },
    { path: '/content', label: 'FAQ' }
  ];
  
  const socialLinks = [
    { icon: <Facebook />, url: 'https://facebook.com', label: 'Facebook' },
    { icon: <Twitter />, url: 'https://twitter.com', label: 'Twitter' },
    { icon: <Instagram />, url: 'https://instagram.com', label: 'Instagram' },
    { icon: <Youtube />, url: 'https://youtube.com', label: 'YouTube' }
  ];
  
  return (
    <FooterContainer>
      <FooterContent>
        <NewsletterSection>
          <h3>Stay Connected</h3>
          <p>
            Subscribe to our newsletter for spiritual insights, upcoming events, 
            and special offers.
          </p>
          <form className="newsletter-form">
            <input
              type="email"
              placeholder="Enter your email address"
              required
            />
            <button type="submit">Subscribe</button>
          </form>
        </NewsletterSection>
        
        <FooterMain>
          <FooterSection>
            <h3>About Us</h3>
            <p>
              We are dedicated to preserving and sharing the ancient wisdom of 
              Vedic traditions, providing authentic spiritual services that bring 
              peace, prosperity, and spiritual growth to modern life.
            </p>
            <SocialLinks>
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </SocialLinks>
          </FooterSection>
          
          <FooterSection>
            <h3>Quick Links</h3>
            <FooterLinks>
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link to={link.path}>{link.label}</Link>
                </li>
              ))}
            </FooterLinks>
          </FooterSection>
          
          <FooterSection>
            <h3>Our Services</h3>
            <FooterLinks>
              {services.map((service, index) => (
                <li key={index}>
                  <Link to={service.path}>{service.label}</Link>
                </li>
              ))}
            </FooterLinks>
          </FooterSection>
          
          <FooterSection>
            <h3>Resources</h3>
            <FooterLinks>
              {resources.map((resource, index) => (
                <li key={index}>
                  <Link to={resource.path}>{resource.label}</Link>
                </li>
              ))}
            </FooterLinks>
          </FooterSection>
          
          <FooterSection>
            <h3>Contact Information</h3>
            <ContactInfo>
              <div className="contact-item">
                <MapPin />
                <span>Varanasi, Uttar Pradesh, India</span>
              </div>
              <div className="contact-item">
                <Phone />
                <span>+91 98765 43210</span>
              </div>
              <div className="contact-item">
                <Mail />
                <span>info@spiritualservices.com</span>
              </div>
            </ContactInfo>
          </FooterSection>
        </FooterMain>
        
        <FooterBottom>
          <p>
            © {currentYear} Spiritual Services. All rights reserved. 
            Made with <Heart size={16} style={{ display: 'inline', color: '#ef4444' }} /> for spiritual growth.
          </p>
          <p>
            <Link to="/privacy">Privacy Policy</Link> • 
            <Link to="/terms"> Terms of Service</Link> • 
            <Link to="/sitemap"> Sitemap</Link>
          </p>
        </FooterBottom>
      </FooterContent>
    </FooterContainer>
  );
};

export default Footer;