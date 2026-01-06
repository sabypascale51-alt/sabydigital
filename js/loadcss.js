// Chargement asynchrone des CSS non-critiques pour améliorer le FCP et LCP
(function() {
    'use strict';
    
    // Liste des CSS à charger de manière asynchrone
    const stylesheets = [
        'css/style.css',
        'css/modern-design.css',
        'css/responsive-fix.css',
        'css/logo-colors.css',
        'css/burger-menu.css',
        'css/faq-moderne.css'
    ];
    
    // Fonction pour charger un CSS de manière asynchrone
    function loadCSS(href) {
        const link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = href;
        link.media = 'print'; // Charge sans bloquer le rendu
        link.onload = function() {
            this.media = 'all'; // Applique le CSS une fois chargé
        };
        document.head.appendChild(link);
    }
    
    // Charger tous les CSS non-critiques
    stylesheets.forEach(loadCSS);
    
    // Fallback pour les navigateurs qui ne supportent pas onload sur <link>
    if (!('onload' in document.createElement('link'))) {
        stylesheets.forEach(href => {
            const link = document.createElement('link');
            link.rel = 'stylesheet';
            link.href = href;
            document.head.appendChild(link);
        });
    }
})();
