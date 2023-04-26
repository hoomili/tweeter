/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */
$(document).ready(function() {
  const createTweetElement = function(tweet) {
    const $newTweet = $(`
    <article class="tweet">
      <header>
        <div>
          <p><img src="${tweet.user.avatars}"></p>  
          <p>${tweet.user.name}</p>
        </div>
        <section>${tweet.user.handle}</section>
      </header>
      <p>
        ${tweet.content.text}
      </p>
      <footer>
        <div>posted ${(Date.now() - tweet.created_at) / 1000 / 60 / 60 / 24} days ago</div>
        <div class="icons">
          <i class="fa-sharp fa-solid fa-flag"></i>
          <i class="fa-solid fa-retweet"></i>
          <i class="fa-solid fa-heart"></i>
        </div>
      </footer>
    </article>
    `);
    return $newTweet;
  };
  const renderTweets = function(tweets) {
    for (const tweet of tweets) {
      const $tweetElement = createTweetElement(tweet);
      $('#tweets-container').append($tweetElement);

    }
  };

  // sendig the form data to the server
  const $form = $('form');
  $form.submit(function(event) {
    event.preventDefault();
    const data = $(this).serialize();
    $.ajax({
      method: "POST",
      url: "/tweets",
      data: data
    }).then(console.log(data));
  });
  
  const loadTweets = function() {
    $.ajax({
      method: 'GET',
      url: '/tweets'
    }).then(function(tweets) {
      console.log('Success: ', tweets);
      renderTweets(tweets);
    });
  };
  loadTweets();

});


