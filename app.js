var express = require('express');
var app = express();

app.listen(3000,function(){
	console.log('server listening');
})

app.get('/',function(request, response){
	response.send("Welcome to twitter.js");
});