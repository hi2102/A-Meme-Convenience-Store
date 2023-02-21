import React from 'react';
import MainNavigation from './MainNavigation';
import styles from './Layout.module.css';

export default function Layout({ children }) {
	return (
		<div>
			<MainNavigation />
			<main className={styles.main}>{children}</main>
		</div>
	);
}
