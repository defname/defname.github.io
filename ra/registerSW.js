if('serviceWorker' in navigator) {window.addEventListener('load', () => {navigator.serviceWorker.register('/ra/sw.js', { scope: '/ra/' })})}