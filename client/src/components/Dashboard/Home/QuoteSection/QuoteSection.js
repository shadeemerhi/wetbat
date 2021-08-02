// Custom components
import QuickQuoteForm from "./QuickQuoteForm/QuickQuoteForm";
import PendingQuotes from "./QuoteList/PendingQuotes";

// Component libraries
import { Grid } from "@material-ui/core";

// Styles
import './QuoteSection.css';

const QuoteSection = () => (
	<Grid container>
		<Grid item xs={5}>
			<QuickQuoteForm />
		</Grid>
		<Grid item xs={7}>
			<PendingQuotes />
		</Grid>
	</Grid>
);

export default QuoteSection;
