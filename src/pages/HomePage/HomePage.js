import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { ArrowRight, Star, Clock, Users, Shield, Heart, BookOpen } from 'lucide-react';
import { useServices } from '../../context/ServicesContext';

const HomePageContainer = styled.div`
  padding-top: 12rem; // Account for fixed header
`;

const HeroSection = styled.section`
  background: linear-gradient(135deg, 
    ${({ theme }) => theme.colors.primary} 0%, 
    ${({ theme }) => theme.colors.spiritual} 100%);
  color: white;
  padding: 8rem 0;
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: url('/images/hero-ganesh.webp') center/cover;
    opacity: 0.1;
    z-index: 1;
  }
`;

const HeroContent = styled.div`
  position: relative;
  z-index: 2;
  max-width: 120rem;
  margin: 0 auto;
  padding: 0 2rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 6rem;
  align-items: center;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
    text-align: center;
    gap: 4rem;
  }
`;

const HeroText = styled.div`
  h1 {
    font-size: 5.6rem;
    font-weight: ${({ theme }) => theme.fontWeights.bold};
    margin-bottom: 2.4rem;
    line-height: 1.1;
    
    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
      font-size: 4rem;
    }
  }
  
  p {
    font-size: 2rem;
    margin-bottom: 3.2rem;
    opacity: 0.9;
    line-height: 1.6;
    
    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
      font-size: 1.8rem;
    }
  }
`;

const HeroActions = styled.div`
  display: flex;
  gap: 2rem;
  flex-wrap: wrap;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    justify-content: center;
  }
`;

const HeroButton = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 1rem;
  padding: 1.6rem 3.2rem;
  border-radius: 1rem;
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  text-decoration: none;
  transition: all 0.3s ease;
  font-size: 1.8rem;
  
  &.btn--primary {
    background-color: white;
    color: ${({ theme }) => theme.colors.primary};
    
    &:hover {
      transform: translateY(-3px);
      box-shadow: 0 12px 30px rgba(0, 0, 0, 0.2);
    }
  }
  
  &.btn--outline {
    background-color: transparent;
    color: white;
    border: 2px solid white;
    
    &:hover {
      background-color: white;
      color: ${({ theme }) => theme.colors.primary};
    }
  }
`;

const HeroImage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  
  img {
    max-width: 100%;
    height: auto;
    border-radius: 2rem;
    box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
  }
`;

const FeaturesSection = styled.section`
  padding: 8rem 0;
  background: ${({ theme }) => theme.colors.backgroundLight};
`;

const FeaturesContainer = styled.div`
  max-width: 120rem;
  margin: 0 auto;
  padding: 0 2rem;
`;

const SectionHeader = styled.div`
  text-align: center;
  margin-bottom: 6rem;
  
  h2 {
    font-size: 4.8rem;
    color: ${({ theme }) => theme.colors.heading};
    margin-bottom: 1.6rem;
    
    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
      font-size: 3.6rem;
    }
  }
  
  p {
    font-size: 2rem;
    color: ${({ theme }) => theme.colors.textLight};
    max-width: 60rem;
    margin: 0 auto;
  }
`;

const FeaturesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(30rem, 1fr));
  gap: 4rem;
`;

const FeatureCard = styled(motion.div)`
  background: white;
  padding: 4rem 3rem;
  border-radius: 1.6rem;
  text-align: center;
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.08);
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 20px 60px rgba(0, 0, 0, 0.15);
  }
  
  .icon {
    width: 8rem;
    height: 8rem;
    background: ${({ theme }) => theme.colors.primaryLighter};
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto 2.4rem;
    
    svg {
      width: 4rem;
      height: 4rem;
      color: ${({ theme }) => theme.colors.primary};
    }
  }
  
  h3 {
    font-size: 2.4rem;
    color: ${({ theme }) => theme.colors.heading};
    margin-bottom: 1.6rem;
  }
  
  p {
    font-size: 1.6rem;
    color: ${({ theme }) => theme.colors.textLight};
    line-height: 1.6;
  }
`;

const ServicesSection = styled.section`
  padding: 8rem 0;
`;

const ServicesContainer = styled.div`
  max-width: 120rem;
  margin: 0 auto;
  padding: 0 2rem;
`;

const ServicesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(35rem, 1fr));
  gap: 4rem;
  margin-top: 6rem;
`;

const ServiceCard = styled(motion.div)`
  background: white;
  border-radius: 1.6rem;
  overflow: hidden;
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.08);
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 20px 60px rgba(0, 0, 0, 0.15);
  }
  
  .image {
    width: 100%;
    height: 24rem;
    overflow: hidden;
    
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: transform 0.3s ease;
    }
  }
  
  &:hover .image img {
    transform: scale(1.05);
  }
  
  .content {
    padding: 3rem;
  }
  
  h3 {
    font-size: 2.4rem;
    color: ${({ theme }) => theme.colors.heading};
    margin-bottom: 1.2rem;
  }
  
  p {
    font-size: 1.6rem;
    color: ${({ theme }) => theme.colors.textLight};
    margin-bottom: 2rem;
    line-height: 1.6;
  }
  
  .meta {
    display: flex;
    gap: 2rem;
    margin-bottom: 2rem;
    font-size: 1.4rem;
    color: ${({ theme }) => theme.colors.textLighter};
    
    .meta-item {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      
      svg {
        width: 1.6rem;
        height: 1.6rem;
      }
    }
  }
  
  .price {
    font-size: 2rem;
    font-weight: ${({ theme }) => theme.fontWeights.bold};
    color: ${({ theme }) => theme.colors.primary};
    margin-bottom: 2rem;
  }
  
  .actions {
    display: flex;
    gap: 1.2rem;
  }
`;

