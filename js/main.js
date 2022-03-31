$(document).ready(function() {

  var language

  if (localStorage.language != undefined) {
    if (window.location.pathname.replace(/\//g, '') == "" && localStorage.language.toLowerCase() == "us") {

    } else if (window.location.pathname.replace(/\//g, '') != localStorage.language.toLowerCase()) {
      switchLenguage()
    }
  }

  // Language switcher
  $(".language-switcher").change(function() {
    language = $('.language-switcher').val()
    localStorage.language = language;
    switchLenguage()
  })

  //Ip information request
  var request = new XMLHttpRequest();

  request.open('GET', 'https://api.ipdata.co/?api-key=3fe0e4ce32223b9a5daaacb42528d765f10ecd75784c6c948e735ed2');
  request.setRequestHeader('Accept', 'application/json');
  request.onreadystatechange = function () {
    if (this.readyState === 4) {
      // var data = $.makeArray(this.responseText)
      var obj = jQuery.parseJSON(this.responseText);
      language = obj.country_code
      localStorage.language = language;
      switchLenguage()
    }
  };
  if (localStorage.language == undefined) {
    request.send();
  }

  // Function to switch lenguage
  function switchLenguage() {
    if (typeof(Storage) !== "undefined") {
    // Code for localStorage/sessionStorage.
      switch (localStorage.language) {
        default:
          window.location.replace("/");
          break;
        case "UA":
          window.location.replace("/ua/");
          break;
        case "RU" || "BY" || "KG" || "KZ" || "TJ" || "UZ":
          window.location.replace("/ru/");
          break;
      }
    } else {
      // Sorry! No Web Storage support..
      switch (language) {
        default:
          window.location.replace("/");
          break;
        case "UA":
          window.location.replace("/ua/");
          break;
        case "RU" || "BY" || "KG" || "KZ" || "TJ" || "UZ":
          window.location.replace("/ru/");
          break;
      }
    }
  }
});
