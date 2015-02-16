var ChannelsModel = require("./../db/models/ChannelsModel");
var _ = require('underscore');

ChannelsHelper = {
    addTweetToChannels: function(tweet) {
        for (var i in tweet.hashTags) {
          ChannelsModel.find({'name': tweet.hashTags[i]}, function(err, channels) {
                if (err) return console.error(err);

                if (channels.length > 0) {
                    var channelId = _.first(channels)._id

                    ChannelsModel.update({'_id': channelId}, {
                        $addToSet: {'tweets': tweet._id}
                    }, function(err, res) {
                        if (err) return console.error(err);

                        console.log("Added Tweet '" + tweet._id + "' to Channel.");
                    });
                }
            });
        };
    }
};

module.exports = ChannelsHelper;