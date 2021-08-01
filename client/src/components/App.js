// Custom components
import Dashboard from './Dashboard/Dashboard';
import Header from './Header';

// Component libraries
import { Grid } from '@material-ui/core';

// Contexts
import { QuoteProvider } from '../contexts/QuoteContext';

function App() {
	return (
		<QuoteProvider>
			<Grid container>
				<Grid item xs={12}>
					<Header />
				</Grid>
				<Grid item xs={12}>
					<Dashboard />
				</Grid>
			</Grid>
		</QuoteProvider>
	);
}

export default App;
