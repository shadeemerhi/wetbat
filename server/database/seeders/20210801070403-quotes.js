'use strict';
module.exports = {
	up: async (queryInterface, Sequelize) => {
		await queryInterface.bulkInsert(
			'Quotes',
			[
				{
					departureLocation: 'Vancouver',
					destinationLocation: 'Calgary',
					departureDate: new Date('August 9, 2021'),
					returnDate: new Date('August 17, 2021'),
					numberOfTravellers: 4,
					transportationType: 'Rental Car',
					clientName: 'Shadee Merhi',
					clientEmail: 'shadee@gmail.com',
					price: 377.77,
					createdAt: new Date(),
					updatedAt: new Date()
				},
				{
					departureLocation: 'Las Vegas',
					destinationLocation: 'Montreal',
					departureDate: new Date('November 12, 2021'),
					returnDate: new Date('November 27, 2021'),
					numberOfTravellers: 7,
					transportationType: 'Rental Car',
					clientName: 'Emily Jones',
					clientEmail: 'email@gmail.com',
					price: 1201.22,
					createdAt: new Date(),
					updatedAt: new Date()
				}
			],
			{}
		);
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
