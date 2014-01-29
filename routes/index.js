// 'use strict';

/*
 * GET home page.
 */

// exports.index = function(req, res){
//   res.render('index', { title: 'Fuck Index' });
// };


module.exports = function(app) {
    
  // Home route
    var index =  function(req, res) { 
      res.render('index', { title: 'Fuck Index' });
    };
    app.get('/', index.render);

};