// Main Application Logic
class VedicRitualsApp {
    constructor() {
        this.currentLanguage = 'english';
        this.currentService = null;
        this.isAnimating = false;
    }

    init() {
        this.initializeLanguage();
        this.setupEventListeners();
        this.addScrollAnimations();
        this.addFloatingAnimation();
        this.setupImageErrorHandling();
    }

    initializeLanguage() {
        i18n.init();
        this.currentLanguage = i18n.getCurrentLanguage();
    }

    setupEventListeners() {
        // Listen for language changes
        window.addEventListener('languageChange', (e) => {
            this.currentLanguage = e.detail.language;
            this.updateServiceDetails();
        });

        // Service buttons
        this.setupReadMoreButtons();
        this.setupContactButtons();

        // Service details modal close
        this.setupModalClose();
    }

    updateServiceDetails() {
        // Re-render service details if a service is currently being viewed
        if (this.currentService) {
            const serviceData = servicesData[this.currentService];
            if (serviceData) {
                const serviceDetailsContent = document.getElementById('serviceDetailsContent');
                if (serviceDetailsContent) {
                    const detailsHTML = this.createServiceDetailsPage(serviceData);
                    serviceDetailsContent.innerHTML = detailsHTML;
                    this.setupBackButton();
                }
            }
        }
    }

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

    setupContactButtons() {
        const contactButtons = document.querySelectorAll('.contact-btn');
        contactButtons.forEach(button => {
            button.addEventListener('click', (e) => {
                e.preventDefault();
                this.scrollToContact();
            });
        });
    }

