import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// Custom components
import Home from './Home/Home';
import SideNav from './SideNav/SideNav';

// Component libraries
import { Grid } from '@material-ui/core';

// Styles
import './Dashboard.css';

const Dashboard = () => (
	<Router>
		<Grid container className="Dashboard">
			<Grid item xs={2}>
				<SideNav />
			</Grid>
			<Grid item xs={10}>
				<Switch>
					<Route path="/" component={Home} />
				</Switch>
			</Grid>
		</Grid>
	</Router>
);

export default Dashboard;
