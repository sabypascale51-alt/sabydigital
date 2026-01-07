/**
 * SabyDigital - Main JavaScript
 * Handles interactivity, animations, and form submissions
 */

// ====================================
// UTILITY FUNCTIONS
// ====================================

// Debounce function for performance
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Smooth scroll to element
function smoothScrollTo(element) {
    const targetPosition = element.getBoundingClientRect().top + window.pageYOffset - 80;
    window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
    });
}

// ====================================
// HEADER & NAVIGATION
// ====================================

// Header scroll effect
const header = document.getElementById('header');
let lastScroll = 0;

window.addEventListener('scroll', debounce(() => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll <= 0) {
        header.classList.remove('scroll-up');
        return;
    }
    
    if (currentScroll > lastScroll && !header.classList.contains('scroll-down')) {
        // Scroll Down
        header.classList.remove('scroll-up');
        header.classList.add('scroll-down');
    } else if (currentScroll < lastScroll && header.classList.contains('scroll-down')) {
        // Scroll Up
        header.classList.remove('scroll-down');
        header.classList.add('scroll-up');
    }
    lastScroll = currentScroll;
}, 100));

// Mobile menu toggle
const menuToggle = document.getElementById('menuToggle');
const nav = document.getElementById('nav');

menuToggle.addEventListener('click', () => {
    nav.classList.toggle('active');
    menuToggle.classList.toggle('active');
    
    // Animate burger menu
    const spans = menuToggle.querySelectorAll('span');
    if (menuToggle.classList.contains('active')) {
        spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
        spans[1].style.opacity = '0';
        spans[2].style.transform = 'rotate(-45deg) translate(7px, -6px)';
    } else {
        spans[0].style.transform = '';
        spans[1].style.opacity = '';
        spans[2].style.transform = '';
    }
});

// Close mobile menu on link click
const navLinks = document.querySelectorAll('.nav-link');
navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
            smoothScrollTo(targetElement);
            
            // Close mobile menu
            nav.classList.remove('active');
            menuToggle.classList.remove('active');
            const spans = menuToggle.querySelectorAll('span');
            spans[0].style.transform = '';
            spans[1].style.opacity = '';
            spans[2].style.transform = '';
        }
    });
});

// Active nav link on scroll
window.addEventListener('scroll', debounce(() => {
    let current = '';
    const sections = document.querySelectorAll('section[id]');
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.pageYOffset >= (sectionTop - 200)) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
}, 100));

// ====================================
// FAQ ACCORDION
// ====================================

const faqQuestions = document.querySelectorAll('.faq-question');

faqQuestions.forEach(question => {
    question.addEventListener('click', () => {
        const faqItem = question.parentElement;
        const isActive = faqItem.classList.contains('active');
        
        // Close all FAQs
        document.querySelectorAll('.faq-item').forEach(item => {
            item.classList.remove('active');
        });
        
        // Open clicked FAQ if it wasn't active
        if (!isActive) {
            faqItem.classList.add('active');
        }
    });
});

// ====================================
// CONTACT FORM
// ====================================

const contactForm = document.getElementById('contactForm');
const formSuccess = document.getElementById('formSuccess');

contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    // Get form data
    const formData = new FormData(contactForm);
    const data = Object.fromEntries(formData);
    
    // Basic validation
    if (!data.name || !data.email || !data.service || !data.message) {
        alert('Veuillez remplir tous les champs obligatoires.');
        return;
    }
    
    if (!data.consent) {
        alert('Veuillez accepter d\'être contacté(e).');
        return;
    }
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.email)) {
        alert('Veuillez entrer une adresse email valide.');
        return;
    }
    
    // Disable submit button
    const submitBtn = contactForm.querySelector('button[type="submit"]');
    const originalText = submitBtn.innerHTML;
    submitBtn.disabled = true;
    submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Envoi en cours...';
    
    try {
        // Simulate form submission (replace with actual API call)
        await new Promise(resolve => setTimeout(resolve, 1500));
        
        // Log form data (for demonstration)
        console.log('Form submitted:', data);
        
        // 🎯 FACEBOOK PIXEL: Track Lead Event
        if (typeof window.trackContactFormSubmit === 'function') {
            window.trackContactFormSubmit({
                email: data.email,
                phone: data.phone,
                firstName: data.name ? data.name.split(' ')[0] : '',
                lastName: data.name ? data.name.split(' ').slice(1).join(' ') : '',
                city: data.city || '',
                department: data.department || '',
                service: data.service || ''
            });
        }
        
        // Show success message
        contactForm.style.display = 'none';
        formSuccess.classList.add('show');
        
        // Scroll to success message
        formSuccess.scrollIntoView({ behavior: 'smooth', block: 'center' });
        
        // Reset form after 5 seconds
        setTimeout(() => {
            contactForm.reset();
            contactForm.style.display = 'block';
            formSuccess.classList.remove('show');
            submitBtn.disabled = false;
            submitBtn.innerHTML = originalText;
        }, 5000);
        
    } catch (error) {
        console.error('Form submission error:', error);
        alert('Une erreur est survenue. Veuillez réessayer ou nous contacter directement par téléphone.');
        submitBtn.disabled = false;
        submitBtn.innerHTML = originalText;
    }
});

