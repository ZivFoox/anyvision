
/* !
 * Module dependencies
 */

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var WordSchema = new Schema({
  name: { type: String, default: '' },
  timesSearched: { type: Number, default: 0 },
});


mongoose.model('Word', WordSchema);
