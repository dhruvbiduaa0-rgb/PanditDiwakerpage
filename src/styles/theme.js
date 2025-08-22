export const theme = {
  colors: {
    // Primary colors
    primary: '#8B5CF6', // Purple
    primaryLight: '#A78BFA',
    primaryDark: '#7C3AED',
    primaryLighter: '#C4B5FD',
    
    // Secondary colors
    secondary: '#F59E0B', // Amber
    secondaryLight: '#FBBF24',
    secondaryDark: '#D97706',
    
    // Accent colors
    accent: '#10B981', // Emerald
    accentLight: '#34D399',
    accentDark: '#059669',
    
    // Neutral colors
    text: '#1F2937',
    textLight: '#6B7280',
    textLighter: '#9CA3AF',
    heading: '#111827',
    
    // Background colors
    background: '#FFFFFF',
    backgroundLight: '#F9FAFB',
    backgroundDark: '#F3F4F6',
    
    // Border colors
    border: '#E5E7EB',
    borderLight: '#F3F4F6',
    borderDark: '#D1D5DB',
    
    // Status colors
    success: '#10B981',
    warning: '#F59E0B',
    error: '#EF4444',
    info: '#3B82F6',
    
    // Overlay colors
    overlay: 'rgba(0, 0, 0, 0.5)',
    overlayLight: 'rgba(0, 0, 0, 0.1)',
    
    // White and black
    white: '#FFFFFF',
    black: '#000000',
    
    // Spiritual/Religious theme colors
    spiritual: '#9333EA', // Deep purple
    spiritualLight: '#A855F7',
    spiritualDark: '#7C2D12',
    
    // Gold for auspicious elements
    gold: '#FCD34D',
    goldLight: '#FDE68A',
    goldDark: '#F59E0B',
    
    // Saffron for traditional elements
    saffron: '#FB923C',
    saffronLight: '#FDBA74',
    saffronDark: '#EA580C'
  },
  
  fonts: {
    primary: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif",
    secondary: "'Poppins', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif",
    decorative: "'Playfair Display', serif",
    sans: "'Inter', sans-serif",
    serif: "'Playfair Display', serif",
    mono: "'JetBrains Mono', 'Fira Code', monospace"
  },
  
  fontSizes: {
    xs: '1.2rem',
    sm: '1.4rem',
    base: '1.6rem',
    lg: '1.8rem',
    xl: '2rem',
    '2xl': '2.4rem',
    '3xl': '3rem',
    '4xl': '3.6rem',
    '5xl': '4.8rem',
    '6xl': '6rem',
    '7xl': '7.2rem',
    '8xl': '9.6rem'
  },
  
  fontWeights: {
    light: 300,
    normal: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
    extrabold: 800,
    black: 900
  },
  
  lineHeights: {
    none: 1,
    tight: 1.25,
    snug: 1.375,
    normal: 1.5,
    relaxed: 1.625,
    loose: 2
  },
  
  spacing: {
    0: '0',
    1: '0.4rem',
    2: '0.8rem',
    3: '1.2rem',
    4: '1.6rem',
    5: '2rem',
    6: '2.4rem',
    7: '2.8rem',
    8: '3.2rem',
    9: '3.6rem',
    10: '4rem',
    11: '4.4rem',
    12: '4.8rem',
    14: '5.6rem',
    16: '6.4rem',
    20: '8rem',
    24: '9.6rem',
    28: '11.2rem',
    32: '12.8rem',
    36: '14.4rem',
    40: '16rem',
    44: '17.6rem',
    48: '19.2rem',
    52: '20.8rem',
    56: '22.4rem',
    60: '24rem',
    64: '25.6rem',
    72: '28.8rem',
    80: '32rem',
    96: '38.4rem'
  },
  
  borderRadius: {
    none: '0',
    sm: '0.2rem',
    base: '0.4rem',
    md: '0.6rem',
    lg: '0.8rem',
    xl: '1.2rem',
    '2xl': '1.6rem',
    '3xl': '2.4rem',
    full: '9999px'
  },
  
  shadows: {
    sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
    base: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
    md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
    lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
    xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
    '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
    inner: 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',
    none: 'none'
  },
  
  breakpoints: {
    mobile: '768px',
    tablet: '1024px',
    desktop: '1280px',
    wide: '1536px'
  },
  
  transitions: {
    fast: '0.15s ease',
    normal: '0.3s ease',
    slow: '0.5s ease',
    bounce: 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
    smooth: 'cubic-bezier(0.4, 0, 0.2, 1)'
  },
  
  zIndex: {
    hide: -1,
    auto: 'auto',
    base: 0,
    docked: 10,
    dropdown: 1000,
    sticky: 1100,
    banner: 1200,
    overlay: 1300,
    modal: 1400,
    popover: 1500,
    skipLink: 1600,
    toast: 1700,
    tooltip: 1800
  },
  
  // Custom spiritual theme properties
  spiritual: {
    // Mantra chanting
    mantra: {
      primary: '#8B5CF6',
      secondary: '#F59E0B',
      accent: '#10B981'
    },
    
    // Pooja elements
    pooja: {
      primary: '#9333EA',
      secondary: '#FCD34D',
      accent: '#FB923C'
    },
    
    // Meditation and yoga
    meditation: {
      primary: '#10B981',
      secondary: '#8B5CF6',
      accent: '#F59E0B'
    },
    
    // Festivals and celebrations
    festival: {
      primary: '#EF4444',
      secondary: '#F59E0B',
      accent: '#8B5CF6'
    }
  },
  
  // Animation presets
  animations: {
    fadeIn: {
      from: { opacity: 0 },
      to: { opacity: 1 }
    },
    slideUp: {
      from: { 
        opacity: 0,
        transform: 'translateY(30px)'
      },
      to: { 
        opacity: 1,
        transform: 'translateY(0)'
      }
    },
    slideDown: {
      from: { 
        opacity: 0,
        transform: 'translateY(-30px)'
      },
      to: { 
        opacity: 1,
        transform: 'translateY(0)'
      }
    },
    scaleIn: {
      from: { 
        opacity: 0,
        transform: 'scale(0.9)'
      },
      to: { 
        opacity: 1,
        transform: 'scale(1)'
      }
    },
    rotateIn: {
      from: { 
        opacity: 0,
        transform: 'rotate(-180deg)'
      },
      to: { 
        opacity: 1,
        transform: 'rotate(0deg)'
      }
    }
  }
};

export default theme;