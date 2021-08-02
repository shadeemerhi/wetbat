import { useContext } from 'react';

// Custom components
import QuoteSectionItemHeader from '../QuoteSectionItemHeader';

// Component libraries
import RestoreIcon from '@material-ui/icons/Restore';

// Contexts
import { QuoteContext } from '../../../../../contexts/QuoteContext';

// Styles
import './PendingQuotes.css';
import '../../../Dashboard.css';

const QuoteList = () => {
	const {
		quoteState,
		dispatch
	} = useContext(QuoteContext);

	console.log('HERE IS STATE IN QUOTE LIST', quoteState);
	return (
		<div className="PendingQuotes DashboardComponent">
			<QuoteSectionItemHeader icon={RestoreIcon} headerText='Pending Quotes' />
			<div className="PendingQuotesList"></div>
		</div>
	);
};

export default QuoteList;
