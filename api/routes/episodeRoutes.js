const Episode = require('../models/episode');

module.exports = function(app){

	 app.get('/episodes', (req, res) => {
	  Episode.find({}).exec().then(episodes =>
	    res.json(episodes)
	  ).catch(err => {
	    console.error(err);
	    res.status(500).json({message: 'Internal server error'});
	  });
	});

}