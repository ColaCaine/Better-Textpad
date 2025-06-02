const CACHE_NAME = 'xhtml-notebook-cache-v1';
const URLS_TO_CACHE = [
  '/',
  '/index.xhtml',
  '/xhtml-notebook-app/public/manifest.json',
  '/xhtml-notebook-app/public/icon-192.png',
  '/xhtml-notebook-app/public/icon-512.png',
  // Add more assets if needed
];

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(CACHE_NAME).then(function(cache) {
      return cache.addAll(URLS_TO_CACHE);
    })
  );
});

self.addEventListener('activate', function(event) {
  event.waitUntil(
    caches.keys().then(function(cacheNames) {
      return Promise.all(
        cacheNames.filter(function(cacheName) {
          return cacheName !== CACHE_NAME;
        }).map(function(cacheName) {
          return caches.delete(cacheName);
        })
      );
    })
  );
});

self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request).then(function(response) {
      return response || fetch(event.request);
    })
  );
});
