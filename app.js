// Environment Variables
process.env['MONGOLAB_URI'] = 'mongodb://champ:letmein@ds027769.mongolab.com:27769/mong';



// Module dependencies.
var express = require('express');
var fs = require('fs');
var http = require('http');
var path = require('path');
// var path = require('passport');

var app = express();

var dburistring =
process.env.MONGOLAB_URI ||
process.env.MONGOHQ_URL ||
'mongodb://localhost/HelloMongoose';

var helpers = require('express-helpers')(app);




// Register ejs as .html. If we did
// not call this, we would need to
// name our views foo.ejs instead
// of foo.html. The __express method
// is simply a function that engines
// use to hook into the Express view
// system by default, so if we want
// to change "foo.ejs" to "foo.html"
// we simply pass _any_ function, in this
// case `ejs.__express`.

// app.engine('.html', require('ejs').__express);





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
routes = require('./routes')(app);


// // User
// var user  = require('./routes/user');
// app.get('/user', user.index);

// // Blog
// var blog  = require('./routes/blog');
// app.get('/blog', blog.index);



// Crawl through and find route files then load them as require().
// var routes_path = __dirname + '/routes';
// var walk = function(path) {
//     fs.readdirSync(path).forEach(function(file) {
//         var newPath = path + '/' + file;
//         var stat = fs.statSync(newPath);
        
//         if (stat.isFile()) {
//             if (/(.*)\.(js$|coffee$)/.test(file)) {
//                 require(newPath);
//             }
        
//         // We skip the app/routes/middlewares directory as it is meant to be
//         // used and shared by routes as further middlewares and is not a 
//         // route by itself
//         } else if (stat.isDirectory() && file !== 'middlewares') {
//             walk(newPath);
//         }
//     });
// };
// walk(routes_path);



// Create Server
http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
