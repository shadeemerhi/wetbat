import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// Custom components
import Home from './Home/Home';
import SideNav from './SideNav/SideNav';
import GenericNotFound from '../Other/GenericNotFound';
import PageInProgress from '../Other/PageInProgress';

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
					<Route exact path="/" component={Home} />
					<Route exact path="/quotes" component={PageInProgress} />
					<Route exact path="/leads" component={PageInProgress} />
					<Route path='*' exact={true} component={GenericNotFound} />
				</Switch>
			</Grid>
		</Grid>
	</Router>
);

export default Dashboard;
