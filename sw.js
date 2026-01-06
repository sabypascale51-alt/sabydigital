// Service Worker pour le cache des ressources statiques
// Version 1.0 - Améliore les performances après la première visite

const CACHE_NAME = 'sabydigital-v2';
const urlsToCache = [
    '/',
    '/index.html',
    '/css/style.css',
    '/css/modern-design.css',
    '/css/responsive-fix.css',
    '/css/logo-colors.css',
    '/css/burger-menu.css',
    '/css/faq-moderne.css',
    '/js/main.js',
    '/js/burger-menu.js',
    '/images/logo-sabydigital.png',
    '/images/hero-artisan-idf-optimized.jpg'
];

// Installation du Service Worker
self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(cache => {
                console.log('Cache ouvert');
                return cache.addAll(urlsToCache);
            })
    );
});

// Activation et nettoyage des anciens caches
self.addEventListener('activate', event => {
    event.waitUntil(
        caches.keys().then(cacheNames => {
            return Promise.all(
                cacheNames.map(cacheName => {
                    if (cacheName !== CACHE_NAME) {
                        console.log('Suppression ancien cache:', cacheName);
                        return caches.delete(cacheName);
                    }
                })
            );
        })
    );
});

// Stratégie de cache: Network First, puis Cache
self.addEventListener('fetch', event => {
    event.respondWith(
        fetch(event.request)
            .then(response => {
                // Si la requête réussit, clone et met en cache
                if (!response || response.status !== 200 || response.type === 'opaque') {
                    return response;
                }

                const responseToCache = response.clone();
                caches.open(CACHE_NAME)
                    .then(cache => {
                        cache.put(event.request, responseToCache);
                    });

                return response;
            })
            .catch(() => {
                // Si le réseau échoue, utilise le cache
                return caches.match(event.request);
            })
    );
});
