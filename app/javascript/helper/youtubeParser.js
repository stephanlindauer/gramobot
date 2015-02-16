var youtubeParser = {

  getVideoId: function ( url ) {
    var regEx = /(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/ ]{11})/i;
    var videoId = url.match(regEx);
    if ( videoId != null ) {
      return videoId[1];
    } else {
      console.error( "could not parse youtube url" );
    }
  }

};

module.exports = youtubeParser;


