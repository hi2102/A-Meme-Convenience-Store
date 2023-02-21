import React from 'react';

export default function Modal({ onCancel, onConfirm }) {
	return (
		<div className='modal'>
			<h1>Are you sure?</h1>
			<div>
				<button onClick={onCancel} className='btn btn--alt'>
					Cancel
				</button>
				<button onClick={onConfirm} className='btn'>
					Confirm
				</button>
			</div>
		</div>
	);
}
