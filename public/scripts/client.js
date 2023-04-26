/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */
const data = [
  {
    "user": {
      "name": "Newton",
      "avatars": "https://i.imgur.com/73hZDYK.png"
      ,
      "handle": "@SirIsaac"
    },
    "content": {
      "text": "If I have seen further it is by standing on the shoulders of giants"
    },
    "created_at": 1461116232227
  },
  {
    "user": {
      "name": "Descartes",
      "avatars": "https://i.imgur.com/nlhLi3I.png",
      "handle": "@rd" },
    "content": {
      "text": "Je pense , donc je suis"
    },
    "created_at": 1461113959088
  }
]


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
  const renderTweets = function (tweets) {
    for (const tweet of tweets) {
      const $tweetElement = createTweetElement(tweet);
      $('#tweets-container').append($tweetElement);

    }
  };
  renderTweets(data);
  const $form = $('form');
  $form.submit(function(event) {
    event.preventDefault();
    console.log(event);
  });
});


