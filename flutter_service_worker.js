'use strict';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "index.html": "1be7099368ad7d8088f3cf7b13530074",
"/": "1be7099368ad7d8088f3cf7b13530074",
"main.dart.js": "91cc38cc6a7520a1b8b24f63551b203e",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "13a76f52f9b29d759e2f73043635c90e",
"assets/LICENSE": "2909ef0d49d0f4d9bb78eff192ef95ee",
"assets/images/logo.png": "1472724d6c027ff78fff1a560bd9bb08",
"assets/images/logo_white.png": "a2a00bc684bfc6c1ee0f558edc22720b",
"assets/images/logo_small.png": "aadd3e5796e19ee7512498688b5febf5",
"assets/images/image1.jpg": "0a232e11544a3d0c49bc84c0f5f461ae",
"assets/AssetManifest.json": "e576cd99157eec8fdd636cf35fc41e1f",
"assets/FontManifest.json": "f7161631e25fbd47f3180eae84053a51",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"assets/fonts/MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16"
};

self.addEventListener('activate', function (event) {
  event.waitUntil(
    caches.keys().then(function (cacheName) {
      return caches.delete(cacheName);
    }).then(function (_) {
      return caches.open(CACHE_NAME);
    }).then(function (cache) {
      return cache.addAll(Object.keys(RESOURCES));
    })
  );
});

self.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.match(event.request)
      .then(function (response) {
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );
});
