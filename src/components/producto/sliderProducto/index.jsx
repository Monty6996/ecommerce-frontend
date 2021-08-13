import React from 'react';

const SliderProducto = ({ imagenes, nombre }) => {
	return (
		<div
			id='carouselProducto'
			className='carousel slide carousel-dark border my-3'
			data-bs-ride='carousel'
			data-bs-interval='false'
			data-bs-touch='true'
		>
			<div className='carousel-inner'>
				{imagenes.map((imagen, index) => (
					<div
						key={index}
						className={`carousel-item  ${
							index === 0 ? 'active' : ''
						}`}
					>
						<img
							src={imagen}
							className='d-block w-100 '
							alt={nombre}
						/>
					</div>
				))}
			</div>
			<div
				className={`${imagenes.length === 1 ? 'visually-hidden' : ''}`}
			>
				<button
					className='carousel-control-prev'
					type='button'
					data-bs-target='#carouselProducto'
					data-bs-slide='prev'
				>
					<span
						className='carousel-control-prev-icon'
						aria-hidden='true'
					/>
					<span className='visually-hidden'>Previous</span>
				</button>
				<button
					className='carousel-control-next'
					type='button'
					data-bs-target='#carouselProducto'
					data-bs-slide='next'
				>
					<span
						className='carousel-control-next-icon'
						aria-hidden='true'
					/>
					<span className='visually-hidden'>Next</span>
				</button>
			</div>
		</div>
	);
};

export default SliderProducto;
