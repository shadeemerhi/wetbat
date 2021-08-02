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
					<Grid className="FlightInfoItem" item xs={3}>
						<FlightTakeoffIcon className="QuoteDetailsIcon" />
						<p className="HeavyText LocationText">{selectedQuote.departure_location}</p>
                        <p>{formattedDateTimes.departure.date}</p>
                        <p>{formattedDateTimes.departure.time}</p>
					</Grid>
					<Grid className="FlightTimeContainer" item xs={1}>
						<p>Time</p>
					</Grid>
					<Grid className="FlightInfoItem" item xs={3}>
						<FlightLandIcon className="QuoteDetailsIcon" />
						<p className="HeavyText LocationText">{selectedQuote.destination_location}</p>
						<p>{formattedDateTimes.destination.date}</p>
                        <p>{formattedDateTimes.destination.time}</p>
					</Grid>
					<Grid className="TravelDetailsContainer" item xs={5}>
                        <div className="TravelDetailsItem">
                            <p className="HeavyText">Total Cost</p>
                            <p>${selectedQuote.price}</p>
                        </div>
                        <div className="TravelDetailsItem">
                            <p className="HeavyText">Client Name</p>
                            <p>{selectedQuote.client_name}</p>
                        </div>
                        <div className="TravelDetailsItem">
                            <p className="HeavyText">Client Email</p>
                            <p>{selectedQuote.client_email}</p>
                        </div>
                        <div className="TravelDetailsItem">
                            <p className="HeavyText">Travellers</p>
                            <p>{selectedQuote.travellers}</p>
                        </div>
                        <div className="TravelDetailsItem">
                            <p className="HeavyText">Transportation</p>
                            <p>{selectedQuote.transporation_type}</p>
                        </div>
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
