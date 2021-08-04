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
				{keyName === 'price' ? `$${parseFloat(quote[keyName]).toFixed(2)}` : quote[keyName]}
			</TableCell>
		);
	};

	const columnKeys = ['id', 'clientName', 'destinationLocation', 'price'];

	return (
		<TableRow
			className={`PendingQuoteItem ${selected ? 'Selected' : ''}`}
			onClick={() => onSelectQuote(quote)}
			key={quote.id}
		>
			{columnKeys.map(keyName => (
				<CellItem key={keyName} keyName={keyName} />
			))}
		</TableRow>
	);
};

export default PendingQuoteItem;
