#!/bin/sh

cd /gramobot/
npm install
bower install
brunch build --production
npm start