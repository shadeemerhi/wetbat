'use strict';
module.exports = {
	up: async (queryInterface, Sequelize) => {
		await queryInterface.bulkInsert(
			'Quotes',
			[
				{
					departure_location: 'Vancouver',
					destination_location: 'Calgary',
					departure_datetime: new Date('August 9, 2021'),
					return_datetime: new Date('August 17, 2021'),
					travellers: 4,
					transporation_type: 'Rental Car',
					client_name: 'Shadee Merhi',
					client_email: 'shadee@gmail.com',
					price: 377.77,
					createdAt: new Date(),
					updatedAt: new Date()
				},
				{
					departure_location: 'Las Vegas',
					destination_location: 'Montreal',
					departure_datetime: new Date('November 12, 2021'),
					return_datetime: new Date('November 27, 2021'),
					travellers: 7,
					transporation_type: 'Rental Car',
					client_name: 'Emily Jones',
					client_email: 'email@gmail.com',
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
