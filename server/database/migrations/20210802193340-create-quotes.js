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
      departureLocation: {
        allowNull: false,
        type: Sequelize.STRING
      },
      destinationLocation: {
        allowNull: false,
        type: Sequelize.STRING
      },
      departureDate: {
        allowNull: false,
        type: Sequelize.DATE
      },
      returnDate: {
        allowNull: false,
        type: Sequelize.DATE
      },
      numberOfTravellers: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      transportationType: {
        allowNull: false,
        type: Sequelize.STRING
      },
      clientName: {
        allowNull: false,
        type: Sequelize.STRING
      },
      clientEmail: {
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