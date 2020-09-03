/* -------------------------- Internal Dependencies ------------------------- */
import ExchangeActions from './types';

export const initialState = {
	isLoading: false,
	from: 'USD',
	to: 'EUR',
	currentRate: 0.8342370902,
	wallet: {
		USD: {
			amount: 400,
		},
		GBP: {
			amount: 500,
		},
		EUR: {
			amount: 700,
		},
	},
};

/**
 * Take Test Reducers
 * @param {Object | Array} state
 * @param {Object} action
 */
const exchangeReducer = (state = initialState, action) => {
	const { type, payload } = action;
	switch (type) {
		case ExchangeActions.GET_CURRENCY:
			return {
				...state,
				isLoading: true,
			};
		case ExchangeActions.GET_CURRENCY_SUCCESS:
			return {
				...state,
				isLoading: false,
				currentRate: payload.data,
			};
		case ExchangeActions.GET_CURRENCY_FAIL:
			return {
				...state,
				isLoading: false,
			};
		case ExchangeActions.UPDATE_FROM_CURRENT_WALLET:
			return {
				...state,
				from: payload,
			};
		case ExchangeActions.UPDATE_TO_CURRENT_WALLET:
			return {
				...state,
				to: payload,
			};
		case ExchangeActions.EXCHANGE_CURRENCY:
			return {
				...state,
				wallet: payload,
			};
		default:
			return { ...state };
	}
};

export default exchangeReducer;
