// Custom components
import QuoteSectionItemHeader from '../QuoteSectionItemHeader';
import PendingQuoteItem from './PendingQuoteItem';

// Component libraries
import RestoreIcon from '@material-ui/icons/Restore';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

// Styles
import './PendingQuotes.css';
import '../../../Dashboard.css';

const PendingQuotes = ({ quoteState, dispatch, selectQuote }) => {
	const columnNames = ['ID #', 'NAME', 'DESTINATION', 'PRICE'];

	return (
		<div className="PendingQuotes DashboardComponent">
			<QuoteSectionItemHeader icon={RestoreIcon} headerText="Pending Quotes" />
			<TableContainer>
				<Table aria-label="simple table">
					<TableHead>
						<TableRow>
							{columnNames.map(columnName => (
								<TableCell key={columnName} align="center">
									{columnName}
								</TableCell>
							))}
						</TableRow>
					</TableHead>
					<TableBody>
						{quoteState.quotes.map(quote => (
							<PendingQuoteItem
								key={quote.id}
								quote={quote}
								selected={quote.id === quoteState.selectedQuote.id}
								dispatch={dispatch}
								selectQuote={selectQuote}
							/>
						))}
					</TableBody>
				</Table>
			</TableContainer>
		</div>
	);
};

export default PendingQuotes;
