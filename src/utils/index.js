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
 * @param {String} type
 * @param {Number} amount
 * @param {Number} rate
 */
export const calculateCurrency = (amount, rate, type) => {
	if (type === 'from') return amount * rate;
	return amount / rate;
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

/**
 * prevent negative values with key code
 * @param {Object} evt
 */
export const isNumberKey = (e) => {
	if (
		!(
			(e.keyCode > 95 && e.keyCode < 106) ||
			(e.keyCode > 47 && e.keyCode < 58) ||
			e.keyCode === 8
		)
	) {
		return false;
	}
};
