const express = require('express');
const SPcasoContoller = require('./controllers/SPcasoController');


const routes = express.Router();

routes.post('/spcaso', SPcasoContoller.store)


routes.get('/', (req, res) => {
    return res.json({ hello: 'World' })
})

module.exports = routes;