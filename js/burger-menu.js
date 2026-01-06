/* ========================================
   MENU BURGER - JavaScript
   Gestion de l'ouverture/fermeture du menu
   ======================================== */

document.addEventListener('DOMContentLoaded', function() {
    
    // --- Éléments du DOM ---
    const burgerIcon = document.querySelector('.burger-icon');
    const menuOverlay = document.querySelector('.menu-overlay');
    const menuItems = document.querySelectorAll('.menu-item');
    const body = document.body;
    const header = document.querySelector('.header-modern');
    
    // --- Toggle Menu ---
    function toggleMenu() {
        const isOpen = menuOverlay.classList.contains('active');
        
        if (isOpen) {
            closeMenu();
        } else {
            openMenu();
        }
    }
    
    // --- Ouvrir le menu ---
    function openMenu() {
        menuOverlay.classList.add('active');
        burgerIcon.classList.add('active');
        body.classList.add('menu-open');
    }
    
    // --- Fermer le menu ---
    function closeMenu() {
        menuOverlay.classList.remove('active');
        burgerIcon.classList.remove('active');
        body.classList.remove('menu-open');
    }
    
    // --- Event Listeners ---
    
    // Click sur le burger icon
    if (burgerIcon) {
        burgerIcon.addEventListener('click', toggleMenu);
    }
    
    // Click sur un menu item (fermer le menu)
    menuItems.forEach(item => {
        item.addEventListener('click', function(e) {
            // Si c'est un lien interne (commence par #), fermer le menu
            const href = this.getAttribute('href');
            if (href && href.startsWith('#')) {
                closeMenu();
            }
        });
    });
    
    // Fermer le menu avec la touche Escape
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && menuOverlay.classList.contains('active')) {
            closeMenu();
        }
    });
    
    // Fermer le menu si on clique en dehors (sur l'overlay)
    if (menuOverlay) {
        menuOverlay.addEventListener('click', function(e) {
            // Fermer uniquement si on clique sur l'overlay, pas sur le contenu
            if (e.target === menuOverlay) {
                closeMenu();
            }
        });
    }
    
    // --- Header Scrolled Effect ---
    let lastScrollTop = 0;
    
    window.addEventListener('scroll', function() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        // Ajouter la classe "scrolled" quand on scroll
        if (scrollTop > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
        
        lastScrollTop = scrollTop;
    });
    
    // --- Smooth Scroll pour les liens internes ---
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            
            // Ignorer les liens vides ou "#"
            if (href === '#' || href === '') {
                e.preventDefault();
                return;
            }
            
            const target = document.querySelector(href);
            
            if (target) {
                e.preventDefault();
                
                // Fermer le menu si ouvert
                if (menuOverlay.classList.contains('active')) {
                    closeMenu();
                }
                
                // Calculer la position avec offset pour le header fixe
                const headerHeight = header.offsetHeight;
                const targetPosition = target.getBoundingClientRect().top + window.pageYOffset;
                const offsetPosition = targetPosition - headerHeight - 20;
                
                // Smooth scroll
                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // --- Fermer le menu sur redimensionnement de la fenêtre (Desktop) ---
    let resizeTimer;
    window.addEventListener('resize', function() {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(function() {
            // Si on passe en mode desktop (> 991px), fermer le menu
            if (window.innerWidth > 991 && menuOverlay.classList.contains('active')) {
                closeMenu();
            }
        }, 250);
    });
    
    // --- Animation d'apparition progressive des menu items ---
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, {
        threshold: 0.1
    });
    
    // Observer tous les menu items
    menuItems.forEach(item => {
        observer.observe(item);
    });
    
});

/* ========================================
   UTILITAIRES
   ======================================== */

// Fonction pour désactiver le scroll
function disableScroll() {
    // Sauvegarder la position actuelle
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;
    
    // Désactiver le scroll
    window.onscroll = function() {
        window.scrollTo(scrollLeft, scrollTop);
    };
}

// Fonction pour réactiver le scroll
function enableScroll() {
    window.onscroll = function() {};
}
