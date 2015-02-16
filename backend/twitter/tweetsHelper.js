var _ = require('underscore');

TweetsHelper = {
    parseRawTwitterStreamInput: function(rawTweet) {
        return {
          'tweetID' : rawTweet.id_str,
          'text': rawTweet.text,
          'userHandle': rawTweet.user.screen_name,
          'userImage' : rawTweet.user.profile_image_url_https,
          'userName': rawTweet.user.name,
          'timestamp': rawTweet.timestamp_ms,
          'hashTags': TweetsHelper.fetchHashtags(rawTweet.entities.hashtags),
          'mediaUrls': TweetsHelper.fetchMediaUrls(rawTweet.entities.urls)
        };
    },

    fetchHashtags: function (rawHashtags) {
      var hashtags = [];

      for (var i in rawHashtags) {
          hashtags.push(rawHashtags[i].text);
      }

      return hashtags;
    },

    fetchMediaUrls: function(rawUrls) {
      var urls = [];

      for (var i in rawUrls) {
        urls.push(rawUrls[i].expanded_url);
      }

      return urls;
    }
};

module.exports = TweetsHelper;