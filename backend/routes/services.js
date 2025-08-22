const express = require('express');
const router = express.Router();
const path = require('path');
const fs = require('fs');

// Enhanced services data with detailed information
const servicesData = [
  {
    id: "mahamrtunjay-jap",
    title: "Mahamrtunjay Jap",
    shortDescription: "Powerful mantra for longevity and health",
    fullDescription: "The Mahamrtunjay Mantra is one of the most powerful mantras in Hinduism, dedicated to Lord Shiva. It is believed to conquer death and bestow longevity, health, and spiritual liberation. This sacred chant removes obstacles and purifies the mind and soul.",
    benefits: [
      "Longevity and good health",
      "Removal of obstacles",
      "Spiritual purification",
      "Protection from negative energies",
      "Mental peace and clarity"
    ],
    duration: "1-2 hours",
    materials: ["Rudraksha mala", "Incense", "Ghee lamp", "Sacred water"],
    image: "/images/services/service-mahamrtunjay-jap.webp",
    alt: "Mahamrtunjay Jap ceremony",
    category: "mantra",
    difficulty: "intermediate",
    price: "₹1500-3000"
  },
  {
    id: "moolshanti-poojan",
    title: "Mool Shanti Poojan",
    shortDescription: "Foundation peace ceremony for new beginnings",
    fullDescription: "Mool Shanti Poojan is performed to establish peace and harmony in the foundation of any new venture, construction, or life event. It involves elaborate rituals to appease the five elements and seek blessings from various deities for success and prosperity.",
    benefits: [
      "Foundation stability",
      "Removal of negative energies",
      "Success in new ventures",
      "Harmony in relationships",
      "Financial prosperity"
    ],
    duration: "3-4 hours",
    materials: ["Sacred herbs", "Ghee", "Grains", "Fruits", "Flowers"],
    image: "/images/services/service-moolshanti-poojan.webp",
    alt: "Mool Shanti Poojan ceremony",
    category: "ceremony",
    difficulty: "advanced",
    price: "₹5000-8000"
  },
  {
    id: "ganesh-pooja",
    title: "Ganesh Pooja",
    shortDescription: "Remover of obstacles and bestower of wisdom",
    fullDescription: "Ganesh Pooja is performed to invoke Lord Ganesha, the remover of obstacles and bestower of wisdom. This ceremony is essential before starting any new work, business, or journey. It ensures success and removes all hindrances.",
    benefits: [
      "Removal of obstacles",
      "Success in endeavors",
      "Wisdom and knowledge",
      "Business prosperity",
      "Safe travels"
    ],
    duration: "1-2 hours",
    materials: ["Modak", "Durva grass", "Red flowers", "Sindoor", "Ghee"],
    image: "/images/services/service-ganesh-pooja.webp",
    alt: "Ganesh Pooja ceremony",
    category: "deity",
    difficulty: "beginner",
    price: "₹1000-2500"
  },
  {
    id: "lakshmi-poojan",
    title: "Lakshmi Poojan",
    shortDescription: "Goddess of wealth and prosperity",
    fullDescription: "Lakshmi Poojan is dedicated to Goddess Lakshmi, the deity of wealth, prosperity, and abundance. This ceremony is especially performed during Diwali and other auspicious occasions to attract financial success and material comforts.",
    benefits: [
      "Financial prosperity",
      "Business success",
      "Material abundance",
      "Family harmony",
      "Good fortune"
    ],
    duration: "2-3 hours",
    materials: ["Gold coins", "Lotus flowers", "Sweets", "Ghee lamp", "Rice"],
    image: "/images/services/service-lakshmi-poojan.webp",
    alt: "Lakshmi Poojan ceremony",
    category: "deity",
    difficulty: "intermediate",
    price: "₹2000-4000"
  },
  {
    id: "navratri-durgapooja",
    title: "Navratri Durga Pooja",
    shortDescription: "Nine nights of divine feminine power",
    fullDescription: "Navratri Durga Pooja is a nine-night celebration dedicated to Goddess Durga in her various forms. Each night represents a different aspect of the divine feminine, from protection and wisdom to prosperity and liberation.",
    benefits: [
      "Divine protection",
      "Spiritual awakening",
      "Removal of negative forces",
      "Inner strength",
      "Fulfillment of desires"
    ],
    duration: "9 days",
    materials: ["Kumkum", "Haldi", "Flowers", "Fruits", "Sacred water"],
    image: "/images/services/service-navratri-durgapooja.webp",
    alt: "Navratri Durga Pooja celebration",
    category: "festival",
    difficulty: "advanced",
    price: "₹8000-15000"
  },
  {
    id: "vivah-sanskar",
    title: "Vivah Sanskar",
    shortDescription: "Sacred marriage ceremony",
    fullDescription: "Vivah Sanskar is the sacred Hindu marriage ceremony that unites two souls in holy matrimony. It involves various rituals and ceremonies that sanctify the union and seek blessings for a happy and prosperous married life.",
    benefits: [
      "Blessed marriage",
      "Family harmony",
      "Longevity of relationship",
      "Progeny blessings",
      "Social recognition"
    ],
    duration: "1-3 days",
    materials: ["Sacred fire", "Mangalsutra", "Vermillion", "Flowers", "Sacred thread"],
    image: "/images/services/service-vivah-sanskar.webp",
    alt: "Vivah Sanskar marriage ceremony",
    category: "sanskar",
    difficulty: "advanced",
    price: "₹10000-20000"
  }
];

