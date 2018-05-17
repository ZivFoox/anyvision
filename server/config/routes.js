'use strict';

/**
 * Module dependencies.
 */

const home = require('../app/controllers/home');
const words = require('../app/controllers/words');
const cors = require('cors');

/**
 * Expose
 */

module.exports = function (app) {
  app.use(cors());
  app.get('/', home.index);
  app.get('/words', words.findMostSearched);
  app.post('/words/increment', words.increment);

  /**
   * Error handling
   */


  app.use(function (err, req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    // Request headers you wish to allow
    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);


  
    // treat as 404
    if (err.message
      && (~err.message.indexOf('not found')
      || (~err.message.indexOf('Cast to ObjectId failed')))) {
      return next();
    }
    console.error(err.stack);
    // error page
    res.status(500).status('500', { error: err.stack });
  });

  // assume 404 since no middleware responded
  app.use(function (req, res) {
    res.status(404).status('404', {
      url: req.originalUrl,
      error: 'Not found'
    });
  });
};
