// Custom components
import Dashboard from './Dashboard/Dashboard';
import Header from './Header';

// Component libraries
import { Grid } from '@material-ui/core';

function App() {
	return (
		<Grid container>
			<Grid item xs={12}>
				<Header />
			</Grid>
			<Grid item xs={12}>
				<Dashboard />
			</Grid>
		</Grid>
	);
}

export default App;
