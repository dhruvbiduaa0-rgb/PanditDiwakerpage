const express = require('express');
const router = express.Router();
const path = require('path');
const fs = require('fs');

// Enhanced content data with detailed information
const contentData = {
  "mahamrtunjay-jap": {
    title: "Mahamrtunjay Mantra - The Conqueror of Death",
    sections: [
      {
        title: "Introduction",
        content: "The Mahamrtunjay Mantra, also known as the Tryambakam Mantra, is one of the most powerful and sacred mantras in Hinduism. It is dedicated to Lord Shiva in his form as Tryambaka (the three-eyed one). This mantra is believed to have the power to conquer death and bestow longevity, health, and spiritual liberation.",
        image: "/images/services/service-mahamrtunjay-jap.webp"
      },
      {
        title: "Mantra Text and Meaning",
        content: "ॐ त्र्यम्बकं यजामहे सुगन्धिं पुष्टिवर्धनम्। उर्वारुकमिव बन्धनान्मृत्योर्मुक्षीय मामृतात्॥\n\nThis sacred mantra translates to: 'We worship the three-eyed Lord Shiva, who is fragrant and who nourishes all beings. May He free us from the bondage of death, like a ripe cucumber is freed from its stem, and grant us immortality.'",
        image: null
      },
      {
        title: "Historical Significance",
        content: "The Mahamrtunjay Mantra finds its origin in the Rigveda and is also mentioned in the Yajurveda. It is said to have been revealed to the great sage Markandeya, who used it to overcome death itself. The mantra has been chanted by sages, saints, and devotees for thousands of years.",
        image: null
      },
      {
        title: "Benefits and Effects",
        content: "Regular chanting of this mantra brings numerous benefits: physical health improvement, mental peace, removal of obstacles, protection from negative energies, spiritual purification, and ultimately, liberation from the cycle of birth and death.",
        image: null
      },
      {
        title: "Proper Method of Chanting",
        content: "The mantra should be chanted with proper pronunciation, devotion, and understanding. It is most effective when chanted during Brahma Muhurta (early morning), during meditation, or in a sacred space. The recommended count is 108 times using a Rudraksha mala.",
        image: null
      }
    ],
    relatedServices: ["ganesh-pooja", "shiv-pooja", "rudrabhishek"],
    tags: ["mantra", "shiva", "longevity", "health", "spiritual"]
  },
  "ganesh-pooja": {
    title: "Ganesh Pooja - Invoking the Remover of Obstacles",
    sections: [
      {
        title: "Lord Ganesha - The Divine Guardian",
        content: "Lord Ganesha, the elephant-headed deity, is one of the most beloved and worshipped gods in Hinduism. He is known as Vighnaharta (remover of obstacles), Buddhipriya (lover of wisdom), and is considered the patron of arts, sciences, and learning.",
        image: "/images/services/service-ganesh-pooja.webp"
      },
      {
        title: "Significance of Ganesh Pooja",
        content: "Ganesh Pooja is performed before starting any new work, business venture, journey, or important ceremony. It is believed that Lord Ganesha's blessings ensure success and remove all hindrances. This practice is deeply rooted in Hindu tradition and is followed by millions of devotees worldwide.",
        image: null
      },
      {
        title: "Ritual Components",
        content: "The pooja involves various elements: invocation of Lord Ganesha, offering of modak (his favorite sweet), lighting of ghee lamps, chanting of mantras, and performing aarti. Each step has deep spiritual significance and contributes to the overall effectiveness of the ceremony.",
        image: null
      },
      {
        title: "Best Times for Performance",
        content: "Ganesh Pooja is most auspicious during Ganesh Chaturthi, on Wednesdays, and during the waxing phase of the moon. However, it can be performed at any time when seeking divine intervention for success in endeavors.",
        image: null
      },
      {
        title: "Expected Outcomes",
        content: "Devotees who perform Ganesh Pooja with sincerity experience: removal of obstacles, success in undertakings, enhanced wisdom and knowledge, business prosperity, safe travels, and overall well-being in life.",
        image: null
      }
    ],
    relatedServices: ["moolshanti-poojan", "lakshmi-pooja", "ganeshchaturthi"],
    tags: ["ganesha", "obstacles", "wisdom", "success", "beginner"]
  },
  "lakshmi-pooja": {
    title: "Lakshmi Pooja - Invoking the Goddess of Wealth and Prosperity",
    sections: [
      {
        title: "Goddess Lakshmi - The Divine Mother of Wealth",
        content: "Goddess Lakshmi is the divine consort of Lord Vishnu and represents wealth, prosperity, abundance, and good fortune. She is depicted as a beautiful woman seated on a lotus, symbolizing purity and spiritual wealth. Her four hands represent the four goals of human life: dharma, artha, kama, and moksha.",
        image: "/images/services/service-lakshmi-pooja.webp"
      },
      {
        title: "Historical and Mythological Background",
        content: "According to Hindu mythology, Goddess Lakshmi emerged from the cosmic ocean during the Samudra Manthan (churning of the ocean). She chose Lord Vishnu as her eternal consort, symbolizing the inseparable connection between wealth and righteousness. Her various forms represent different aspects of prosperity.",
        image: null
      },
      {
        title: "Ritual Significance",
        content: "Lakshmi Pooja is performed to attract financial abundance, business success, and material comforts. The ceremony involves elaborate rituals including purification, invocation, offering of various items, and seeking blessings for prosperity. It is especially important during Diwali and other auspicious occasions.",
        image: null
      },
      {
        title: "Materials and Offerings",
        content: "The pooja requires specific materials: gold coins, lotus flowers, sweets, ghee lamps, rice, and other sacred items. Each offering has symbolic meaning and contributes to the effectiveness of the ceremony. The arrangement follows traditional Vedic guidelines.",
        image: null
      },
      {
        title: "Benefits and Blessings",
        content: "Regular performance of Lakshmi Pooja brings: financial stability, business growth, removal of financial obstacles, family harmony, good fortune, and overall prosperity. It also helps in developing the right attitude towards wealth and material possessions.",
        image: null
      }
    ],
    relatedServices: ["ganesh-pooja", "navratri-durgapooja", "satnarayan-vrat"],
    tags: ["lakshmi", "wealth", "prosperity", "business", "diwali"]
  }
};

