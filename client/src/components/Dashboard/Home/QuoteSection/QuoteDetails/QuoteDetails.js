import { useEffect, useState } from 'react';

// Custom components
import QuoteSectionItemHeader from '../QuoteSectionItemHeader';

// Component libraries
import { Grid } from '@material-ui/core';
import ReceiptIcon from '@material-ui/icons/Receipt';
import FlightTakeoffIcon from '@material-ui/icons/FlightTakeoff';
import FlightIcon from '@material-ui/icons/Flight';
import FlightLandIcon from '@material-ui/icons/FlightLand';

// Styles
import './QuoteDetails.css';
import '../../../Dashboard.css';

const formatDateTime = dateTimeString => {
	const dateObject = new Date(Date.parse(dateTimeString));

	const time = dateObject.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true });
	const date = dateObject.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });

	console.log('HERE IS DATE OBJECT', time, date);
	return {
		date,
		time
	};
};

const QuoteDetails = ({ selectedQuote, dispatch }) => {
	const [formattedDateTimes, setFormattedDateTimes] = useState({
		departure: {
			date: '',
			time: ''
		},
		arrival: {
			date: '',
			time: ''
		}
	});

	useEffect(() => {
        // if (!selectedQuote.id) return;
		const departureDateTime = formatDateTime(selectedQuote.departure_datetime);
		const destinationDateTime = formatDateTime(selectedQuote.destination_datetime);

        setFormattedDateTimes({
            departure: departureDateTime,
            destination: destinationDateTime
        })
	}, [selectedQuote]);

	return (
		<div className="DashboardComponent">
			<QuoteSectionItemHeader icon={ReceiptIcon} headerText="Quote Details" />
			{selectedQuote.id ? (
				<Grid container className="QuoteDetails">
					<Grid className="FlightInfoItem" item xs={5}>
						<FlightTakeoffIcon className="QuoteDetailsIcon" />
						<p className="LocationText">{selectedQuote.departure_location}</p>
                        <p>{formattedDateTimes.departure.date}</p>
                        <p>{formattedDateTimes.departure.time}</p>
					</Grid>
					<Grid className="FlightTimeContainer" item xs={2}>
						<p>Flight Time</p>
					</Grid>
					<Grid className="FlightInfoItem" item xs={5}>
						<FlightLandIcon className="QuoteDetailsIcon" />
						<p className="LocationText">{selectedQuote.destination_location}</p>
						<p>{formattedDateTimes.destination.date}</p>
                        <p>{formattedDateTimes.destination.time}</p>
					</Grid>
				</Grid>
			) : (
				<div className="NoSelectedQuote">
					<FlightIcon className="QuoteDetailsIcon NoSelectedQuote" />
					<p className="NoSelectedQuoteText">Select a quote to view details</p>
				</div>
			)}
		</div>
	);
};

export default QuoteDetails;
