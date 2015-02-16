var twitterConsumer = require( "./twitterConsumer" );
var ChannelsModel = require( "./../db/models/ChannelsModel" );

twitterConsumer.eventEmitter.on( "tweet", function ( tweet ) {

  tweet.hashTags.forEach( function ( hashtag ) {
    console.log("saving tweet: " + tweet.text)
    saveTweet( hashtag, tweet );
  } );
} );

function saveTweet( hashtag, tweet ) {
  var query = {"name": hashtag };
  var update = {$push: {"tweets": tweet }};
  var options = {new: true, upsert: true };

  ChannelsModel.findOneAndUpdate( query, update, options, function ( err, channel ) {
    if ( err )
      return console.log( 'error!' );

    //set created date if channel is new
    if ( !channel.created ){
      channel.created = new Date();
      channel.save(function (err) {
        if (err)
          return console.log(err);
      });
    }
  });
};
