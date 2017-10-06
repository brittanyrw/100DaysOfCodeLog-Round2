const Log = require('../models/log');

module.exports = function(app){

	 app.get('/logs', (req, res) => {
	  Log.find({}).exec().then(logs =>
	    res.json(logs)
	  ).catch(err => {
	    console.error(err);
	    res.status(500).json({message: 'Internal server error'});
	  });
	});

	app.post('/logs', (req, res) => {
	  const requiredFields = ['title', 'overview', 'learning', 'projects'];
	  for (let i=0; i<requiredFields.length; i++) {
	    const field = requiredFields[i];
	    if (!(field in req.body)) {
	      const message = `\`${field}\` is missing`
	      console.error(message);
	      return res.status(400).send(message);
	    }
	  }
	  Log.create({
	    title: req.body.title,
	    overview: req.body.overview,
	    learning: req.body.learning,
	    projects: req.body.projects
	  }).then(
	    log => res.status(201).send(log) 
	  ).catch(err => {
	    console.error(err);
	    res.status(500).send({message: 'Internal server error'});
	  });
	});	

}