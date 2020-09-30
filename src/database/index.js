const Sequelize = require('sequelize');
const dbConfig = require('../config/database');

const SPcasos = require('../models/spcasos');


const connection = new Sequelize(dbConfig);

SPcasos.init(connection);

module.exports = connection;