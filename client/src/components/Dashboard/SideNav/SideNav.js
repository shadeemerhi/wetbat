// Component libraries
import HomeIcon from '@material-ui/icons/Home';

// Styles
import './SideNav.css';

import { Link } from 'react-router-dom';

const SideNav = () => {
	return (
		<div className="SideNav">
			<Link className="SideNavItemLink">
				<div className="SideNavItem">
					<HomeIcon className="SideNavItemLinkIcon" />
					<p>Home</p>
				</div>
			</Link>
		</div>
	);
};

export default SideNav;
