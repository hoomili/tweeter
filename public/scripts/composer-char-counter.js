$(document).ready(function() {
  // --- our code goes here ---
  $('.tweet').hover(function() {
    $(this).hover(
      function() {
        $(this).addClass("shadow");
      }, function() {
        $(this).removeClass("shadow");
      }
    );
  });
  $('.icons i').hover(function() {
    $(this).hover(
      function() {
        $(this).addClass("hover");
      }, function() {
        $(this).removeClass("hover");
      }
    );
  });
  $('#tweet-text').on('input', function() {
    const inputLength = $(this).val().length;
    const allowedlength = 140;
    $(this).parents().children("div").children(".counter").html(allowedlength - inputLength);
    if ((allowedlength - inputLength) < 0) {
      $(this).parents().children("div").children(".counter").addClass('red');
    } else {
      $(this).parents().children("div").children(".counter").removeClass('red');
    }
  });
});