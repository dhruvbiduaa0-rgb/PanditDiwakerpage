# श्री ज्योतिष एवं कर्मकांड - Enhanced Multilingual Website

A comprehensive, multilingual website for Vedic Astrology and Ritual Services, featuring pure Hindi and pure English support with detailed service information and enhanced UI/UX.

## 🌟 Features

### 🌐 Multilingual Support
- **Pure Hindi (हिंदी)** - Complete Hindi interface with Devanagari script
- **Pure English** - Complete English interface with Latin script
- **Language Persistence** - Remembers user's language preference
- **Font Optimization** - Noto Sans Devanagari for Hindi, Inter for English

### 🎯 Comprehensive Service Details
- **6 Main Services** with detailed information
- **Read More Pages** for each service with comprehensive details
- **Service Categories** organized by type and purpose
- **Detailed Descriptions** including significance, benefits, duration, and materials

### 🎨 Enhanced UI/UX
- **Modern Design** with Tailwind CSS and custom styling
- **Responsive Layout** optimized for all devices
- **Smooth Animations** and transitions
- **Interactive Elements** with hover effects
- **Accessibility Features** including focus states and high contrast support

### 📱 Responsive Design
- **Mobile-First** approach
- **Tablet Optimized** layouts
- **Desktop Enhanced** experiences
- **Touch-Friendly** interface elements

## 🏗️ Project Structure

```
├── index.html              # Main HTML file
├── css/
│   └── styles.css         # Enhanced CSS with animations and responsive design
├── js/
│   ├── i18n.js           # Internationalization system
│   ├── services.js       # Comprehensive service data
│   └── app.js            # Main application logic
├── images/
│   ├── hero-ganesh.webp  # Hero section images
│   ├── hero-durga.webp
│   └── services/         # Service-specific images
└── README.md             # This documentation
```

## 🚀 Getting Started

### Prerequisites
- Modern web browser with JavaScript enabled
- Local web server (for development)

### Installation
1. Clone or download the project files
2. Place all files in your web server directory
3. Open `index.html` in a web browser

### Development
- Edit `js/i18n.js` to modify translations
- Update `js/services.js` to modify service information
- Modify `css/styles.css` for styling changes
- Update `index.html` for structural changes

## 🌐 Internationalization System

### Language Configuration
The i18n system supports:
- **Hindi (हिंदी)** - Default language with Devanagari script
- **English** - Complete English translations

### Translation Structure
```javascript
translations: {
    section: {
        key: {
            hindi: 'हिंदी पाठ',
            english: 'English text'
        }
    }
}
```

### Adding New Languages
1. Add language configuration to `languages` object
2. Add translations to `translations` object
3. Update language toggle buttons

## 📋 Services Available

### 1. गणेश पूजा / Ganesh Puja
- **Purpose**: New beginnings and obstacle removal
- **Duration**: 2-3 hours
- **Best Time**: Ganesh Chaturthi, Tuesday, Shukla Paksha Chaturthi
- **Materials**: Modak, Durva grass, Bilva leaves, flowers, fruits, sweets

### 2. लक्ष्मी पूजन / Lakshmi Pujan
- **Purpose**: Wealth and prosperity
- **Duration**: 3-4 hours
- **Best Time**: Diwali, Friday, Purnima
- **Materials**: Gold coin, lotus flowers, diyas, sweets, fruits

### 3. सत्यनारायण व्रत / Satyanarayan Vrat
- **Purpose**: Family peace and prosperity
- **Duration**: 4-5 hours
- **Best Time**: Purnima, Thursday, Shukla Paksha
- **Materials**: Panchamrit, fruits, sweets, Panchagavya, katha book

### 4. विवाह संस्कार / Marriage Ceremonies
- **Purpose**: Complete Vedic wedding rituals
- **Duration**: 1-2 days
- **Best Time**: Marriage muhurat, Shukla Paksha, auspicious nakshatra
- **Materials**: Mangal Kalash, fire, Panchagavya, clothes, ornaments

### 5. नवग्रह शांति / Navagraha Shanti
- **Purpose**: Planetary peace and harmony
- **Duration**: 3-4 hours
- **Best Time**: According to planetary dosha, auspicious muhurat
- **Materials**: Navagraha yantra, gemstones, mantras, havan materials

### 6. गृहप्रवेश / House Warming
- **Purpose**: Vastu puja and house blessing
- **Duration**: 2-3 hours
- **Best Time**: Shukla Paksha, auspicious muhurat, Thursday or Friday
- **Materials**: Kalash, coconut, soil, Panchagavya, auspicious materials

## 🎨 Customization

### Colors
The website uses CSS custom properties for easy color customization:
```css
:root {
    --primary-color: #d97706;      /* Main orange */
    --primary-dark: #b45309;       /* Darker orange */
    --secondary-color: #059669;    /* Green */
    --accent-color: #ea580c;       /* Accent orange */
}
```

### Fonts
- **Hindi**: Noto Sans Devanagari (Google Fonts)
- **English**: Inter (Google Fonts)

### Animations
- Fade-in animations for content sections
- Hover effects for interactive elements
- Smooth transitions for language switching

## 📱 Responsive Breakpoints

- **Mobile**: < 480px
- **Tablet**: 480px - 768px
- **Desktop**: > 768px

## ♿ Accessibility Features

- **Focus Indicators** for keyboard navigation
- **High Contrast Mode** support
- **Reduced Motion** preferences respected
- **Semantic HTML** structure
- **Alt Text** for all images

## 🔧 Technical Details

### JavaScript Architecture
- **Modular Design** with separate files for different concerns
- **ES6+ Features** including classes and arrow functions
- **Event-Driven** architecture for user interactions
- **Local Storage** for language preference persistence

### CSS Features
- **CSS Custom Properties** for theming
- **CSS Grid** and **Flexbox** for layouts
- **CSS Animations** and **Transitions**
- **Media Queries** for responsive design

### Browser Support
- **Modern Browsers**: Chrome, Firefox, Safari, Edge
- **Mobile Browsers**: iOS Safari, Chrome Mobile
- **JavaScript**: ES6+ support required

## 📞 Contact Information

**Pt. Diwakarmani Tripathi Shastri**
- 📱 Mobile: +91 9343775709
- 📱 WhatsApp/Call: +91 8766453937
- 📍 Address: #18, First Main Road, Opp. Anjanadri Hollow Bricks, Goreguntapalya, Bangalore - 560022

## 🎯 Future Enhancements

- [ ] Additional language support (Sanskrit, regional languages)
- [ ] Online booking system
- [ ] Blog section for spiritual articles
- [ ] Customer testimonials
- [ ] Photo gallery of ceremonies
- [ ] Online consultation booking
- [ ] Payment integration
- [ ] SEO optimization

## 📄 License

© 2024 श्री ज्योतिष एवं कर्मकांड. All rights reserved.

## 🤝 Contributing

This is a private project for Vedic services. For suggestions or improvements, please contact the service provider directly.

---

**Om Namah Shivaya** 🙏