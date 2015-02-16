var events = require( 'events' );
var twitterConsumer = require( "./twitterConsumer" );
var _ = require( 'underscore' );
var TweetsHelper = require( "./tweetsHelper" );

var fakeTweetRaw1 = require( './faketweets/tweet1' );
var fakeTweetRaw2 = require( './faketweets/tweet2' );
var fakeTweetRaw3 = require( './faketweets/tweet3' );
var fakeTweetRaw4 = require( './faketweets/tweet4' );
var fakeTweetRaw5 = require( './faketweets/tweet5' );
var fakeTweetRaw6 = require( './faketweets/tweet6' );
var fakeTweetRaw7 = require( './faketweets/tweet7' );

function emitFakeTweet( fakeTweetRaw ) {
  var fakeTweet = TweetsHelper.parseRawTwitterStreamInput( fakeTweetRaw );
  twitterConsumer.eventEmitter.emit( 'tweet', fakeTweet );
}

function getRandomTweet() {
  var array = [fakeTweetRaw1,fakeTweetRaw2,fakeTweetRaw3,fakeTweetRaw4,fakeTweetRaw5,fakeTweetRaw6,fakeTweetRaw7];
  return array[Math.floor(Math.random()*array.length)];
}
//
//_.delay(
//  function () {
//    emitFakeTweet( fakeTweetRaw1 );
//  }, 10 * 1000 );
//
//_.delay(
//  function () {
//    emitFakeTweet( fakeTweetRaw2 );
//  }, 15 * 1000 );
//
//_.delay(
//  function () {
//    emitFakeTweet( fakeTweetRaw3 );
//  }, 20 * 1000 );
//
//_.delay(
//  function () {
//    emitFakeTweet( fakeTweetRaw4 );
//  }, 25 * 1000 );
//
//_.delay(
//  function () {
//    emitFakeTweet( fakeTweetRaw5 );
//  }, 30 * 1000 );


for ( var i = 0; i < 1000000; i += 5 ) _.delay(
  function () {
    emitFakeTweet( getRandomTweet() );
  }, (1 + i) * 500 );