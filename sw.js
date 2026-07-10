var CACHE_NAME = 'novastore-cache-v1';
var STATIC_ASSETS = [
  '.',
  'index.html',
  'main.js',
  'manifest.json',
  'install.js',
  'settings.html',
  'admin-login.html',
  'terms.html',
  'offline.html',
  'assets/icons/icon.svg',
  'assets/icons/icon-192x192.png',
  'assets/icons/icon-512x512.png'
];

self.addEventListener('install', function (event) {
  event.waitUntil(
    caches.open(CACHE_NAME).then(function (cache) {
      return cache.addAll(STATIC_ASSETS);
    }).then(function () {
      return self.skipWaiting();
    })
  );
});

self.addEventListener('activate', function (event) {
  event.waitUntil(
    caches.keys().then(function (cacheNames) {
      return Promise.all(
        cacheNames.filter(function (name) {
          return name !== CACHE_NAME;
        }).map(function (name) {
          return caches.delete(name);
        })
      );
    }).then(function () {
      return self.clients.claim();
    })
  );
});

self.addEventListener('fetch', function (event) {
  var request = event.request;
  var url = new URL(request.url);

  if (request.mode === 'navigate') {
    event.respondWith(
      fetch(request).then(function (response) {
        return caches.open(CACHE_NAME).then(function (cache) {
          cache.put(request, response.clone());
          return response;
        });
      }).catch(function () {
        return caches.match(request).then(function (cached) {
          return cached || caches.match('offline.html');
        });
      })
    );
    return;
  }

  if (url.origin === location.origin) {
    event.respondWith(
      caches.match(request).then(function (cached) {
        return cached || fetch(request).then(function (response) {
          return caches.open(CACHE_NAME).then(function (cache) {
            cache.put(request, response.clone());
            return response;
          });
        });
      })
    );
    return;
  }

  event.respondWith(
    caches.match(request).then(function (cached) {
      var fetchPromise = fetch(request).then(function (response) {
        if (response && response.ok) {
          return caches.open(CACHE_NAME).then(function (cache) {
            cache.put(request, response.clone());
            return response;
          });
        }
        return response;
      });
      return cached || fetchPromise;
    })
  );
});
