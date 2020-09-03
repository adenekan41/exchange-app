/* -------------------------------------------------------------------------- */
/*                            External Dependencies                           */
/* -------------------------------------------------------------------------- */
import React, { useEffect, memo } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

/* -------------------------- Internal Dependencies ------------------------- */
import {
	selectCurrentExchangeRate,
	selectToExchange,
	selectFromExchange,
} from 'redux/exchange/selectors';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import { getLatestRates } from 'redux/exchange/actions';
import { getCurrencySymbol } from 'utils';

/* --------------------------- RateSlate propTypes -------------------------- */
const propTypes = {
	getLatestRates: PropTypes.func,
	rate: PropTypes.number,
	from: PropTypes.string,
	to: PropTypes.string,
};

const RateSlate = memo(
	({ getLatestRates: loadLatestRates, rate, from, to }) => {
		useEffect(() => {
			// Load Rates On Mount
			loadLatestRates(from, to);

			// Load Rates after every 10mins
			const intervalId = setInterval(() => {
				loadLatestRates(from, to);
			}, 10000);

			// Clean up
			return () => clearInterval(intervalId);
		}, [loadLatestRates, from, to]);

		return (
			<H4>
				1{getCurrencySymbol(from)} = {rate.toFixed(3)}
				{getCurrencySymbol(to)}
			</H4>
		);
	}
);

const H4 = styled.h4`
	text-align: center;
	font-size: 1.2rem;
	font-weight: 400;

	background: #ffffff2b;
	color: white;
	width: fit-content;
	margin: auto;
	padding: 11px 31px;
	border-radius: 50px;
`;

const mapStateToProps = createStructuredSelector({
	rate: selectCurrentExchangeRate,
	from: selectFromExchange,
	to: selectToExchange,
});

RateSlate.propTypes = propTypes;

export default connect(mapStateToProps, {
	getLatestRates,
})(RateSlate);
