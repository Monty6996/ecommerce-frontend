import { useCallback, useContext, useState } from 'react';
import Context from 'context/UserContext';
import { post } from '../services/http';

const useUser = () => {
	const { JWT, setJWT } = useContext(Context);
	const [estado, setEstado] = useState({ loading: false, error: false });
	const [response, setResponse] = useState(null);

	const login = useCallback(
		async ({ email, password }) => {
			try {
				setEstado({ loading: true, error: false });
				const { JWT } = await post({
					url: '/auth/login',
					data: { email, password },
				});
				setEstado({ loading: false, ...estado });
				localStorage.setItem('auth', JWT);
				setJWT(JWT);
			} catch (error) {
				setEstado({ loading: false, error: true });
			}
		},
		[setJWT, estado]
	);

	const logout = useCallback(() => {
		setJWT(null);
		localStorage.removeItem('auth');
	}, [setJWT]);

	const registro = useCallback(
		async (data) => {
			try {
				setEstado({ loading: true, error: false });
				const response = await post({ url: '/auth/registro', data });
				setResponse(response);
				setEstado({ loading: false, ...estado });
			} catch (e) {
				setEstado({ loading: false, error: true });
			}
		},
		[estado]
	);

	return {
		isLoggedIn: Boolean(JWT),
		loading: estado.loading,
		error: estado.error,
		login,
		logout,
		registro,
		isRegistered: Boolean(response),
	};
};

export default useUser;
