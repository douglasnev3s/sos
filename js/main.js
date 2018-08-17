if ('serviceWorker' in navigator) {
    navigator.serviceWorker
    .register('./serviceworkers.js')
    .then(function (reg) {
        console.log('[ServiceWorker] Registered');
    })
    .catch(function (err) {
        console.log('erro', err);
    });
}