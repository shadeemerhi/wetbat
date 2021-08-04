// Custom components
import Dashboard from './App/Dashboard/Dashboard';
import Header from './App/Header/Header';

import { QuoteProvider } from '../contexts/QuoteContext';

// Component libraries
import { Grid } from '@material-ui/core';

function App() {
	return (
		<Grid container>
			<Grid item xs={12}>
				<Header />
			</Grid>
			<Grid item xs={12}>
				<QuoteProvider>
					<Dashboard />
				</QuoteProvider>
			</Grid>
		</Grid>
	);
}

export default App;
