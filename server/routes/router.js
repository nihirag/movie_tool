const express = require('express')
const route = express.Router();
const services = require('./../services/render')



route.get('/',services.homeRoutes);

route.post('/',services.searchQuery);


module.exports = route;