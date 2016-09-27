//load the express package and create our app
var express = require('express'),
	app = express(),
 	path = require('path');

//send our index.html to the user for the home page

app.get('/', function(req, res){
	res.sendFile(path.join(__dirname+'/src/public_html/index.html'));
});

//create routes for the admin section

//get an instance of the router
var adminRouter = express.Router();

//route middleware that will happen on every
 
 adminRouter.use(function(req,res,next){
 	//log each request to the console
 	console.log(req.method, req.url);
 	console.log('holamundogonorreas');
 	//continue doing some stuff
 	next();
 })




//comment to run
//admin main page. the dashboard  (http://localhost:1337/app)
adminRouter.get('/', function(req,res){
	res.sendFile(path.join(__dirname+'/src/public_html/index.html'));
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
///testing user and pass to gitbash
//test2
//test3



//start the server

app.listen(1337);
console.log('magic happens on port 1337');