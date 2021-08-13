import React, { useState } from 'react';

const Context = React.createContext({});

export const CategMarcaContextProvider = ({ children }) => {
	const [categorias, setCategorias] = useState([]);
	const [marcas, setMarcas] = useState([]);

	return (
		<Context.Provider
			value={{
				categorias,
				setCategorias,
				marcas,
				setMarcas,
			}}
		>
			{children}
		</Context.Provider>
	);
};

export default Context;
