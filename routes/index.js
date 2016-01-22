var express = require('express');
var router = express.Router();
var tweetBank = require('../tweetBank');

router.get('/', function(request, response, next){
	var tweets = tweetBank.list();
	response.render('index', {title: 'Twitter.js', tweets: tweets});
})

module.exports = router;