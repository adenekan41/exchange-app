/* -------------------------------------------------------------------------- */
/*                            External Dependencies                           */
/* -------------------------------------------------------------------------- */
import { createSelector } from 'reselect';

export const selectExchange = (state) => state.exchange;

export const selectCurrentExchangeRate = createSelector(
	[selectExchange],
	(exchange) => exchange.currentRate
);

export const selectToExchange = createSelector(
	[selectExchange],
	(exchange) => exchange.to
);

export const selectFromExchange = createSelector(
	[selectExchange],
	(exchange) => exchange.from
);

export const selectBalance = createSelector(
	[selectExchange],
	(exchange) => exchange.wallet
);
