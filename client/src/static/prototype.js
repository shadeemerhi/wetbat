export const DEFAULT_FORM = {
	departureLocation: null,
	departureDate: new Date(),
	destinationLocation: null,
	returnDate: new Date(),
	numberOfTravellers: null,
	clientName: '',
	clientEmail: '',
	transportationType: '',
	price: null
};

export const prototypeCities = [
	{
		title: 'Vancouver'
	},
	{
		title: 'Calgary'
	},
	{
		title: 'Montreal'
	},
	{
		title: 'Toronto'
	},
	{
		title: 'Edmonton'
	},
	{
		title: 'Ottawa'
	},
	{
		title: 'Mississauga'
	},
	{
		title: 'Winnipeg'
	},
	{
		title: 'Québec'
	},
	{
		title: 'Hamilton'
	},
	{
		title: 'Brampton'
	},
	{
		title: 'Surrey'
	},
	{
		title: 'Kelowna'
	},
	{
		title: 'Victoria'
	}
];

export const prototypeTransportationTypes = [
	{
		title: 'None'
	},
	{
		title: 'Rental Car'
	}
];