const ServiceButton = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 0.8rem;
  padding: 1.2rem 2.4rem;
  border-radius: 0.8rem;
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  text-decoration: none;
  transition: all 0.3s ease;
  font-size: 1.4rem;
  
  &.btn--primary {
    background-color: ${({ theme }) => theme.colors.primary};
    color: white;
    
    &:hover {
      background-color: ${({ theme }) => theme.colors.primaryDark};
      transform: translateY(-2px);
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

const CTAButton = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 1rem;
  padding: 1.6rem 3.2rem;
  background: ${({ theme }) => theme.colors.primary};
  color: white;
  text-decoration: none;
  border-radius: 1rem;
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  font-size: 1.8rem;
  transition: all 0.3s ease;
  margin: 0 auto;
  
  &:hover {
    background: ${({ theme }) => theme.colors.primaryDark};
    transform: translateY(-3px);
    box-shadow: 0 12px 30px rgba(0, 0, 0, 0.2);
  }
`;

const HomePage = () => {
  const { services, isLoading } = useServices();
  
  // Get featured services (first 6)
  const featuredServices = services.slice(0, 6);
  
  const features = [
    {
      icon: <Shield />,
      title: 'Authentic Traditions',
      description: 'Follow ancient Vedic practices and authentic spiritual traditions passed down through generations.'
    },
    {
      icon: <Heart />,
      title: 'Personalized Care',
      description: 'Each ceremony is tailored to your specific needs and spiritual journey.'
    },
    {
      icon: <Star />,
      title: 'Expert Guidance',
      description: 'Learn from experienced spiritual leaders and certified practitioners.'
    },
    {
      icon: <BookOpen />,
      title: 'Sacred Knowledge',
      description: 'Access to ancient wisdom and spiritual teachings for modern life.'
    }
  ];
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };
  
  return (
    <HomePageContainer>
      <HeroSection>
        <HeroContent>
          <HeroText>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Discover Inner Peace Through Ancient Wisdom
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Experience the transformative power of authentic spiritual services, 
              guided by experienced practitioners who honor centuries-old traditions.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <HeroActions>
                <HeroButton to="/services" className="btn--primary">
                  Explore Services
                  <ArrowRight />
                </HeroButton>
                <HeroButton to="/about" className="btn--outline">
                  Learn More
                </HeroButton>
              </HeroActions>
            </motion.div>
          </HeroText>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            <HeroImage>
              <img src="/images/hero-ganesh.webp" alt="Spiritual Services" />
            </HeroImage>
          </motion.div>
        </HeroContent>
      </HeroSection>
      
      <FeaturesSection>
        <FeaturesContainer>
          <SectionHeader>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              Why Choose Our Spiritual Services?
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              We combine ancient wisdom with modern understanding to provide 
              authentic spiritual experiences that transform lives.
            </motion.p>
          </SectionHeader>
          
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <FeaturesGrid>
              {features.map((feature, index) => (
                <FeatureCard
                  key={index}
                  variants={itemVariants}
                >
                  <div className="icon">
                    {feature.icon}
                  </div>
                  <h3>{feature.title}</h3>
                  <p>{feature.description}</p>
                </FeatureCard>
              ))}
            </FeaturesGrid>
          </motion.div>
        </FeaturesContainer>
      </FeaturesSection>
      
      <ServicesSection>
        <ServicesContainer>
          <SectionHeader>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              Featured Spiritual Services
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Discover our most popular services designed to bring peace, 
              prosperity, and spiritual growth to your life.
            </motion.p>
          </SectionHeader>
          
          {isLoading ? (
            <div style={{ textAlign: 'center', padding: '4rem' }}>
              <p>Loading services...</p>
            </div>
          ) : (
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <ServicesGrid>
                {featuredServices.map((service) => (
                  <ServiceCard
                    key={service.id}
                    variants={itemVariants}
                  >
                    <div className="image">
                      <img src={service.image} alt={service.alt} />
                    </div>
                    <div className="content">
                      <h3>{service.title}</h3>
                      <p>{service.shortDescription}</p>
                      
                      <div className="meta">
                        <div className="meta-item">
                          <Clock />
                          <span>{service.duration}</span>
                        </div>
                        <div className="meta-item">
                          <Users />
                          <span>{service.difficulty}</span>
                        </div>
                      </div>
                      
                      <div className="price">{service.price}</div>
                      
                      <div className="actions">
                        <ServiceButton to={`/services/${service.id}`} className="btn--primary">
                          Learn More
                        </ServiceButton>
                        <ServiceButton to="/contact" className="btn--outline">
                          Book Now
                        </ServiceButton>
                      </div>
                    </div>
                  </ServiceCard>
                ))}
              </ServicesGrid>
              
              <motion.div
                style={{ textAlign: 'center', marginTop: '6rem' }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <CTAButton to="/services">
                  View All Services
                  <ArrowRight />
                </CTAButton>
              </motion.div>
            </motion.div>
          )}
        </ServicesContainer>
      </ServicesSection>
    </HomePageContainer>
  );
};

export default HomePage;