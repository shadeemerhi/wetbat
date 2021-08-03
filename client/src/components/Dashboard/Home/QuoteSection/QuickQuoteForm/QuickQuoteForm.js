import { useState } from 'react';

// Custom components
import QuoteSectionItemHeader from '../QuoteSectionItemHeader';
import DatePicker from './DatePicker';
import ListSelect from './LocationSelect';

// Component libraries
import FastForwardIcon from '@material-ui/icons/FastForward';

// Styles
import './QuickQuoteForm.css';
import '../../../Dashboard.css';
import { Grid, TextField } from '@material-ui/core';

// Static imports (prototype data)
import { DEFAULT_FORM, prototypeCities, prototypeTransportationTypes } from '../../../../../static/prototype';

const QuickQuoteForm = () => {
	const [formInputs, setFormInputs] = useState(DEFAULT_FORM);

	const handleChange = ({ target: { name, value } }) => {
		setFormInputs({
			...formInputs,
			[name]: value
		});
	};

	const handleDateChange = (name, date) => {
		setFormInputs({
			...formInputs,
			[name]: date
		});
	};

	const handleSubmit = event => {
		event.preventDefault();
		console.log('WE SUBMITTED THE FORM');
	};

	return (
		<div className="DashboardComponent">
			<QuoteSectionItemHeader icon={FastForwardIcon} headerText="Quick Quote" />
			<form style={{ padding: '10px' }} onSubmit={handleSubmit}>
				<Grid container>
					<Grid container>
						<Grid item xs={6}>
							<ListSelect
								list={prototypeCities}
								name="departureLocation"
								value={formInputs.departureLocation}
								labelText="From"
								handleChange={handleChange}
							/>
						</Grid>
						<Grid item xs={6}>
							<ListSelect
								list={prototypeCities}
								name="destinationLocation"
								value={formInputs.destinationLocation}
								labelText="Destination"
								handleChange={handleChange}
							/>
						</Grid>
					</Grid>
					<Grid container>
						<Grid item xs={6}>
							<DatePicker
								name="departureDate"
								value={formInputs.departureDate}
								labelText="Departure Date"
								handleDateChange={handleDateChange}
							/>
						</Grid>
						<Grid item xs={6}>
							<DatePicker
								name="returnDate"
								value={formInputs.returnDate}
								labelText="Return Date"
								handleDateChange={handleDateChange}
							/>
						</Grid>
					</Grid>
					<Grid container>
						<Grid item xs={6}>
							<ListSelect
								list={[1, 2, 3, 4, 5, 6, 7, 8]}
								name="numberOfTravellers"
								value={formInputs.numberOfTravellers}
								labelText="Travellers"
								handleChange={handleChange}
							/>
						</Grid>
						<Grid item xs={6}>
							<ListSelect
								list={prototypeTransportationTypes}
								name="transportationType"
								value={formInputs.transportationType}
								labelText="Transportation"
								handleChange={handleChange}
							/>
						</Grid>
					</Grid>
					<Grid container>
						<Grid item xs={6}>
							<TextField
								className="FormControl"
								required
								id="outlined-required"
								name="clientName"
								label="Client Name"
								value={formInputs.clientName}
								onChange={handleChange}
								variant="filled"
							/>
						</Grid>
						<Grid item xs={6}>
							<TextField
								className="FormControl"
								required
								id="outlined-required"
								name="clientEmail"
								label="Client Email"
								type="email"
								value={formInputs.clientEmail}
								onChange={handleChange}
								variant="filled"
							/>
						</Grid>
					</Grid>
				</Grid>
			</form>
		</div>
	);
};

export default QuickQuoteForm;
