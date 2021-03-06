let cacheName = 'sos-copel-v.1.0.16';
let filesToCache = [
    './',
    'index.html',
    'se',
    'se/index.html',
    'se/ra',
    'se/ra/index.html',
    'se/ra/cooper-f6',
    'se/ra/cooper-f6/index.html',
    'se/ra/arteche-p500',
    'se/ra/arteche-p500/index.html',
    'gsst/index.html',
    'css/bootstrap.min.css',
    'css/open-iconic-bootstrap.min.css',
    'css/main.css',
    'fonts/open-iconic.eot',
    'fonts/open-iconic.otf',
    'fonts/open-iconic.svg',
    'fonts/open-iconic.ttf',
    'fonts/open-iconic.woff',
    'js/array.observe.polyfill.js',
    'js/object.observe.polyfill.js',
    'js/jquery-3.3.1.min.js',
    'js/bootstrap.min.js',
    'js/main.js',
    'img/subestacao.jpg',
    'img/rede.jpg',
    'img/gsst.jpg',
    'img/abb.jpg',
    'img/arteche-smart-500.jpg',
    'img/banco-de-capacitores.png',
    'img/confirmacao-mecanica.jpg',
    'img/cooper-f6-abrir-e-fechar.jpg',
    'img/cooper-f6.jpg',
    'img/cooper-f6.png',
    'img/epi-eletricista.jpg',
    'img/lupa.jpg',
    'img/mcgraw-edison.jpg',
    'img/painel-frontal-f6-bloqueio-relig.jpg',
    'img/painel-frontal-f6-bloqueio-terra.jpg',
    'img/painel-frontal-f6-bloqueios.jpg',
    'img/painel-frontal-f6-foto.jpg',
    'img/painel-frontal-f6-local-remoto.jpg',
    'img/painel-frontal-f6.jpg',
    'img/regulador-de-tensao.jpg',
    'img/religador.jpg',
    'img/retrofit.jpg',
    'img/westinghouse.jpg',
    'img/whipp-bourne.jpg',
    'img/ziv.jpg',
    'img/arteche-p500.jpg',
    'img/painel-frontal-f6-modo-chave.jpg',
    'img/cooper-f6-confirmacao-fechamento.jpg',
    'img/preloader.svg',
    'img/goku.gif',
    'logo48@1x.png',
    'logo96@2x.png',
    'logo192@4x.png',
    'favicon.png',
    'manifest.json',
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