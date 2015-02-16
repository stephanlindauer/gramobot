var Twitter = require( 'node-tweet-stream' );
var events = require( 'events' );
var eventEmitter = new events.EventEmitter();
var TweetsHelper = require( "./TweetsHelper" );
var configTwitter = require("./../config/configTwitter")

var twitterStream = new Twitter( {
  consumer_key: configTwitter.consumerKey,
  consumer_secret: configTwitter.consumerSecret,
  token: configTwitter.accessToken,
  token_secret: configTwitter.accessTokenSecret
} );

twitterStream.track( '@gramobot' );

twitterStream.on( 'tweet', function ( rawTweet ) {
  var tweetData = TweetsHelper.parseRawTwitterStreamInput( rawTweet );

  eventEmitter.emit( 'tweet', tweetData );
} );

twitterStream.on( 'error', function ( error ) {
  console.log( 'oh no' );
} );

module.exports.eventEmitter = eventEmitter;