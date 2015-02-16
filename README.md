gramobot
========

# setup

## configuration

- setup a new twitter app at (https://apps.twitter.com/app/new)
- setup a mongodb database wherever you want (http://docs.mongodb.org/manual/installation/)
- go into `backend/config/`, get rid of the ".example" suffix on those files and enter your own credentials
    
## run install script
    
make sure you have 
- [node](http://nodejs.org/)
installed
    
now just run
$   ./install.sh

and open [localhost:3333](http://localhost:3333/) in your browser

if you open channel "test" you can see how gramobot runs with a few fake tweets