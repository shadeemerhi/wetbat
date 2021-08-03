import { useContext } from 'react';

// Custom components
import QuickQuoteForm from './QuickQuoteForm/QuickQuoteForm';
import PendingQuotes from './PendingQuotes/PendingQuotes';
import QuoteDetails from './QuoteDetails/QuoteDetails';

// Contexts
import { QuoteContext } from '../../../../contexts/QuoteContext';

// Component libraries
import { Grid } from '@material-ui/core';

// Styles
import './QuoteSection.css';

const QuoteSection = () => {
	const { quoteState, dispatch, selectQuote, onCreateQuote } = useContext(QuoteContext);

	return (
		<Grid container>
			<Grid container direction="row">
				<Grid item xs={6}>
					<QuickQuoteForm quoteState={quoteState} onCreateQuote={onCreateQuote} />
				</Grid>
				<Grid item xs={6}>
					<PendingQuotes quoteState={quoteState} dispatch={dispatch} selectQuote={selectQuote} />
				</Grid>
			</Grid>
			<Grid item xs={12}>
				<QuoteDetails selectedQuote={quoteState.selectedQuote} dispatch={dispatch} />
			</Grid>
		</Grid>
	);
};

export default QuoteSection;