// Real-time form validation
const emailInput = document.getElementById('email');
const phoneInput = document.getElementById('phone');

emailInput.addEventListener('blur', () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (emailInput.value && !emailRegex.test(emailInput.value)) {
        emailInput.style.borderColor = '#ef4444';
    } else {
        emailInput.style.borderColor = '';
    }
});

phoneInput.addEventListener('input', (e) => {
    // Format phone number as user types
    let value = e.target.value.replace(/\D/g, '');
    if (value.length > 0) {
        if (value.length <= 2) {
            value = value;
        } else if (value.length <= 4) {
            value = value.slice(0, 2) + ' ' + value.slice(2);
        } else if (value.length <= 6) {
            value = value.slice(0, 2) + ' ' + value.slice(2, 4) + ' ' + value.slice(4);
        } else if (value.length <= 8) {
            value = value.slice(0, 2) + ' ' + value.slice(2, 4) + ' ' + value.slice(4, 6) + ' ' + value.slice(6);
        } else {
            value = value.slice(0, 2) + ' ' + value.slice(2, 4) + ' ' + value.slice(4, 6) + ' ' + value.slice(6, 8) + ' ' + value.slice(8, 10);
        }
    }
    e.target.value = value;
});

// ====================================
// SCROLL TO TOP BUTTON
// ====================================

const scrollToTopBtn = document.getElementById('scrollToTop');

window.addEventListener('scroll', debounce(() => {
    if (window.pageYOffset > 500) {
        scrollToTopBtn.classList.add('show');
    } else {
        scrollToTopBtn.classList.remove('show');
    }
}, 100));

scrollToTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// ====================================
// CTA FLOTTANT STICKY
// ====================================

const ctaFloat = document.getElementById('ctaFloat');
const ctaFloatClose = document.getElementById('ctaFloatClose');
let ctaFloatDismissed = sessionStorage.getItem('ctaFloatDismissed');

// Afficher le CTA après 5 secondes de scroll
window.addEventListener('scroll', debounce(() => {
    if (!ctaFloatDismissed && window.pageYOffset > 800) {
        ctaFloat.classList.add('show');
    }
}, 100));

// Fermer le CTA
if (ctaFloatClose) {
    ctaFloatClose.addEventListener('click', () => {
        ctaFloat.classList.remove('show');
        sessionStorage.setItem('ctaFloatDismissed', 'true');
    });
}

// ====================================
// SMOOTH SCROLL FOR ALL ANCHOR LINKS
// ====================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        
        // Skip if href is just "#"
        if (href === '#' || href === '#!') {
            e.preventDefault();
            return;
        }
        
        const targetElement = document.querySelector(href);
        if (targetElement) {
            e.preventDefault();
            smoothScrollTo(targetElement);
        }
    });
});

// ====================================
// INTERSECTION OBSERVER FOR ANIMATIONS
// ====================================

const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe elements for animation
const animateElements = document.querySelectorAll('.service-card, .why-card, .portfolio-item, .testimonial-card, .faq-item');
animateElements.forEach(element => {
    observer.observe(element);
});

// ====================================
// STATISTICS COUNTER ANIMATION
// ====================================

function animateCounter(element, target, duration = 2000) {
    const start = 0;
    const increment = target / (duration / 16);
    let current = start;
    
    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            element.textContent = formatNumber(target);
            clearInterval(timer);
        } else {
            element.textContent = formatNumber(Math.floor(current));
        }
    }, 16);
}

function formatNumber(num) {
    if (num >= 1000000000) {
        return (num / 1000000000).toFixed(1) + 'Mds';
    }
    if (num >= 1000000) {
        return (num / 1000000).toFixed(1) + 'M';
    }
    if (num >= 1000) {
        return (num / 1000).toFixed(1) + 'K';
    }
    return num.toString();
}

