/**
 * Get currency Symbol
 * @param {String} currency
 */
export const getCurrencySymbol = (currency) => {
	if (currency === 'USD') return '$';
	if (currency === 'EUR') return '€';
	return '£';
};

/**
 *
 * @param {Number} amount
 * @param {Number} rate
 */
export const calculateCurrency = (amount, rate) => {
	return amount * rate;
};
