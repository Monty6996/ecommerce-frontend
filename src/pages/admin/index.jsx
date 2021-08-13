import AgregarProducto from 'components/admin/agregarProducto';
import React, { useContext, useState } from 'react';
import { useGet } from 'hooks/useHTTP';
import CategMarcaContext from '../../context/CategMarcaContext';

const Admin = () => {
	const [componente, setComponente] = useState({
		activo: false,
		target: null,
	});
	const { categorias, marcas, setMarcas } = useContext(CategMarcaContext);

	useGet({ url: '/marcas', setContext: setMarcas });

	const handleClick = (e) => {
		if (!componente.activo) {
			switch (e.target.name) {
				case 'agregarProducto':
					return setComponente({
						activo: true,
						target: (
							<AgregarProducto
								categorias={categorias}
								marcas={marcas}
							/>
						),
					});
				case 'agregarCategoria':
					setComponente({ activo: true, target: <p>Hola</p> });
			}
		}
		setComponente(false);
	};

	return (
		<>
			<div className='container'>
				<div className='row'>
					<div className='col-3 p-2'>
						<button
							className='btn btn-color col m-3'
							name='agregarProducto'
							onClick={handleClick}
						>
							Agregar Producto
						</button>
						<button
							className='btn btn-color col m-3'
							name='modificarProducto'
							onClick={handleClick}
						>
							Modificar Producto
						</button>
						<button
							className='btn btn-color col m-3'
							name='agregarCategoria'
							onClick={handleClick}
						>
							Agregar Categoria
						</button>
						<button
							className='btn btn-color col m-3'
							name='modificarCategoria'
							onClick={handleClick}
						>
							Modificar Categoria
						</button>
						<button
							className='btn btn-color col m-3'
							name='agregarMarca'
							onClick={handleClick}
						>
							Agregar Marca
						</button>
						<button
							className='btn btn-color col m-3'
							name='modificarMarca'
							onClick={handleClick}
						>
							Modificar Marca
						</button>
					</div>
					<div className='col-9 mt-5'>
						{componente.activo && (
							<div className='row box'> {componente.target}</div>
						)}
					</div>
				</div>
			</div>
		</>
	);
};

export default Admin;
