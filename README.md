YCatalyst
=========

  YCatalyst is a Hacker News clone written for Node.js in Coffeescript.  
  You can view the original site at http://ycatalyst.com.  

  Please note that this is alpha quality and very much a work in progress.  
  If you would like to contribute, please email me at jae@ycatalyst.com.  

  If you want to check out the real-time features, you can create a test  
  account at our staging server: http://staging.ycatalyst.com:8080/.  
  Use invite-code 'staging'.  

Features
========

  * Real-time updates of comments
  * Diffbot and PubsubHubbub integration for tracking updates to blogs
  * Invite-only membership

Dependencies
============

  * Node.js v0.3.2
  * Coffeescript v1.0.0
  * Sass (as in Haml/Sass)

  npm install: 

  * coffee-script
  * node-mongodb-native
  * nodemailer
  * jsdom
  * //xml2js  actually, i forked on github here: git@github.com:jaekwon/node-xml2js.git

  git submodule init will install more dependencies, some from my personal forks.
