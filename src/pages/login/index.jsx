import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useLocation } from 'wouter';
import useUser from 'hooks/useUser';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faEnvelope,
	faLock,
	faExclamationTriangle,
} from '@fortawesome/free-solid-svg-icons';

const schema = yup.object().shape({
	email: yup
		.string()
		.email('Ingrese un email valido')
		.required('No puede estar vacio'),
	password: yup.string().required('No puede estar vacio'),
});

const Login = () => {
	const [, setLocation] = useLocation();
	const { login, isLoggedIn, loading, error } = useUser();

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({ resolver: yupResolver(schema) });

	useEffect(() => {
		if (isLoggedIn) setLocation('/');
	}, [isLoggedIn, setLocation]);

	const onSubmit = async (data) => {
		await login({ email: data.email, password: data.password });
	};

	return (
		<div className='container vh-100'>
			<div className='row justify-content-center'>
				<div className='col-12 col-md-5 box m-6'>
					<h1 className=' text-center title is-1'>Login</h1>
					<form onSubmit={handleSubmit(onSubmit)}>
						{/* Email */}
						<div className='field '>
							<label htmlFor='' className='label'>
								Email
							</label>
							<div className='control has-icons-left has-icons-right'>
								<input
									type='text'
									className={`input ${
										errors.email ? 'is-danger' : null
									}`}
									{...register('email')}
								/>
								<span className='icon is-small is-left'>
									<FontAwesomeIcon icon={faEnvelope} />{' '}
								</span>
								{errors.email && (
									<span className='icon is-small is-right'>
										<FontAwesomeIcon
											icon={faExclamationTriangle}
										/>
									</span>
								)}
							</div>
							{errors.email && (
								<p className='help is-danger'>
									{errors.email?.message}
								</p>
							)}
						</div>
						{/* Password */}
						<div className='field'>
							<label htmlFor='' className='label'>
								Password
							</label>
							<div className='control has-icons-left has-icons-right'>
								<input
									type='password'
									className={`input ${
										errors.password ? 'is-danger' : null
									}`}
									{...register('password')}
								/>
								<span className='icon is-small is-left'>
									<FontAwesomeIcon icon={faLock} />{' '}
								</span>
								{errors.email && (
									<span className='icon is-small is-right'>
										<FontAwesomeIcon
											icon={faExclamationTriangle}
										/>
									</span>
								)}
							</div>
							{errors.password && (
								<p className='help is-danger'>
									{errors.password?.message}
								</p>
							)}
						</div>
						{/* Submit */}
						<div className='field'>
							<div className='control'>
								<button
									className={`button is-link ${
										loading && 'is-loading'
									}`}
								>
									Ingresar
								</button>
							</div>
						</div>
					</form>
					{error && <p>Email o Password Incorrecto</p>}
				</div>
			</div>
		</div>
	);
};

export default Login;
