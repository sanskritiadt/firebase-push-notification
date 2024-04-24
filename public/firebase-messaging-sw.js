importScripts('https://www.gstatic.com/firebasejs/9.10.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/9.10.0/firebase-messaging-compat.js');

const firebaseConfig = {
  apiKey: "AIzaSyDQkWGz5xksiK3Jn6ILf1b26IRMsGq_gks",
  authDomain: "myapplication-55877.firebaseapp.com",
  projectId: "myapplication-55877",
  storageBucket: "myapplication-55877.appspot.com",
  messagingSenderId: "607489425460",
  appId: "1:607489425460:web:6469d5af1fa1822aa04a61",
  measurementId: "G-7EF12FJZ3S"
};

firebase.initializeApp(firebaseConfig);

const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  console.log('Received background message: ', payload);

  const notificationTitle = payload.notification.title;
  const notificationOptions = { body: payload.notification.body };

  self.registration.showNotification(notificationTitle, notificationOptions);
});
