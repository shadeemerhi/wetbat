// Component libraries
import 'date-fns';
import DateFnsUtils from '@date-io/date-fns';
import { MuiPickersUtilsProvider, KeyboardDatePicker } from '@material-ui/pickers';
import { Grid } from '@material-ui/core';

// Styles
import './QuickQuoteForm.css';

const DatePicker = ({ name, value, labelText, handleDateChange }) => {
	const onDateChange = date => {
		handleDateChange(name, date);
	};
	return (
		<MuiPickersUtilsProvider utils={DateFnsUtils}>
			<Grid container justify="space-evenly">
				<KeyboardDatePicker
					required
					variant="filled"
					className="FormControl"
					data-testid="date-picker"
					disablePast={true}
					name="departureDate"
					id="date-picker-dialog"
					label={labelText}
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
