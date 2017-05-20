
(function() {
  'use strict';
    
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker
             .register('./service-worker.js')
             .then(function() { console.log('Service Worker Registered'); });
  }
    
})();

function openNav() {
    document.getElementById('mySidenav').style.width = '60%';
    document.getElementById('bars').style.visibility = 'hidden';
}

function closeNav() {
    document.getElementById('mySidenav').style.width = '0';
    document.getElementById('bars').style.visibility = 'visible';
}

