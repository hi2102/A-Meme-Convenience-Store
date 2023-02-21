import React from 'react';
import { Link } from 'react-router-dom';

export default function NewMeetUp({ title }) {
	return (
		<>
			<h1>{title}</h1>
			<h2>This is New Meet Up Page</h2>
			<Link to='/'>
				<button>go to Home</button>
			</Link>
		</>
	);
}
