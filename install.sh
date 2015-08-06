#!/bin/sh


npm install
bower install
brunch build --production
npm start