'use strict';


module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('statecases', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      stateId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'States', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      uid: {
        allowNull: false,
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      cases: {
        allowNull: false,
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      deaths: {
        allowNull: false,
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      suspects: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      refuses: {
        type: Sequelize.INTEGER
      },
      recovered: {
        type: Sequelize.INTEGER
      },
      datetime: {
        allowNull: false,
        type: Sequelize.DATE
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('statecases');
  }
};