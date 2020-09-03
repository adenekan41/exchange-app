/* eslint-disable no-undef */
/* -------------------------- External Dependencies ------------------------- */
import React from 'react';
import ReactDOM from 'react-dom';
import { cleanup } from '@testing-library/react';
import renderer from 'react-test-renderer';

import '@testing-library/jest-dom';
import '@testing-library/jest-dom/extend-expect';

import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { Router } from 'react-router-dom';

/* -------------------------- Internal Dependencies ------------------------- */
import history from 'utils/history';
import ExchangeWallet from '../components/exchange-wallet';

const mockStore = configureStore([]);

describe('ExchangeWallet Component', () => {
	afterEach(cleanup);
	let store;
	beforeAll(() => {
		store = mockStore({
			exchange: {
				currentRate: 100,
				from: 'USD',
				to: 'EUR',
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
			},
		});
		store.dispatch = jest.fn();
	});
	it('ExchangeWallet Renders Without Crashing', () => {
		const div = document.createElement('div');
		ReactDOM.render(
			<Provider store={store}>
				<Router history={history}>
					<ExchangeWallet />
				</Router>
			</Provider>,
			div
		);
		ReactDOM.unmountComponentAtNode(div);
	});
	it('ExchangeWallet matches snapshot', () => {
		const tree = renderer
			.create(
				<Provider store={store}>
					<Router history={history}>
						<ExchangeWallet />
					</Router>
				</Provider>
			)
			.toJSON();
		expect(tree).toMatchSnapshot();
	});

	it('ExchangeWallet matches snapshot without actions', () => {
		const tree = renderer
			.create(
				<Provider store={store}>
					<Router history={history}>
						<ExchangeWallet />
					</Router>
				</Provider>
			)
			.toJSON();
		expect(tree).toMatchSnapshot();
	});
});
