// Main Application Logic
class VedicServicesApp {
    constructor() {
        this.currentLanguage = 'english';
        this.currentService = null;
        this.init();
    }

    init() {
        this.initializeLanguage();
        this.setupEventListeners();
        this.setupNavigation();
        this.setupServiceCards();
        this.setupServiceNavigation();
        this.setupReadMoreButtons();
        this.setupContactButtons();
        this.setupSmoothScrolling();
        this.setupScrollAnimations();
        this.addFloatingAnimation();
    }

    initializeLanguage() {
        // Initialize with English as default
        if (typeof i18n !== 'undefined') {
            i18n.init();
            this.currentLanguage = i18n.currentLanguage;
        }
    }

    setupEventListeners() {
        // Language toggle event listeners
        const hindiBtn = document.getElementById('hindiBtn');
        const englishBtn = document.getElementById('englishBtn');

        if (hindiBtn && englishBtn) {
            hindiBtn.addEventListener('click', () => {
                this.setLanguage('hindi');
            });

            englishBtn.addEventListener('click', () => {
                this.setLanguage('english');
            });
        }
    }

    setupNavigation() {
        // Smooth scrolling for navigation links
        const navLinks = document.querySelectorAll('a[href^="#"]');
        navLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const targetId = link.getAttribute('href');
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    targetElement.scrollIntoView({ behavior: 'smooth' });
                }
            });
        });
    }

    setupServiceCards() {
        // Add hover effects and animations to service cards
        const serviceCards = document.querySelectorAll('.service-card');
        serviceCards.forEach(card => {
            card.addEventListener('mouseenter', () => {
                card.classList.add('hover:scale-105');
            });
            card.addEventListener('mouseleave', () => {
                card.classList.remove('hover:scale-105');
            });
        });
    }

    setupServiceNavigation() {
        // Handle service navigation and detail pages
        const serviceLinks = document.querySelectorAll('[data-service]');
        serviceLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const serviceId = link.getAttribute('data-service');
                this.showServiceDetails(serviceId);
            });
        });
    }

    setupReadMoreButtons() {
        // Handle read more button clicks
        const readMoreButtons = document.querySelectorAll('.read-more-btn');
        readMoreButtons.forEach(button => {
            button.addEventListener('click', (e) => {
                e.preventDefault();
                const serviceId = button.getAttribute('data-service');
                this.showServiceDetails(serviceId);
            });
        });
    }

    setupContactButtons() {
        // Handle contact button clicks
        const contactButtons = document.querySelectorAll('.contact-btn');
        contactButtons.forEach(button => {
            button.addEventListener('click', (e) => {
                e.preventDefault();
                this.scrollToContact();
            });
        });
    }

    scrollToContact() {
        const contactSection = document.getElementById('contact');
        if (contactSection) {
            contactSection.scrollIntoView({ behavior: 'smooth' });
        }
    }

    getServiceIdFromTitle(title) {
        // Convert service title to service ID
        const serviceMap = {
            'ganesh-puja': 'ganeshPuja',
            'lakshmi-pujan': 'lakshmiPujan',
            'satyanarayan-vrat': 'satyanarayanVrat',
            'marriage-ceremonies': 'marriageCeremonies',
            'navagraha-shanti': 'navagrahaShanti',
            'house-warming': 'houseWarming'
        };
        return serviceMap[title] || title;
    }

    showServiceDetails(serviceId) {
        const serviceData = servicesData[serviceId];
        if (!serviceData) {
            console.error('Service not found:', serviceId);
            return;
        }

        this.currentService = serviceId;
        const detailsContent = this.createServiceDetailsPage(serviceData);
        
        document.getElementById('serviceDetailsContent').innerHTML = detailsContent;
        document.getElementById('serviceDetailsContainer').classList.remove('hidden');
        
        this.setupBackButton();
        this.updateNavigation();
    }

    createServiceDetailsPage(service) {
        const isHindi = this.currentLanguage === 'hindi';
        const lang = isHindi ? 'hindi' : 'english';
        
        return `
            <div class="service-details-page">
                <!-- Header -->
                <div class="flex justify-between items-center mb-8">
                    <h1 class="text-3xl md:text-4xl font-bold text-amber-800">
                        ${service.title[lang]}
                    </h1>
                    <button id="backBtn" class="btn btn-secondary">
                        <span data-i18n="buttons.back">${isHindi ? 'वापस जाएं' : 'Go Back'}</span>
                    </button>
                </div>

                <!-- Service Overview -->
                <div class="bg-amber-50 rounded-2xl p-8 mb-8">
                    <div class="grid md:grid-cols-2 gap-8">
                        <div>
                            <h2 class="text-2xl font-bold text-amber-800 mb-4">
                                ${isHindi ? 'सेवा विवरण' : 'Service Overview'}
                            </h2>
                            <p class="text-lg text-gray-700 leading-relaxed mb-4">
                                ${service.description[lang]}
                            </p>
                            <p class="text-lg text-gray-700 leading-relaxed">
                                ${service.significance[lang]}
                            </p>
                        </div>
                        <div>
                            <h3 class="text-xl font-bold text-amber-800 mb-4">
                                ${isHindi ? 'मुख्य लाभ' : 'Key Benefits'}
                            </h3>
                            <p class="text-lg text-gray-700 leading-relaxed">
                                ${service.benefits[lang]}
                            </p>
                        </div>
                    </div>
                </div>

                <!-- Detailed Benefits -->
                <div class="bg-white rounded-2xl shadow-lg p-8 mb-8">
                    <h2 class="text-2xl font-bold text-amber-800 mb-6">
                        ${isHindi ? 'विस्तृत लाभ' : 'Detailed Benefits'}
                    </h2>
                    <div class="grid md:grid-cols-3 gap-6">
                        <div class="benefit-category">
                            <h3 class="text-lg font-semibold text-amber-700 mb-3">
                                ${isHindi ? 'शारीरिक लाभ' : 'Physical Benefits'}
                            </h3>
                            <p class="text-gray-700">
                                ${service.detailedBenefits[lang].split('।')[0]}
                            </p>
                        </div>
                        <div class="benefit-category">
                            <h3 class="text-lg font-semibold text-amber-700 mb-3">
                                ${isHindi ? 'मानसिक लाभ' : 'Mental Benefits'}
                            </h3>
                            <p class="text-gray-700">
                                ${service.detailedBenefits[lang].split('।')[1]}
                            </p>
                        </div>
                        <div class="benefit-category">
                            <h3 class="text-lg font-semibold text-amber-700 mb-3">
                                ${isHindi ? 'आध्यात्मिक लाभ' : 'Spiritual Benefits'}
                            </h3>
                            <p class="text-gray-700">
                                ${service.detailedBenefits[lang].split('।')[2]}
                            </p>
                        </div>
                    </div>
                </div>

                <!-- Procedure and Materials -->
                <div class="grid md:grid-cols-2 gap-8 mb-8">
                    <div class="bg-white rounded-2xl shadow-lg p-8">
                        <h2 class="text-2xl font-bold text-amber-800 mb-6">
                            ${isHindi ? 'पूजा प्रक्रिया' : 'Puja Procedure'}
                        </h2>
                        <p class="text-lg text-gray-700 leading-relaxed">
                            ${service.procedure[lang]}
                        </p>
                    </div>
                    <div class="bg-white rounded-2xl shadow-lg p-8">
                        <h2 class="text-2xl font-bold text-amber-800 mb-6">
                            ${isHindi ? 'आवश्यक सामग्री' : 'Required Materials'}
                        </h2>
                        <p class="text-lg text-gray-700 leading-relaxed">
                            ${service.materials[lang]}
                        </p>
                    </div>
                </div>

                <!-- Additional Information -->
                <div class="grid md:grid-cols-3 gap-6 mb-8">
                    <div class="bg-white rounded-2xl shadow-lg p-6 text-center">
                        <h3 class="text-lg font-semibold text-amber-700 mb-3">
                            ${isHindi ? 'समय' : 'Duration'}
                        </h3>
                        <p class="text-gray-700 text-lg">
                            ${service.duration[lang]}
                        </p>
                    </div>
                    <div class="bg-white rounded-2xl shadow-lg p-6 text-center">
                        <h3 class="text-lg font-semibold text-amber-700 mb-3">
                            ${isHindi ? 'शुभ समय' : 'Best Time'}
                        </h3>
                        <p class="text-gray-700 text-lg">
                            ${service.bestTime[lang]}
                        </p>
                    </div>
                    <div class="bg-white rounded-2xl shadow-lg p-6 text-center">
                        <h3 class="text-lg font-semibold text-amber-700 mb-3">
                            ${isHindi ? 'वैज्ञानिक आधार' : 'Scientific Basis'}
                        </h3>
                        <p class="text-gray-700 text-lg">
                            ${service.scientificBasis[lang]}
                        </p>
                    </div>
                </div>

                <!-- Action Buttons -->
                <div class="flex flex-col sm:flex-row gap-4 justify-center">
                    <button class="btn btn-primary text-lg px-8 py-4">
                        <span data-i18n="buttons.bookNow">${isHindi ? 'अभी बुक करें' : 'Book Now'}</span>
                    </button>
                    <button class="btn btn-secondary text-lg px-8 py-4" onclick="this.scrollToContact()">
                        <span data-i18n="buttons.contact">${isHindi ? 'संपर्क करें' : 'Contact'}</span>
                    </button>
                </div>
            </div>
        `;
    }

    setupBackButton() {
        const backBtn = document.getElementById('backBtn');
        if (backBtn) {
            backBtn.addEventListener('click', () => {
                this.goBack();
            });
        }
    }

    goBack() {
        document.getElementById('serviceDetailsContainer').classList.add('hidden');
        this.currentService = null;
        this.updateNavigation();
    }

    setupSmoothScrolling() {
        // Enable smooth scrolling for the entire page
        document.documentElement.style.scrollBehavior = 'smooth';
    }

    setLanguage(language) {
        this.currentLanguage = language;
        if (typeof i18n !== 'undefined') {
            i18n.setLanguage(language);
        }
        
        // Update service details if currently viewing one
        if (this.currentService) {
            const serviceData = servicesData[this.currentService];
            if (serviceData) {
                const detailsContent = this.createServiceDetailsPage(serviceData);
                document.getElementById('serviceDetailsContent').innerHTML = detailsContent;
                this.setupBackButton();
            }
        }
    }

    navigateTo(serviceId) {
        this.showServiceDetails(serviceId);
    }

    updateNavigation() {
        // Update any navigation-related UI elements
        const currentPath = window.location.pathname;
        // Add any navigation update logic here
    }

    setupScrollAnimations() {
        // Setup scroll-triggered animations
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate-in');
                }
            });
        }, observerOptions);

        // Observe elements for animation
        const elementsToAnimate = document.querySelectorAll('.service-card, .ritual-category, .contact-card, .service-overview-card, .expertise-item');
        elementsToAnimate.forEach(el => observer.observe(el));
    }

    addFloatingAnimation() {
        // Add floating animation to icons
        const floatingElements = document.querySelectorAll('.expertise-icon, .contact-icon');
        floatingElements.forEach((el, index) => {
            el.style.animationDelay = `${index * 0.2}s`;
            el.classList.add('animate-float');
        });
    }
}

// Initialize the application when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new VedicServicesApp();
});

// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = VedicServicesApp;
}