import React, { useState } from 'react';

const Context = React.createContext({});

export const UserContextProvider = ({ children }) => {
	const [carrito, setCarrito] = useState(() => {
		const carrito = JSON.parse(localStorage.getItem('carrito'));
		return carrito ? carrito : [];
	});
	const [JWT, setJWT] = useState(() => localStorage.getItem('auth'));
	return (
		<Context.Provider value={{ JWT, setJWT, carrito, setCarrito }}>
			{children}
		</Context.Provider>
	);
};

export default Context;
