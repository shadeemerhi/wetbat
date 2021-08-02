// Custom components
import QuoteSectionItemHeader from '../QuoteSectionItemHeader';

// Component libraries
import ReceiptIcon from '@material-ui/icons/Receipt';
import FlightTakeoffIcon from '@material-ui/icons/FlightTakeoff';

// Styles
import './QuoteDetails.css';
import '../../../Dashboard.css';

const QuoteDetails = ({ quoteState, dispatch }) => {

	return (
		<div className="QuoteDetails DashboardComponent">
			<QuoteSectionItemHeader icon={ReceiptIcon} headerText="Quote Details" />
			{quoteState.selectedQuote ? (
				<div>{quoteState.selectedQuote.name}</div>
			) : (
				<div className="NoSelectedQuote">
					<FlightTakeoffIcon className="NoSelectedQuoteIcon" />
					<p>Select a Quote to view details</p>
				</div>
			)}
		</div>
	);
};

export default QuoteDetails;