    setupModalClose() {
        const modal = document.getElementById('serviceDetailsContainer');
        if (modal) {
            modal.addEventListener('click', (e) => {
                if (e.target === modal) {
                    this.goBack();
                }
            });
        }

        // ESC key to close modal
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && this.currentService) {
                this.goBack();
            }
        });
    }

    setupImageErrorHandling() {
        // Optimized image error handling with lazy initialization
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    this.setupImageHandlers(img);
                    observer.unobserve(img);
                }
            });
        });

        // Only observe images that need error handling
        const serviceImages = document.querySelectorAll('.service-card img, .service-overview-card img, .muhurat-service-card img');
        serviceImages.forEach(img => observer.observe(img));
    }

    setupImageHandlers(img) {
        img.addEventListener('error', () => {
            // Lightweight fallback without complex DOM manipulation
            img.style.display = 'none';
            if (!img.nextElementSibling?.classList.contains('image-fallback')) {
                const fallback = document.createElement('div');
                fallback.className = 'image-fallback';
                fallback.innerHTML = '🕉️';
                fallback.style.cssText = 'width:100%;height:200px;display:flex;align-items:center;justify-content:center;background:#f3f4f6;border-radius:8px;font-size:2rem;';
                img.parentNode.insertBefore(fallback, img.nextSibling);
            }
        }, { once: true });

        img.addEventListener('load', () => {
            img.style.opacity = '1';
        }, { once: true });
    }

    showServiceDetails(serviceId) {
        if (this.isAnimating) return;

        const serviceData = servicesData[serviceId];
        if (!serviceData) {
            console.error('Service not found:', serviceId);
            return;
        }

        this.currentService = serviceId;
        this.isAnimating = true;

        const serviceDetailsContent = document.getElementById('serviceDetailsContent');
        const serviceDetailsContainer = document.getElementById('serviceDetailsContainer');

        if (serviceDetailsContent && serviceDetailsContainer) {
            // Generate service details HTML
            const detailsHTML = this.createServiceDetailsPage(serviceData);
            serviceDetailsContent.innerHTML = detailsHTML;

            // Show modal
            serviceDetailsContainer.classList.remove('hidden');
            document.body.style.overflow = 'hidden';

            // Setup back button
            this.setupBackButton();

            setTimeout(() => {
                this.isAnimating = false;
            }, 300);
        }
    }

    createServiceDetailsPage(service) {
        const isHindi = this.currentLanguage === 'hindi';
        const lang = isHindi ? 'hindi' : 'english';
        
        return `
            <button class="back-button" id="backButton">
                ${isHindi ? '← वापस जाएं' : '← Go Back'}
            </button>
            
            <div class="service-details-page">
                <h1>${service.title[lang]}</h1>
                
                <div class="service-overview">
                    <p><strong>${service.description[lang]}</strong></p>
                </div>

                <h2>${isHindi ? 'महत्व और लाभ' : 'Significance & Benefits'}</h2>
                <p>${service.significance[lang]}</p>

                <h3>${isHindi ? 'मुख्य लाभ' : 'Main Benefits'}</h3>
                <ul>
                    ${service.benefits[lang].map(benefit => `<li>${benefit}</li>`).join('')}
                </ul>

                ${service.detailedBenefits ? `
                    <h2>${isHindi ? 'विस्तृत लाभ' : 'Detailed Benefits'}</h2>
                    
                    <div class="benefit-category">
                        <h4>${isHindi ? '🌟 शारीरिक लाभ (Physical Benefits)' : '🌟 Physical Benefits'}</h4>
                        <p>${service.detailedBenefits.physical[lang]}</p>
                    </div>
                    
                    <div class="benefit-category">
                        <h4>${isHindi ? '🧠 मानसिक लाभ (Mental Benefits)' : '🧠 Mental Benefits'}</h4>
                        <p>${service.detailedBenefits.mental[lang]}</p>
                    </div>
                    
                    <div class="benefit-category">
                        <h4>${isHindi ? '🕉️ आध्यात्मिक लाभ (Spiritual Benefits)' : '🕉️ Spiritual Benefits'}</h4>
                        <p>${service.detailedBenefits.spiritual[lang]}</p>
                    </div>
                ` : ''}

                ${service.spiritualSignificance ? `
                    <h2>${isHindi ? 'आध्यात्मिक महत्व' : 'Spiritual Significance'}</h2>
                    <p>${service.spiritualSignificance[lang]}</p>
                ` : ''}

                ${service.specialFeatures ? `
                    <h2>${isHindi ? 'विशेष विशेषताएं' : 'Special Features'}</h2>
                    <ul class="special-features-list">
                        ${service.specialFeatures[lang].map(feature => `<li>${feature}</li>`).join('')}
                    </ul>
                ` : ''}

                ${service.preparationRequired ? `
                    <h2>${isHindi ? 'पूजा की तैयारी' : 'Preparation Required'}</h2>
                    <ul class="preparation-list">
                        ${service.preparationRequired[lang].map(prep => `<li>${prep}</li>`).join('')}
                    </ul>
                ` : ''}

                ${service.procedure ? `
                    <h2>${isHindi ? 'पूजा विधि (चरणबद्ध प्रक्रिया)' : 'Detailed Procedure (Step-by-Step)'}</h2>
                    <ol class="procedure-steps">
                        ${service.procedure[lang].map(step => `<li>${step}</li>`).join('')}
                    </ol>
                ` : ''}

                <h2>${isHindi ? 'आवश्यक सामग्री' : 'Required Materials'}</h2>
                <ul>
                    ${service.materials[lang].map(material => `<li>${material}</li>`).join('')}
                </ul>

                <h2>${isHindi ? 'समय अवधि' : 'Duration'}</h2>
                <p>${service.duration[lang]}</p>

                <h2>${isHindi ? 'उत्तम समय' : 'Best Time'}</h2>
                <p>${service.bestTime[lang]}</p>

                ${service.muhurat ? `
                    <h2>${isHindi ? 'शुभ मुहूर्त' : 'Auspicious Muhurat'}</h2>
                    <p>${service.muhurat[lang]}</p>
                ` : ''}

                ${service.lagn ? `
                    <h2>${isHindi ? 'शुभ लग्न' : 'Auspicious Lagn'}</h2>
                    <p>${service.lagn[lang]}</p>
                ` : ''}

                ${service.scientificBasis ? `
                    <h2>${isHindi ? 'वैज्ञानिक आधार' : 'Scientific Basis'}</h2>
                    <p>${service.scientificBasis[lang]}</p>
                ` : ''}

                ${service.postPujaGuidance ? `
                    <h2>${isHindi ? 'पूजा के बाद मार्गदर्शन' : 'Post-Puja Guidance'}</h2>
                    <ul class="post-puja-guidance">
                        ${service.postPujaGuidance[lang].map(guidance => `<li>${guidance}</li>`).join('')}
                    </ul>
                ` : ''}

                <div class="text-center" style="margin-top: 40px; padding: 20px; background: var(--bg-primary); border-radius: var(--border-radius);">
                    <h3 style="color: var(--primary-color); margin-bottom: 15px;">
                        ${isHindi ? 'पूजा बुक करने के लिए संपर्क करें' : 'Contact to Book This Puja'}
                    </h3>
                    <div style="display: flex; gap: 15px; justify-content: center; flex-wrap: wrap;">
                        <a href="tel:+91-XXXXXXXXXX" class="btn btn-primary">
                            ${isHindi ? 'अभी कॉल करें' : 'Call Now'}
                        </a>
                        <a href="https://wa.me/91XXXXXXXXXX?text=Hi, I want to book ${service.title.english} puja" target="_blank" class="btn btn-secondary">
                            ${isHindi ? 'व्हाट्सऐप करें' : 'WhatsApp'}
                        </a>
                    </div>
                </div>
            </div>
        `;
    }

    setupBackButton() {
        const backButton = document.getElementById('backButton');
        if (backButton) {
            backButton.addEventListener('click', (e) => {
                e.preventDefault();
                this.goBack();
            });
        }
    }

    goBack() {
        if (this.isAnimating) return;

        this.isAnimating = true;
        const serviceDetailsContainer = document.getElementById('serviceDetailsContainer');
        
        if (serviceDetailsContainer) {
            serviceDetailsContainer.classList.add('hidden');
            document.body.style.overflow = '';
            this.currentService = null;

            setTimeout(() => {
                this.isAnimating = false;
            }, 300);
        }
    }

    scrollToContact() {
        const contactSection = document.getElementById('contact');
        if (contactSection) {
            contactSection.scrollIntoView({ 
                behavior: 'smooth',
                block: 'start'
            });
        }
    }



    addScrollAnimations() {
        // Use passive listeners and optimize for performance
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    // Use CSS classes instead of direct style manipulation for better performance
                    entry.target.classList.add('animate-in');
                    observer.unobserve(entry.target); // Stop observing once animated
                }
            });
        }, observerOptions);

        // Batch DOM queries and operations
        requestAnimationFrame(() => {
            const animatedElements = document.querySelectorAll('.service-card, .service-overview-card, .ritual-category, .contact-card, .expertise-item, .muhurat-service-card');
            
            animatedElements.forEach(el => {
                el.classList.add('animate-prepared');
                observer.observe(el);
            });
        });
    }

    addFloatingAnimation() {
        // Add floating animation to service icons with staggered delays
        const serviceIcons = document.querySelectorAll('.service-icon, .expertise-icon, .muhurat-icon');
        serviceIcons.forEach((icon, index) => {
            icon.style.animationDelay = `${index * 0.2}s`;
        });

        // Add glow effect to contact cards
        const contactCards = document.querySelectorAll('.contact-card');
        contactCards.forEach((card, index) => {
            card.addEventListener('mouseenter', () => {
                card.style.boxShadow = '0 0 20px rgba(245, 158, 11, 0.5)';
            });
            
            card.addEventListener('mouseleave', () => {
                card.style.boxShadow = '';
            });
        });
    }

    // Utility method to handle loading states
    showLoading(element) {
        if (element) {
            element.style.opacity = '0.6';
            element.style.pointerEvents = 'none';
        }
    }

    hideLoading(element) {
        if (element) {
            element.style.opacity = '1';
            element.style.pointerEvents = 'auto';
        }
    }

    // Scroll to top functionality
    scrollToTop() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }

    // Method to track user interactions (for analytics)
    trackEvent(eventName, eventData = {}) {
        console.log('Event tracked:', eventName, eventData);
        // Here you can add Google Analytics or other tracking code
        if (typeof gtag !== 'undefined') {
            gtag('event', eventName, eventData);
        }
    }
}

// Initialize app when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    const app = new VedicRitualsApp();
    app.init();
    
    // Make app globally accessible for debugging
    window.vedicApp = app;
    
    // Add smooth scroll behavior
    document.documentElement.style.scrollBehavior = 'smooth';
    
    // Add loading class removal after page load
    window.addEventListener('load', () => {
        document.body.classList.remove('loading');
    });
    
    console.log('Vedic Rituals App initialized successfully');
});