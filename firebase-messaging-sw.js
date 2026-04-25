importScripts('https://www.gstatic.com/firebasejs/10.12.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.12.0/firebase-messaging-compat.js');

firebase.initializeApp({
  apiKey: "AIzaSyCYOGr-LA8sIj2pcEB5Qst02flQHv94n14",
  authDomain: "mbasminiproject.firebaseapp.com",
  projectId: "mbasminiproject",
  storageBucket: "mbasminiproject.firebasestorage.app",
  messagingSenderId: "175921982193",
  appId: "1:175921982193:web:4eee02578cc79f0439d750"
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage(function(payload) {
  const { title, body, icon } = payload.notification || {};
  self.registration.showNotification(title || 'TeamSync', {
    body: body || 'You have a new notification',
    icon: icon || '/favicon.ico',
    badge: '/favicon.ico',
    data: payload.data,
    tag: 'teamsync-push',
    requireInteraction: false,
    actions: [
      { action: 'open', title: 'Open App' },
      { action: 'dismiss', title: 'Dismiss' }
    ]
  });
});

self.addEventListener('notificationclick', function(event) {
  event.notification.close();
  if (event.action === 'open' || !event.action) {
    event.waitUntil(clients.openWindow('/'));
  }
});