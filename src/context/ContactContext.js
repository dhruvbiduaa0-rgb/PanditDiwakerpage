import React, { createContext, useContext, useReducer, useState } from 'react';
import axios from 'axios';

// API endpoints
const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000/api';

// Action types
const ACTIONS = {
  SET_LOADING: 'SET_LOADING',
  SET_ERROR: 'SET_ERROR',
  SET_SUCCESS: 'SET_SUCCESS',
  SET_INQUIRY_FORM: 'SET_INQUIRY_FORM',
  SET_BOOKING_FORM: 'SET_BOOKING_FORM',
  RESET_FORMS: 'RESET_FORMS',
  SET_BOOKING_STEP: 'SET_BOOKING_STEP'
};

// Initial state
const initialState = {
  loading: false,
  error: null,
  success: null,
  inquiryForm: {
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    service: ''
  },
  bookingForm: {
    name: '',
    email: '',
    phone: '',
    serviceId: '',
    preferredDate: '',
    preferredTime: '',
    address: '',
    specialRequirements: '',
    numberOfPeople: 1
  },
  bookingStep: 1,
  totalSteps: 3
};

// Reducer function
const contactReducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.SET_LOADING:
      return {
        ...state,
        loading: action.payload
      };
    
    case ACTIONS.SET_ERROR:
      return {
        ...state,
        error: action.payload,
        success: null
      };
    
    case ACTIONS.SET_SUCCESS:
      return {
        ...state,
        success: action.payload,
        error: null
      };
    
    case ACTIONS.SET_INQUIRY_FORM:
      return {
        ...state,
        inquiryForm: { ...state.inquiryForm, ...action.payload }
      };
    
    case ACTIONS.SET_BOOKING_FORM:
      return {
        ...state,
        bookingForm: { ...state.bookingForm, ...action.payload }
      };
    
    case ACTIONS.RESET_FORMS:
      return {
        ...state,
        inquiryForm: initialState.inquiryForm,
        bookingForm: initialState.bookingForm,
        bookingStep: 1,
        error: null,
        success: null
      };
    
    case ACTIONS.SET_BOOKING_STEP:
      return {
        ...state,
        bookingStep: action.payload
      };
    
    default:
      return state;
  }
};

// Create context
const ContactContext = createContext();

// Custom hook to use contact context
export const useContact = () => {
  const context = useContext(ContactContext);
  if (!context) {
    throw new Error('useContact must be used within a ContactProvider');
  }
  return context;
};

// API functions
const contactAPI = {
  // Submit inquiry
  submitInquiry: async (inquiryData) => {
    const response = await axios.post(`${API_BASE_URL}/contact/inquiry`, inquiryData);
    return response.data;
  },
  
  // Submit booking
  submitBooking: async (bookingData) => {
    const response = await axios.post(`${API_BASE_URL}/contact/booking`, bookingData);
    return response.data;
  }
};

// Form validation functions
const validateInquiryForm = (formData) => {
  const errors = {};
  
  if (!formData.name.trim()) {
    errors.name = 'Name is required';
  }
  
  if (!formData.email.trim()) {
    errors.email = 'Email is required';
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
    errors.email = 'Please enter a valid email address';
  }
  
  if (!formData.subject.trim()) {
    errors.subject = 'Subject is required';
  }
  
  if (!formData.message.trim()) {
    errors.message = 'Message is required';
  } else if (formData.message.trim().length < 10) {
    errors.message = 'Message must be at least 10 characters long';
  }
  
  return {
    isValid: Object.keys(errors).length === 0,
    errors
  };
};

const validateBookingForm = (formData, step) => {
  const errors = {};
  
  switch (step) {
    case 1:
      if (!formData.name.trim()) {
        errors.name = 'Name is required';
      }
      
      if (!formData.email.trim()) {
        errors.email = 'Email is required';
      } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
        errors.email = 'Please enter a valid email address';
      }
      
      if (!formData.phone.trim()) {
        errors.phone = 'Phone number is required';
      }
      
      if (!formData.serviceId) {
        errors.serviceId = 'Please select a service';
      }
      break;
      
    case 2:
      if (!formData.preferredDate) {
        errors.preferredDate = 'Preferred date is required';
      } else {
        const selectedDate = new Date(formData.preferredDate);
        const today = new Date();
        if (selectedDate < today) {
          errors.preferredDate = 'Preferred date cannot be in the past';
        }
      }
      
      if (!formData.preferredTime) {
        errors.preferredTime = 'Preferred time is required';
      }
      break;
      
    case 3:
      if (!formData.address.trim()) {
        errors.address = 'Address is required';
      }
      
      if (formData.numberOfPeople < 1) {
        errors.numberOfPeople = 'Number of people must be at least 1';
      }
      break;
      
    default:
      break;
  }
  
  return {
    isValid: Object.keys(errors).length === 0,
    errors
  };
};

