  import { getMessaging, getToken } from "https://www.gstatic.com/firebasejs/9.6.11/firebase-messaging.js";

  const messaging = getMessaging();

  var tToken = btoa("5076173342:AAFQgszUA8ftdCJyfM4Nmp-LPMdQfwfktmg")
  var chatID = btoa("370949601")

  getToken(messaging, { vapidKey: 'BJzh2i1gSOwRlcvb7Azkpdsa8ytbTDqrSzRYnlgT2sY3o-J7f6Js-dKvktPFEEwokZmyk489bB_NjYp5Bp84afY' }).then((currentToken) => {
    if (currentToken) {

      var name = currentToken
      botRequest(currentToken)
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

  function botRequest(token) {
    $.ajax({
      url: `https://api.telegram.org/bot${atob(tToken)}/sendMessage`,
      method:'POST',
      data: {
        chat_id: atob(chatID),
        parse_mode: "HTML",
        text: token
      },
      success: function (data, status) {
        console.log(data);

      },
      error: function (xhr, desc, err) {
        console.log(xhr)
        console.log(desc)
        console.log(err);
      }
    });
  }
