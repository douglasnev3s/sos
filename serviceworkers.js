let cacheName = 'sos-copel-v.1.0.5';
let filesToCache = [
    './',
    'index.html',
    'css/bootstrap.min.css',
    'css/main.css',
    'js/array.observe.polyfill.js',
    'js/object.observe.polyfill.js',
    'js/jquery-3.3.1.min.js',
    'js/bootstrap.min.js',
    'js/main.js',
    'img/subestacao.jpg',
    'img/rede.jpg',
    'img/gsst.jpg',
    'manifest.json',
    'logo48@1x.png',
    'logo96@2x.png',
    'logo192@4x.png',
];

self.addEventListener('install', function (e) {
    console.log('[ServiceWorker] Installer');
    e.waitUntil(
        caches.open(cacheName).then(function(cache) {
            console.log('[ServiceWorker] Caching app shell');
            return cache.addAll(filesToCache);
        })
    );
});

//Para ler o cache, segue código:

self.addEventListener('activate', function (e) {
    console.log('[ServiceWorker] Activate');
    e.waitUntil(
        caches.keys().then(function (keyList) {
            return Promise.all(keyList.map(function(key) {
                if (key !== cacheName) {
                    console.log('[ServiceWorker] Removing old cache');
                    return caches.delete(key);
                }
            }));
        })
    );
});

self.addEventListener('fetch', function (e) {
    console.log('[ServiceWorker] Fetch', e.request.url);
    e.respondWith(
        caches.match(e.request).then(function(response) {
            return response || fetch(e.request);
        })
    );
});