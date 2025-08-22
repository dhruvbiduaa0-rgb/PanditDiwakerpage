import React, { createContext, useContext, useReducer, useEffect } from 'react';
import { useQuery } from 'react-query';
import axios from 'axios';

// API endpoints
const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000/api';

// Action types
const ACTIONS = {
  SET_SERVICES: 'SET_SERVICES',
  SET_LOADING: 'SET_LOADING',
  SET_ERROR: 'SET_ERROR',
  SET_FILTERS: 'SET_FILTERS',
  SET_PAGINATION: 'SET_PAGINATION',
  SET_SELECTED_SERVICE: 'SET_SELECTED_SERVICE',
  SET_CATEGORIES: 'SET_CATEGORIES',
  SET_SEARCH_QUERY: 'SET_SEARCH_QUERY'
};

// Initial state
const initialState = {
  services: [],
  categories: [],
  selectedService: null,
  filters: {
    category: '',
    difficulty: '',
    priceRange: ''
  },
  searchQuery: '',
  pagination: {
    currentPage: 1,
    totalPages: 1,
    totalServices: 0,
    hasNext: false,
    hasPrev: false
  },
  loading: false,
  error: null
};

// Reducer function
const servicesReducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.SET_SERVICES:
      return {
        ...state,
        services: action.payload.services,
        pagination: action.payload.pagination || state.pagination
      };
    
    case ACTIONS.SET_LOADING:
      return {
        ...state,
        loading: action.payload
      };
    
    case ACTIONS.SET_ERROR:
      return {
        ...state,
        error: action.payload
      };
    
    case ACTIONS.SET_FILTERS:
      return {
        ...state,
        filters: { ...state.filters, ...action.payload }
      };
    
    case ACTIONS.SET_PAGINATION:
      return {
        ...state,
        pagination: { ...state.pagination, ...action.payload }
      };
    
    case ACTIONS.SET_SELECTED_SERVICE:
      return {
        ...state,
        selectedService: action.payload
      };
    
    case ACTIONS.SET_CATEGORIES:
      return {
        ...state,
        categories: action.payload
      };
    
    case ACTIONS.SET_SEARCH_QUERY:
      return {
        ...state,
        searchQuery: action.payload
      };
    
    default:
      return state;
  }
};

// Create context
const ServicesContext = createContext();

// Custom hook to use services context
export const useServices = () => {
  const context = useContext(ServicesContext);
  if (!context) {
    throw new Error('useServices must be used within a ServicesProvider');
  }
  return context;
};

// API functions
const servicesAPI = {
  // Get all services with filters and pagination
  getServices: async (params = {}) => {
    const queryParams = new URLSearchParams();
    
    if (params.page) queryParams.append('page', params.page);
    if (params.limit) queryParams.append('limit', params.limit);
    if (params.category) queryParams.append('category', params.category);
    if (params.search) queryParams.append('search', params.search);
    
    const response = await axios.get(`${API_BASE_URL}/services?${queryParams}`);
    return response.data;
  },
  
  // Get service by ID
  getServiceById: async (id) => {
    const response = await axios.get(`${API_BASE_URL}/services/${id}`);
    return response.data;
  },
  
  // Get service categories
  getCategories: async () => {
    const response = await axios.get(`${API_BASE_URL}/services/categories/all`);
    return response.data;
  },
  
  // Get services by category
  getServicesByCategory: async (category, params = {}) => {
    const queryParams = new URLSearchParams();
    
    if (params.page) queryParams.append('page', params.page);
    if (params.limit) queryParams.append('limit', params.limit);
    
    const response = await axios.get(`${API_BASE_URL}/services/category/${category}?${queryParams}`);
    return response.data;
  }
};

// Provider component
export const ServicesProvider = ({ children }) => {
  const [state, dispatch] = useReducer(servicesReducer, initialState);
  
  // Fetch services with React Query
  const {
    data: servicesData,
    isLoading: servicesLoading,
    error: servicesError,
    refetch: refetchServices
  } = useQuery(
    ['services', state.filters, state.searchQuery, state.pagination.currentPage],
    () => servicesAPI.getServices({
      page: state.pagination.currentPage,
      limit: 10,
      category: state.filters.category,
      search: state.searchQuery
    }),
    {
      keepPreviousData: true,
      staleTime: 5 * 60 * 1000, // 5 minutes
      cacheTime: 10 * 60 * 1000 // 10 minutes
    }
  );
  
  // Fetch categories
  const {
    data: categoriesData,
    isLoading: categoriesLoading
  } = useQuery(
    'categories',
    servicesAPI.getCategories,
    {
      staleTime: 10 * 60 * 1000, // 10 minutes
      cacheTime: 30 * 60 * 1000 // 30 minutes
    }
  );
  
  // Update state when data changes
  useEffect(() => {
    if (servicesData) {
      dispatch({
        type: ACTIONS.SET_SERVICES,
        payload: servicesData
      });
    }
  }, [servicesData]);
  
  useEffect(() => {
    if (categoriesData) {
      dispatch({
        type: ACTIONS.SET_CATEGORIES,
        payload: categoriesData
      });
    }
  }, [categoriesData]);
  
  useEffect(() => {
    dispatch({
      type: ACTIONS.SET_LOADING,
      payload: servicesLoading || categoriesLoading
    });
  }, [servicesLoading, categoriesLoading]);
  
  useEffect(() => {
    if (servicesError) {
      dispatch({
        type: ACTIONS.SET_ERROR,
        payload: servicesError.message
      });
    }
  }, [servicesError]);
  
  // Action functions
  const actions = {
    // Set filters
    setFilters: (filters) => {
      dispatch({
        type: ACTIONS.SET_FILTERS,
        payload: filters
      });
      // Reset to first page when filters change
      dispatch({
        type: ACTIONS.SET_PAGINATION,
        payload: { currentPage: 1 }
      });
    },
    
    // Set search query
    setSearchQuery: (query) => {
      dispatch({
        type: ACTIONS.SET_SEARCH_QUERY,
        payload: query
      });
      // Reset to first page when search changes
      dispatch({
        type: ACTIONS.SET_PAGINATION,
        payload: { currentPage: 1 }
      });
    },
    
    // Set current page
    setCurrentPage: (page) => {
      dispatch({
        type: ACTIONS.SET_PAGINATION,
        payload: { currentPage: page }
      });
    },
    
    // Get service by ID
    getServiceById: async (id) => {
      try {
        dispatch({ type: ACTIONS.SET_LOADING, payload: true });
        const service = await servicesAPI.getServiceById(id);
        dispatch({
          type: ACTIONS.SET_SELECTED_SERVICE,
          payload: service
        });
        return service;
      } catch (error) {
        dispatch({
          type: ACTIONS.SET_ERROR,
          payload: error.message
        });
        throw error;
      } finally {
        dispatch({ type: ACTIONS.SET_LOADING, payload: false });
      }
    },
    
    // Clear selected service
    clearSelectedService: () => {
      dispatch({
        type: ACTIONS.SET_SELECTED_SERVICE,
        payload: null
      });
    },
    
    // Clear error
    clearError: () => {
      dispatch({
        type: ACTIONS.SET_ERROR,
        payload: null
      });
    },
    
    // Refresh services
    refreshServices: () => {
      refetchServices();
    }
  };
  
  const value = {
    ...state,
    ...actions,
    isLoading: state.loading,
    hasError: !!state.error
  };
  
  return (
    <ServicesContext.Provider value={value}>
      {children}
    </ServicesContext.Provider>
  );
};

export default ServicesContext;