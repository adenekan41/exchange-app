/* -------------------------- Internal Dependencies ------------------------- */
import ExchangeActions from '../types';
import exchangeReducer from '../reducers';

describe('Exchange Reducer', () => {
	let initialState;

	beforeEach(() => {
		initialState = {
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
	});

	test('is correct', () => {
		const action = { type: 'dummy_action' };

		expect(exchangeReducer(undefined, action)).toEqual(initialState);
	});

	test('exchanges currency and update wallet and its balance', () => {
		const action = {
			type: ExchangeActions.EXCHANGE_CURRENCY,
			payload: {
				USD: {
					amount: 500,
				},
				GBP: {
					amount: 700,
				},
				EUR: {
					amount: 800,
				},
			},
		};
		initialState = {
			...initialState,
			wallet: {
				USD: {
					amount: 500,
				},
				GBP: {
					amount: 700,
				},
				EUR: {
					amount: 800,
				},
			},
		};

		expect(exchangeReducer(undefined, action)).toEqual(initialState);
		expect(exchangeReducer(undefined, action)).toMatchSnapshot();
	});
	test('start get currency and latest rates', () => {
		const action = {
			type: ExchangeActions.GET_CURRENCY,
		};
		initialState = {
			...initialState,
			isLoading: true,
		};

		expect(exchangeReducer(undefined, action)).toEqual(initialState);
		expect(exchangeReducer(undefined, action)).toMatchSnapshot();
	});
	test('successfully get currency and latest rates', () => {
		const action = {
			type: ExchangeActions.GET_CURRENCY_SUCCESS,
			payload: { data: 100 },
		};
		initialState = {
			...initialState,
			currentRate: 100,
			isLoading: false,
		};

		expect(exchangeReducer(undefined, action)).toEqual(initialState);
		expect(exchangeReducer(undefined, action)).toMatchSnapshot();
	});
	test('fail in getting currency and latest rates', () => {
		const action = {
			type: ExchangeActions.GET_CURRENCY_FAIL,
		};
		initialState = {
			...initialState,
			isLoading: false,
		};

		expect(exchangeReducer(undefined, action)).toEqual(initialState);
		expect(exchangeReducer(undefined, action)).toMatchSnapshot();
	});
	test('update FROM wallet', () => {
		const action = {
			type: ExchangeActions.UPDATE_FROM_CURRENT_WALLET,
			payload: 'USD',
		};
		initialState = {
			...initialState,
			from: 'USD',
		};

		expect(exchangeReducer(undefined, action)).toEqual(initialState);
		expect(exchangeReducer(undefined, action)).toMatchSnapshot();
	});
	test('update TO wallet', () => {
		const action = {
			type: ExchangeActions.UPDATE_TO_CURRENT_WALLET,
			payload: 'USD',
		};
		initialState = {
			...initialState,
			to: 'USD',
		};

		expect(exchangeReducer(undefined, action)).toEqual(initialState);
		expect(exchangeReducer(undefined, action)).toMatchSnapshot();
	});
});
