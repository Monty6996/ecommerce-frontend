import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExclamationTriangle } from '@fortawesome/free-solid-svg-icons';
import useUser from '../../hooks/useUser';

const schema = yup.object().shape({
	nombre: yup.string().min(3, 'debe contener al menos 3 caracteres'),
	apellido: yup.string().min(3, 'debe contener al menos 3 caracteres'),
	email: yup
		.string()
		.email('Ingrese un email valido')
		.required('No puede estar vacío'),
	password: yup
		.string()
		.matches(/^(?=.{8,})(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s).*$/),
});

const FormRegister = ({ handleSuccess }) => {
	const {
		handleSubmit,
		register,
		formState: { errors },
	} = useForm({ resolver: yupResolver(schema) });
	const [mensaje, setMensaje] = useState(null);
	const { registro, loading, error, isRegistered } = useUser();

	useEffect(() => {
		if (isRegistered) handleSuccess();
		if (error) setMensaje('El email ya esta registrado!');
	}, [error, handleSuccess, isRegistered]);

	const onRegistro = async (data) => {
		await registro(data);
	};

	return (
		<>
			<h2 className='title is-2 text-center'>Registro</h2>
			<form onSubmit={handleSubmit(onRegistro)}>
				{/*Inicio Campo Nombre*/}
				<div className='field'>
					<label htmlFor='' className='label'>
						Nombre
					</label>
					<div className='control has-icons-right'>
						<input
							{...register('nombre')}
							type='text'
							className={`input ${errors.nombre && 'is-danger'}`}
						/>
						{errors.nombre && (
							<span className='icon is-small is-right'>
								<FontAwesomeIcon
									icon={faExclamationTriangle}
									color='red'
								/>
							</span>
						)}
					</div>
					{errors.nombre && (
						<p className='help is-danger'>
							{errors.nombre.message}
						</p>
					)}
				</div>
				{/*Fin Campo Nombre*/}

				{/*Inicio Campo Apellido*/}
				<div className='field'>
					<label htmlFor='' className='label'>
						Apellido
					</label>
					<div className='control has-icons-right'>
						<input
							{...register('apellido')}
							type='text'
							className={`input ${
								errors.apellido && 'is-danger'
							}`}
						/>
						{errors.apellido && (
							<span className='icon is-small is-right'>
								<FontAwesomeIcon
									icon={faExclamationTriangle}
									color='red'
								/>
							</span>
						)}
					</div>
					{errors.apellido && (
						<p className='help is-danger'>
							{errors.apellido.message}
						</p>
					)}
				</div>
				{/*Fin Campo Apellido*/}

				{/*Inicio Campo Email*/}
				<div className='field'>
					<label htmlFor='' className='label'>
						Email
					</label>
					<div className='control has-icons-right'>
						<input
							{...register('email')}
							type='email'
							className={`input ${
								errors.email || (error && 'is-danger')
							}`}
						/>
						{errors.email ||
							(error && (
								<span className='icon is-small is-right'>
									<FontAwesomeIcon
										icon={faExclamationTriangle}
										color='red'
									/>
								</span>
							))}
					</div>
					{errors.email ||
						(error && (
							<p className='help is-danger'>
								{errors.email?.message}
								{mensaje}
							</p>
						))}
				</div>
				{/*Fin Campo Email*/}

				{/*Inicio Campo Password*/}
				<div className='field'>
					<label htmlFor='' className='label'>
						Contraseña
					</label>
					<div className='control has-icons-right'>
						<input
							{...register('password')}
							type='password'
							className={`input ${
								errors.password && 'is-danger'
							}`}
						/>
						{errors.password && (
							<span className='icon is-small is-right'>
								<FontAwesomeIcon
									icon={faExclamationTriangle}
									color='red'
								/>
							</span>
						)}
					</div>
					<p className={`help ${errors.password ? 'is-danger' : ''}`}>
						La contraseña debe contener al menos 8 caracteres, una
						mayúscula y un numero
					</p>
				</div>
				{/*Fin Campo Password*/}
				<div className='control'>
					<button
						className={`button is-link ${loading && 'is-loading'}`}
					>
						Registrarse
					</button>
				</div>
			</form>
		</>
	);
};

export default FormRegister;
