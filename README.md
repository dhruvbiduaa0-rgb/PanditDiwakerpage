# Spiritual Services Platform

A comprehensive full-stack web application for spiritual and religious services, built with React frontend and Node.js backend.

## 🌟 Features

### Frontend (React)
- **Modern UI/UX**: Beautiful, responsive design with smooth animations
- **Service Catalog**: Comprehensive listing of spiritual services with filtering and search
- **Content Management**: Detailed articles and guides with read more functionality
- **Responsive Design**: Mobile-first approach with tablet and desktop optimization
- **Interactive Components**: Smooth animations using Framer Motion
- **State Management**: Context API and React Query for efficient data handling

### Backend (Node.js)
- **RESTful API**: Well-structured endpoints for services, content, and contact
- **Image Handling**: Proper image serving and optimization
- **Security**: Helmet.js for security headers, rate limiting, CORS
- **Performance**: Compression middleware and optimized responses
- **Contact Management**: Inquiry and booking system with validation

### Key Functionalities
- **Service Discovery**: Browse, search, and filter spiritual services
- **Detailed Information**: Rich content with images, descriptions, and benefits
- **Booking System**: Multi-step booking process for services
- **Contact Forms**: Inquiry submission and customer support
- **Responsive Images**: Optimized image loading and display
- **Read More**: Expandable content sections for detailed information

## 🚀 Quick Start

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn
- Git

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd spiritual-services-platform
   ```

2. **Install frontend dependencies**
   ```bash
   npm install
   ```

3. **Install backend dependencies**
   ```bash
   cd backend
   npm install
   cd ..
   ```

4. **Start the development servers**

   **Option 1: Run both simultaneously**
   ```bash
   npm run dev
   ```

   **Option 2: Run separately**
   ```bash
   # Terminal 1 - Frontend
   npm start
   
   # Terminal 2 - Backend
   npm run server
   ```

5. **Open your browser**
   - Frontend: http://localhost:3000
   - Backend API: http://localhost:5000

## 📁 Project Structure

```
spiritual-services-platform/
├── src/                          # React frontend source
│   ├── components/               # Reusable UI components
│   │   ├── Header/              # Navigation header
│   │   ├── Footer/              # Site footer
│   │   └── ...                  # Other components
│   ├── pages/                   # Page components
│   │   ├── HomePage/            # Landing page
│   │   ├── ServicesPage/        # Services listing
│   │   ├── ServiceDetailPage/   # Individual service view
│   │   ├── ContentPage/         # Educational content
│   │   ├── ContactPage/         # Contact forms
│   │   └── AboutPage/           # About information
│   ├── context/                 # React Context providers
│   │   ├── ServicesContext.js   # Services state management
│   │   └── ContactContext.js    # Contact form state
│   ├── styles/                  # Styled-components and themes
│   │   ├── GlobalStyles.js      # Global CSS styles
│   │   └── theme.js             # Design system theme
│   ├── App.js                   # Main app component
│   └── index.js                 # App entry point
├── backend/                     # Node.js backend
│   ├── routes/                  # API route handlers
│   │   ├── services.js          # Services API endpoints
│   │   ├── content.js           # Content API endpoints
│   │   └── contact.js           # Contact API endpoints
│   ├── server.js                # Express server setup
│   └── package.json             # Backend dependencies
├── images/                      # Static images
│   ├── services/                # Service-specific images
│   └── ...                      # Other images
├── public/                      # Public assets
├── package.json                 # Frontend dependencies
└── README.md                    # This file
```

## 🛠️ Available Scripts

### Frontend
- `npm start` - Start development server
- `npm run build` - Build for production
- `npm test` - Run tests
- `npm run eject` - Eject from Create React App

### Backend
- `npm run server` - Start backend development server
- `npm start` - Start production server

### Combined
- `npm run dev` - Start both frontend and backend simultaneously

## 🔧 Configuration

### Environment Variables

Create a `.env` file in the root directory:

```env
# Frontend
REACT_APP_API_URL=http://localhost:5000/api

# Backend
PORT=5000
NODE_ENV=development
```

### API Endpoints

#### Services
- `GET /api/services` - Get all services with pagination
- `GET /api/services/:id` - Get service by ID
- `GET /api/services/categories/all` - Get all categories
- `GET /api/services/category/:category` - Get services by category

#### Content
- `GET /api/content/service/:id` - Get content by service ID
- `GET /api/content/summaries` - Get content summaries
- `GET /api/content/search?q=query` - Search content
- `GET /api/content/tags/:tag` - Get content by tag

#### Contact
- `POST /api/contact/inquiry` - Submit inquiry
- `POST /api/contact/booking` - Submit booking
- `GET /api/contact/inquiries` - Get all inquiries (admin)
- `GET /api/contact/bookings` - Get all bookings (admin)

## 🎨 Customization

### Theme Colors
Edit `src/styles/theme.js` to customize:
- Primary colors
- Secondary colors
- Typography
- Spacing
- Breakpoints
- Animations

### Styling
The project uses styled-components for styling. You can:
- Modify existing styled components
- Create new styled components
- Update global styles in `GlobalStyles.js`

### Content
Update service and content data in:
- `backend/routes/services.js` - Service information
- `backend/routes/content.js` - Educational content

## 📱 Responsive Design

The application is built with a mobile-first approach:
- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🚀 Deployment

### Frontend (React)
```bash
npm run build
# Deploy the 'build' folder to your hosting service
```

### Backend (Node.js)
```bash
cd backend
npm install --production
npm start
# Deploy to your preferred hosting service (Heroku, AWS, etc.)
```

## 🔒 Security Features

- **Helmet.js**: Security headers
- **CORS**: Cross-origin resource sharing
- **Rate Limiting**: API request throttling
- **Input Validation**: Form and API input sanitization
- **Content Security Policy**: XSS protection

## 📊 Performance Features

- **Image Optimization**: Responsive images with proper sizing
- **Code Splitting**: Lazy loading of components
- **Caching**: React Query for efficient data caching
- **Compression**: Gzip compression for API responses
- **Lazy Loading**: Intersection Observer for content loading

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙏 Acknowledgments

- **Vedic Traditions**: For the spiritual wisdom and practices
- **React Community**: For the amazing frontend framework
- **Node.js Community**: For the robust backend runtime
- **Styled Components**: For the excellent styling solution

## 📞 Support

For support and questions:
- Email: info@spiritualservices.com
- Phone: +91 98765 43210
- Website: https://spiritualservices.com

---

**Built with ❤️ for spiritual growth and community service**