import React from 'react';
import { Link } from 'react-router-dom';

export default function Favorites({ title }) {
	return (
		<>
			<h1>{title}</h1>
			<h2>This is Favorites Page</h2>
			<Link to='/'>
				<button>go to Home</button>
			</Link>
		</>
	);
}