// Get content by service ID
router.get('/service/:id', (req, res) => {
  try {
    const { id } = req.params;
    const content = contentData[id];
    
    if (!content) {
      return res.status(404).json({ error: 'Content not found' });
    }
    
    res.json(content);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch content' });
  }
});

// Get all content summaries
router.get('/summaries', (req, res) => {
  try {
    const summaries = Object.keys(contentData).map(id => ({
      id,
      title: contentData[id].title,
      firstSection: contentData[id].sections[0]?.content.substring(0, 200) + '...',
      tags: contentData[id].tags,
      image: contentData[id].sections[0]?.image
    }));
    
    res.json(summaries);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch content summaries' });
  }
});

// Search content
router.get('/search', (req, res) => {
  try {
    const { q } = req.query;
    
    if (!q) {
      return res.status(400).json({ error: 'Search query is required' });
    }
    
    const searchResults = Object.keys(contentData).filter(id => {
      const content = contentData[id];
      const searchText = `${content.title} ${content.sections.map(s => s.content).join(' ')} ${content.tags.join(' ')}`.toLowerCase();
      return searchText.includes(q.toLowerCase());
    }).map(id => ({
      id,
      title: contentData[id].title,
      relevance: contentData[id].sections[0]?.content.substring(0, 150) + '...',
      tags: contentData[id].tags
    }));
    
    res.json(searchResults);
  } catch (error) {
    res.status(500).json({ error: 'Failed to search content' });
  }
});

// Get content by tags
router.get('/tags/:tag', (req, res) => {
  try {
    const { tag } = req.params;
    const taggedContent = Object.keys(contentData).filter(id => 
      contentData[id].tags.includes(tag)
    ).map(id => ({
      id,
      title: contentData[id].title,
      excerpt: contentData[id].sections[0]?.content.substring(0, 200) + '...',
      tags: contentData[id].tags
    }));
    
    res.json(taggedContent);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch tagged content' });
  }
});

module.exports = router;