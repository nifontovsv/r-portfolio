import React from 'react';
import styles from './Header.module.scss';
import Navbar from '../Header/Navbar/Navbar';

function Header(props) {
	return (
		<div className={styles.header}>
			<Navbar menu={props.menu} />
		</div>
	);
}

export default Header;
