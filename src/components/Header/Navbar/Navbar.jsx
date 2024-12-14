import React from 'react';
import styles from './Navbar.module.scss';
import NavbarItem from '../Navbar/NavbarItem/NavbarItem';

let listMenu = [
	{
		title: 'Profile',
		href: '/profile',
		id: 1,
	},
	{
		title: 'Users',
		href: '/users',
		id: 2,
	},
	{
		title: 'Skills',
		href: '/skills',
		id: 3,
	},
	{
		title: 'Portfolio',
		href: '/portfolio',
		id: 4,
	},
	{
		title: 'Contacts',
		href: '/contacts',
		id: 5,
	},
];

function Navbar() {
	return (
		<nav className={styles.nav}>
			<ul className={styles.nav__list}>
				{listMenu.map(item => (
					<NavbarItem menu={item} />
				))}
			</ul>
		</nav>
	);
}

export default Navbar;
