const express = require('express');
const StateCaseController = require('./controllers/StateCaseController');
const StateController = require('./controllers/StateController');



const routes = express.Router();

// criar nova rota de casos por estado


routes.post('/statecase', StateCaseController.store)
routes.get('/statecase', StateCaseController.index)
routes.put('/statecase', StateCaseController.updateState)


routes.get('/state', StateController.index)
routes.post('/state',StateController.store);


module.exports = routes;