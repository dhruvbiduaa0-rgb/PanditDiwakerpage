import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Filter, Grid, List, ChevronLeft, ChevronRight, Star, Clock, Users, MapPin } from 'lucide-react';
import { useServices } from '../../context/ServicesContext';

const ServicesPageContainer = styled.div`
  padding-top: 12rem;
  min-height: 100vh;
  background: ${({ theme }) => theme.colors.backgroundLight};
`;

const PageHeader = styled.div`
  background: linear-gradient(135deg, 
    ${({ theme }) => theme.colors.primary} 0%, 
    ${({ theme }) => theme.colors.spiritual} 100%);
  color: white;
  padding: 6rem 0;
  text-align: center;
`;

const PageHeaderContent = styled.div`
  max-width: 120rem;
  margin: 0 auto;
  padding: 0 2rem;
  
  h1 {
    font-size: 5.6rem;
    font-weight: ${({ theme }) => theme.fontWeights.bold};
    margin-bottom: 2rem;
    
    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
      font-size: 4rem;
    }
  }
  
  p {
    font-size: 2rem;
    opacity: 0.9;
    max-width: 60rem;
    margin: 0 auto;
    
    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
      font-size: 1.8rem;
    }
  }
`;

const MainContent = styled.div`
  max-width: 120rem;
  margin: 0 auto;
  padding: 4rem 2rem;
`;

const FiltersSection = styled.div`
  background: white;
  border-radius: 1.6rem;
  padding: 3rem;
  margin-bottom: 4rem;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
`;

const FiltersHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2.4rem;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    flex-direction: column;
    gap: 1.6rem;
    align-items: stretch;
  }
`;

const SearchBox = styled.div`
  position: relative;
  flex: 1;
  max-width: 40rem;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    max-width: none;
  }
  
  input {
    width: 100%;
    padding: 1.2rem 1.2rem 1.2rem 4.8rem;
    border: 2px solid ${({ theme }) => theme.colors.border};
    border-radius: 1rem;
    font-size: 1.6rem;
    transition: all 0.3s ease;
    
    &:focus {
      border-color: ${({ theme }) => theme.colors.primary};
      box-shadow: 0 0 0 3px ${({ theme }) => theme.colors.primaryLight};
    }
  }
  
  svg {
    position: absolute;
    left: 1.6rem;
    top: 50%;
    transform: translateY(-50%);
    color: ${({ theme }) => theme.colors.textLighter};
    width: 2rem;
    height: 2rem;
  }
`;

const ViewToggle = styled.div`
  display: flex;
  gap: 1rem;
  
  button {
    padding: 1rem;
    border: 2px solid ${({ theme }) => theme.colors.border};
    background: white;
    border-radius: 0.8rem;
    cursor: pointer;
    transition: all 0.3s ease;
    
    &.active {
      border-color: ${({ theme }) => theme.colors.primary};
      color: ${({ theme }) => theme.colors.primary};
    }
    
    &:hover {
      border-color: ${({ theme }) => theme.colors.primary};
    }
    
    svg {
      width: 2rem;
      height: 2rem;
    }
  }
`;

const FiltersGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
  gap: 2rem;
`;

const FilterGroup = styled.div`
  label {
    display: block;
    font-weight: ${({ theme }) => theme.fontWeights.medium};
    margin-bottom: 0.8rem;
    color: ${({ theme }) => theme.colors.heading};
  }
  
  select {
    width: 100%;
    padding: 1rem;
    border: 2px solid ${({ theme }) => theme.colors.border};
    border-radius: 0.8rem;
    font-size: 1.4rem;
    transition: all 0.3s ease;
    
    &:focus {
      border-color: ${({ theme }) => theme.colors.primary};
      outline: none;
    }
  }
`;

const ResultsSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 3rem;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    flex-direction: column;
    gap: 1.6rem;
    text-align: center;
  }
`;

const ResultsCount = styled.p`
  font-size: 1.6rem;
  color: ${({ theme }) => theme.colors.textLight};
`;

const SortSelect = styled.select`
  padding: 1rem 1.6rem;
  border: 2px solid ${({ theme }) => theme.colors.border};
  border-radius: 0.8rem;
  font-size: 1.4rem;
  background: white;
  
  &:focus {
    border-color: ${({ theme }) => theme.colors.primary};
    outline: none;
  }
`;

const ServicesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(40rem, 1fr));
  gap: 3rem;
  margin-bottom: 4rem;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    grid-template-columns: 1fr;
  }
`;

const ServicesList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  margin-bottom: 4rem;
`;

const ServiceCard = styled(motion.div)`
  background: white;
  border-radius: 1.6rem;
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
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

