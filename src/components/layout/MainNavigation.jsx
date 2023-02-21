import React from 'react';
import { Link } from 'react-router-dom';
import styles from './MainNavigation.module.css';

export default function MainNavigation() {
	return (
		<header className={styles.header}>
			<div className={styles.logo}>React MeetUps</div>
			<nav>
				<ul>
					<li>
						<Link to='/'>All Meet ups</Link>
					</li>
					<li>
						<Link to='new-meetup/'>New Meet Up</Link>
					</li>
					<li>
						<Link to='/favorites'>Favorites</Link>
					</li>
				</ul>
			</nav>
		</header>
	);
}
