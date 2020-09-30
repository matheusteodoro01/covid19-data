const { Model, DataTypes } = require('sequelize')


class SPcasos extends Model {
  static init(sequelize) {
    super.init({
      date: DataTypes.DATE,
      week: DataTypes.INTEGER,
      cases: DataTypes.INTEGER
    }, {
      sequelize,
    })
  }
}

module.exports = SPcasos;