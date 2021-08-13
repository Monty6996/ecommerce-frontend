import React from 'react';
import useCarrito from 'hooks/useCarrito';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faChevronLeft,
	faChevronRight,
	faTimes,
} from '@fortawesome/free-solid-svg-icons';

const Carrito = () => {
	const { carrito, actualizarProducto, quitarProducto } = useCarrito({});
	return (
		<div
			className='offcanvas offcanvas-end'
			data-bs-scroll='true'
			data-bs-backdrop='false'
			tabIndex='-1'
			id='offcanvasCarrito'
			aria-labelledby='offcanvasScrollingLabel'
		>
			<div className='offcanvas-header'>
				<h5 className='offcanvas-title' name='offcanvasScrollingLabel'>
					Carrito
				</h5>
				<button
					type='button'
					className='btn-close text-reset'
					data-bs-dismiss='offcanvas'
					aria-label='Close'
				/>
			</div>
			<div className='offcanvas-body'>
				<div className='container-fluid'>
					<div className='row'>
						<table className='table col-12'>
							<tbody className='border'>
								{carrito.map((item) => (
									<tr key={item.id}>
										<td>
											<img src={item.imagen} alt='' />
										</td>
										<td>
											<p>{item.nombre}</p>
										</td>
										<td>
											<strong> ${item.precio}</strong>
										</td>
										<td>
											<div className='buttons has-addons'>
												<button
													className='button'
													name='left'
													onClick={() =>
														actualizarProducto({
															producto: item,
															cantidad:
																--item.cantidad,
														})
													}
													disabled={
														item.cantidad < 2 ||
														item.stock === 0
													}
												>
													<FontAwesomeIcon
														icon={faChevronLeft}
													/>
												</button>
												<p className='button inputCantidad'>
													{item.cantidad}
												</p>
												<button
													className='button'
													name='right'
													onClick={() =>
														actualizarProducto({
															producto: item,
															cantidad:
																++item.cantidad,
														})
													}
													disabled={
														item.cantidad >=
															item.stock ||
														item.stock === 0
													}
												>
													<FontAwesomeIcon
														icon={faChevronRight}
													/>
												</button>
											</div>
										</td>
										<td>
											<button
												className='button'
												onClick={() =>
													quitarProducto(item)
												}
											>
												<FontAwesomeIcon
													icon={faTimes}
													color='red'
												/>
											</button>
										</td>
									</tr>
								))}
							</tbody>
						</table>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Carrito;
