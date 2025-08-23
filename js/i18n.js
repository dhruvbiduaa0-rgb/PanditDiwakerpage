// Internationalization (i18n) System
const i18n = {
    currentLanguage: 'hindi', // Default language
    
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

    // Translations
    translations: {
        // Header and Navigation
        header: {
            title: {
                hindi: '॥ श्री गणेशाय नमः ॥',
                english: '॥ Shri Ganeshaya Namah ॥'
            },
            subtitle: {
                hindi: 'सर्वे भवन्तु सुखिनः सर्वे सन्तु निरामयाः ॥',
                english: 'May all be happy, may all be free from illness ॥'
            }
        },

        // Pandit Information
        pandit: {
            name: {
                hindi: 'पं. दिवाकरमणि त्रिपाठी शास्त्री',
                english: 'Pt. Diwakarmani Tripathi Shastri'
            },
            title: {
                hindi: 'वैदिक ज्योतिष एवं कर्मकांड विशेषज्ञ',
                english: 'Vedic Astrology & Ritual Expert'
            }
        },

        // Expertise
        expertise: {
            vedic: {
                hindi: 'वैदिक विशेषज्ञ',
                english: 'Vedic Expert'
            },
            astrology: {
                hindi: 'ज्योतिष विशेषज्ञ',
                english: 'Astrology Expert'
            },
            rituals: {
                hindi: 'कर्मकांड विशेषज्ञ',
                english: 'Ritual Expert'
            }
        },

        // Main Content
        main: {
            title: {
                hindi: 'वैदिक ज्योतिष एवं कर्मकांड सेवाएं',
                english: 'Vedic Astrology & Ritual Services'
            },
            subtitle: {
                hindi: 'वैदिक अनुष्ठान एवं ज्योतिष सेवाएं',
                english: 'Vedic Rituals & Astrology Services'
            },
            pandits: {
                hindi: 'पूज्य पिताश्री पं. हृदयशंकर त्रिपाठी एवं पं. दिवाकरमणि त्रिपाठी शास्त्री',
                english: 'Pt. Hridayashankar Tripathi & Pt. Diwakarmani Tripathi Shastri'
            },
            expertise: {
                hindi: 'वैदिक विशेषज्ञ',
                english: 'Vedic Experts'
            },
            description: {
                hindi: 'सभी प्रकार के धार्मिक अनुष्ठान वैदिक परंपराओं के अनुसार किए जाते हैं:',
                english: 'All types of religious rituals are performed according to Vedic traditions:'
            }
        },

        // Services Overview
        services: {
            marriage: {
                title: {
                    hindi: 'विवाह संस्कार:',
                    english: 'Marriage Ceremonies:'
                },
                desc: {
                    hindi: 'पूर्ण वैदिक विवाह अनुष्ठान और प्रक्रियाएं',
                    english: 'Complete Vedic wedding rituals and procedures'
                }
            },
            religious: {
                title: {
                    hindi: 'धार्मिक पाठन:',
                    english: 'Religious Recitations:'
                }
            },
            devotional: {
                title: {
                    hindi: 'भक्तिपूर्ण कार्यक्रम:',
                    english: 'Devotional Programs:'
                }
            },
            astrology: {
                title: {
                    hindi: 'ज्योतिष सेवाएं:',
                    english: 'Astrology Services:'
                }
            }
        },

        // Services
        services: {
            title: {
                hindi: 'हमारी सेवाएं',
                english: 'Our Services'
            },
            ganeshPuja: {
                title: {
                    hindi: 'गणेश पूजा',
                    english: 'Ganesh Puja'
                },
                description: {
                    hindi: 'नए कार्य की शुरुआत के लिए भगवान गणेश की विशेष पूजा',
                    english: 'Special worship of Lord Ganesha for new beginnings'
                }
            },
            lakshmiPujan: {
                title: {
                    hindi: 'लक्ष्मी पूजन',
                    english: 'Lakshmi Pujan'
                },
                description: {
                    hindi: 'धन और समृद्धि के लिए माँ लक्ष्मी की विशेष पूजा',
                    english: 'Special worship of Goddess Lakshmi for wealth and prosperity'
                }
            },
            satyanarayanVrat: {
                title: {
                    hindi: 'सत्यनारायण व्रत',
                    english: 'Satyanarayan Vrat'
                },
                description: {
                    hindi: 'पूर्णिमा के दिन विशेष सत्यनारायण कथा और पूजा',
                    english: 'Special Satyanarayan Katha and worship on full moon days'
                }
            },
            marriageCeremonies: {
                title: {
                    hindi: 'विवाह संस्कार',
                    english: 'Marriage Ceremonies'
                },
                description: {
                    hindi: 'पूर्ण वैदिक विवाह अनुष्ठान और समारोह',
                    english: 'Complete Vedic wedding rituals and ceremonies'
                }
            },
            navagrahaShanti: {
                title: {
                    hindi: 'नवग्रह शांति',
                    english: 'Navagraha Shanti'
                },
                description: {
                    hindi: 'ज्योतिषीय सामंजस्य के लिए ग्रह शांति अनुष्ठान',
                    english: 'Planetary peace rituals for astrological harmony'
                }
            },
            houseWarming: {
                title: {
                    hindi: 'गृहप्रवेश',
                    english: 'House Warming'
            },
                description: {
                    hindi: 'वास्तु पूजा और घर आशीर्वाद समारोह',
                    english: 'Vastu puja and house blessing ceremonies'
                }
            }
        },

        // Rituals Section
        rituals: {
            title: {
                hindi: 'वैदिक अनुष्ठान एवं उनका महत्व',
                english: 'Vedic Rituals & Their Significance'
            },
            majorDeity: {
                title: {
                    hindi: '१. प्रमुख देवता पूजा एवं त्योहार',
                    english: '1. Major Deity Worship & Festivals'
                },
                description: {
                    hindi: 'ये पूजाएं विशिष्ट देवी-देवताओं को समर्पित हैं और अक्सर प्रमुख त्योहारों के दौरान की जाती हैं। इनका उद्देश्य दैवीय आशीर्वाद प्राप्त करना, कृतज्ञता व्यक्त करना और जीवन में शुभता का आह्वान करना है।',
                    english: 'These worships are dedicated to specific deities and are often performed during major festivals. Their purpose is to receive divine blessings, express gratitude, and invoke auspiciousness in life.'
                }
            },
            yajna: {
                title: {
                    hindi: '२. यज्ञ एवं हवन (अग्नि अनुष्ठान)',
                    english: '2. Yajna & Havan (Fire Rituals)'
                },
                description: {
                    hindi: 'यज्ञ या हवन वैदिक परंपरा के केंद्र में हैं, जहां अग्नि को देवताओं का मुख माना जाता है और इसके माध्यम से आहुति दी जाती है। उद्देश्य देवताओं को प्रसन्न करना, वातावरण को शुद्ध करना और ब्रह्मांडीय व्यवस्था को बनाए रखना है।',
                    english: 'Yajna or Havan are central to Vedic tradition, where fire is considered the mouth of the deities and offerings are made through it. The purpose is to please the deities, purify the environment, and maintain cosmic order.'
                }
            },
            sanskaras: {
                title: {
                    hindi: '३. सोलह संस्कार (जीवन चक्र अनुष्ठान)',
                    english: '3. Sixteen Sanskaras (Life-cycle Rituals)'
                },
                description: {
                    hindi: 'ये सोलह अनुष्ठान हैं जो व्यक्ति के जीवन में महत्वपूर्ण मील के पत्थरों पर किए जाते हैं, जन्म से पूर्व से लेकर मृत्यु के बाद तक। इनका उद्देश्य व्यक्ति को शारीरिक, मानसिक और आध्यात्मिक रूप से परिष्कृत करना है।',
                    english: 'These are sixteen rituals performed at important milestones in a person\'s life, from before birth to after death. Their purpose is to refine a person physically, mentally, and spiritually.'
                }
            },
            astrological: {
                title: {
                    hindi: '४. ज्योतिषीय अनुष्ठान (उपचार पूजा)',
                    english: '4. Astrological Rituals (Remedial Worship)'
                },
                description: {
                    hindi: 'वैदिक ज्योतिष के अनुसार, ग्रहों की स्थिति व्यक्ति के जीवन को प्रभावित करती है। ज्योतिषीय अनुष्ठान ग्रहों के प्रतिकूल प्रभावों को शांत करने और उनके शुभ प्रभावों को बढ़ाने के लिए किए जाते हैं।',
                    english: 'According to Vedic astrology, planetary positions affect a person\'s life. Astrological rituals are performed to pacify adverse planetary influences and enhance their beneficial effects.'
                }
            }
        },

        // Contact Section
        contact: {
            'section-title': {
                hindi: 'संपर्क करें',
                english: 'Contact Us'
            },
            'mobile-title': {
                hindi: 'मोबाइल',
                english: 'Mobile'
            },
            'whatsapp-title': {
                hindi: 'व्हाट्सएप',
                english: 'WhatsApp'
            },
            'address-title': {
                hindi: 'पता',
                english: 'Address'
            },
            'timing-title': {
                hindi: 'कार्य समय',
                english: 'Working Hours'
            },
            mobile: {
                hindi: 'मोबाइल',
                english: 'Mobile'
            },
            whatsapp: {
                hindi: 'व्हाट्सएप/कॉल',
                english: 'WhatsApp/Call'
            },
            address: {
                hindi: 'पता',
                english: 'Address'
            },
            landmark: {
                hindi: 'लैंडमार्क',
                english: 'Landmark'
            }
        },

        // About Section
        about: {
            title: {
                hindi: 'हमारे बारे में',
                english: 'About Us'
            }
        },

        // Buttons
        buttons: {
            readMore: {
                hindi: 'और पढ़ें',
                english: 'Read More'
            },
            contact: {
                hindi: 'संपर्क करें',
                english: 'Contact'
            },
            back: {
                hindi: 'वापस जाएं',
                english: 'Go Back'
            }
        },

        // Footer
        footer: {
            copyright: {
                hindi: '© २०२४ श्री ज्योतिष एवं कर्मकांड. सर्वाधिकार सुरक्षित।',
                english: '© 2024 Shri Jyotish & Karmakand. All rights reserved.'
            }
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
        Object.keys(this.translations).forEach(section => {
            Object.keys(this.translations[section]).forEach(key => {
                const translation = this.translations[section][key];
                if (typeof translation === 'object' && translation[this.currentLanguage]) {
                    // Handle nested translations
                    if (typeof translation[this.currentLanguage] === 'object') {
                        Object.keys(translation[this.currentLanguage]).forEach(subKey => {
                            const subTranslation = translation[this.currentLanguage][subKey];
                            this.updateElementContent(`${section}-${key}-${subKey}`, subTranslation);
                        });
                    } else {
                        // Handle direct translations
                        this.updateElementContent(`${section}-${key}`, translation[this.currentLanguage]);
                    }
                }
            });
        });
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
        const translation = this.translations[section]?.[key];
        if (translation && translation[this.currentLanguage]) {
            return translation[this.currentLanguage];
        }
        return key; // Fallback to key if translation not found
    }
};

// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = i18n;
}