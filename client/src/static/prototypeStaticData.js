// Component libraries
import HomeIcon from '@material-ui/icons/Home';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import EmojiPeopleIcon from '@material-ui/icons/EmojiPeople';

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
		link: '/',
		icon: HomeIcon
	},
	{
		title: 'Quotes',
		link: '/quotes',
		icon: AttachMoneyIcon
	},
	{
		title: 'Leads',
		link: '/leads',
		icon: EmojiPeopleIcon
	},
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
