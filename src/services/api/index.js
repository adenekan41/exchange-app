/* -------------------------------------------------------------------------- */
/*                            External Dependencies                           */
/* -------------------------------------------------------------------------- */
import axios from 'axios';

/**
 * @function
 * @param {String} method
 * @param {String} token
 * @param {Object} options
 */
export const option = (method = 'GET', token = '', options = {}) => {
	if (!options.headers) {
		options.headers = {};
	}

	if (token.length > 1) {
		options.headers.Authorization = `Bearer ${token}`;
	}

	options.method = method;

	return options;
};

/**
 * @function
 * @param {String} error
 */
export const errorHandler = (error) => {
	throw error; // for chainable catch
};

/**
 * @function
 * @param {String} url
 * @param {Object} options
 */
export const request = async (url, options) => {
	return axios({
		url,
		...options,
	}).catch(errorHandler);
};

export default {
	options: option,
	errorHandler,
	request,
};
