import React, { useState } from 'react';
import FormRegister from 'components/registro/Form';
import Success from '../../components/registro/Success';

const Register = () => {
	const [success, setSuccess] = useState(false);
	const handleSuccess = () => {
		setSuccess(true);
	};

	return (
		<>
			<div className='row justify-content-center'>
				<div className='col-12 col-md-6 mt-5 box'>
					{success ? (
						<Success />
					) : (
						<FormRegister handleSuccess={handleSuccess} />
					)}
				</div>
			</div>
		</>
	);
};

export default Register;
