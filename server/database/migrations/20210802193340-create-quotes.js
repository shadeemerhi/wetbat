'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Quotes', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      departure_location: {
        allowNull: false,
        type: Sequelize.STRING
      },
      destination_location: {
        allowNull: false,
        type: Sequelize.STRING
      },
      departure_datetime: {
        allowNull: false,
        type: Sequelize.DATE
      },
      return_datetime: {
        allowNull: false,
        type: Sequelize.DATE
      },
      travellers: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      transporation_type: {
        allowNull: false,
        type: Sequelize.STRING
      },
      client_name: {
        allowNull: false,
        type: Sequelize.STRING
      },
      client_email: {
        allowNull: false,
        type: Sequelize.STRING
      },
      price: {
        allowNull: false,
        type: Sequelize.DECIMAL
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
    await queryInterface.dropTable('Quotes');
  }
};