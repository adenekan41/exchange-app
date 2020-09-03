/* -------------------------------------------------------------------------- */
/*                            External Dependencies                           */
/* -------------------------------------------------------------------------- */
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import moxios from 'moxios';

/* -------------------------- Internal Dependencies ------------------------- */
import * as exchangeReducers from '../reducers';
import {
	updateFromCurrentWallet,
	updateToCurrentWallet,
	getLatestRates,
	exchangeCurrency,
} from '../actions';
import {
	expectedActions,
	UPDATE_FROM,
	UPDATE_TO,
	GET_LATEST_FAILURE,
	EXCHANGE_CURRENCY,
} from './test-mock';
const createStore = configureMockStore([thunk]);
const store = createStore(exchangeReducers.initialState);
describe('Take Test Action', () => {
	beforeEach(() => {
		moxios.install();
	});
	afterEach(() => moxios.uninstall());

	test('Dispatches the correct action and payload for updating FROM state', () => {
		UPDATE_FROM();

		store.dispatch(updateFromCurrentWallet('USD'));

		expect(store.getActions()).toEqual(expectedActions);
		expect(store.getActions()).toMatchSnapshot();
	});

	test('Dispatches the correct action and payload for updating TO state', () => {
		UPDATE_TO();

		store.dispatch(updateToCurrentWallet('USD'));

		expect(store.getActions()).toEqual(expectedActions);
		expect(store.getActions()).toMatchSnapshot();
	});

	test('Dispatches the correct action and payload for exchanging currency', () => {
		EXCHANGE_CURRENCY();

		store.getState().exchange = {
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
		store.dispatch(exchangeCurrency({ from: 10, to: 30 }, 'USD', 'EUR'));

		expect(store.getActions()).toEqual(expectedActions);
		expect(store.getActions()).toMatchSnapshot();
	});

	test('Dispatches the correct action and payload for getting latest rates failure', async (done) => {
		moxios.wait(() => {
			const request = moxios.requests.mostRecent();
			request.reject({
				status: 500,
				response: { data: 'question not found' },
			});
		});

		GET_LATEST_FAILURE();
		await store.dispatch(getLatestRates('USD', 'EUR')).then(() => {
			expect(store.getActions()).toEqual(expectedActions);
			expect(store.getActions()).toMatchSnapshot();
		});
		done();
	});
});
