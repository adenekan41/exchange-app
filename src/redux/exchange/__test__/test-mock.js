/* -------------------------- Internal Dependencies ------------------------- */
import ExchangeActions from '../types';

export const expectedActions = [];

// Mock Reducers requests for UPDATE_FROM_CURRENT_WALLET action
export const UPDATE_FROM = () =>
	expectedActions.push({
		type: ExchangeActions.UPDATE_FROM_CURRENT_WALLET,
		payload: 'USD',
	});

// Mock Reducers requests for UPDATE_TO_CURRENT_WALLET action
export const UPDATE_TO = () =>
	expectedActions.push({
		type: ExchangeActions.UPDATE_TO_CURRENT_WALLET,
		payload: 'USD',
	});

// Mock Reducers requests for UPDATE_TO_CURRENT_WALLET action
export const EXCHANGE_CURRENCY = () =>
	expectedActions.push({
		type: ExchangeActions.EXCHANGE_CURRENCY,
		payload: {
			USD: {
				amount: 390,
			},
			GBP: {
				amount: 500,
			},
			EUR: {
				amount: 730,
			},
		},
	});

// Mock Reducers requests for GET_LATEST_FAILURE action
export const GET_LATEST_FAILURE = () =>
	expectedActions.push(
		{
			type: ExchangeActions.GET_CURRENCY,
		},
		{
			type: ExchangeActions.GET_CURRENCY_FAIL,
		}
	);
