var mongoose = require('mongoose');

var logSchema = mongoose.Schema({

      	created       : {type: Date, default: Date.now},
        title     	  : String,
        overview      : String,
        learning      : [String],
        projects	    : [String]
});

module.exports = mongoose.model('Log', logSchema);