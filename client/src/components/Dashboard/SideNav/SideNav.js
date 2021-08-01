import React from 'react';
import './SideNav.css'

import { Link } from 'react-router-dom';

const SideNav = () => {
	return (
		<div className="SideNav">
			<Link to="/">
				Home
			</Link>
			<Link to="/numbers">
				Numbers
			</Link>
		</div>
	)
};

export default SideNav;
