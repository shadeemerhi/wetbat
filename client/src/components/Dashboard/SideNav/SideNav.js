import { useState } from 'react';

// Component libraries
import HomeIcon from '@material-ui/icons/Home';

// Static imports (prototype data)
import { sideNavItems } from '../../../static/prototype';

// Styles
import './SideNav.css';

import { Link } from 'react-router-dom';

const SideNav = () => {
	const [selected, setSelected] = useState('Home');
	return (
		<div className="SideNav">
			{sideNavItems.map(item => (
				<Link key={item.title} to={item.link} onClick={() => setSelected(item.title)} className="SideNavItemLink">
					<div className={`SideNavItem ${item.title === selected ? 'Selected' : ''}`}>
						<HomeIcon className="SideNavItemLinkIcon" />
						<p>{item.title}</p>
					</div>
				</Link>
			))}
		</div>
	);
};

export default SideNav;
