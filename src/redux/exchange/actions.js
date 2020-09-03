/* -------------------------- Internal Dependencies ------------------------- */
import BASE_URL from 'services/config';
import api from 'services/api';
import ExchangeActions from './types';

/**
 * @function
 * @param {String} from
 */
export const updateFromCurrentWallet = (from) => {
	return (dispatch) => {
		dispatch({
			type: ExchangeActions.UPDATE_FROM_CURRENT_WALLET,
			payload: from,
		});
	};
};
/**
 * @function
 * @param {String} to
 */
export const updateToCurrentWallet = (to) => {
	return (dispatch) => {
		dispatch({
			type: ExchangeActions.UPDATE_TO_CURRENT_WALLET,
			payload: to,
		});
	};
};

/**
 * Get lataest rates
 * @param {String} from
 * @param {String} to
 */
export const getLatestRates = (from, to) => {
	return async (dispatch) => {
		dispatch({
			type: ExchangeActions.GET_CURRENCY,
		});
		const url = `${BASE_URL}/latest?base=${from}&symbols=${to}`;
		const options = api.options('GET', {});
		try {
			const response = await api.request(url, options);
			dispatch({
				type: ExchangeActions.GET_CURRENCY_SUCCESS,
				payload: {
					data: response.data.rates[to],
				},
			});
		} catch (err) {
			dispatch({
				type: ExchangeActions.GET_CURRENCY_FAIL,
			});
		}
	};
};

/**
 * Exchange Currency Pairs
 * @param {Object} data
 * @param {String} from
 * @param {String} to
 */
export const exchangeCurrency = (data, from, to) => {
	return (dispatch, getState) => {
		const { wallet } = getState().exchange;
		const newBalance = {
			...wallet,
			[from]: {
				amount: wallet[from].amount - data.from,
			},
			[to]: {
				amount: wallet[to].amount + data.to,
			},
		};

		dispatch({
			type: ExchangeActions.EXCHANGE_CURRENCY,
			payload: newBalance,
		});
	};
};
