// Enhanced Internationalization (i18n) System - Pure Hindi and English
class I18n {
    constructor() {
        this.currentLanguage = 'english';
        this.initialized = false;
        this.hindiTranslations = {
            // Header Section
            'header.title': '॥ श्री गणेशाय नमः ॥',
            'header.subtitle': '॥ सर्वे भवन्तु सुखिनः सर्वे सन्तु निरामयाः ॥',
            'header.mainTitle': 'बैंगलोर में सर्वश्रेष्ठ हिंदी पंडित | वैदिक ज्योतिष और पूजा सेवाएं',
            'header.mainSubtitle': 'विशेषज्ञ वैदिक अनुष्ठान और ज्योतिष सेवाएं | मुहूर्त विशेषज्ञ',

            // Pandit Information
            'pandit.name': 'पंडित दिवाकरमणि त्रिपाठी शास्त्री',
            'pandit.title': 'बैंगलोर में विशेषज्ञ हिंदी पंडित | वैदिक ज्योतिष और मुहूर्त विशेषज्ञ',
            'pandit.aboutTitle': 'बैंगलोर में हमारी पंडित सेवाओं के बारे में',
            'pandit.aboutText': 'हम बैंगलोर में अनुभवी हिंदी पंडित हैं जो पारंपरिक रीति-रिवाजों के अनुसार प्रामाणिक वैदिक अनुष्ठान प्रदान करते हैं। हमारे पास सभी प्रकार के हिंदू समारोहों, पूजा सेवाओं और ज्योतिष परामर्श करने में 25+ वर्षों का अनुभव है।',

            // Expertise
            'expertise.vedic': 'वैदिक अनुष्ठान विशेषज्ञ',
            'expertise.vedicDesc': 'वेदों और शास्त्रों के अनुसार प्रामाणिक अनुष्ठान',
            'expertise.astrology': 'ज्योतिष और मुहूर्त विशेषज्ञ',
            'expertise.astrologyDesc': 'ज्योतिष और शुभ समय गणना में विशेषज्ञता',
            'expertise.rituals': 'हवन और पूजा विशेषज्ञ',
            'expertise.ritualsDesc': 'अग्नि अनुष्ठान और पारंपरिक पूजा में विशेषज्ञ',

            // Services Overview
            'servicesOverview.title': 'बैंगलोर में हमारी पंडित सेवाएं',
            'servicesOverview.marriage.title': 'विवाह समारोह:',
            'servicesOverview.marriage.desc': 'अनुभवी हिंदी पंडित द्वारा संपूर्ण वैदिक विवाह अनुष्ठान और प्रक्रियाएं',
            'servicesOverview.religious.title': 'धार्मिक पूजा सेवाएं:',
            'servicesOverview.religious.desc': 'सभी अवसरों के लिए प्रामाणिक वैदिक पूजा समारोह',
            'servicesOverview.devotional.title': 'भक्तिपूर्ण कार्यक्रम:',
            'servicesOverview.devotional.desc': 'भजन, कीर्तन और आध्यात्मिक सभाएं',
            'servicesOverview.astrology.title': 'ज्योतिष और मुहूर्त:',
            'servicesOverview.astrology.desc': 'विशेषज्ञ कुंडली विश्लेषण और शुभ समय गणना',

            // Services
            'services.ganeshPuja.title': 'गणेश पूजा',
            'services.ganeshPuja.description': 'नई शुरुआत और विघ्न निवारण के लिए भगवान गणेश की विशेष पूजा',
            'services.ganeshPuja.shortDesc': 'बाधाओं का निवारण और सफलता की प्राप्ति',

            'services.houseWarming.title': 'गृह प्रवेश पूजा',
            'services.houseWarming.description': 'नए घरों के लिए प्रामाणिक वास्तु पूजा और गृह आशीर्वाद समारोह',
            'services.houseWarming.shortDesc': 'उचित वास्तु सुधार के साथ घर में शांति और सकारात्मक ऊर्जा',

            'services.marriageCeremonies.title': 'विवाह समारोह',
            'services.marriageCeremonies.description': 'अनुभवी हिंदी पंडित द्वारा संपूर्ण वैदिक विवाह अनुष्ठान और समारोह',
            'services.marriageCeremonies.shortDesc': 'उचित मुहूर्त और अनुष्ठानों के साथ पारंपरिक हिंदू विवाह',

            'services.satyanarayanVrat.title': 'सत्यनारायण पूजा',
            'services.satyanarayanVrat.description': 'पारिवारिक समृद्धि के लिए संपूर्ण सत्यनारायण कथा और पूजा समारोह',
            'services.satyanarayanVrat.shortDesc': 'दिव्य आशीर्वाद के माध्यम से पारिवारिक शांति और कठिनाइयों का निवारण',

            'services.navagrahaShanti.title': 'नवग्रह शांति',
            'services.navagrahaShanti.description': 'ज्योतिषीय सामंजस्य और ग्रह दोष निवारण के लिए ग्रह शांति अनुष्ठान',
            'services.navagrahaShanti.shortDesc': 'वैदिक उपचारों के माध्यम से ग्रह दोष निवारण और जीवन संतुलन',

            'services.lakshmiPujan.title': 'लक्ष्मी पूजन',
            'services.lakshmiPujan.description': 'धन, समृद्धि और व्यावसायिक सफलता के लिए देवी लक्ष्मी की विशेष पूजा',
            'services.lakshmiPujan.shortDesc': 'दिव्य आशीर्वाद के माध्यम से धन-समृद्धि और व्यावसायिक सफलता',

            // Rituals Section
            'rituals.title': 'बैंगलोर में हमारे द्वारा किए जाने वाले हिंदू अनुष्ठान के प्रकार',
            'rituals.majorDeity.title': '1. प्रमुख देव पूजा और त्योहार',
            'rituals.majorDeity.description': 'ये पूजाएं विशिष्ट देवी-देवताओं को समर्पित हैं और अक्सर प्रमुख त्योहारों के दौरान की जाती हैं। हमारे अनुभवी हिंदी पंडित वैदिक परंपराओं के अनुसार प्रामाणिक अनुष्ठान सुनिश्चित करते हैं।',

            'rituals.yajna.title': '2. यज्ञ और हवन (अग्नि अनुष्ठान)',
            'rituals.yajna.description': 'वैदिक परंपरा के केंद्र में पवित्र अग्नि समारोह। हमारे विशेषज्ञ पंडित शुद्धिकरण और दिव्य आशीर्वाद के लिए प्रामाणिक हवन और यज्ञ अनुष्ठान करते हैं।',

            'rituals.sanskaras.title': '3. षोडश संस्कार (जीवन-चक्र अनुष्ठान)',
            'rituals.sanskaras.description': 'जन्म से मृत्यु तक, महत्वपूर्ण मील के पत्थर पर किए जाने वाले संपूर्ण जीवनचक्र समारोह। ये अनुष्ठान जीवन के विभिन्न चरणों को शुद्ध और पवित्र करते हैं।',

            'rituals.astrological.title': '4. ज्योतिषीय अनुष्ठान (उपचारात्मक पूजा)',
            'rituals.astrological.description': 'ग्रहों के प्रभाव को शांत करने और आपके जीवन में सकारात्मक प्रभावों को बढ़ाने के लिए वैदिक ज्योतिष आधारित उपचारात्मक पूजा सेवाएं।',

            // Muhurat Section
            'muhurat.title': 'बैंगलोर में मुहूर्त और लग्न विशेषज्ञ',
            'muhurat.description': 'वैदिक ज्योतिष सिद्धांतों के अनुसार सभी महत्वपूर्ण जीवन घटनाओं के लिए शुभ समय (मुहूर्त) और लग्न का विशेषज्ञ निर्धारण।',

            'muhurat.services.muhuratCalculation.title': 'मुहूर्त गणना',
            'muhurat.services.muhuratCalculation.description': 'विवाह, गृह प्रवेश, व्यापार शुरुआत और अन्य महत्वपूर्ण घटनाओं के लिए शुभ समय की सटीक गणना।',

            'muhurat.services.lagnAnalysis.title': 'लग्न विश्लेषण',
            'muhurat.services.lagnAnalysis.description': 'आपकी जन्म कुंडली के आधार पर विस्तृत लग्न विश्लेषण और सबसे अनुकूल समय अवधि का चयन।',

            'muhurat.services.panchangAnalysis.title': 'पंचांग विश्लेषण',
            'muhurat.services.panchangAnalysis.description': 'सबसे शुभ क्षणों को निर्धारित करने के लिए तिथि, वार, नक्षत्र, योग और करण का व्यापक विश्लेषण।',

            // Contact Section
            'contact.section-title': 'बैंगलोर में सर्वश्रेष्ठ हिंदी पंडित से संपर्क करें',
            'contact.mobile-title': 'मोबाइल',
            'contact.whatsapp-title': 'व्हाट्सऐप',
            'contact.address-title': 'सेवा क्षेत्र',
            'contact.timing-title': 'कार्य समय',
            'contact.workingHours': 'सुबह 6:00 से शाम 8:00 तक',

            // Buttons
            'buttons.readMore': 'और पढ़ें',
            'buttons.contact': 'व्हाट्सऐप अभी',
            'buttons.callNow': 'अभी कॉल करें: +91-XXXXXXXXXX',

            // Footer
            'footer.copyright': '© 2024 पंडित दिवाकरमणि त्रिपाठी शास्त्री | सभी अधिकार सुरक्षित।'
        };

        this.englishTranslations = {
            // Header Section
            'header.title': '॥ Shri Ganeshaya Namah ॥',
            'header.subtitle': 'May all be happy, may all be free from illness ॥',
            'header.mainTitle': 'Best Hindi Pandit in Bangalore | Vedic Astrology & Ritual Services',
            'header.mainSubtitle': 'Expert Vedic Rituals & Astrology Services | Muhurat Specialist',

            // Pandit Information
            'pandit.name': 'Pt. Diwakarmani Tripathi Shastri',
            'pandit.title': 'Expert Hindi Pandit in Bangalore | Vedic Astrology & Muhurat Specialist',
            'pandit.aboutTitle': 'About Our Pandit Services in Bangalore',
            'pandit.aboutText': 'We are experienced Hindi Pandit in Bangalore providing authentic Vedic rituals according to traditional customs. With 25+ years of experience in performing all types of Hindu ceremonies, puja services, and astrology consultations.',

            // Expertise
            'expertise.vedic': 'Vedic Ritual Expert',
            'expertise.vedicDesc': 'Authentic rituals according to Vedas and Shastras',
            'expertise.astrology': 'Jyotish & Muhurat Specialist',
            'expertise.astrologyDesc': 'Expert in astrology and auspicious timing calculations',
            'expertise.rituals': 'Havan & Puja Expert',
            'expertise.ritualsDesc': 'Specialist in fire rituals and traditional worship',

            // Services Overview
            'servicesOverview.title': 'Our Pandit Services in Bangalore',
            'servicesOverview.marriage.title': 'Marriage Ceremonies:',
            'servicesOverview.marriage.desc': 'Complete Vedic wedding rituals and procedures by experienced Hindi Pandit',
            'servicesOverview.religious.title': 'Religious Puja Services:',
            'servicesOverview.religious.desc': 'Authentic Vedic puja ceremonies for all occasions',
            'servicesOverview.devotional.title': 'Devotional Programs:',
            'servicesOverview.devotional.desc': 'Bhajans, Kirtans and spiritual gatherings',
            'servicesOverview.astrology.title': 'Astrology & Muhurat:',
            'servicesOverview.astrology.desc': 'Expert Kundali analysis and auspicious timing calculations',

            // Services
            'services.ganeshPuja.title': 'Ganesh Puja',
            'services.ganeshPuja.description': 'Special worship of Lord Ganesha for new beginnings and obstacle removal',
            'services.ganeshPuja.shortDesc': 'Removal of obstacles and attainment of success',

            'services.houseWarming.title': 'Griha Pravesh Puja',
            'services.houseWarming.description': 'Authentic Vastu puja and house blessing ceremonies for new homes',
            'services.houseWarming.shortDesc': 'Peace and positive energy at home with proper Vastu corrections',

            'services.marriageCeremonies.title': 'Marriage Ceremonies',
            'services.marriageCeremonies.description': 'Complete Vedic wedding rituals and ceremonies by experienced Hindi Pandit',
            'services.marriageCeremonies.shortDesc': 'Traditional Hindu marriage with proper muhurat and rituals',

            'services.satyanarayanVrat.title': 'Satyanarayan Puja',
            'services.satyanarayanVrat.description': 'Complete Satyanarayan Katha and puja ceremony for family prosperity',
            'services.satyanarayanVrat.shortDesc': 'Family peace and removal of difficulties through divine blessings',

            'services.navagrahaShanti.title': 'Navagraha Shanti',
            'services.navagrahaShanti.description': 'Planetary peace rituals for astrological harmony and removing planetary doshas',
            'services.navagrahaShanti.shortDesc': 'Planetary dosha removal and life balance through Vedic remedies',

            'services.lakshmiPujan.title': 'Lakshmi Pujan',
            'services.lakshmiPujan.description': 'Special worship of Goddess Lakshmi for wealth, prosperity and business success',
            'services.lakshmiPujan.shortDesc': 'Wealth-prosperity and business success through divine blessings',

            // Rituals Section
            'rituals.title': 'Types of Hindu Rituals We Perform in Bangalore',
            'rituals.majorDeity.title': '1. Major Deity Worship & Festivals',
            'rituals.majorDeity.description': 'These worships are dedicated to specific deities and are often performed during major festivals. Our experienced Hindi Pandit ensures authentic rituals according to Vedic traditions.',

            'rituals.yajna.title': '2. Yajna & Havan (Fire Rituals)',
            'rituals.yajna.description': 'Sacred fire ceremonies central to Vedic tradition. Our expert Pandit performs authentic havan and yajna rituals for purification and divine blessings.',

            'rituals.sanskaras.title': '3. Sixteen Sanskaras (Life-cycle Rituals)',
            'rituals.sanskaras.description': 'Complete lifecycle ceremonies from birth to death, performed at important milestones. These rituals purify and sanctify different stages of life.',

            'rituals.astrological.title': '4. Astrological Rituals (Remedial Worship)',
            'rituals.astrological.description': 'Vedic astrology based remedial puja services to pacify planetary influences and enhance positive effects in your life.',

            // Muhurat Section
            'muhurat.title': 'Muhurat & Lagn Specialist in Bangalore',
            'muhurat.description': 'Expert determination of auspicious timing (muhurat) and ascendant (lagn) for all important life events according to Vedic astrology principles.',

            'muhurat.services.muhuratCalculation.title': 'Muhurat Calculation',
            'muhurat.services.muhuratCalculation.description': 'Precise calculation of auspicious timing for marriage, Griha Pravesh, business opening, and other important events.',

            'muhurat.services.lagnAnalysis.title': 'Lagn Analysis',
            'muhurat.services.lagnAnalysis.description': 'Detailed ascendant analysis and selection of most favorable time periods based on your birth chart.',

            'muhurat.services.panchangAnalysis.title': 'Panchang Analysis',
            'muhurat.services.panchangAnalysis.description': 'Comprehensive analysis of tithi, vara, nakshatra, yoga, and karana for determining the most auspicious moments.',

            // Contact Section
            'contact.section-title': 'Contact Best Hindi Pandit in Bangalore',
            'contact.mobile-title': 'Mobile',
            'contact.whatsapp-title': 'WhatsApp',
            'contact.address-title': 'Service Areas',
            'contact.timing-title': 'Working Hours',
            'contact.workingHours': '6:00 AM to 8:00 PM',

            // Buttons
            'buttons.readMore': 'Read More',
            'buttons.contact': 'WhatsApp Now',
            'buttons.callNow': 'Call Now: +91-XXXXXXXXXX',

            // Footer
            'footer.copyright': '© 2024 Pt. Diwakarmani Tripathi Shastri | All rights reserved.'
        };
    }

