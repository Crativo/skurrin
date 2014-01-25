// Environment Variables
process.env['MONGOLAB_URI'] = 'mongodb://champ:letmein@ds027769.mongolab.com:27769/mong';



// Module dependencies.
var express = require('express');
var http = require('http');
var path = require('path');

var app = express();

var dburistring =
process.env.MONGOLAB_URI ||
process.env.MONGOHQ_URL ||
'mongodb://localhost/HelloMongoose';


// All Environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));


// Development Only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}


/* Defining Routes */

// General
var routes  = require('./routes');
app.get('/', routes.index);

// User
var user  = require('./routes/user');
app.get('/user', user.index);

// Blog
var blog  = require('./routes/blog');
app.get('/blog', blog.index);



// Create Server
http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
