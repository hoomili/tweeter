$(document).ready(function() {
  // --- our code goes here ---
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
  $('.tweet').hover(function() {
    $(this).hover(
      function() {
        $(this).addClass("shadow");
      }, function() {
        $(this).removeClass("shadow");
      }
    );
  });
  $('.icons').hover(function() {
    $(this).hover(
      function() {
        $(this).addClass("hover");
      }, function() {
        $(this).removeClass("hover");
      }
    );
  });
});