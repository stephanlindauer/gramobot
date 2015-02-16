var tweetStreamService = require( "./services/tweetStreamService" );
var tweetHistoryService = require( "./services/tweetHistoryService" );
var channelModel = require( "./model/channelModel" )

Application = {
  initialize: function () {

    var handleNewChannel = function () {

      var channelName = $( "#create-channel .input" ).text();

      tweetHistoryService.retrieve( channelName );
      tweetStreamService.subscribe( channelName );

      channelModel.name = channelName;

      $( "#create-channel" ).addClass( "settled" );
      $( "#create-channel .input-container .input" ).prop( 'contenteditable', false );
      $( "#channel" ).removeClass( "underfold" );
      $( ".channelName" ).text( channelName );
    }

    $( "#create-channel button" ).click( handleNewChannel );
    $( "#create-channel .input" ).keypress( function ( e ) {
      if ( e.which == 13 ) {
        handleNewChannel();
      }
    } );
  }
};

module.exports = Application;
