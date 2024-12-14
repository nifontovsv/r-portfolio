import React from 'react';
import styles from './NavbarItem.module.scss';
import { Link } from 'react-router';

function NavbarItem({ menu: { href, title } }) {
	return (
		<li className={styles.nav__list_item}>
			<Link className={styles.nav__list_link} to={href}>
				{title}
			</Link>
		</li>
	);
}

export default NavbarItem;
