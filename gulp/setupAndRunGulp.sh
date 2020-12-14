#!/bin/bash

# copy setup files into volume
cp -a /gulp/. /var/www/html

# install packages
cd /var/www/html
npm install 

#run gulp
gulp