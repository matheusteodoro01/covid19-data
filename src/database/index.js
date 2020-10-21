const Sequelize = require('sequelize');
const dbConfig = require('../config/database');

const Statecases = require('../models/statecases');

const States = require('../models/states');


const connection = new Sequelize(dbConfig);

States.init(connection);
Statecases.init(connection);

module.exports = connection;