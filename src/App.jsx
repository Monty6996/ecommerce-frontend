import React from 'react';
import { Switch, Route } from 'wouter';
import Header from 'components/header';
import Footer from 'components/footer';
import 'App.css';
import {
	Inicio,
	Perfil,
	Producto,
	Productos,
	Admin,
	Login,
	Register,
	NotFound,
	Error500,
	Success,
} from 'pages';
import { UserContextProvider } from 'context/UserContext';
import { CategMarcaContextProvider } from './context/CategMarcaContext';
import { ProductContextProvider } from './context/ProductosContext';

const App = () => {
	return (
		<>
			<UserContextProvider>
				<CategMarcaContextProvider>
					<Header />
					<main>
						<ProductContextProvider>
							<Switch>
								<Route path='/'>
									<Inicio />
								</Route>

								<Route path='/productos/:categoria/:idProducto?'>
									{(params) =>
										params.idProducto ? (
											<Producto
												idProducto={params.idProducto}
											/>
										) : (
											<Productos
												categoria={params.categoria}
											/>
										)
									}
								</Route>

								<Route path='/admin'>
									<Admin />
								</Route>

								<Route path='/login'>
									<Login />
								</Route>

								<Route path='/registro'>
									<Register />
								</Route>

								<Route path='/perfil'>
									<Perfil />
								</Route>

								<Route path='/500'>
									<Error500 />
								</Route>
								<Route path='/success'>
									<Success />
								</Route>

								<Route path='/:rest*'>
									<NotFound />
								</Route>
							</Switch>
						</ProductContextProvider>
					</main>
				</CategMarcaContextProvider>
				<Footer />
			</UserContextProvider>
		</>
	);
};
export default App;
