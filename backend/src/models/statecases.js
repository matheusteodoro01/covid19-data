
const { Model, DataTypes } = require('sequelize');

class Statecases extends Model {

  static init(sequelize) {
    super.init({
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
  static associate(models) {
    this.belongsTo(models.States, { foreignKey: 'stateId'});
  }
}

module.exports = Statecases;
