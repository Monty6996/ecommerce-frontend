import React from 'react';
import './style.css';

const Loading = () => {
	return (
		<>
			<div className='loading position-absolute top-50 start-50 translate-middle'>
				<div className='spinner-grow' role='status'>
					<span className='visually-hidden'>Loading...</span>
				</div>
			</div>
		</>
	);
};

export default Loading;
