gramobot
========

gramobot is a webapp that makes having house parties more democratic. instead of some asswhole forcing their shitty taste in music on everybody, now people can vote for what song they want to hear next via twitter.

here's a sample tweet:
[https://twitter.com/stephanlindauer/status/569254275332882433](https://twitter.com/stephanlindauer/status/569254275332882433)

![screenshot](https://github.com/stephanlindauer/gramobot/blob/master/app/assets/images/screenshots/gramobot_playing.png "screenshot")

# setup

## configuration

- setup a new twitter app at (https://apps.twitter.com/app/new)
- setup a mongodb database wherever you want (http://docs.mongodb.org/manual/installation/)
- go into `backend/config/`, get rid of the ".example" suffix on those files and enter your own credentials
    
## run install script
    
make sure you have [node](http://nodejs.org/) installed
    
now just run
`$   ./install.sh`

and open [localhost:3333](http://localhost:3333/) in your browser

if you open channel "test" you can see how gramobot runs with a few fake tweets

# forks

meteor version by [johdirr](https://github.com/johdirr): https://github.com/johdirr/gramobotMeteor
