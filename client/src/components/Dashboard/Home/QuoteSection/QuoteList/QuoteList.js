import { useContext } from 'react';

// Contexts
import { QuoteContext } from '../../../../../contexts/QuoteContext';

const QuoteList = () => {
	const {
		quoteState,
		dispatch
	} = useContext(QuoteContext);

	console.log('HERE IS STATE IN QUOTE LIST', quoteState);
	return (
		<div>
			<p>Quote List</p>
		</div>
	);
};

export default QuoteList;