    init() {
        if (this.initialized) return;
        
        const savedLanguage = localStorage.getItem('language');
        if (savedLanguage && (savedLanguage === 'hindi' || savedLanguage === 'english')) {
            this.currentLanguage = savedLanguage;
        }
        
        this.initialized = true;
        this.updateLanguage();
        this.setupLanguageToggle();
    }

    getTranslation(key) {
        const translations = this.currentLanguage === 'hindi' ? this.hindiTranslations : this.englishTranslations;
        return translations[key] || key;
    }

    updateLanguage() {
        const elements = document.querySelectorAll('[data-i18n]');
        elements.forEach(element => {
            const key = element.getAttribute('data-i18n');
            const translation = this.getTranslation(key);
            if (translation) {
                element.textContent = translation;
            }
        });

        // Update HTML lang attribute
        document.documentElement.lang = this.currentLanguage === 'hindi' ? 'hi' : 'en';
        
        // Update body class for font changes
        document.body.className = document.body.className.replace(/\blang-\w+\b/, '');
        document.body.classList.add(`lang-${this.currentLanguage}`);
    }

    setLanguage(language) {
        if (language === 'hindi' || language === 'english') {
            this.currentLanguage = language;
            localStorage.setItem('language', language);
            this.updateLanguage();
            this.updateLanguageToggle();
            
            // Trigger custom event for other components
            window.dispatchEvent(new CustomEvent('languageChange', { 
                detail: { language: this.currentLanguage } 
            }));
        }
    }

    toggleLanguage() {
        const newLanguage = this.currentLanguage === 'hindi' ? 'english' : 'hindi';
        this.setLanguage(newLanguage);
    }

    setupLanguageToggle() {
        const toggleBtn = document.getElementById('languageToggle');
        if (toggleBtn) {
            toggleBtn.addEventListener('click', () => this.toggleLanguage());
            this.updateLanguageToggle();
        }
    }

    updateLanguageToggle() {
        const toggleBtn = document.getElementById('languageToggle');
        if (toggleBtn) {
            const isHindi = this.currentLanguage === 'hindi';
            toggleBtn.innerHTML = `
                <span class="lang-indicator ${isHindi ? 'active' : ''}" data-lang="hindi">हिं</span>
                <span class="lang-indicator ${!isHindi ? 'active' : ''}" data-lang="english">EN</span>
                <div class="toggle-slider ${isHindi ? 'hindi-active' : 'english-active'}"></div>
            `;
        }
    }

    getCurrentLanguage() {
        return this.currentLanguage;
    }

    // Helper method for getting translations in specific contexts
    t(key, section = null) {
        const fullKey = section ? `${section}.${key}` : key;
        return this.getTranslation(fullKey);
    }
}

// Create global instance
const i18n = new I18n();