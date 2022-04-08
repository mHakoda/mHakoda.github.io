$(document).ready(function() {

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
