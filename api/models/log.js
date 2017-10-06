var mongoose = require('mongoose');

var logSchema = mongoose.Schema({

      	created       : {type: Date, default: Date.now},
        title     	  : String,
        overview      : String,
        learning      : {
          learningName: String,
          learningDescription: String,
          learningLink: String,
        },
        projects	    : {
          projectName : String,
          projectCode: String,
          projectDemo: String,
          projectDescription: String,
          projectImage: String
        },
        events        : {
          eventName: String,
          eventDescription: String,
          eventLink: String,
          eventImage: String
        }
});

module.exports = mongoose.model('Log', logSchema);