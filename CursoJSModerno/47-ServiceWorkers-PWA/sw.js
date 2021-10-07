const nombreCache = 'apv-v3';
const archivos = [
    '/',
    '/index.html',
    '/error.html',
    '/css/bootstrap.css',
    '/css/styles.css',
    // '/js/app.js',
    '/js/apv.js',
    '/js/miapp.js'
]; 

//___Cuando se instala el SW
self.addEventListener('install', e => {
    console.log('Instalado el Service Worker');
    
    e.waitUntil(
        caches.open(nombreCache)
            .then( cache => {
                console.log('cacheando');
                cache.addAll(archivos)
            })
    )
});

//___Activar el SW
self.addEventListener('activate', e => {
    console.log('Service Worker activado');
    
    e.waitUntil(
        caches.keys()
            .then( keys => {
                // console.log(keys);

                return Promise.all(
                    keys.filter( key => key !== nombreCache)
                        .map( key => caches.delete(key)) //Borra las versiones anteriores
                )
            })
    )
});

//___Evento fetch para descargar archivos estaticos

// self.addEventListener('fetch', e => {
//     console.log('Fetch.....', e);

//     e.respondWith(
//         caches.match(e.request)
//             .then( respuestaCache => {
//                 return respuestaCache;
//             })
//             .catch(() => caches.match('/error.html'))
//     )
// });

self.addEventListener('fetch', e => {
    console.log('Fetch.. ', e);

    e.respondWith(
        caches.match(e.request)
            .then(respuestaCache => {
                return respuestaCache || fetch(e.request);
            })
            .catch( () => caches.match('/error.html'))
    );
});