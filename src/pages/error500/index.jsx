import React from 'react';

import { useLocation } from 'wouter';

const Error500 = () => {
	const img = 'img/500.png';
	const [, setLocation] = useLocation();
	return (
		<>
			<div className='container'>
				<div className='row justify-content-center '>
					<figure className='col-12 col-md-4'>
						<img
							src={img}
							alt='404 Not Found'
							className='img-fluid'
						/>
					</figure>
					<div className='col-12 col-md-5'>
						<div className='row h-100 align-items-center content is-large'>
							<div className='col'>
								<h3 className='title is-1 text-center'>
									OH NO!
								</h3>
								<p className='text-center'>
									Sucedió Algo inesperado!
								</p>
								<div className='row justify-content-center'>
									<button
										onClick={() => setLocation('/')}
										className='button is-link col-5 col-md-4'
									>
										Regresar a Inicio
									</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Error500;
