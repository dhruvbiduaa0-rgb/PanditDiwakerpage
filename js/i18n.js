// Internationalization (i18n) System - Pure Hindi and English
const i18n = {
    currentLanguage: 'english', // Default language set to English
    
    // Language configurations
    languages: {
        hindi: {
            code: 'hi',
            name: 'हिंदी',
            direction: 'ltr',
            font: 'Noto Sans Devanagari'
        },
        english: {
            code: 'en',
            name: 'English',
            direction: 'ltr',
            font: 'Inter'
        }
    },

    // Pure Hindi Translations
    hindiTranslations: {
        // Header and Navigation
        header: {
            title: '॥ श्री गणेशाय नमः ॥',
            subtitle: 'सर्वे भवन्तु सुखिनः सर्वे सन्तु निरामयाः ॥',
            mainTitle: 'वैदिक ज्योतिष एवं कर्मकांड सेवाएं',
            mainSubtitle: 'वैदिक अनुष्ठान एवं ज्योतिष सेवाएं'
        },

        // Pandit Information
        pandit: {
            name: 'पं. दिवाकरमणि त्रिपाठी शास्त्री',
            title: 'वैदिक ज्योतिष एवं कर्मकांड विशेषज्ञ',
            aboutTitle: 'हमारे बारे में',
            aboutText: 'हम वैदिक परंपराओं के अनुसार सभी प्रकार के धार्मिक अनुष्ठान करते हैं। हमारे पास 25+ वर्षों का अनुभव है।'
        },

        // Expertise
        expertise: {
            vedic: 'वैदिक विशेषज्ञ',
            astrology: 'ज्योतिष विशेषज्ञ',
            rituals: 'कर्मकांड विशेषज्ञ',
            vedicDesc: 'वेदों के अनुसार अनुष्ठान',
            astrologyDesc: 'ज्योतिष शास्त्र के अनुसार उपचार',
            ritualsDesc: 'शास्त्रीय विधि से पूजा'
        },

        // Services Overview
        servicesOverview: {
            title: 'हमारी सेवाएं',
            marriage: {
                title: 'विवाह संस्कार:',
                desc: 'पूर्ण वैदिक विवाह अनुष्ठान और प्रक्रियाएं'
            },
            religious: {
                title: 'धार्मिक पाठन:',
                desc: 'वेद, पुराण और शास्त्रों का पाठ'
            },
            devotional: {
                title: 'भक्तिपूर्ण कार्यक्रम:',
                desc: 'भजन, कीर्तन और सत्संग'
            },
            astrology: {
                title: 'ज्योतिष सेवाएं:',
                desc: 'कुंडली विश्लेषण और उपचार'
            }
        },

        // Individual Services
        services: {
            ganeshPuja: {
                title: 'गणेश पूजा',
                description: 'नए कार्य की शुरुआत के लिए भगवान गणेश की विशेष पूजा',
                shortDesc: 'बाधाओं का निवारण और सफलता की प्राप्ति'
            },
            lakshmiPujan: {
                title: 'लक्ष्मी पूजन',
                description: 'धन और समृद्धि के लिए माँ लक्ष्मी की विशेष पूजा',
                shortDesc: 'धन-समृद्धि और व्यावसायिक सफलता'
            },
            satyanarayanVrat: {
                title: 'सत्यनारायण व्रत',
                description: 'पूर्णिमा के दिन विशेष सत्यनारायण कथा और पूजा',
                shortDesc: 'पारिवारिक सुख-शांति और कष्ट निवारण'
            },
            marriageCeremonies: {
                title: 'विवाह संस्कार',
                description: 'पूर्ण वैदिक विवाह अनुष्ठान और समारोह',
                shortDesc: 'पारिवारिक एकता और आध्यात्मिक विकास'
            },
            navagrahaShanti: {
                title: 'नवग्रह शांति',
                description: 'ज्योतिषीय सामंजस्य के लिए ग्रह शांति अनुष्ठान',
                shortDesc: 'ग्रह दोष निवारण और जीवन में संतुलन'
            },
            houseWarming: {
                title: 'गृहप्रवेश',
                description: 'वास्तु पूजा और घर आशीर्वाद समारोह',
                shortDesc: 'Peace and positive energy at home'
            }
        },

        // Rituals Section
        rituals: {
            title: 'वैदिक अनुष्ठान एवं उनका महत्व',
            majorDeity: {
                title: '१. प्रमुख देवता पूजा एवं त्यौहार',
                description: 'ये पूजाएं विशिष्ट देवी-देवताओं को समर्पित हैं और अक्सर प्रमुख त्योहारों के दौरान की जाती हैं। इनका उद्देश्य दैवीय आशीर्वाद प्राप्त करना, कृतज्ञता व्यक्त करना और जीवन में शुभता का आह्वान करना है।'
            },
            yajna: {
                title: '२. यज्ञ एवं हवन (अग्नि अनुष्ठान)',
                description: 'यज्ञ या हवन वैदिक परंपरा के केंद्र में हैं, जहां अग्नि को देवताओं का मुख माना जाता है और इसके माध्यम से आहुति दी जाती है। उद्देश्य देवताओं को प्रसन्न करना, वातावरण को शुद्ध करना और ब्रह्मांडीय व्यवस्था को बनाए रखना है।'
            },
            sanskaras: {
                title: '३. सोलह संस्कार (जीवन चक्र अनुष्ठान)',
                description: 'ये सोलह अनुष्ठान हैं जो व्यक्ति के जीवन में महत्वपूर्ण मील के पत्थरों पर किए जाते हैं, जन्म से पूर्व से लेकर मृत्यु के बाद तक। इनका उद्देश्य व्यक्ति को शारीरिक, मानसिक और आध्यात्मिक रूप से परिष्कृत करना है।'
            },
            astrological: {
                title: '४. ज्योतिषीय अनुष्ठान (उपचार पूजा)',
                description: 'वैदिक ज्योतिष के अनुसार, ग्रहों की स्थिति व्यक्ति के जीवन को प्रभावित करती है। ज्योतिषीय अनुष्ठान ग्रहों के प्रतिकूल प्रभावों को शांत करने और उनके शुभ प्रभावों को बढ़ाने के लिए किए जाते हैं।'
            }
        },

        // Contact Section
        contact: {
            'section-title': 'संपर्क करें',
            'mobile-title': 'मोबाइल',
            'whatsapp-title': 'व्हाट्सएप',
            'address-title': 'पता',
            'timing-title': 'कार्य समय',
            mobile: 'मोबाइल',
            whatsapp: 'व्हाट्सएप/कॉल',
            address: 'पता',
            landmark: 'लैंडमार्क',
            workingHours: 'सुबह 6:00 बजे से शाम 8:00 बजे तक',
            addressDetail: 'श्री ज्योतिष एवं कर्मकांड केंद्र, मुख्य बाजार, शहर'
        },

        // Buttons
        buttons: {
            readMore: 'और पढ़ें',
            contact: 'संपर्क करें',
            back: 'वापस जाएं',
            bookNow: 'अभी बुक करें',
            callNow: 'अभी कॉल करें'
        },

        // Footer
        footer: {
            copyright: '© २०२४ श्री ज्योतिष एवं कर्मकांड. सर्वाधिकार सुरक्षित।',
            address: 'श्री ज्योतिष एवं कर्मकांड केंद्र, मुख्य बाजार, शहर',
            phone: 'फोन: +91-XXXXXXXXXX',
            email: 'ईमेल: info@example.com'
        }
    },

    // Pure English Translations
    englishTranslations: {
        // Header and Navigation
        header: {
            title: '॥ Shri Ganeshaya Namah ॥',
            subtitle: 'May all be happy, may all be free from illness ॥',
            mainTitle: 'Vedic Astrology & Ritual Services',
            mainSubtitle: 'Vedic Rituals & Astrology Services'
        },

        // Pandit Information
        pandit: {
            name: 'Pt. Diwakarmani Tripathi Shastri',
            title: 'Vedic Astrology & Ritual Expert',
            aboutTitle: 'About Us',
            aboutText: 'We perform all types of religious rituals according to Vedic traditions. We have 25+ years of experience.'
        },

        // Expertise
        expertise: {
            vedic: 'Vedic Expert',
            astrology: 'Astrology Expert',
            rituals: 'Ritual Expert',
            vedicDesc: 'Rituals according to Vedas',
            astrologyDesc: 'Remedies according to Astrology',
            ritualsDesc: 'Worship through classical methods'
        },

        // Services Overview
        servicesOverview: {
            title: 'Our Services',
            marriage: {
                title: 'Marriage Ceremonies:',
                desc: 'Complete Vedic wedding rituals and procedures'
            },
            religious: {
                title: 'Religious Recitations:',
                desc: 'Recitation of Vedas, Puranas and Shastras'
            },
            devotional: {
                title: 'Devotional Programs:',
                desc: 'Bhajans, Kirtans and Satsangs'
            },
            astrology: {
                title: 'Astrology Services:',
                desc: 'Kundali analysis and remedies'
            }
        },

        // Individual Services
        services: {
            ganeshPuja: {
                title: 'Ganesh Puja',
                description: 'Special worship of Lord Ganesha for new beginnings',
                shortDesc: 'Removal of obstacles and attainment of success'
            },
            lakshmiPujan: {
                title: 'Lakshmi Pujan',
                description: 'Special worship of Goddess Lakshmi for wealth and prosperity',
                shortDesc: 'Wealth-prosperity and business success'
            },
            satyanarayanVrat: {
                title: 'Satyanarayan Vrat',
                description: 'Special Satyanarayan Katha and worship on full moon days',
                shortDesc: 'Family peace and removal of difficulties'
            },
            marriageCeremonies: {
                title: 'Marriage Ceremonies',
                description: 'Complete Vedic wedding rituals and ceremonies',
                shortDesc: 'Family unity and spiritual development'
            },
            navagrahaShanti: {
                title: 'Navagraha Shanti',
                description: 'Planetary peace rituals for astrological harmony',
                shortDesc: 'Planetary dosha removal and life balance'
            },
            houseWarming: {
                title: 'House Warming',
                description: 'Vastu puja and house blessing ceremonies',
                shortDesc: 'Peace and positive energy at home'
            }
        },

        // Rituals Section
        rituals: {
            title: 'Vedic Rituals & Their Significance',
            majorDeity: {
                title: '1. Major Deity Worship & Festivals',
                description: 'These worships are dedicated to specific deities and are often performed during major festivals. Their purpose is to receive divine blessings, express gratitude, and invoke auspiciousness in life.'
            },
            yajna: {
                title: '2. Yajna & Havan (Fire Rituals)',
                description: 'Yajna or Havan are central to Vedic tradition, where fire is considered the mouth of the deities and offerings are made through it. The purpose is to please the deities, purify the environment and maintain cosmic order.'
            },
            sanskaras: {
                title: '3. Sixteen Sanskaras (Life-cycle Rituals)',
                description: 'These are sixteen rituals performed at important milestones in a person\'s life, from before birth to after death. Their purpose is to refine a person physically, mentally and spiritually.'
            },
            astrological: {
                title: '4. Astrological Rituals (Remedial Worship)',
                description: 'According to Vedic astrology, planetary positions affect a person\'s life. Astrological rituals are performed to pacify adverse planetary influences and enhance their beneficial effects.'
            }
        },

        // Contact Section
        contact: {
            'section-title': 'Contact Us',
            'mobile-title': 'Mobile',
            'whatsapp-title': 'WhatsApp',
            'address-title': 'Address',
            'timing-title': 'Working Hours',
            mobile: 'Mobile',
            whatsapp: 'WhatsApp/Call',
            address: 'Address',
            landmark: 'Landmark',
            workingHours: '6:00 AM to 8:00 PM',
            addressDetail: 'Shri Jyotish & Karmakand Center, Main Market, City'
        },

        // Buttons
        buttons: {
            readMore: 'Read More',
            contact: 'Contact',
            back: 'Go Back',
            bookNow: 'Book Now',
            callNow: 'Call Now'
        },

        // Footer
        footer: {
            copyright: '© 2024 Shri Jyotish & Karmakand. All rights reserved.',
            address: 'Shri Jyotish & Karmakand Center, Main Market, City',
            phone: 'Phone: +91-XXXXXXXXXX',
            email: 'Email: info@example.com'
        }
    },

    // Initialize the i18n system
    init() {
        this.setLanguage(this.currentLanguage);
        this.setupEventListeners();
    },

    // Set language and update all content
    setLanguage(language) {
        if (!this.languages[language]) {
            console.error(`Language ${language} not supported`);
            return;
        }

        this.currentLanguage = language;
        
        // Update HTML lang attribute
        document.documentElement.lang = this.languages[language].code;
        
        // Update font family
        document.body.style.fontFamily = this.languages[language].font;
        
        // Update all translatable content
        this.updateContent();
        
        // Update language toggle buttons
        this.updateLanguageToggle();
        
        // Store preference
        localStorage.setItem('preferredLanguage', language);
    },

    // Update all content based on current language
    updateContent() {
        // Update all elements with data-i18n attribute
        document.querySelectorAll('[data-i18n]').forEach(element => {
            const key = element.getAttribute('data-i18n');
            const translation = this.getTranslation(key);
            if (translation) {
                if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                    element.placeholder = translation;
                } else {
                    element.textContent = translation;
                }
            }
        });
    },

    // Get translation for a specific key
    getTranslation(key) {
        const keys = key.split('.');
        let translations = this.currentLanguage === 'hindi' ? this.hindiTranslations : this.englishTranslations;
        
        for (const k of keys) {
            if (translations && translations[k]) {
                translations = translations[k];
            } else {
                return null;
            }
        }
        
        return translations;
    },

    // Update specific element content
    updateElementContent(dataAttribute, text) {
        const elements = document.querySelectorAll(`[data-i18n="${dataAttribute}"]`);
        elements.forEach(element => {
            if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                element.placeholder = text;
            } else {
                element.textContent = text;
            }
        });
    },

    // Update language toggle buttons
    updateLanguageToggle() {
        const hindiBtn = document.getElementById('hindiBtn');
        const englishBtn = document.getElementById('englishBtn');
        
        if (this.currentLanguage === 'hindi') {
            hindiBtn.classList.add('active');
            englishBtn.classList.remove('active');
        } else {
            englishBtn.classList.add('active');
            hindiBtn.classList.remove('active');
        }
    },

    // Setup event listeners
    setupEventListeners() {
        // Language toggle buttons
        document.getElementById('hindiBtn').addEventListener('click', () => {
            this.setLanguage('hindi');
        });
        
        document.getElementById('englishBtn').addEventListener('click', () => {
            this.setLanguage('english');
        });

        // Load saved language preference
        const savedLanguage = localStorage.getItem('preferredLanguage');
        if (savedLanguage && this.languages[savedLanguage]) {
            this.setLanguage(savedLanguage);
        }
    },

    // Get translation for a specific key
    t(key, section = 'main') {
        const translations = this.currentLanguage === 'hindi' ? this.hindiTranslations : this.englishTranslations;
        const translation = translations[section]?.[key];
        if (translation) {
            return translation;
        }
        return key; // Fallback to key if translation not found
    }
};

// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = i18n;
}