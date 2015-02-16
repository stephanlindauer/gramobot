var youtubeParser = require( "./../helper/youtubeParser" );
var channelModel = require( "./../model/channelModel" )

function MediaViewModel() {

  var self = this;

  self.medias = ko.observableArray( [  ] );

  self.addMediaFromTweet = function ( tweet ) {
    tweet.mediaUrls.forEach( function ( mediaItem ) {
      var videoId = youtubeParser.getVideoId( mediaItem );

      var foundMediaItem = ko.utils.arrayFirst( self.medias(), function ( mediaObject ) {
        return mediaObject.videoId === videoId;
      } );

      if ( foundMediaItem != null ) {
        console.log( "existing one" );
        foundMediaItem.count( foundMediaItem.count() + 1 );
        foundMediaItem.upvotesFromTweets.push( tweet.tweetID );
        self.medias.sort( function ( a, b ) {
          return b.count() - a.count();
        } );
      } else {
        console.log( "new one" );

        var mediaObject = {
          "videoId": videoId,
          "upvotesFromTweets": [ tweet.tweetID ],
          "count": ko.observable( 1 ),
          "title": ko.observable( "" ),
          "thumbnailUrl": ko.observable( "" ),
          "duration": ko.observable( "" )
        };

        self.medias.push( mediaObject );

        $.ajax( {
          url: "http://gdata.youtube.com/feeds/api/videos/" + videoId + "?v=2&alt=json",
          dataType: "json",
          success: function ( data ) {

            var title = data.entry.title.$t;
            var thumbnailUrl = data.entry.media$group.media$thumbnail[2].url;
            var duration = data.entry.media$group.yt$duration.seconds;

            mediaObject.title( title );
            mediaObject.thumbnailUrl( thumbnailUrl );
            mediaObject.duration( Math.floor( duration / 60 ) + ":" + duration % 60 );
          }
        } );
      }
    } );
  };

  self.getNewNumberOne = function () {
    var mediaArray = self.medias();
    if ( mediaArray.length == 0 ) {
      return null;
    }
    var topItem = mediaArray[0];
    return topItem;
  }

  self.removeMedia = function ( media ) {
    self.medias.remove( media );

    $.ajax( {
        url: '/api/channels/' + channelModel.name + "/",
        type: 'DELETE',
        contentType: 'application/json',
        data: JSON.stringify( media.upvotesFromTweets )}
    )
  };
}

mediaViewModel = new MediaViewModel();

ko.applyBindings( mediaViewModel, document.getElementById( "medias" ) );

module.exports = mediaViewModel;