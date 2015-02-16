var application = require( './application' );

var initialize = function(){
  window.onYouTubeIframeAPIReady = function () {
    $( document ).ready( function () {

      application.initialize();

    } );
  };
};

initialize();