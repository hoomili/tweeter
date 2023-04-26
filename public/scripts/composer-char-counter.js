$(document).ready(function() {
  // --- our code goes here ---
  $('#tweet-text').on('input',function() {
    const inputLength = $(this).val().length;
    const allowedlength = 140;
    $($('.counter').html(allowedlength - inputLength));
  });
});