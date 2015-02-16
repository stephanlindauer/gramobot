var mediaViewModel = require( "./../viewmodels/mediaViewModel" )

function VideoController() {

  var self = this;

  var onPlayerStateChange = function ( event ) {
    if ( event.data == YT.PlayerState.ENDED ) {
      var potentialNewSong = mediaViewModel.getNewNumberOne();
      if ( potentialNewSong != null ) {
        mediaViewModel.removeMedia( potentialNewSong );
        startNewSong( potentialNewSong.videoId );
      } else {
        self.startChecking();
      }
    }
  };

  var startNewSong = function ( videoId ) {
    $( "#playerwrapper" ).empty();
    var newVideoElement = document.createElement('div');
    newVideoElement.id = 'player';
    $( "#playerwrapper" ).append(newVideoElement);

    var player = new YT.Player( 'player', {
      videoId: videoId,
      playerVars: {
        'autoplay': 1
      },
      events: {
        'onStateChange': onPlayerStateChange
      }
    } );
  };

  var pullForNewTopSong = function () {
    var potentialNewSong = mediaViewModel.getNewNumberOne();
    if ( potentialNewSong != null ) {
      self.stopChecking();
      console.debug( "new song " + potentialNewSong.title() );
      mediaViewModel.removeMedia( potentialNewSong );
      startNewSong( potentialNewSong.videoId );
    }
  }

  var timer = $.timer( pullForNewTopSong ).set( { time: 500, autostart: false } );

  self.startChecking = function () {
    timer.play();
  };

  self.stopChecking = function () {
    timer.pause();
  };

};


module.exports = new VideoController();

