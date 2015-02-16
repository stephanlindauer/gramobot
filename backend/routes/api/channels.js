var express = require( 'express' );
var router = express.Router();
var ChannelsModel = require( './../../db/models/ChannelsModel' );

router.delete( '/:channelName', function ( req, res ) {

  var channelName = req.params.channelName;
  var tweetsToBeDeleted = req.body;

  console.log( "deleting from " + channelName + ":" );
  console.log( "tweets " + tweetsToBeDeleted );
  console.log( "channelName" + channelName);

  ChannelsModel.update(
    { 'name': channelName },
    { $pull: { tweets: {  tweetID: { $in: tweetsToBeDeleted } } } },
    { multi: true },
    function callback( err, numAffected ) {
      console.log( "num affecetd : " + numAffected );
      console.log( "err : " + err );
    } );

  res.status( 200 ).end()
} );

module.exports = router;
