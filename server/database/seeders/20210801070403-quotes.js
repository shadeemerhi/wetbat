'use strict';
module.exports = {
	up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Quotes', [{
      departure_location: 'Vancouver',
      destination_location: 'Calgary',
      travellers: 4,
      transporation_type: 'Rental Car',
      name: 'Shadee Merhi',
      price: 377.77,
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
    /**
		 * Add seed commands here.
		 *
		 * Example:
		 * await queryInterface.bulkInsert('People', [{
		 *   name: 'John Doe',
		 *   isBetaMember: false
		 * }], {});
		 */
	},

	down: async (queryInterface, Sequelize) => {
		/**
		 * Add commands to revert seed here.
		 *
     * Example:
		 * await queryInterface.bulkDelete('People', null, {});
		 */
    await queryInterface.bulkDelete('Quotes', null, {});
	}
};
