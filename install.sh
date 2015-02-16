#!/bin/sh

rm -r public
rm -r bower_components
rm -r node_modules
npm ls -g | grep brunch || npm install -g brunch
npm ls -g | grep bower || npm install -g bower
npm install
bower install
brunch b
brunch watch