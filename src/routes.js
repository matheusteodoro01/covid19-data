const express = require('express');
const StateCaseController = require('./controllers/StateCaseController');
const StateController = require('./controllers/StateController');



const routes = express.Router();

// criar nova rota de casos por estado
routes.post('/spcaseupdate',StateCaseController.storeSP)

routes.post('/statecase', StateCaseController.store)
routes.get('/statecase', StateCaseController.index)


routes.post('/state',StateController.store);


module.exports = routes;