
/* !
 * Module dependencies.
 */

exports.index = function (req, res) {
  res.status('home/index', {
    title: 'Node Express Mongoose Boilerplate'
  });
};
