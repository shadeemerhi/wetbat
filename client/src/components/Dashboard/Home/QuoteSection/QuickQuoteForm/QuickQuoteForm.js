import { useState } from 'react';

// Custom components
import QuoteSectionItemHeader from '../QuoteSectionItemHeader';
import DatePicker from './DatePicker';

// Component libraries
import FastForwardIcon from '@material-ui/icons/FastForward';

// Styles
import './QuickQuoteForm.css';
import '../../../Dashboard.css';
import { Button, Grid, TextField, Select, MenuItem, InputLabel, FormControl } from '@material-ui/core';



const QuickQuoteForm = () => {
	const [formInputs, setFormInputs] = useState({
		departureLocation: null,
		departureDate: new Date(),
		destinationLocation: null,
		returnDate: new Date(),
		numberOfTravellers: null,
		clientName: '',
		clientEmail: '',
		transportationType: ''
	});

	const handleChange = ({ target: { name, value } }) => {
		console.log('INSIDE CHANGE', name, value);
		setFormInputs({
			...formInputs,
			[name]: value
		});
	};

	const handleDateChange = (name, date) => {
		setFormInputs({
			...formInputs,
			[name]: date
		})
	}

	const handleSubmit = event => {
		event.preventDefault();
		console.log('WE SUBMITTED THE FORM');
	};

	const [selectedDate, setSelectedDate] = useState(new Date());

	return (
		<div className="QuickQuoteForm DashboardComponent">
			<QuoteSectionItemHeader icon={FastForwardIcon} headerText="Quick Quote" />
			<form style={{ padding: '10px' }} onSubmit={handleSubmit}>
				<Grid container>
					<Grid item xs={6}>
						<FormControl variant="filled" className="FormControl">
							<InputLabel id="demo-simple-select-label">From</InputLabel>
							<Select
								labelId="demo-simple-select-label"
								id="demo-simple-select"
								name="departureLocation"
								value={formInputs.departureLocation}
								onChange={handleChange}
							>
								<MenuItem value={10}>Ten</MenuItem>
								<MenuItem value={20}>Twenty</MenuItem>
								<MenuItem value={30}>Thirty</MenuItem>
							</Select>
						</FormControl>
						<DatePicker name="departureDate" value={formInputs.departureDate} handleDateChange={handleDateChange} />
					</Grid>
					<Grid item xs={6}>
						<TextField
							className="FormControl"
							required
							id="outlined-required"
							name="departureLocation"
							label="Required"
							variant="filled"
							value={formInputs.departureLocation}
							onChange={handleChange}
							/>
						<TextField
							className="FormControl"
							required
							id="outlined-required"
							label="Required"
							defaultValue="From"
							variant="filled"
							/>
						<TextField
							className="FormControl"
							required
							id="outlined-required"
							label="Required"
							defaultValue="From"
							variant="filled"
						/>
					</Grid>
				</Grid>
			</form>
		</div>
	);
};

export default QuickQuoteForm;
