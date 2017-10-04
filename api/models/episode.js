var mongoose = require('mongoose');

var episodeSchema = mongoose.Schema({

      	created       : {type: Date, default: Date.now},
        name     	  : String,
        airDate       : Date,
        description	  : String
});

module.exports = mongoose.model('Episode', episodeSchema);