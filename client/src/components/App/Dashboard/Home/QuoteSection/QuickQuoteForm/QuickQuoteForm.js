import { useState } from 'react';

// Custom components
import QuoteSectionItemHeader from '../QuoteSectionItemHeader';
import DatePicker from './DatePicker';
import ListSelect from './ListSelect';

// Component libraries
import FastForwardIcon from '@material-ui/icons/FastForward';
import CircularProgress from '@material-ui/core/CircularProgress';

// Styles
import './QuickQuoteForm.css';
import '../../../Dashboard.css';
import { Grid, TextField, Button } from '@material-ui/core';

// Static imports (prototype data)
import { DEFAULT_FORM, prototypeCities, prototypeTransportationTypes } from '../../../../../../static/prototypeStaticData';

const QuickQuoteForm = ({ quoteState, dispatch, onCreateQuote, setError }) => {
	const [formInputs, setFormInputs] = useState(DEFAULT_FORM);

	const handleChange = ({ target: { name, value } }) => {
		if (name === 'price' && value < 0) return;
		setFormInputs({
			...formInputs,
			[name]: value
		});
	};

	const handleDateChange = (name, date) => {
		setFormInputs({
			...formInputs,
			[name]: date.toJSON()
		});
	};

	const handleSubmit = event => {
		dispatch(setError(''));
		event.preventDefault();
		if (formInputs.departureLocation === formInputs.destinationLocation) {
			dispatch(setError('Departure and Destination cities are the same'));
			return;
		}
		onCreateQuote(formInputs);
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
					<Grid container>
						<Grid item xs={6}>
							<TextField
								className="FormControl"
								required
								id="filled-number"
								label="Price"
								name="price"
								type="number"
								value={formInputs.price}
								onChange={handleChange}
								variant="filled"
							/>
						</Grid>
						<Grid item xs={6}>
							<Button
								className="SubmitButton FormControl"
								type="submit"
								variant="contained"
								color="primary"
							>
								{quoteState.loading ? <CircularProgress size={30} color="default" /> : 'Create Quote'}
							</Button>
						</Grid>
					</Grid>
				</Grid>
			</form>
		</div>
	);
};

export default QuickQuoteForm;
