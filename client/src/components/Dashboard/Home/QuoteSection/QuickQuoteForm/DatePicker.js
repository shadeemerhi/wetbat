import { useState } from 'react';

// Component libraries
import 'date-fns';
import DateFnsUtils from '@date-io/date-fns';
import { MuiPickersUtilsProvider, KeyboardTimePicker, KeyboardDatePicker } from '@material-ui/pickers';

import { Grid } from '@material-ui/core';

// Styles
import './QuickQuoteForm.css';

const DatePicker = ({ name, value, handleDateChange }) => {
	const [selectedDate, setSelectedDate] = useState(new Date());

    const onDateChange = date => {
		console.log('HERE IS THE DATE', new Date(date).toJSON());
        handleDateChange(name, date);
    
	};
	return (
		<MuiPickersUtilsProvider utils={DateFnsUtils}>
			<Grid container justify="space-evenly">
				<KeyboardDatePicker
					className="FormControl"
					variant="filled"
					data-testid="date-picker"
					disablePast={true}
					margin="normal"
					name="departureDate"
					id="date-picker-dialog"
					label="Departure Date"
					format="MM/dd/yyyy"
					value={value}
					onChange={onDateChange}
					KeyboardButtonProps={{
						'aria-label': 'change date'
					}}
				/>
			</Grid>
		</MuiPickersUtilsProvider>
	);
};

export default DatePicker;
