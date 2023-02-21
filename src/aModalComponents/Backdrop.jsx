import React from 'react';

export default function Backdrop({ onClose }) {
	return <div className='backdrop' onClick={onClose} />;
}
