import React, { useContext } from 'react';
import ListaProductos from 'components/productos/listaProductos';
import Filtro from 'components/productos/filtro';
import Loading from 'components/loading';
import { useGet } from 'hooks/useHTTP';
import ProductoContext from 'context/ProductosContext';
import { Redirect } from 'wouter';

const Productos = ({ categoria }) => {
	const { productos, setProductos } = useContext(ProductoContext);
	const [loading, error] = useGet({
		url: `/productos?categoria=${categoria}`,
		setContext: setProductos,
	});

	if (loading) return <Loading />;

	if (error) return <Redirect to='/500' />;

	return (
		<div className='container-fluid'>
			<div className='row justify-content-around '>
				<div className='col-12 col-lg-3'>
					<Filtro />
				</div>
				<div className='col-12 col-lg-9'>
					<div className='row justify-content-evenly m-3 '>
						<ListaProductos productos={productos} />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Productos;
