const CACHE_NAME = 'nextgen-cache-v1';
const urlsToCache = [
  './googleaistdio.html',
  './manifest.json',
  './favicon1.png'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});
