var tweetModel = require( "./../model/tweetModel" );
var videoController = require("./../controller/videoController");

var retrieve = function ( channelName ) {
  $.getJSON( '/history/' + channelName, function ( data ) {

    if ( data == null ) {
      console.log( "no tweets in history" );
    }else{
      tweetModel = tweetModel.concat( data.tweets );
      console.log( "tweets from database received: #" + data.tweets.length );
    }

    videoController.startChecking();
  } );
};

module.exports.retrieve = retrieve;
