/* ========================================
   FACEBOOK PIXEL - SABYDIGITAL
   Pixel ID: 1133753102238894
   ======================================== */

// Initialize Facebook Pixel
!function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window, document,'script',
'https://connect.facebook.net/en_US/fbevents.js');

fbq('init', '1133753102238894');
fbq('track', 'PageView');

/* ========================================
   ÉVÉNEMENTS PERSONNALISÉS
   ======================================== */

// Fonction utilitaire pour tracker les événements
window.trackFacebookEvent = function(eventName, params = {}) {
    if (typeof fbq !== 'undefined') {
        fbq('track', eventName, params);
        console.log('✅ Facebook Pixel Event:', eventName, params);
    } else {
        console.warn('⚠️ Facebook Pixel not loaded');
    }
};

// Fonction pour tracker les événements personnalisés
window.trackFacebookCustomEvent = function(eventName, params = {}) {
    if (typeof fbq !== 'undefined') {
        fbq('trackCustom', eventName, params);
        console.log('✅ Facebook Custom Event:', eventName, params);
    }
};

/* ========================================
   AUTO-TRACKING DES CLICS CTA
   ======================================== */

document.addEventListener('DOMContentLoaded', function() {
    
    // --- Track CTA "Devis Gratuit" ---
    const ctaDevis = document.querySelectorAll('a[href*="#contact"], .btn-modern-primary, .cta-primary');
    ctaDevis.forEach(btn => {
        btn.addEventListener('click', function(e) {
            const btnText = this.textContent.trim();
            trackFacebookEvent('Contact', {
                content_name: btnText,
                content_category: 'CTA Click',
                value: 890,
                currency: 'EUR'
            });
        });
    });
    
    // --- Track CTA "Appeler" (06 60 87 54 77) ---
    const ctaPhone = document.querySelectorAll('a[href^="tel:"]');
    ctaPhone.forEach(btn => {
        btn.addEventListener('click', function(e) {
            const phoneNumber = this.getAttribute('href').replace('tel:', '');
            trackFacebookEvent('Contact', {
                content_name: 'Phone Click',
                content_category: 'Phone Call',
                phone_number: phoneNumber,
                value: 890,
                currency: 'EUR'
            });
        });
    });
    
    // --- Track CTA WhatsApp ---
    const ctaWhatsApp = document.querySelectorAll('a[href*="wa.me"], a[href*="whatsapp"]');
    ctaWhatsApp.forEach(btn => {
        btn.addEventListener('click', function(e) {
            trackFacebookEvent('Contact', {
                content_name: 'WhatsApp Click',
                content_category: 'WhatsApp Message',
                value: 890,
                currency: 'EUR'
            });
        });
    });
    
    // --- Track Quiz Start ---
    const quizLinks = document.querySelectorAll('a[href*="quiz.html"], .quiz-cta');
    quizLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            trackFacebookCustomEvent('QuizStarted', {
                content_name: 'Quiz Diagnostic Digital',
                content_category: 'Lead Generation'
            });
        });
    });
    
    // --- Track Pages Départements (75, 77, 78, etc.) ---
    const pageDepartement = document.querySelectorAll('a[href*="artisan-"]');
    pageDepartement.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            const match = href.match(/artisan-.*?-(\d{2,3})/);
            const departement = match ? match[1] : 'unknown';
            
            trackFacebookEvent('ViewContent', {
                content_name: `Page Artisan ${departement}`,
                content_category: 'Location Page',
                content_ids: [departement],
                content_type: 'product'
            });
        });
    });
    
});

/* ========================================
   FONCTION POUR FORMULAIRE DE CONTACT
   À appeler dans main.js après soumission
   ======================================== */

window.trackContactFormSubmit = function(formData = {}) {
    trackFacebookEvent('Lead', {
        content_name: 'Contact Form Submit',
        content_category: 'Lead',
        value: 890,
        currency: 'EUR',
        predicted_ltv: 2000,
        // Données enrichies (optionnel)
        user_data: {
            email: formData.email || '',
            phone: formData.phone || '',
            first_name: formData.firstName || '',
            last_name: formData.lastName || '',
            city: formData.city || '',
            state: formData.department || '',
            country: 'FR'
        }
    });
};

/* ========================================
   FONCTION POUR QUIZ COMPLET
   À appeler dans quiz.js après résultat
   ======================================== */

window.trackQuizComplete = function(quizData = {}) {
    trackFacebookEvent('CompleteRegistration', {
        content_name: 'Quiz Diagnostic Digital Completed',
        content_category: 'Lead Generation',
        value: 890,
        currency: 'EUR',
        status: true,
        // Données du profil
        profile_type: quizData.profile || '',
        score: quizData.score || 0,
        recommendations: quizData.recommendations || ''
    });
    
    // Événement personnalisé pour le profil détecté
    trackFacebookCustomEvent('QuizProfileDetected', {
        profile: quizData.profile || '',
        score: quizData.score || 0,
        urgency: quizData.urgency || 'medium'
    });
};

/* ========================================
   FONCTION POUR BOUTON APPEL (STICKY)
   ======================================== */

window.trackPhoneCallClick = function() {
    trackFacebookEvent('Contact', {
        content_name: 'Sticky Phone Button',
        content_category: 'Phone Call',
        phone_number: '0660875477',
        value: 890,
        currency: 'EUR'
    });
};

/* ========================================
   ENHANCED MATCH (MATCHING AVANCÉ)
   Pour améliorer le tracking et le ciblage
   ======================================== */

// Cette fonction peut être appelée quand vous avez les données utilisateur
window.setFacebookUserData = function(userData = {}) {
    if (typeof fbq !== 'undefined') {
        fbq('init', '1133753102238894', {
            em: userData.email || '',
            ph: userData.phone || '',
            fn: userData.firstName || '',
            ln: userData.lastName || '',
            ct: userData.city || '',
            st: userData.state || '',
            zp: userData.zipCode || '',
            country: 'fr'
        });
        console.log('✅ Facebook Enhanced Match activated');
    }
};

/* ========================================
   ADVANCED E-COMMERCE TRACKING
   Pour les conversions et la valeur
   ======================================== */

window.trackPackPurchaseIntent = function(packName = 'Pack Visibilité IDF') {
    trackFacebookEvent('InitiateCheckout', {
        content_name: packName,
        content_category: 'Service',
        content_ids: ['pack-visibilite-idf'],
        content_type: 'product',
        value: 890,
        currency: 'EUR',
        num_items: 1
    });
};

// Track conversion (à utiliser après confirmation de paiement)
window.trackPackPurchase = function(orderId, packName = 'Pack Visibilité IDF') {
    trackFacebookEvent('Purchase', {
        content_name: packName,
        content_category: 'Service',
        content_ids: ['pack-visibilite-idf'],
        content_type: 'product',
        value: 890,
        currency: 'EUR',
        transaction_id: orderId,
        num_items: 1
    });
};

/* ========================================
   CONSOLE LOG - DEBUG MODE
   ======================================== */

console.log('✅ Facebook Pixel Loaded - ID: 1133753102238894');
console.log('📊 Events configured: PageView, Lead, Contact, CompleteRegistration, ViewContent');
console.log('🎯 Custom Events: QuizStarted, QuizProfileDetected');
console.log('💰 Value tracking: 890€ (Pack Visibilité IDF)');
console.log('📍 Enhanced Match: Ready for user data');
