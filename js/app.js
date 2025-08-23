// Main Application JavaScript
class VedicServicesApp {
    constructor() {
        this.currentPage = 'home';
        this.currentLanguage = 'hindi';
        this.init();
    }

    init() {
        this.setupEventListeners();
        this.initializeLanguage();
        this.setupServiceNavigation();
        this.setupSmoothScrolling();
        this.setupContactButtons();
        this.setupReadMoreButtons();
        this.setupScrollAnimations();
    }

    // Initialize language system
    initializeLanguage() {
        if (typeof i18n !== 'undefined') {
            i18n.init();
        }
    }

    // Setup all event listeners
    setupEventListeners() {
        // Language toggle
        document.getElementById('hindiBtn')?.addEventListener('click', () => {
            this.setLanguage('hindi');
        });
        
        document.getElementById('englishBtn')?.addEventListener('click', () => {
            this.setLanguage('english');
        });

        // Navigation
        this.setupNavigation();
        
        // Service cards
        this.setupServiceCards();
    }

    // Setup navigation
    setupNavigation() {
        const navLinks = document.querySelectorAll('[data-nav]');
        navLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const target = link.getAttribute('data-nav');
                this.navigateTo(target);
            });
        });
    }

    // Setup service cards
    setupServiceCards() {
        const readMoreButtons = document.querySelectorAll('[data-service]');
        readMoreButtons.forEach(button => {
            button.addEventListener('click', (e) => {
                e.preventDefault();
                const serviceId = button.getAttribute('data-service');
                this.showServiceDetails(serviceId);
            });
        });
    }

    // Setup service navigation
    setupServiceNavigation() {
        const serviceButtons = document.querySelectorAll('.service-card button');
        serviceButtons.forEach(button => {
            if (button.textContent.includes('Read More') || button.textContent.includes('और पढ़ें')) {
                button.addEventListener('click', (e) => {
                    e.preventDefault();
                    const serviceCard = button.closest('.service-card');
                    const serviceTitle = serviceCard.querySelector('h3').textContent;
                    const serviceId = this.getServiceIdFromTitle(serviceTitle);
                    if (serviceId) {
                        this.showServiceDetails(serviceId);
                    }
                });
            }
        });
    }

    // Setup read more buttons specifically
    setupReadMoreButtons() {
        const readMoreButtons = document.querySelectorAll('.read-more-btn');
        readMoreButtons.forEach(button => {
            button.addEventListener('click', (e) => {
                e.preventDefault();
                const serviceId = button.getAttribute('data-service');
                if (serviceId) {
                    this.showServiceDetails(serviceId);
                }
            });
        });
    }

    // Setup contact buttons
    setupContactButtons() {
        const contactButtons = document.querySelectorAll('.contact-btn');
        contactButtons.forEach(button => {
            button.addEventListener('click', (e) => {
                e.preventDefault();
                this.scrollToContact();
            });
        });
    }

    // Scroll to contact section
    scrollToContact() {
        const contactSection = document.getElementById('contact');
        if (contactSection) {
            contactSection.scrollIntoView({ 
                behavior: 'smooth',
                block: 'start'
            });
        }
    }

    // Get service ID from title
    getServiceIdFromTitle(title) {
        const serviceMap = {
            'Ganesh Puja': 'ganesh-puja',
            'गणेश पूजा': 'ganesh-puja',
            'Lakshmi Pujan': 'lakshmi-pujan',
            'लक्ष्मी पूजन': 'lakshmi-pujan',
            'Satyanarayan Vrat': 'satyanarayan-vrat',
            'सत्यनारायण व्रत': 'satyanarayan-vrat',
            'Marriage Ceremonies': 'marriage-ceremonies',
            'विवाह संस्कार': 'marriage-ceremonies',
            'Navagraha Shanti': 'navagraha-shanti',
            'नवग्रह शांति': 'navagraha-shanti',
            'House Warming': 'house-warming',
            'गृहप्रवेश': 'house-warming'
        };
        return serviceMap[title];
    }

    // Show service details page
    showServiceDetails(serviceId) {
        if (!servicesData[serviceId]) {
            console.error(`Service ${serviceId} not found`);
            return;
        }

        const service = servicesData[serviceId];
        this.currentPage = 'service-details';
        
        // Create service details page
        const detailsPage = this.createServiceDetailsPage(service);
        
        // Replace main content
        const mainContent = document.querySelector('main') || document.querySelector('body');
        mainContent.innerHTML = detailsPage;
        
        // Update navigation
        this.updateNavigation();
        
        // Setup back button
        this.setupBackButton();
        
        // Update language content
        if (typeof i18n !== 'undefined') {
            i18n.updateContent();
        }
    }

    // Create service details page
    createServiceDetailsPage(service) {
        const currentLang = this.currentLanguage;
        
        return `
            <div class="service-details-page bg-amber-50 min-h-screen">
                <!-- Back Button -->
                <div class="bg-amber-600 text-white py-4">
                    <div class="container mx-auto px-4">
                        <button id="backBtn" class="flex items-center text-white hover:text-amber-100 transition-colors">
                            <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path>
                            </svg>
                            <span data-i18n="buttons-back">${currentLang === 'hindi' ? 'वापस जाएं' : 'Go Back'}</span>
                        </button>
                    </div>
                </div>

                <!-- Service Header -->
                <div class="bg-gradient-to-r from-orange-400 to-amber-600 text-white py-12">
                    <div class="container mx-auto px-4 text-center">
                        <h1 class="text-4xl font-bold mb-4">${service.title[currentLang]}</h1>
                        <p class="text-xl">${service.deity[currentLang]}</p>
                    </div>
                </div>

                <!-- Service Content -->
                <div class="py-12">
                    <div class="container mx-auto px-4">
                        <div class="max-w-4xl mx-auto">
                            <!-- Description -->
                            <div class="bg-white rounded-lg shadow-lg p-8 mb-8">
                                <h2 class="text-2xl font-bold text-amber-800 mb-4">${currentLang === 'hindi' ? 'विवरण' : 'Description'}</h2>
                                <p class="text-lg text-gray-700 leading-relaxed">${service.description[currentLang]}</p>
                            </div>

                            <!-- Significance -->
                            <div class="bg-white rounded-lg shadow-lg p-8 mb-8">
                                <h2 class="text-2xl font-bold text-amber-800 mb-4">${currentLang === 'hindi' ? 'महत्व' : 'Significance'}</h2>
                                <p class="text-lg text-gray-700 leading-relaxed">${service.significance[currentLang]}</p>
                            </div>

                            <!-- Benefits -->
                            <div class="bg-white rounded-lg shadow-lg p-8 mb-8">
                                <h2 class="text-2xl font-bold text-amber-800 mb-4">${currentLang === 'hindi' ? 'लाभ' : 'Benefits'}</h2>
                                <p class="text-lg text-gray-700 leading-relaxed">${service.benefits[currentLang]}</p>
                            </div>

                            <!-- Service Details Grid -->
                            <div class="grid md:grid-cols-2 gap-8 mb-8">
                                <!-- Duration -->
                                <div class="bg-white rounded-lg shadow-lg p-6">
                                    <h3 class="text-xl font-semibold text-amber-800 mb-3">${currentLang === 'hindi' ? 'अवधि' : 'Duration'}</h3>
                                    <p class="text-gray-700">${service.duration[currentLang]}</p>
                                </div>

                                <!-- Best Time -->
                                <div class="bg-white rounded-lg shadow-lg p-6">
                                    <h3 class="text-xl font-semibold text-amber-800 mb-3">${currentLang === 'hindi' ? 'सर्वोत्तम समय' : 'Best Time'}</h3>
                                    <p class="text-gray-700">${service.bestTime[currentLang]}</p>
                                </div>
                            </div>

                            <!-- Materials Required -->
                            <div class="bg-white rounded-lg shadow-lg p-8 mb-8">
                                <h2 class="text-2xl font-bold text-amber-800 mb-4">${currentLang === 'hindi' ? 'आवश्यक सामग्री' : 'Materials Required'}</h2>
                                <p class="text-lg text-gray-700">${service.materials[currentLang]}</p>
                            </div>

                            <!-- Contact Section -->
                            <div class="bg-amber-100 rounded-lg p-8 text-center">
                                <h2 class="text-2xl font-bold text-amber-800 mb-4">${currentLang === 'hindi' ? 'इस सेवा के लिए संपर्क करें' : 'Contact for this Service'}</h2>
                                <div class="grid md:grid-cols-2 gap-6 mb-6">
                                    <div>
                                        <p class="text-lg font-semibold">📱 ${currentLang === 'hindi' ? 'मोबाइल' : 'Mobile'}</p>
                                        <p class="text-gray-700">+91 9343775709</p>
                                    </div>
                                    <div>
                                        <p class="text-lg font-semibold">📱 ${currentLang === 'hindi' ? 'व्हाट्सएप/कॉल' : 'WhatsApp/Call'}</p>
                                        <p class="text-gray-700">+91 8766453937</p>
                                    </div>
                                </div>
                                <button class="bg-green-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-green-700 transition-colors">
                                    ${currentLang === 'hindi' ? 'संपर्क करें' : 'Contact Now'}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }

    // Setup back button
    setupBackButton() {
        const backBtn = document.getElementById('backBtn');
        if (backBtn) {
            backBtn.addEventListener('click', () => {
                this.goBack();
            });
        }
    }

    // Go back to previous page
    goBack() {
        if (this.currentPage === 'service-details') {
            this.currentPage = 'home';
            location.reload(); // Simple way to go back to home
        }
    }

    // Setup smooth scrolling
    setupSmoothScrolling() {
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth'
                    });
                }
            });
        });
    }

    // Setup scroll animations
    setupScrollAnimations() {
        // Intersection Observer for scroll animations
        if ('IntersectionObserver' in window) {
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

            // Observe all animated elements
            document.querySelectorAll('.service-card, .ritual-category, .contact-card, .service-overview-card').forEach(el => {
                observer.observe(el);
            });
        }
    }

    // Set language
    setLanguage(language) {
        this.currentLanguage = language;
        if (typeof i18n !== 'undefined') {
            i18n.setLanguage(language);
        }
    }

    // Navigate to specific section
    navigateTo(target) {
        const element = document.querySelector(target);
        if (element) {
            element.scrollIntoView({
                behavior: 'smooth'
            });
        }
    }

    // Update navigation
    updateNavigation() {
        // Update active navigation state if needed
        const navItems = document.querySelectorAll('[data-nav]');
        navItems.forEach(item => {
            item.classList.remove('active');
            if (item.getAttribute('data-nav') === this.currentPage) {
                item.classList.add('active');
            }
        });
    }

    // Add floating animation to elements
    addFloatingAnimation() {
        const floatingElements = document.querySelectorAll('.expertise-icon, .contact-icon');
        floatingElements.forEach((el, index) => {
            el.style.animationDelay = `${index * 0.2}s`;
        });
    }
}

// Initialize app when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    window.vedicApp = new VedicServicesApp();
    
    // Add floating animations after a short delay
    setTimeout(() => {
        if (window.vedicApp) {
            window.vedicApp.addFloatingAnimation();
        }
    }, 1000);
});

// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = VedicServicesApp;
}