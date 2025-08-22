import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%; // 1rem = 10px
    scroll-behavior: smooth;
  }

  body {
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-size: 1.6rem;
    line-height: 1.6;
    color: ${({ theme }) => theme.colors.text};
    background-color: ${({ theme }) => theme.colors.background};
    overflow-x: hidden;
  }

  h1, h2, h3, h4, h5, h6 {
    font-weight: 600;
    line-height: 1.2;
    margin-bottom: 1.6rem;
    color: ${({ theme }) => theme.colors.heading};
  }

  h1 {
    font-size: 4.8rem;
    
    @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
      font-size: 3.6rem;
    }
    
    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
      font-size: 2.8rem;
    }
  }

  h2 {
    font-size: 3.6rem;
    
    @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
      font-size: 2.8rem;
    }
    
    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
      font-size: 2.4rem;
    }
  }

  h3 {
    font-size: 2.4rem;
    
    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
      font-size: 2rem;
    }
  }

  h4 {
    font-size: 2rem;
  }

  h5 {
    font-size: 1.8rem;
  }

  h6 {
    font-size: 1.6rem;
  }

  p {
    margin-bottom: 1.6rem;
    line-height: 1.7;
  }

  a {
    color: ${({ theme }) => theme.colors.primary};
    text-decoration: none;
    transition: color 0.3s ease;
    
    &:hover {
      color: ${({ theme }) => theme.colors.primaryDark};
    }
  }

  ul, ol {
    margin-bottom: 1.6rem;
    padding-left: 2rem;
  }

  li {
    margin-bottom: 0.8rem;
  }

  img {
    max-width: 100%;
    height: auto;
    display: block;
  }

  button {
    cursor: pointer;
    border: none;
    outline: none;
    font-family: inherit;
    font-size: inherit;
  }

  input, textarea, select {
    font-family: inherit;
    font-size: inherit;
    border: 1px solid ${({ theme }) => theme.colors.border};
    border-radius: 0.4rem;
    padding: 1.2rem;
    transition: border-color 0.3s ease, box-shadow 0.3s ease;
    
    &:focus {
      outline: none;
      border-color: ${({ theme }) => theme.colors.primary};
      box-shadow: 0 0 0 3px ${({ theme }) => theme.colors.primaryLight};
    }
  }

  .container {
    max-width: 120rem;
    margin: 0 auto;
    padding: 0 2rem;
    
    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
      padding: 0 1.6rem;
    }
  }

  .section {
    padding: 8rem 0;
    
    @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
      padding: 6rem 0;
    }
    
    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
      padding: 4rem 0;
    }
  }

  .btn {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: 1.2rem 2.4rem;
    border-radius: 0.8rem;
    font-weight: 500;
    text-decoration: none;
    transition: all 0.3s ease;
    cursor: pointer;
    border: none;
    font-size: 1.6rem;
    
    &--primary {
      background-color: ${({ theme }) => theme.colors.primary};
      color: white;
      
      &:hover {
        background-color: ${({ theme }) => theme.colors.primaryDark};
        transform: translateY(-2px);
        box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
      }
    }
    
    &--secondary {
      background-color: transparent;
      color: ${({ theme }) => theme.colors.primary};
      border: 2px solid ${({ theme }) => theme.colors.primary};
      
      &:hover {
        background-color: ${({ theme }) => theme.colors.primary};
        color: white;
        transform: translateY(-2px);
      }
    }
    
    &--outline {
      background-color: transparent;
      color: ${({ theme }) => theme.colors.text};
      border: 2px solid ${({ theme }) => theme.colors.border};
      
      &:hover {
        background-color: ${({ theme }) => theme.colors.primary};
        color: white;
        border-color: ${({ theme }) => theme.colors.primary};
      }
    }
    
    &--small {
      padding: 0.8rem 1.6rem;
      font-size: 1.4rem;
    }
    
    &--large {
      padding: 1.6rem 3.2rem;
      font-size: 1.8rem;
    }
  }

  .card {
    background: white;
    border-radius: 1.2rem;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
    transition: all 0.3s ease;
    overflow: hidden;
    
    &:hover {
      transform: translateY(-4px);
      box-shadow: 0 12px 40px rgba(0, 0, 0, 0.15);
    }
  }

  .text-center {
    text-align: center;
  }

  .text-left {
    text-align: left;
  }

  .text-right {
    text-align: right;
  }

  .mb-1 { margin-bottom: 0.8rem; }
  .mb-2 { margin-bottom: 1.6rem; }
  .mb-3 { margin-bottom: 2.4rem; }
  .mb-4 { margin-bottom: 3.2rem; }
  .mb-5 { margin-bottom: 4rem; }

  .mt-1 { margin-top: 0.8rem; }
  .mt-2 { margin-top: 1.6rem; }
  .mt-3 { margin-top: 2.4rem; }
  .mt-4 { margin-top: 3.2rem; }
  .mt-5 { margin-top: 4rem; }

  .py-1 { padding: 0.8rem 0; }
  .py-2 { padding: 1.6rem 0; }
  .py-3 { padding: 2.4rem 0; }
  .py-4 { padding: 3.2rem 0; }
  .py-5 { padding: 4rem 0; }

  .px-1 { padding: 0 0.8rem; }
  .px-2 { padding: 0 1.6rem; }
  .px-3 { padding: 0 2.4rem; }
  .px-4 { padding: 0 3.2rem; }
  .px-5 { padding: 0 4rem; }

  .d-none { display: none; }
  .d-block { display: block; }
  .d-flex { display: flex; }
  .d-grid { display: grid; }

  .justify-center { justify-content: center; }
  .justify-between { justify-content: space-between; }
  .justify-around { justify-content: space-around; }

  .align-center { align-items: center; }
  .align-start { align-items: flex-start; }
  .align-end { align-items: flex-end; }

  .w-100 { width: 100%; }
  .h-100 { height: 100%; }

  .position-relative { position: relative; }
  .position-absolute { position: absolute; }

  .overflow-hidden { overflow: hidden; }

  .rounded { border-radius: 0.8rem; }
  .rounded-full { border-radius: 50%; }

  .shadow-sm { box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1); }
  .shadow { box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08); }
  .shadow-lg { box-shadow: 0 12px 40px rgba(0, 0, 0, 0.15); }

  // Animation classes
  .fade-in {
    animation: fadeIn 0.6s ease-in-out;
  }

  .slide-up {
    animation: slideUp 0.6s ease-out;
  }

  .scale-in {
    animation: scaleIn 0.4s ease-out;
  }

  @keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
  }

  @keyframes slideUp {
    from { 
      opacity: 0;
      transform: translateY(30px);
    }
    to { 
      opacity: 1;
      transform: translateY(0);
    }
  }

  @keyframes scaleIn {
    from { 
      opacity: 0;
      transform: scale(0.9);
    }
    to { 
      opacity: 1;
      transform: scale(1);
    }
  }

  // Utility classes for responsive design
  .hidden-mobile {
    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
      display: none;
    }
  }

  .hidden-tablet {
    @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
      display: none;
    }
  }

  .visible-mobile {
    display: none;
    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
      display: block;
    }
  }

  .visible-tablet {
    display: none;
    @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
      display: block;
    }
  }
`;