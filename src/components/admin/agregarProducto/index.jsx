import React, { useContext } from 'react';
import './style.css';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUpload } from '@fortawesome/free-solid-svg-icons';
import UserContext from 'context/UserContext';

const schema = {};

const AgregarProducto = ({ categorias, marcas }) => {
	const { JWT } = useContext(UserContext);
	const {
		register,
		handleSubmit,
		formState: { errors },
		watch,
	} = useForm();

	const onSubmit = async (data) => {
		const formData = new FormData();
		Object.keys(data).map((key) => {
			if (key === 'imagenes') {
				for (let i = 0; i < data.imagenes.length; i++) {
					formData.append('imagenes', data.imagenes[i]);
				}
			} else {
				formData.append(key, data[key]);
			}
		});
		await axios.post('/productos', formData, {
			headers: {
				auth: JWT,
			},
		});
	};

	return (
		<>
			{/* Titulo */}
			<div className='row mx-0 my-3 justify-content-between'>
				<h2 className='col text-center title is-2'>Agregar Producto</h2>
			</div>

			<form
				encType='multipart/form-data'
				className='row g-2 '
				onSubmit={handleSubmit(onSubmit)}
			>
				{/* Nombre */}
				<div className='field'>
					<label htmlFor='Nombre' className='label'>
						Nombre
					</label>
					<div className='control'>
						<input
							type='text'
							className='input'
							{...register('nombre')}
						/>
					</div>
				</div>
				<div className='field is-horizontal'>
					<div className='field-body'>
						{/* Precio */}
						<div className='field'>
							<label htmlFor='precio' className='label'>
								Precio
							</label>
							<div className='control'>
								<input
									type='text'
									className='input'
									{...register('precio')}
								/>
							</div>
						</div>
						{/* Stock */}
						<div className='field'>
							<label className='label' htmlFor='stock'>
								Stock
							</label>
							<div className='control'>
								<input
									type='number'
									className='input'
									min='0'
									{...register('stock')}
								/>
							</div>
						</div>
					</div>
				</div>
				<div className='field is-horizontal'>
					<div className='field-body'>
						{/* Categoria */}
						<div className='field'>
							<label htmlFor='categoria' className='label'>
								Categoria
							</label>
							<div className='control'>
								<div className='select'>
									<select
										defaultValue='default'
										{...register('idCategoria')}
									>
										<option value='default' disabled>
											Seleccione una categoria
										</option>
										{categorias.map((categoria) => (
											<option
												key={categoria.id}
												value={categoria.id}
											>
												{categoria.nombre}
											</option>
										))}
									</select>
								</div>
							</div>
						</div>
						{/* Marca */}
						<div className='field'>
							<label htmlFor='marca' className='label'>
								Marca
							</label>
							<div className='control'>
								<div className='select'>
									<select
										defaultValue='default'
										{...register('idMarca')}
									>
										<option value='default' disabled>
											Seleccione una marca
										</option>
										{marcas.map((marca) => (
											<option
												key={marca.id}
												value={marca.id}
											>
												{marca.nombre}
											</option>
										))}
									</select>
								</div>
							</div>
						</div>
					</div>
				</div>
				{/* Imagenes */}
				<div className='file'>
					<label className='file-label'>
						<input
							className='file-input'
							type='file'
							accept='image/*'
							{...register('imagenes')}
							multiple
						/>
						<span className='file-cta'>
							<span className='file-icon'>
								<FontAwesomeIcon icon={faUpload} />
							</span>
							<span className='file-label'>
								Subir Imagenes...
							</span>
						</span>
					</label>
				</div>

				{/* Descripcion */}
				<div className='field'>
					<label htmlFor='Descripcion' className='label'>
						Descripcion
					</label>
					<textarea
						className='textarea'
						{...register('descripcion')}
					/>
				</div>
				{/* Submit */}
				<div className='field is-center'>
					<div className='control'>
						<button className='button is-link'>
							Agregar Producto
						</button>
					</div>
				</div>
			</form>
		</>
	);
};

export default AgregarProducto;
