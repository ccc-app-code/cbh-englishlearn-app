const CACHE_NAME = 'dictation-v1';
const urlsToCache = [
  'index.html',
  'manifest.json'
  // 如果有图标文件就加上，比如：
  // 'icon-192.png',
  // 'icon-512.png'
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