import { useContext } from 'react';

// Contexts
import { QuoteContext } from '../../../../../contexts/QuoteContext';

// Component libraries
import DeleteIcon from '@material-ui/icons/Delete';

import './QuoteSectionItemHeader.css';

const QuoteSectionItemHeader = props => {
	const {
		quoteState: { selectedQuote }
	} = useContext(QuoteContext);
	return (
		<div className="QuoteSectionItemHeader">
			<div className="TitleContainer">
				<props.icon className="Icon" />
				<h3 className="Text">{props.headerText}</h3>
			</div>
			{props.headerText === 'Quote Details' && selectedQuote.id && (
				<DeleteIcon onClick={() => props.setOpen(true)} className="DeleteIcon" />
			)}
		</div>
	);
};

export default QuoteSectionItemHeader;
