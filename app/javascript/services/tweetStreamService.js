var tweetModel = require( "./../model/tweetModel" );

var subscribe = function ( channelName ) {

  var jsonStream = new EventSource( '/stream/' + channelName )

  jsonStream.onmessage = function ( e ) {
    tweetModel.push( JSON.parse( e.data ) );
    console.log("received tweet: " + e.data );
  };

  jsonStream.onerror = function ( e ) {
    console.error( "receiving tweet failed :" + e.data );
  };
};

module.exports.subscribe = subscribe;
