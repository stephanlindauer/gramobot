var express = require( 'express' );
var router = express.Router();
var twitterConsumer = require( "./../twitter/twitterConsumer" );
var _ = require( 'underscore' );

router.get( '/:channelName', function ( req, res ) {

  var channelName = req.param( "channelName" );

  if( channelName == "test")
  {
    require("./../twitter/fakeTweetEmitter");
  }

  req.socket.setTimeout( Infinity );

  res.writeHead( 200, {
    'Content-Type': 'text/event-stream',
    'Cache-Control': 'no-cache', 'Access-Control-Allow-Origin': '*',
    'Connection': 'keep-alive'
  } );

  res.write( '\n' );

  var messageCount = 0;

  var newTweetListener = function ( tweet ) {

    if ( !_.contains( tweet.hashTags, channelName ) ) {
      return;
    }

    res.write( 'id: ' + messageCount + '\n' );
    res.write( "data: " + JSON.stringify( tweet ) + "\n\n" );
    messageCount++;
  }

  twitterConsumer.eventEmitter.on( "tweet", newTweetListener );

  req.on( "close", function () {
    twitterConsumer.eventEmitter.removeListener( "tweet", newTweetListener )
    console.log( "stream for channel " + channelName + " closed" );
  } );

} );

module.exports = router;
