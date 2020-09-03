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
import RateSlate from '../components/rates-slate';

const mockStore = configureStore([]);

describe('RateSlate Component', () => {
	afterEach(cleanup);
	let store;
	beforeAll(() => {
		store = mockStore({
			exchange: {
				currentRate: 100,
				from: 'USD',
				to: 'EUR',
			},
		});
		store.dispatch = jest.fn();
	});
	it('RateSlate Renders Without Crashing', () => {
		const div = document.createElement('div');
		ReactDOM.render(
			<Provider store={store}>
				<Router history={history}>
					<RateSlate />
				</Router>
			</Provider>,
			div
		);
		ReactDOM.unmountComponentAtNode(div);
	});
	it('RateSlate matches snapshot', () => {
		const tree = renderer
			.create(
				<Provider store={store}>
					<Router history={history}>
						<RateSlate />
					</Router>
				</Provider>
			)
			.toJSON();
		expect(tree).toMatchSnapshot();
	});

	it('RateSlate matches snapshot without actions', () => {
		const tree = renderer
			.create(
				<Provider store={store}>
					<Router history={history}>
						<RateSlate />
					</Router>
				</Provider>
			)
			.toJSON();
		expect(tree).toMatchSnapshot();
	});
});
