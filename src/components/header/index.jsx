import React, { useContext, useState } from 'react';
import './Header.css';
import Carrito from 'components/carrito';
import { Link } from 'wouter';
import { useGet } from 'hooks/useHTTP';
import useUser from 'hooks/useUser';
import ProductoContext from '../../context/CategMarcaContext';

// document.addEventListener('DOMContentLoaded', () => {
// 	// Get all "navbar-burger" elements
// 	const $navbarBurgers = Array.prototype.slice.call(
// 		document.querySelectorAll('.navbar-burger'),
// 		0
// 	);
//
// 	// Check if there are any navbar burgers
// 	if ($navbarBurgers.length > 0) {
// 		// Add a click event on each of them
// 		$navbarBurgers.forEach((el) => {
// 			el.addEventListener('click', () => {
// 				// Get the target from the "data-target" attribute
// 				const target = el.dataset.target;
// 				const $target = document.getElementById(target);
//
// 				// Toggle the "is-active" className on both the "navbar-burger" and the "navbar-menu"
// 				el.classList.toggle('is-active');
// 				$target.classList.toggle('is-active');
// 			});
// 		});
// 	}
// });

const Header = () => {
	const { categorias, setCategorias } = useContext(ProductoContext);
	const [loading] = useGet({
		url: '/categorias',
		setContext: setCategorias,
	});
	const [toggle, setToggle] = useState(null);
	const { isLoggedIn, logout } = useUser();

	const handleClose = () => {
		setToggle(null);
	};

	return (
		<>
			{/* // inicio Navbar */}
			<Carrito />
			<nav
				className='navbar is-dark '
				role='navigation'
				aria-label='main navigation dropdown'
			>
				<div className='navbar-brand col'>
					<Link
						href='/'
						className='navbar-item'
						onClick={handleClose}
					>
						Larex
					</Link>

					<a
						role='button'
						className={`navbar-burger ${toggle}`}
						aria-label='menu'
						aria-expanded='false'
						data-target='navbarMenu'
						onClick={() => setToggle(toggle ? null : 'is-active')}
					>
						<span aria-hidden='true'> </span>
						<span aria-hidden='true'> </span>
						<span aria-hidden='true'> </span>
					</a>
				</div>
				<div
					id='navbarMenu'
					className={`navbar-menu col-12 col-md-11 ${toggle}`}
				>
					<div className='navbar-start'>
						<div className='navbar-item has-dropdown is-hoverable'>
							<a className='navbar-link'>Categorias</a>

							<div className='navbar-dropdown'>
								{!loading &&
									categorias.map((categoria) => (
										<Link
											key={categoria.id}
											className='navbar-item'
											href={`/productos/${categoria.nombre}`}
											onClick={handleClose}
										>
											{categoria.nombre}
										</Link>
									))}
							</div>
						</div>
					</div>

					<div className='navbar-end'>
						<Link
							className='navbar-item'
							href='/'
							onClick={handleClose}
						>
							Inicio
						</Link>

						<a
							className='navbar-item'
							data-bs-toggle='offcanvas'
							data-bs-target='#offcanvasCarrito'
							aria-controls='offcanvasRight'
							role='button'
						>
							Carrito
						</a>

						{!isLoggedIn ? (
							<div className='navbar-item'>
								<div className='buttons'>
									<Link
										className='button is-primary'
										href={'/registro'}
									>
										Registrarse
									</Link>
									<Link
										className='button is-link'
										href='/login'
									>
										Ingresar
									</Link>
								</div>
							</div>
						) : (
							<>
								<Link
									href='/perfil'
									className='navbar-item'
									onClick={handleClose}
								>
									Mi Cuenta
								</Link>

								<div className='navbar-item'>
									<a
										className='button is-primary'
										onClick={() => logout()}
									>
										<strong>Salir</strong>
									</a>
								</div>
							</>
						)}
					</div>
				</div>
			</nav>
			{/* // Fin Navbar */}
		</>
	);
};

export default Header;
