
const { Model, DataTypes, Op } = require('sequelize');

class Statecases extends Model {

  static init(sequelize) {
    super.init({
     
      
      stateId: DataTypes.INTEGER,
      uid: DataTypes.INTEGER,
      cases: DataTypes.INTEGER,
      deaths: DataTypes.INTEGER,
      recovered: DataTypes.INTEGER,
      suspects: DataTypes.INTEGER,
      refuses: DataTypes.INTEGER,
      datetime: DataTypes.DATE
    }, {
      sequelize,
    })
  }
}

module.exports = Statecases;