// Provider component
export const ContactProvider = ({ children }) => {
  const [state, dispatch] = useReducer(contactReducer, initialState);
  const [formErrors, setFormErrors] = useState({});
  
  // Action functions
  const actions = {
    // Update inquiry form
    updateInquiryForm: (field, value) => {
      dispatch({
        type: ACTIONS.SET_INQUIRY_FORM,
        payload: { [field]: value }
      });
      
      // Clear field error when user starts typing
      if (formErrors[field]) {
        setFormErrors(prev => {
          const newErrors = { ...prev };
          delete newErrors[field];
          return newErrors;
        });
      }
    },
    
    // Update booking form
    updateBookingForm: (field, value) => {
      dispatch({
        type: ACTIONS.SET_BOOKING_FORM,
        payload: { [field]: value }
      });
      
      // Clear field error when user starts typing
      if (formErrors[field]) {
        setFormErrors(prev => {
          const newErrors = { ...prev };
          delete newErrors[field];
          return newErrors;
        });
      }
    },
    
    // Submit inquiry
    submitInquiry: async () => {
      try {
        // Validate form
        const validation = validateInquiryForm(state.inquiryForm);
        if (!validation.isValid) {
          setFormErrors(validation.errors);
          return { success: false, errors: validation.errors };
        }
        
        dispatch({ type: ACTIONS.SET_LOADING, payload: true });
        dispatch({ type: ACTIONS.SET_ERROR, payload: null });
        
        const result = await contactAPI.submitInquiry(state.inquiryForm);
        
        dispatch({ type: ACTIONS.SET_SUCCESS, payload: result.message });
        dispatch({ type: ACTIONS.RESET_FORMS });
        
        return { success: true, data: result };
        
      } catch (error) {
        const errorMessage = error.response?.data?.error || error.message || 'Failed to submit inquiry';
        dispatch({ type: ACTIONS.SET_ERROR, payload: errorMessage });
        return { success: false, error: errorMessage };
      } finally {
        dispatch({ type: ACTIONS.SET_LOADING, payload: false });
      }
    },
    
    // Submit booking
    submitBooking: async () => {
      try {
        // Validate all steps
        let allErrors = {};
        for (let step = 1; step <= state.totalSteps; step++) {
          const validation = validateBookingForm(state.bookingForm, step);
          if (!validation.isValid) {
            allErrors = { ...allErrors, ...validation.errors };
          }
        }
        
        if (Object.keys(allErrors).length > 0) {
          setFormErrors(allErrors);
          return { success: false, errors: allErrors };
        }
        
        dispatch({ type: ACTIONS.SET_LOADING, payload: true });
        dispatch({ type: ACTIONS.SET_ERROR, payload: null });
        
        const result = await contactAPI.submitBooking(state.bookingForm);
        
        dispatch({ type: ACTIONS.SET_SUCCESS, payload: result.message });
        dispatch({ type: ACTIONS.RESET_FORMS });
        
        return { success: true, data: result };
        
      } catch (error) {
        const errorMessage = error.response?.data?.error || error.message || 'Failed to submit booking';
        dispatch({ type: ACTIONS.SET_ERROR, payload: errorMessage });
        return { success: false, error: errorMessage };
      } finally {
        dispatch({ type: ACTIONS.SET_LOADING, payload: false });
      }
    },
    
    // Next booking step
    nextBookingStep: () => {
      if (state.bookingStep < state.totalSteps) {
        // Validate current step
        const validation = validateBookingForm(state.bookingForm, state.bookingStep);
        if (!validation.isValid) {
          setFormErrors(validation.errors);
          return false;
        }
        
        dispatch({
          type: ACTIONS.SET_BOOKING_STEP,
          payload: state.bookingStep + 1
        });
        
        return true;
      }
      return false;
    },
    
    // Previous booking step
    prevBookingStep: () => {
      if (state.bookingStep > 1) {
        dispatch({
          type: ACTIONS.SET_BOOKING_STEP,
          payload: state.bookingStep - 1
        });
        return true;
      }
      return false;
    },
    
    // Go to specific booking step
    goToBookingStep: (step) => {
      if (step >= 1 && step <= state.totalSteps) {
        dispatch({
          type: ACTIONS.SET_BOOKING_STEP,
          payload: step
        });
        return true;
      }
      return false;
    },
    
    // Clear error
    clearError: () => {
      dispatch({ type: ACTIONS.SET_ERROR, payload: null });
    },
    
    // Clear success
    clearSuccess: () => {
      dispatch({ type: ACTIONS.SET_SUCCESS, payload: null });
    },
    
    // Reset forms
    resetForms: () => {
      dispatch({ type: ACTIONS.RESET_FORMS });
      setFormErrors({});
    },
    
    // Set service for booking
    setBookingService: (serviceId) => {
      dispatch({
        type: ACTIONS.SET_BOOKING_FORM,
        payload: { serviceId }
      });
    }
  };
  
  const value = {
    ...state,
    ...actions,
    formErrors,
    setFormErrors,
    isLoading: state.loading,
    hasError: !!state.error,
    hasSuccess: !!state.success
  };
  
  return (
    <ContactContext.Provider value={value}>
      {children}
    </ContactContext.Provider>
  );
};

export default ContactContext;