const ServiceListItem = styled(motion.div)`
  background: white;
  border-radius: 1.6rem;
  padding: 3rem;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 12px 40px rgba(0, 0, 0, 0.15);
  }
  
  .header {
    display: grid;
    grid-template-columns: 12rem 1fr auto;
    gap: 3rem;
    align-items: center;
    margin-bottom: 2rem;
    
    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
      grid-template-columns: 1fr;
      text-align: center;
    }
  }
  
  .image {
    width: 12rem;
    height: 12rem;
    border-radius: 1.2rem;
    overflow: hidden;
    
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
  
  .info h3 {
    font-size: 2.4rem;
    color: ${({ theme }) => theme.colors.heading};
    margin-bottom: 1rem;
  }
  
  .info p {
    font-size: 1.6rem;
    color: ${({ theme }) => theme.colors.textLight};
    line-height: 1.6;
  }
  
  .price {
    font-size: 2.4rem;
    font-weight: ${({ theme }) => theme.fontWeights.bold};
    color: ${({ theme }) => theme.colors.primary};
    text-align: right;
    
    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
      text-align: center;
    }
  }
  
  .meta {
    display: flex;
    gap: 3rem;
    margin-bottom: 2rem;
    font-size: 1.4rem;
    color: ${({ theme }) => theme.colors.textLighter};
    
    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
      justify-content: center;
      flex-wrap: wrap;
    }
    
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
  
  .actions {
    display: flex;
    gap: 1.2rem;
    
    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
      justify-content: center;
    }
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

const Pagination = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  margin-top: 4rem;
`;

const PaginationButton = styled.button`
  padding: 1rem 1.6rem;
  border: 2px solid ${({ theme }) => theme.colors.border};
  background: white;
  border-radius: 0.8rem;
  cursor: pointer;
  transition: all 0.3s ease;
  font-size: 1.4rem;
  
  &:hover:not(:disabled) {
    border-color: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.primary};
  }
  
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
  
  &.active {
    background: ${({ theme }) => theme.colors.primary};
    color: white;
    border-color: ${({ theme }) => theme.colors.primary};
  }
`;

const EmptyState = styled.div`
  text-align: center;
  padding: 8rem 2rem;
  
  h3 {
    font-size: 2.4rem;
    color: ${({ theme }) => theme.colors.heading};
    margin-bottom: 1.6rem;
  }
  
  p {
    font-size: 1.6rem;
    color: ${({ theme }) => theme.colors.textLight};
    margin-bottom: 3rem;
  }
`;

