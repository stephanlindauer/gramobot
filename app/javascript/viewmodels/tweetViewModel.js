function TweetsViewModel() {

  var maxNumberOfTweetsInChat = 5;
  var self = this;

  self.tweets = ko.observableArray( [
  ] );

  self.addTweet = function ( tweet ) {
    self.tweets.unshift( tweet );

    if ( self.tweets().length > 10 ) {
      self.tweets().pop();
    }
  }

  self.removeTweet = function ( tweet ) { self.tweets.remove( tweet ) }
}

tweetsViewModel = new TweetsViewModel();

ko.applyBindings( tweetsViewModel, document.getElementById( "tweets" ) );


module.exports = tweetsViewModel;