// Animate stats when visible
const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const statNumbers = entry.target.querySelectorAll('.stat-number');
            statNumbers.forEach(stat => {
                const text = stat.textContent;
                let target = 0;
                
                // Parse different number formats
                if (text.includes('Mds')) {
                    target = parseFloat(text) * 1000000000;
                } else if (text.includes('M')) {
                    target = parseFloat(text) * 1000000;
                } else if (text.includes('%')) {
                    target = parseInt(text);
                    stat.textContent = '0%';
                    animatePercentage(stat, target);
                    return;
                } else {
                    target = parseInt(text.replace(/\D/g, ''));
                }
                
                if (target > 0) {
                    stat.textContent = '0';
                    animateCounter(stat, target);
                }
            });
            statsObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

function animatePercentage(element, target) {
    let current = 0;
    const increment = target / 100;
    
    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            element.textContent = target + '%';
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(current) + '%';
        }
    }, 20);
}

// Observe hero stats and testimonials stats
const heroStats = document.querySelector('.hero-stats');
const testimonialsStats = document.querySelector('.testimonials-stats');

if (heroStats) statsObserver.observe(heroStats);
if (testimonialsStats) statsObserver.observe(testimonialsStats);

// ====================================
// PORTFOLIO FILTER (Optional Enhancement)
// ====================================

// This can be expanded if you want to add filtering functionality
const portfolioItems = document.querySelectorAll('.portfolio-item');
portfolioItems.forEach(item => {
    item.addEventListener('mouseenter', () => {
        item.style.transform = 'translateY(-8px) scale(1.02)';
    });
    
    item.addEventListener('mouseleave', () => {
        item.style.transform = '';
    });
});

// ====================================
// SERVICE CARDS INTERACTION
// ====================================

const serviceCards = document.querySelectorAll('.service-card');
serviceCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
        const icon = card.querySelector('.service-icon');
        if (icon) {
            icon.style.transform = 'rotate(10deg) scale(1.1)';
        }
    });
    
    card.addEventListener('mouseleave', () => {
        const icon = card.querySelector('.service-icon');
        if (icon) {
            icon.style.transform = '';
        }
    });
});

// ====================================
// ALERT BANNER CLOSE (Optional)
// ====================================

// If you want to add a close button to the alert section
const alertSection = document.querySelector('.alert-section');
if (alertSection) {
    // You can add close functionality here if needed
    // For now, it's always visible which is good for conversion
}

// ====================================
// LAZY LOADING IMAGES
// ====================================

// Modern browsers support native lazy loading, but here's a fallback
if ('loading' in HTMLImageElement.prototype) {
    // Native lazy loading is supported
    const images = document.querySelectorAll('img[loading="lazy"]');
    images.forEach(img => {
        img.src = img.dataset.src || img.src;
    });
} else {
    // Fallback for browsers that don't support lazy loading
    const lazyImages = document.querySelectorAll('img');
    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                if (img.dataset.src) {
                    img.src = img.dataset.src;
                }
                imageObserver.unobserve(img);
            }
        });
    });
    
    lazyImages.forEach(img => imageObserver.observe(img));
}

// ====================================
// CONSOLE MESSAGE
// ====================================

console.log('%c✨ SabyDigital - Site Web Professionnel', 'color: #3b82f6; font-size: 20px; font-weight: bold;');
console.log('%cSite créé par Saby Pascale | contact@sabydigital.fr | 06 60 87 54 77', 'color: #f97316; font-size: 14px;');
console.log('%cBesoin d\'un site web ? Contactez-moi !', 'color: #10b981; font-size: 14px;');

// ====================================
// PAGE LOAD ANALYTICS (Optional)
// ====================================

window.addEventListener('load', () => {
    // Log page load time for performance monitoring
    const loadTime = window.performance.timing.domContentLoadedEventEnd - window.performance.timing.navigationStart;
    console.log(`Page chargée en ${loadTime}ms`);
    
    // Here you can integrate Google Analytics or other tracking
    // Example: gtag('event', 'page_load', { 'load_time': loadTime });
});

// ====================================
// ERROR HANDLING
// ====================================

window.addEventListener('error', (e) => {
    console.error('Une erreur est survenue:', e.error);
    // You can send errors to a logging service here
});

// ====================================
// INITIALIZATION
// ====================================

document.addEventListener('DOMContentLoaded', () => {
    console.log('Site SabyDigital initialisé avec succès ! 🚀');
    
    // Add any initialization code here
    // For example, checking if user has visited before
    const hasVisited = localStorage.getItem('sabydigital_visited');
    if (!hasVisited) {
        localStorage.setItem('sabydigital_visited', 'true');
        console.log('Bienvenue sur SabyDigital ! 👋');
    }
});