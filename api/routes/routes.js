const Episode = require('../models/episode');

const episodeRoutes = require('./episodeRoutes.js');

module.exports = function(app) {

    episodeRoutes(app);
    
};