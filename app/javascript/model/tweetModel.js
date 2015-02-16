var tweetsViewModel = require("./../viewmodels/tweetViewModel");
var mediaViewModel = require("./../viewmodels/mediaViewModel")

var tweetsModel = {
  concat: function ( tweets ) {
    tweets.forEach(function( tweet ) {
      mediaViewModel.addMediaFromTweet(tweet);
    })
  },
  push: function ( tweet ) {
    tweetsViewModel.addTweet(tweet);
    mediaViewModel.addMediaFromTweet(tweet);
  }
};

module.exports = tweetsModel;
