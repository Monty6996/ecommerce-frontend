import Loading from 'components/loading';
import SeccionCompra from 'components/producto/seccionCompra';
import SliderProducto from 'components/producto/sliderProducto';
import React from 'react';
import './style.css';
import useProducto from 'hooks/useProducto';
import { Redirect, useLocation } from 'wouter';

const Producto = ({ idProducto }) => {
	const { producto, isLoading, isError } = useProducto({
		id: idProducto,
	});
	const [, setLocation] = useLocation();

	if (isLoading) {
		return <Loading />;
	}
	if (isError) return <Redirect to={'/404'} />;

	return (
		<>
			<div className='container box'>
				<div className='row'>
					<a
						onClick={() =>
							setLocation(`/productos/${producto.categoria}`)
						}
					>
						<span className='volver'>Volver</span>
					</a>
				</div>
				<div className='row'>
					<div className='col-12 col-lg-6'>
						<SliderProducto
							imagenes={producto.imagenes}
							nombre={producto.nombre}
						/>
					</div>
					<div className='col-12 col-lg-6'>
						<div className='row'>
							<h2 className='col-12  display-6 text-center my-3'>
								{producto.nombre}
							</h2>
							<div className='col-12 '>
								<SeccionCompra
									producto={{
										id: producto.id,
										precio: producto.precio,
										stock: producto.stock,
										nombre: producto.nombre,
										imagen: producto.imagenes[0],
									}}
								/>
							</div>
						</div>
					</div>

					<div className='row'>
						<div className='col-12 my-3'>
							<h3 className='display-5 text-center'>
								Especificaciones
							</h3>
							<ul>
								{producto.descripcion &&
									producto.descripcion
										.split('\n')
										.map((item) => (
											<li key={item}>{item}</li>
										))}
							</ul>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Producto;
