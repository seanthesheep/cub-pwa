var cacheName = 'cub';

self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(cacheName)
            .then(cache => cache.addAll([
                '/index.html',
                '/scripts/app.js',
                '/styles/cub.css',
                '/styles/style.css',
                '/'
            ]))
    );
});

self.addEventListener('fetch', function(event) {
    event.respondWith(
        caches.match(event.request)
            .then(function(response) {
                if (response) {
                    return response;
                }
                
                var fetchRequest = event.request.clone();
                
                return fetch(fetchRequest).then(
                    function(response) {
                        if(!response || response.status !== 200) {
                            return response;
                        }
                        
                        var cacheResponse = response.clone();
                        
                        caches.open(cacheName)
                            .then(function(cache) {
                            cache.put(event.request, cacheResponse);
                        });
                        return response;
                    }
                );
            })
    );
});