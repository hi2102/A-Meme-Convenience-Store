import React from 'react';
import styles from './Card.moduel.css';

export default function Card({ children }) {
	return <div className={styles.card}>{children}</div>;
}
