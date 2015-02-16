var express = require( 'express' );
var router = express.Router();
var ChannelsModel = require( "./../db/models/ChannelsModel" );

router.get( '/:channelName', function ( req, res ) {

  var channel = req.params.channelName;

  ChannelsModel.findOne( { name: channel }, function ( err, data ) {
    if ( err ) {
      return console.log( "argh" + err );
    }
    res.json( data );
  } );
} );

module.exports = router;

