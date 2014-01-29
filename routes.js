/*
 * This routes.js file contains all the routes for tha application.
 */


module.exports = function (app) {

    // homeController = require('./controllers/index.js')

    // set up the routes themselves
    app.get("/", function (req, res) {
        res.render('index', { title: 'Site Index' });
    });

    app.get("/user", function (req, res) {
        res.render('user', { title: 'User Index' });
    });

};