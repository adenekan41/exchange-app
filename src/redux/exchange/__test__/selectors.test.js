/* -------------------------- Internal Dependencies ------------------------- */
import {
	selectBalance,
	selectFromExchange,
	selectToExchange,
	selectCurrentExchangeRate,
} from '../selectors';

describe('Exchange Selectors', () => {
	let mockParameters;
	beforeEach(() => {
		mockParameters = {
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

	it('should return current Exhange Rate', () => {
		const selected = selectCurrentExchangeRate.resultFunc(mockParameters);
		expect(selected).toEqual(mockParameters.currentRate);
	});
	it('should return TO value', () => {
		const selected = selectToExchange.resultFunc(mockParameters);
		expect(typeof selected).toBe('string');
	});
	it('should return FROM value', () => {
		const selected = selectFromExchange.resultFunc(mockParameters);
		expect(typeof selected).toBe('string');
	});
	it('should return Balance', () => {
		const selected = selectBalance.resultFunc(mockParameters);
		expect(typeof selected).toBe('object');
	});
});
