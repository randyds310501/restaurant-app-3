/* eslint-disable no-restricted-globals */
import CacheHelper from './utils/cache-helper';
import 'regenerator-runtime';

// Daftar asset yang akan dicaching
const assetsToCache = [
  './',
  './icons/icon-72x72.png',
  './icons/icon-96x96.png',
  './icons/icon-128x128.png',
  './icons/icon-144x144.png',
  './icons/icon-152x152.png',
  './icons/icon-192x192.png',
  './icons/icon-384x384.png',
  './icons/icon-512x512.png',
  './index.html',
  './favicon.png',
  './app.bundle.js',
  './app.webmanifest',
  './sw.bundle.js',
];

self.addEventListener('install', (event) => {
  event.waitUntil(CacheHelper.cachingAppShell([...assetsToCache]));
});

self.addEventListener('activate', (event) => {
  event.waitUntil(CacheHelper.deleteOldCache());
});

self.addEventListener('fetch', (event) => {
  event.respondWith(CacheHelper.revalidateCache(event.request));
});
// self.addEventListener('message', (event) => {
//   // menampilkan data/pesan yang dikirim client
//   console.log(`Client mengirim pesan: ${event.data}`);
// });
// Do precaching
// eslint-disable-next-line no-undef
// precacheAndRoute(self.__WB_MANIFEST);

// self.addEventListener('install', () => {
//   console.log('Service Worker: Installed');
//   self.skipWaiting();
// });

// self.addEventListener('push', () => {
//   console.log('Service Worker: Pushed');
// });
