// Storage of Browser

const CACHE_NAME = 'version-1';
const urlsToCache = ['index.html', 'offline.html'];
const self = this;

// installation

self.addEventListener('install', (e) => {
    e.waitUntil(
        caches.open(CACHE_NAME).then((cache) => {
            console.log('Opened Cache');

            return cache.addAll(urlsToCache);
        })
    )
});

// listen to Request

self.addEventListener('fetch', (e) => {
    e.respondwith(
        caches.match(e.request).then((res) => {
            return fetch(e.request).catch(() => caches.match('offline.html'));
        })
    );
});


// Activate the service worker

self.addEventListener('activate', (e) => {
    const cacheWhitelist = [];

    cacheWhitelist.push(CACHE_NAME);
    e.waitUntil(
        caches.keys().then((cacheNames) => Promise.all(
            cacheNames.map((cacheName, i) => {
                if (!cacheWhitelist.includes(cacheName)) {
                    return caches.delete(cacheName);
                }
            })
        ))
    )
});