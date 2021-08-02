// Component libraries
import { TableRow, TableCell } from '@material-ui/core';

// Styles
import './PendingQuoteItem.css';

const PendingQuoteItem = ({ quote, selected, dispatch, selectQuote }) => {
	const onSelectQuote = quote => {
		dispatch(selectQuote(quote));
	};

	const CellItem = ({ keyName }) => {
		return (
			<TableCell className="PendingQuoteItemCell" align="center">
				{`${keyName === 'price' ? '$' : ''}${quote[keyName]}`}
			</TableCell>
		);
	};

	const columnKeys = ['id', 'name', 'destination_location', 'price'];

	return (
		<TableRow className={`PendingQuoteItem ${selected ? 'Selected' : ''}`} onClick={() => onSelectQuote(quote)} key={quote.id}>
			{columnKeys.map(keyName => (
				<CellItem key={keyName} keyName={keyName} />
			))}
		</TableRow>
	);
};

export default PendingQuoteItem;
