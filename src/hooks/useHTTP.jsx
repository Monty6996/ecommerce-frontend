import React, { useEffect, useState } from 'react';
import { get } from 'services/http';

const useGet = ({ url, setContext = undefined }) => {
	const [response, setResponse] = useState([]);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState({ state: false, err: null });

	useEffect(() => {
		const getData = async () => {
			try {
				setLoading(true);
				const results = await get({ url });
				setContext ? setContext(results) : setResponse(results);
				setLoading(false);
			} catch (error) {
				setError(true);
				setLoading(false);
			}
		};
		getData();
	}, [setContext, url]);

	return [loading, error.state, response];
};

export { useGet };
