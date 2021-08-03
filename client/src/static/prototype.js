export const DEFAULT_FORM = {
	departureLocation: '',
	departureDate: new Date().toJSON(),
	destinationLocation: '',
	returnDate: new Date().toJSON(),
	numberOfTravellers: 1,
	clientName: '',
	clientEmail: '',
	transportationType: '',
	price: ''
};

export const sideNavItems = [
	{
		title: 'Home',
		link: '/'
	}
]

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
