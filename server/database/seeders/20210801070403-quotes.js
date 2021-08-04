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
				},
				{
					departureLocation: 'Toronto',
					destinationLocation: 'Kelowna',
					departureDate: new Date('November 24, 2021'),
					returnDate: new Date('December 11, 2021'),
					numberOfTravellers: 3,
					transportationType: 'None',
					clientName: 'Doug Adams',
					clientEmail: 'dougadams@gmail.com',
					price: 1602.28,
					createdAt: new Date(),
					updatedAt: new Date()
				},
				{
					departureLocation: 'Toronto',
					destinationLocation: 'Edmonton',
					departureDate: new Date('July 21, 2022'),
					returnDate: new Date('July 23, 2022'),
					numberOfTravellers: 2,
					transportationType: 'None',
					clientName: 'Rachel Holmes',
					clientEmail: 'rachel@gmail.com',
					price: 456.79,
					createdAt: new Date(),
					updatedAt: new Date()
				},
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
