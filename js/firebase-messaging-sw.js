$(document).ready(function() {
  import { getMessaging, getToken } from "https://www.gstatic.com/firebasejs/9.6.11/firebase-messaging.js";

  // Get registration token. Initially this makes a network call, once retrieved
  // subsequent calls to getToken will return from cache.
  const messaging = getMessaging();
  getToken(messaging, { vapidKey: 'BJzh2i1gSOwRlcvb7Azkpdsa8ytbTDqrSzRYnlgT2sY3o-J7f6Js-dKvktPFEEwokZmyk489bB_NjYp5Bp84afY' }).then((currentToken) => {
    if (currentToken) {
      // Send the token to your server and update the UI if necessary
      // ...
    } else {
      // Show permission request UI
      console.log('No registration token available. Request permission to generate one.');
      // ...
    }
  }).catch((err) => {
    console.log('An error occurred while retrieving token. ', err);
    // ...
  });

});
