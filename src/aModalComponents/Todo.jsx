import React, { useState } from 'react';
import Modal from './Modal';
import Backdrop from './Backdrop';

export default function Todo({ text }) {
	const [isModalOpen, setIsModalOpen] = useState(false);
	const handleDelete = () => setIsModalOpen(true);
	const handleClose = () => setIsModalOpen(false);
	const onCancel = () => handleClose();
	const onConfirm = () => handleClose();
	return (
		<div className='card'>
			<h1>{text}</h1>
			<h3>This is {text} Page</h3>
			<div className='actions'>
				<button className='btn' onClick={handleDelete}>
					Delete
				</button>
			</div>
			{isModalOpen && <Modal onCancel={onCancel} onConfirm={onConfirm} />}
			{isModalOpen && <Backdrop onClose={handleClose} />}
		</div>
	);
}
