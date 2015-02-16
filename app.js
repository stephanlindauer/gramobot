var express = require('express'),
    expressHbs = require('express-handlebars'),
    path = require('path'),
    favicon = require('serve-favicon'),
    logger = require('morgan'),
    cookieParser = require('cookie-parser'),
    bodyParser = require('body-parser'),
    twitterConsumer = require("./backend/twitter/twitterConsumer"),
    http = require('http' ),
    mongooseConnector = require("./backend/db/mongoose-connector" ),
    tweetPersistor = require("./backend/twitter/tweetPersistor");


var app = express();

var hbs = expressHbs.create({
    defaultLayout: 'html',
    extname      : '.hbs',
    partialsDir: [
        'views/partials/'
    ]
});

app.engine('hbs', hbs.engine);
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(require('stylus').middleware(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'public')));

var singlepage = require('./backend/routes/singlepage');

var channelsApi = require('./backend/routes/api/channels');
var history = require('./backend/routes/history');
var stream = require('./backend/routes/streams');

app.use('/api/channels', channelsApi);
app.use('/history', history);
app.use('/stream', stream);

app.use('/channel', singlepage);
app.use('/*', singlepage);

exports.startServer = function(port, path, callback) {
  app.listen(port);
  callback();
  return console.log("Listening on port: " + port);
};
