'use strict';

/**
 * Module dependencies.
 */

const mongoose = require('mongoose');
const { wrap: async } = require('co');
const Word = mongoose.model('Word');

/**
 * Load
 */

exports.load = async(function* (req, res, next, _id) {
  const criteria = { _id };
  try {
    req.profile = yield Word.load({ criteria });
    if (!req.profile) return next(new Error('Word not found'));
  } catch (err) {
    return next(err);
  }
  next();
});


exports.increment = function (req, res){
  Word.findOneAndUpdate({ name: req.body.name }, { $inc: { timesSearched: 1 } }, { upsert: true, new: true },function (err, response) {
    if (err) {
      console.log('err', err);
      res.status('/', { word: req.body });
   } else {
    console.log('response', response);
    res.redirect('/');
  }
});
};

exports.findMostSearched = function (req , res){
  Word.find({}).sort({ timesSearched : -1 }).limit(10).exec(
    function (err, response){
        if (err){
          res.status('/');
        }
        res.send(response);
    }
  );
};