// Get all services with pagination
router.get('/', (req, res) => {
  try {
    const { page = 1, limit = 10, category, search } = req.query;
    
    let filteredServices = [...servicesData];
    
    // Filter by category
    if (category) {
      filteredServices = filteredServices.filter(service => 
        service.category === category
      );
    }
    
    // Search functionality
    if (search) {
      const searchLower = search.toLowerCase();
      filteredServices = filteredServices.filter(service =>
        service.title.toLowerCase().includes(searchLower) ||
        service.shortDescription.toLowerCase().includes(searchLower) ||
        service.fullDescription.toLowerCase().includes(searchLower)
      );
    }
    
    // Pagination
    const startIndex = (page - 1) * limit;
    const endIndex = page * limit;
    const paginatedServices = filteredServices.slice(startIndex, endIndex);
    
    res.json({
      services: paginatedServices,
      pagination: {
        currentPage: parseInt(page),
        totalPages: Math.ceil(filteredServices.length / limit),
        totalServices: filteredServices.length,
        hasNext: endIndex < filteredServices.length,
        hasPrev: page > 1
      }
    });
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch services' });
  }
});

// Get service by ID with full details
router.get('/:id', (req, res) => {
  try {
    const { id } = req.params;
    const service = servicesData.find(s => s.id === id);
    
    if (!service) {
      return res.status(404).json({ error: 'Service not found' });
    }
    
    res.json(service);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch service' });
  }
});

// Get service categories
router.get('/categories/all', (req, res) => {
  try {
    const categories = [...new Set(servicesData.map(service => service.category))];
    res.json(categories);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch categories' });
  }
});

// Get services by category
router.get('/category/:category', (req, res) => {
  try {
    const { category } = req.params;
    const { page = 1, limit = 10 } = req.query;
    
    const categoryServices = servicesData.filter(service => 
      service.category === category
    );
    
    const startIndex = (page - 1) * limit;
    const endIndex = page * limit;
    const paginatedServices = categoryServices.slice(startIndex, endIndex);
    
    res.json({
      services: paginatedServices,
      category,
      pagination: {
        currentPage: parseInt(page),
        totalPages: Math.ceil(categoryServices.length / limit),
        totalServices: categoryServices.length
      }
    });
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch category services' });
  }
});

module.exports = router;