import React from 'react';
import styles from './MeetupItem.module.css';
import { Link } from 'react-router-dom';
import Card from '../ui/Card';

export default function MeetupItem(props) {
	return (
		<Card>
			<li className={styles.item}>
				<div className={styles.image}>
					{/* eslint-disable-next-line */}
					<img src={props.image} alt='image' />
				</div>
				<div className={styles.content}>
					<h3>{props.title}</h3>
					<address>{props.address}</address>
					<p>{props.description}</p>
				</div>
				<div className={styles.actions}>
					<Link to='/favorites'>
						<button>go to Favorites</button>
					</Link>
				</div>
			</li>
		</Card>
	);
}
