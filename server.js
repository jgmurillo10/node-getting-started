//load the express package and create our app
var express = require('express'),
	app = express(),
 	path = require('path');

//send our index.html to the user for the home page

app.get('/', function(req, res){
	res.sendFile(path.join(__dirname+'/index.html'));
});

//start the server

app.listen(1337);
console.log('magic happens on port 1337');