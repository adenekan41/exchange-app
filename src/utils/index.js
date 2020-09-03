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

/**
 * Check amount with balance
 * @param {Number} amount
 * @param {Number} balance
 */
export const checkBalanceWithAmount = (amount, balance) => {
	if (amount >= balance) {
		return balance;
	}
	return amount;
};
