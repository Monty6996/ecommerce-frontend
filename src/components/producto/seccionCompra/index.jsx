import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faChevronLeft,
	faChevronRight,
} from '@fortawesome/free-solid-svg-icons';
import useCarrito from 'hooks/useCarrito';
import './style.css';

const SeccionCompra = ({ producto }) => {
	let [cantidad, setCantidad] = useState(1);
	const { isAlready, agregarProducto, quitarProducto, actualizarProducto } =
		useCarrito({
			productoId: producto.id,
		});
	const { precio, stock } = producto;
	return (
		<>
			<h3 className='title is-3'>${precio}</h3>
			<div className='buttons has-addons'>
				<button
					className='button'
					name='left'
					onClick={() => setCantidad(--cantidad)}
					disabled={cantidad < 2 || stock === 0}
				>
					<FontAwesomeIcon icon={faChevronLeft} />
				</button>
				<p className='button inputCantidad'>{cantidad}</p>
				<button
					className='button'
					name='right'
					onClick={() => setCantidad(++cantidad)}
					disabled={cantidad >= stock || stock === 0}
				>
					<FontAwesomeIcon icon={faChevronRight} />
				</button>
			</div>
			<div className='buttons'>
				<button className='button is-link' disabled={stock === 0}>
					Comprar Ahora
				</button>
				{!isAlready ? (
					<button
						className='button is-primary'
						disabled={stock === 0 || (isAlready && stock === 1)}
						onClick={() => agregarProducto({ producto, cantidad })}
					>
						Agregar al Carrito
					</button>
				) : (
					<>
						<button
							className='button is-primary'
							disabled={stock === 0 || (isAlready && stock === 1)}
							onClick={() =>
								actualizarProducto({ producto, cantidad })
							}
						>
							Actualizar Producto
						</button>

						<button
							className='button is-danger'
							disabled={stock === 0}
							onClick={() => quitarProducto(producto)}
						>
							Quitar Producto
						</button>
					</>
				)}
			</div>
			{stock <= 0 && <p>Sin Stock</p>}
		</>
	);
};

export default SeccionCompra;
