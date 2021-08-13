import React from 'react';
import './ListaProductos.css';
import { Link } from 'wouter';

const ListaProductos = ({ productos }) => {
	return (
		<>
			{productos.map((producto) => {
				return (
					<div key={producto.id} className='card p-2 mt-3'>
						<div className='h-100'>
							<img
								src={producto.imagenes[0]}
								className='card-img-top img-fluid'
								alt={producto.nombre}
							/>
						</div>
						<div className='card-body '>
							<h4 className='title is-4'>{producto.nombre}</h4>
							<h5 className='title is-5'>$ {producto.precio}</h5>
						</div>
						{producto.stock > 0 ? (
							<Link
								to={`/productos/${producto.categoria}/${producto.id}`}
								className='stretched-link'
							/>
						) : (
							<p className='text-danger'>Sin Stock</p>
						)}
					</div>
				);
			})}
		</>
	);
};

export default ListaProductos;

// <div
// 	key={producto.id}
// 	className='card my-3 align-items-center'
// >
//
// 	<div className='card-body text-center'>
// 		<h4 className='title is-4'>{producto.nombre}</h4>
// 		<h5 className='card-text'>$ {producto.precio}</h5>
// 	</div>
// 	<Link
// 		className='stretched-link'
// 		to={`/producto/${producto.id}`}
// 	/>
// </div>