const ServicesPage = () => {
  const {
    services,
    categories,
    filters,
    searchQuery,
    pagination,
    isLoading,
    setFilters,
    setSearchQuery,
    setCurrentPage
  } = useServices();
  
  const [viewMode, setViewMode] = useState('grid');
  const [sortBy, setSortBy] = useState('name');
  const [localSearchQuery, setLocalSearchQuery] = useState(searchQuery);
  
  // Debounced search
  useEffect(() => {
    const timer = setTimeout(() => {
      setSearchQuery(localSearchQuery);
    }, 500);
    
    return () => clearTimeout(timer);
  }, [localSearchQuery, setSearchQuery]);
  
  // Handle filter changes
  const handleFilterChange = (filterType, value) => {
    setFilters({ [filterType]: value });
  };
  
  // Handle sort changes
  const handleSortChange = (e) => {
    setSortBy(e.target.value);
  };
  
  // Sort services
  const sortedServices = [...services].sort((a, b) => {
    switch (sortBy) {
      case 'name':
        return a.title.localeCompare(b.title);
      case 'price':
        return parseFloat(a.price.replace(/[^\d]/g, '')) - parseFloat(b.price.replace(/[^\d]/g, ''));
      case 'duration':
        return a.duration.localeCompare(b.duration);
      case 'difficulty':
        const difficultyOrder = { 'beginner': 1, 'intermediate': 2, 'advanced': 3 };
        return difficultyOrder[a.difficulty] - difficultyOrder[b.difficulty];
      default:
        return 0;
    }
  });
  
  // Handle pagination
  const handlePageChange = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4
      }
    }
  };
  
  return (
    <ServicesPageContainer>
      <PageHeader>
        <PageHeaderContent>
          <h1>Our Spiritual Services</h1>
          <p>
            Discover a comprehensive range of authentic spiritual services designed 
            to bring peace, prosperity, and spiritual growth to your life.
          </p>
        </PageHeaderContent>
      </PageHeader>
      
      <MainContent>
        <FiltersSection>
          <FiltersHeader>
            <SearchBox>
              <Search />
              <input
                type="text"
                placeholder="Search services..."
                value={localSearchQuery}
                onChange={(e) => setLocalSearchQuery(e.target.value)}
              />
            </SearchBox>
            
            <ViewToggle>
              <button
                className={viewMode === 'grid' ? 'active' : ''}
                onClick={() => setViewMode('grid')}
              >
                <Grid />
              </button>
              <button
                className={viewMode === 'list' ? 'active' : ''}
                onClick={() => setViewMode('list')}
              >
                <List />
              </button>
            </ViewToggle>
          </FiltersHeader>
          
          <FiltersGrid>
            <FilterGroup>
              <label>Category</label>
              <select
                value={filters.category}
                onChange={(e) => handleFilterChange('category', e.target.value)}
              >
                <option value="">All Categories</option>
                {categories.map((category) => (
                  <option key={category} value={category}>
                    {category.charAt(0).toUpperCase() + category.slice(1)}
                  </option>
                ))}
              </select>
            </FilterGroup>
            
            <FilterGroup>
              <label>Difficulty</label>
              <select
                value={filters.difficulty}
                onChange={(e) => handleFilterChange('difficulty', e.target.value)}
              >
                <option value="">All Levels</option>
                <option value="beginner">Beginner</option>
                <option value="intermediate">Intermediate</option>
                <option value="advanced">Advanced</option>
              </select>
            </FilterGroup>
            
            <FilterGroup>
              <label>Price Range</label>
              <select
                value={filters.priceRange}
                onChange={(e) => handleFilterChange('priceRange', e.target.value)}
              >
                <option value="">All Prices</option>
                <option value="low">Under ₹2000</option>
                <option value="medium">₹2000 - ₹5000</option>
                <option value="high">Above ₹5000</option>
              </select>
            </FilterGroup>
          </FiltersGrid>
        </FiltersSection>
        
        <ResultsSection>
          <ResultsCount>
            Showing {services.length} of {pagination.totalServices} services
          </ResultsCount>
          
          <SortSelect value={sortBy} onChange={handleSortChange}>
            <option value="name">Sort by Name</option>
            <option value="price">Sort by Price</option>
            <option value="duration">Sort by Duration</option>
            <option value="difficulty">Sort by Difficulty</option>
          </SortSelect>
        </ResultsSection>
        
        {isLoading ? (
          <div style={{ textAlign: 'center', padding: '4rem' }}>
            <p>Loading services...</p>
          </div>
        ) : sortedServices.length === 0 ? (
          <EmptyState>
            <h3>No services found</h3>
            <p>Try adjusting your filters or search terms to find what you're looking for.</p>
          </EmptyState>
        ) : (
          <AnimatePresence mode="wait">
            {viewMode === 'grid' ? (
              <motion.div
                key="grid"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
              >
                <ServicesGrid>
                  {sortedServices.map((service) => (
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
              </motion.div>
            ) : (
              <motion.div
                key="list"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
              >
                <ServicesList>
                  {sortedServices.map((service) => (
                    <ServiceListItem
                      key={service.id}
                      variants={itemVariants}
                    >
                      <div className="header">
                        <div className="image">
                          <img src={service.image} alt={service.alt} />
                        </div>
                        <div className="info">
                          <h3>{service.title}</h3>
                          <p>{service.shortDescription}</p>
                        </div>
                        <div className="price">{service.price}</div>
                      </div>
                      
                      <div className="meta">
                        <div className="meta-item">
                          <Clock />
                          <span>{service.duration}</span>
                        </div>
                        <div className="meta-item">
                          <Users />
                          <span>{service.difficulty}</span>
                        </div>
                        <div className="meta-item">
                          <MapPin />
                          <span>{service.category}</span>
                        </div>
                      </div>
                      
                      <div className="actions">
                        <ServiceButton to={`/services/${service.id}`} className="btn--primary">
                          Learn More
                        </ServiceButton>
                        <ServiceButton to="/contact" className="btn--outline">
                          Book Now
                        </ServiceButton>
                      </div>
                    </ServiceListItem>
                  ))}
                </ServicesList>
              </motion.div>
            )}
          </AnimatePresence>
        )}
        
        {pagination.totalPages > 1 && (
          <Pagination>
            <PaginationButton
              onClick={() => handlePageChange(pagination.currentPage - 1)}
              disabled={!pagination.hasPrev}
            >
              <ChevronLeft />
            </PaginationButton>
            
            {Array.from({ length: pagination.totalPages }, (_, i) => i + 1).map((page) => (
              <PaginationButton
                key={page}
                onClick={() => handlePageChange(page)}
                className={page === pagination.currentPage ? 'active' : ''}
              >
                {page}
              </PaginationButton>
            ))}
            
            <PaginationButton
              onClick={() => handlePageChange(pagination.currentPage + 1)}
              disabled={!pagination.hasNext}
            >
              <ChevronRight />
            </PaginationButton>
          </Pagination>
        )}
      </MainContent>
    </ServicesPageContainer>
  );
};

export default ServicesPage;