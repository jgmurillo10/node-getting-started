//load the express package and create our app
var express = require('express'),
	app = express(),
 	path = require('path'),
 	mongoose = require('mongoose');


//connect to database
//connect or create and connect to nodetest db
mongoose.connect('mongodb://localhost/nodetest');

//send our index.html to the user for the home page

app.get('/', function(req, res){
	res.sendFile(path.join(__dirname+'/src/public_html/index.html'));
});

//create routes for the admin section

//get an instance of the router
var adminRouter = express.Router();

var apiRoutes = express.Router();

var basicRoutes = express.Router();


//route middleware that will happen on every
 
 adminRouter.use(function(req,res,next){
 	//log each request to the console
 	console.log(req.method, req.url);
 	console.log('holamundogonorreas');
 	//continue doing some stuff
 	next();
 });

 adminRouter.param('name', function(req,res, next, name){
 	//do validation on name here
 	//blah blah validation
 	//log something so we know its working
 	console.log('doing some validation on '+ name);
 	//once validation is done save the new item in the req
 	req.name=name;
 	//go to the next thing
 	next();
 })
 //route with parameters (http://localhost:1337/admin/hello/:name)
 adminRouter.get('/hello/:name', function(req,res){
 	res.send('hello '+req.name + '!');
 })


basicRoutes.get('/', function(req, res){
	res.send('basic routes page');
});
basicRoutes.get('/profile', function(req, res){
	res.send('basic routes page profile');
});

apiRoutes.get('/', function(req, res){
	res.send('this is the page for api routes');
});

apiRoutes.get('/posts', function(req, res){
	res.send('this is the page for api routes');
});
apiRoutes.get('/users', function(req, res){
	res.send('this is the page for api routes');
});


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

adminRouter.get('/users/:name',function(req,res){
	res.send('hello '+req.params.name+'!');
});

//login route

app.route('/login')
	//show the form (GET http://localhost:1337/login)
	.get(function(req,res){
		res.send('this is the login form');
	})
	.post(function(req,res){
		console.log('processing...');
		res.send('processing the login form');
	});

//apply the routes to our aplication
app.use('/admin', adminRouter);
app.use('/api', apiRoutes);
app.use('/', basicRoutes);


//start the server

app.listen(1337);
console.log('magic happens on port 1337');