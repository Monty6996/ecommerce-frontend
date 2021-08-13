import axios from 'axios';
const loginService = async ({ email, password }) => {
	try {
		const response = await axios.post('/auth/login', { email, password });
		return response.data;
	} catch (error) {
		throw new error();
	}
};
export default loginService;
