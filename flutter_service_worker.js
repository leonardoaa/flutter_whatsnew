'use strict';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "/index.html": "e36211d86e9c70409c58295974f749a1",
"/manifest.json": "00e0b69b49487ce4f9ff0c5fac8fda49",
"/icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"/icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"/assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "9a62a954b81a1ad45a58b9bcea89b50b",
"/assets/AssetManifest.json": "cc5894ec3c840a4a6ca93b27b8e8178a",
"/assets/LICENSE": "80fd00b2a4010432664c5aaf8ac00704",
"/assets/FontManifest.json": "01700ba55b08a6141f33e168c4a6c22f",
"/assets/CHANGELOG.md": "b6d57b5714b9ce36fb30ce40a715b2ca",
"/assets/fonts/MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16",
"/main.dart.js": "bd91b849053cb9a5d23c43c60cda923e",
"/favicon.png": "5dcef449791fa27946b3d35ad8803796"
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
        return fetch(event.request, {
          credentials: 'include'
        });
      })
  );
});
