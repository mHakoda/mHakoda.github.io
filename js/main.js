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

  // Scroll to elements
  $(".AppDev-Link").click(function() {
    if (navigator.userAgent.search("Chrome") >= 0) {
      document.querySelector('#AppDev-Section').scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    } else {
      $('html, body').animate({
        scrollTop: $("#AppDev-Section").offset().top
      }, 2000);
    }
  });

  $(".WebDev-Link").click(function() {
    if (navigator.userAgent.search("Chrome") >= 0) {
      document.querySelector('#WebDev-Section').scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    } else {
      $('html, body').animate({
          scrollTop: $("#WebDev-Section").offset().top
      }, 2000);
    }
  });

  // Web block Image Gallery
  $(".option").click(function() {
    $(".option").removeClass("active");
    $(this).addClass("active");
  });

  $(".option-2").click(function() {
    $(".option-2").removeClass("active");
    $(this).addClass("active");
  });

  $(".option-3").click(function() {
    $(".option-3").removeClass("active");
    $(this).addClass("active");
  });

  // Popover
  var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'))
  var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
    return new bootstrap.Popover(popoverTriggerEl)
  })

  var popover = new bootstrap.Popover(document.querySelector('.popover-dismiss'), {
    trigger: 'focus'
  })
});
