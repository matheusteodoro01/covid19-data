
const { Model, DataTypes, Op } = require('sequelize');

class States extends Model {

  static init(sequelize) {
    super.init({
    
      uf: DataTypes.STRING,
      state: DataTypes.STRING,
    }, {
      sequelize,
    })
  }
}

module.exports = States;
