const Log = require('../models/log');

const logRoutes = require('./logRoutes.js');

module.exports = function(app) {

    logRoutes(app);
    
};