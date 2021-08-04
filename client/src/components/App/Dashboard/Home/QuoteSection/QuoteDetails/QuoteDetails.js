import { useEffect, useState } from 'react';

// Custom components
import QuoteSectionItemHeader from '../QuoteSectionItemHeader';

// Component libraries
import { Grid } from '@material-ui/core';
import ReceiptIcon from '@material-ui/icons/Receipt';
import FlightTakeoffIcon from '@material-ui/icons/FlightTakeoff';
import FlightIcon from '@material-ui/icons/Flight';
import FlightLandIcon from '@material-ui/icons/FlightLand';
import EventIcon from '@material-ui/icons/Event';

// Styles
import './QuoteDetails.css';
import '../../../Dashboard.css';

const formatDateTime = dateString => {
	const dateObject = new Date(Date.parse(dateString));

	const date = dateObject.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
    return date;
};

const QuoteDetails = ({ selectedQuote, dispatch }) => {
	const [formattedDates, setFormattedDates] = useState({
        departureDate: '',
        returnDate: ''
	});

	useEffect(() => {
		const departureDate = formatDateTime(selectedQuote.departureDate);
		const returnDate = formatDateTime(selectedQuote.returnDate);

		setFormattedDates({
            departureDate,
            returnDate
		});
	}, [selectedQuote]);

	return (
		<div className="DashboardComponent">
			<QuoteSectionItemHeader icon={ReceiptIcon} headerText="Quote Details" />
			{selectedQuote.id ? (
				<Grid container className="QuoteDetails">
					<Grid item xs={6}>
						<Grid container>
							<Grid item xs={6}>
								<Grid container className="HeavyText" alignItems="center">
									<EventIcon className="QuoteDetailsIcon" />
									<p>{formattedDates.departureDate}</p>
								</Grid>
								<Grid container alignItems="center">
									<FlightTakeoffIcon className="QuoteDetailsIcon" />
									<p>{selectedQuote.departureLocation}</p>
								</Grid>
								<Grid container alignItems="center">
									<FlightLandIcon className="QuoteDetailsIcon" />
									<p>{selectedQuote.destinationLocation}</p>
								</Grid>
							</Grid>
							<Grid item xs={6}>
								<Grid container className="HeavyText" alignItems="center">
									<EventIcon className="QuoteDetailsIcon" />
									<p>{formattedDates.returnDate}</p>
								</Grid>
								<Grid container alignItems="center">
									<FlightTakeoffIcon className="QuoteDetailsIcon" />
									<p>{selectedQuote.destinationLocation}</p>
								</Grid>
								<Grid container alignItems="center">
									<FlightLandIcon className="QuoteDetailsIcon" />
									<p>{selectedQuote.departureLocation}</p>
								</Grid>
							</Grid>
						</Grid>
					</Grid>
					<Grid item xs={6}>
						<Grid container className="TravelDetailsItem">
							<p className="HeavyText">Total Cost</p>
							<p>${parseFloat(selectedQuote.price).toFixed(2)}</p>
						</Grid>
						<Grid container className="TravelDetailsItem">
							<p className="HeavyText">Client Name</p>
							<p>{selectedQuote.clientName}</p>
						</Grid>
						<Grid container className="TravelDetailsItem">
							<p className="HeavyText">Client Email</p>
							<p>{selectedQuote.clientEmail}</p>
						</Grid>
						<Grid container className="TravelDetailsItem">
							<p className="HeavyText">Travellers</p>
							<p>{selectedQuote.numberOfTravellers}</p>
						</Grid>
						<Grid container className="TravelDetailsItem">
							<p className="HeavyText">Transportation</p>
							<p>{selectedQuote.transportationType}</p>
						</Grid>
					</Grid>
				</Grid>
			) : (
				<Grid container className="NoSelectedQuote">
					<FlightIcon className="QuoteDetailsIcon NoSelectedQuote" />
					<p className="NoSelectedQuoteText">Select a quote to view details</p>
				</Grid>
			)}
		</div>
	);
};

export default QuoteDetails;
