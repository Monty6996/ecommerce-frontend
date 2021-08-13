import React from 'react';
import { useLocation } from 'wouter';

const Success = () => {
	const [, setLocation] = useLocation();
	return (
		<>
			<div className='row  content is-medium justify-content-center'>
				<h2 className='title is-2 text-center col-12'>
					Registro Exitoso!
				</h2>
				<p className='col-8 mx-1 text-center'>
					Muchas gracias por registrarse, le llegara un mail para
					confirmar su cuenta.
				</p>
				<button
					className='button is-link col-4'
					onClick={() => setLocation('/')}
				>
					Inicio
				</button>
			</div>
		</>
	);
};

export default Success;
