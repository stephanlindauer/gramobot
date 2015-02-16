var mongoose = require( 'mongoose' );
var configDatabase = require( "./../config/configDatabase" )
var db = mongoose.connection;

db.on( 'error', function ( error ) {
  console.error( "db connection error" );
} );
db.once( 'open', function () {
  console.log( "db connection established" );
} );

mongoose.connect(
    'mongodb://' +
    configDatabase.username +
    ":" +
    configDatabase.password +
    "@" +
    configDatabase.host +
    ":" +
    configDatabase.port +
    "/" +
    configDatabase.database
);
