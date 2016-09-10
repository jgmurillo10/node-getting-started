//load the express package and create our app
var express = require('express'),
	app = express(),
 	path = require('path');

//send our index.html to the user for the home page

app.get('/', function(req, res){
	res.sendFile(path.join(__dirname+'/index.html'));
});

//create routes for the admin section

//get an instance of the router
var adminRouter = express.Router();
//admin main page. the dashboard  (http://localhost:1337/admin)
adminRouter.get('/', function(req,res){
	res.send('i am the dashboard');
});

//users page (http://localhost:1337/admin/users)
adminRouter.get('/users', function(req,res){
	res.send('i show all the users!');
});
//posts page (http://localhost:1337/admin/post)

adminRouter.get('/posts', function(req,res){
	res.send('i show all the posts!');
});

//apply the routes to our aplication
app.use('/app', adminRouter);



//start the server

app.listen(1337);
console.log('magic happens on port 1337');