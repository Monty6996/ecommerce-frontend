import axios from 'axios';

const get = async ({ url }) => {
	try {
		const response = await axios.get(url);
		return response.data;
	} catch (error) {
		throw new error();
	}
};
const post = async ({ url, data, headers }) => {
	try {
		const response = await axios.post(url, data, headers);
		return response.data;
	} catch (error) {
		throw new error();
	}
};
const put = async ({ url, headers, data }) => {
	try {
		const response = await axios.put(url, data, headers);
		return response.data;
	} catch (error) {
		throw new error();
	}
};
const del = async ({ url }) => {
	try {
		const response = await axios.delete(url);
		return response.data;
	} catch (error) {
		throw new error();
	}
};
export { get, post, put, del };
