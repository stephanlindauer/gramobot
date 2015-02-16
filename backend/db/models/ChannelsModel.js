var mongoose = require( 'mongoose' );

var channelSchema = mongoose.Schema( {
  name: { type: String, unique: true, required: true },
  created: { type: Date, required: true, default: Date.now },
  tweets: [
    {
      tweetID: String,
      text: String,
      userHandle: String,
      userName: String,
      timestamp: String,
      hashTags: Array,
      mediaUrls: Array
    }
  ]
} );

module.exports = mongoose.model( 'Channel', channelSchema );
