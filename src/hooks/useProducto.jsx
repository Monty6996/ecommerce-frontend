import { useContext, useEffect, useState } from 'react';
import ProductosContext from 'context/ProductosContext';
import { get } from 'services/http';

const useProducto = ({ id }) => {
	const { productos } = useContext(ProductosContext);
	const [producto, setProducto] = useState(
		productos.find((producto) => producto.id === id)
	);
	const [isLoading, setLoading] = useState(true);
	const [isError, setError] = useState(false);

	useEffect(() => {
		if (!producto) {
			get({ url: `/productos/${id}` })
				.then(([producto]) => {
					setProducto(producto);
					setLoading(false);
				})
				.catch(() => {
					setError(true);
					setLoading(false);
				});
		} else {
			setLoading(false);
		}
	}, [id, producto]);

	return { producto, isLoading, isError };
};

export default useProducto;
