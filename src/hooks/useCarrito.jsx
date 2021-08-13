import { useCallback, useContext, useEffect, useState } from 'react';
import UserContext from 'context/UserContext';

const useCarrito = ({ productoId }) => {
	const [isAlready, setIsAlready] = useState(false);
	const { carrito, setCarrito } = useContext(UserContext);

	useEffect(() => {
		if (productoId) {
			setIsAlready(carrito.some((item) => item.id === productoId));
		}
		localStorage.setItem('carrito', JSON.stringify(carrito));
	}, [carrito, productoId]);

	const agregarProducto = useCallback(
		({ producto, cantidad }) => {
			setCarrito([...carrito, { ...producto, cantidad }]);
		},

		[carrito, setCarrito]
	);

	const actualizarProducto = useCallback(
		({ producto, cantidad }) => {
			setCarrito(
				carrito.map((item) =>
					item.id === producto.id ? { ...item, cantidad } : item
				)
			);
		},
		[carrito, setCarrito]
	);

	const quitarProducto = useCallback(
		(producto) => {
			setCarrito(carrito.filter((item) => item.id !== producto.id));
		},
		[carrito, setCarrito]
	);

	return {
		isAlready,
		agregarProducto,
		actualizarProducto,
		quitarProducto,
		carrito,
	};
};

export default useCarrito;
