
const { Model, DataTypes, Op } = require('sequelize');

class Statecases extends Model {

  static init(sequelize) {
    super.init({
      id: DataTypes.INTEGER,
      stateId: DataTypes.INTEGER,
      cases: DataTypes.INTEGER,
      deaths: DataTypes.INTEGER,
      recoverd: DataTypes.INTEGER,
      suspects: DataTypes.INTEGER,
      refuses: DataTypes.INTEGER,
      datetime: DataTypes.DATE
    }, {
      sequelize,
    })
  }
}

module.exports = Statecases;
