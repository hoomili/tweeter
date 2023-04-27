/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */
$(document).ready(function() {
  const escape = function (str) {
    let div = document.createElement("div");
    div.appendChild(document.createTextNode(str));
    return div.innerHTML;
  };
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
        ${escape(tweet.content.text)}
      </p>
      <footer>
        <div>posted ${timeago.format(tweet.created_at)}</div>
        <div>
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
      $('#tweets-container').prepend($tweetElement);

    }
  };

  // load the tweets from the server
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

  // sendig the form data to the server
  const $form = $('form');
  $form.submit(function(event) {
    event.preventDefault();
    const data = $(this).serialize();
    const inputLength = $(this).children('#tweet-text').val().length;
    if (inputLength === 0) {
      $(this).parent().children('div').text('⚠ There is nothing to tweet! Please type something to post. ⚠');
      $(this).parent().children('div').addClass('visibility');
      return;
    }
    if (inputLength > 140) {
      $(this).parent().children('div').text('⚠ Cannot Post Tweet! Input is more than 140 character. ⚠');
      $(this).parent().children('div').addClass('visibility');
      return;
    }
    $(this).parent().children('div').removeClass('visibility');
    $(this).children('#tweet-text').val("");
    $.ajax({
      method: "POST",
      url: "/tweets",
      data: data
    }).then(function() {
      loadTweets();
    });
      
  });
});


