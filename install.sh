#!/bin/sh

npm install -g brunch
npm install -g bower
npm install
bower install
brunch build --production
npm start