/* -------------------------------------------------------------------------- */
/*                            External Dependencies                           */
/* -------------------------------------------------------------------------- */
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';

/* -------------------------- Internal Dependencies ------------------------- */
import Input from 'components/input';
import Select from 'components/select';
import {
	updateFromCurrentWallet,
	updateToCurrentWallet,
	exchangeCurrency,
} from 'redux/exchange/actions';
import {
	selectFromExchange,
	selectToExchange,
	selectBalance,
	selectCurrentExchangeRate,
} from 'redux/exchange/selectors';
import {
	getCurrencySymbol,
	calculateCurrency,
	checkBalanceWithAmount,
	isNumberKey,
} from 'utils';

/* ------------------------ ExchangeWallet propTypes ------------------------ */
const propTypes = {
	updateFromCurrentWallet: PropTypes.func,
	updateToCurrentWallet: PropTypes.func,
	rate: PropTypes.number,
	from: PropTypes.string,
	exchangeCurrency: PropTypes.func,
	balance: PropTypes.object,
	to: PropTypes.string,
};

const ExchangeWallet = ({
	updateFromCurrentWallet,
	updateToCurrentWallet,
	rate,
	exchangeCurrency,
	balance,
	from,
	to,
}) => {
	// Group currency
	const [currencies] = useState(['USD', 'EUR', 'GBP']);

	// Set Initial State for currency from and to
	const [state, setState] = useState({
		from: '',
		to: '',
	});

	// Handle Onchanage To conversion and Update the state value
	const handleToOnChangeAndUpdate = (e) => {
		setState({
			...state,
			to: checkBalanceWithAmount(
				Math.abs(e.target.value),
				balance[from].amount
			),
			from: calculateCurrency(
				checkBalanceWithAmount(Math.abs(e.target.value), balance[from].amount),
				rate
			),
		});
	};

	// Handle Onchanage from conversion and Update the state value
	const handleFromOnChangeAndUpdate = (e) => {
		setState({
			...state,
			from: checkBalanceWithAmount(
				Math.abs(e.target.value),
				balance[from].amount
			),
			to: calculateCurrency(
				checkBalanceWithAmount(Math.abs(e.target.value), balance[from].amount),
				rate,
				'from'
			),
		});
	};

	// Reset State if the wallet changes state
	useEffect(() => {
		setState({
			from: '',
			to: '',
		});
	}, [from, to]);

	return (
		<Wrapper>
			<div className="container">
				<div className="row">
					<div className="col-lg">
						<Wallet className="card">
							<div className="card-body">
								<Select
									value={from}
									onChange={(e) => updateFromCurrentWallet(e.target.value)}
								>
									{currencies.map((currency) => (
										<option
											value={currency}
											key={currency}
											disabled={currency === to}
										>
											{getCurrencySymbol(currency)} {currency}
										</option>
									))}
								</Select>
								<p className="pills">Wallet Balance</p>
								<h1>
									{getCurrencySymbol(from)} {balance[from].amount.toFixed(2)}
								</h1>
								{state.from > 0 && (
									<h5 className="col-red">
										- {getCurrencySymbol(from)} {state.from}
									</h5>
								)}
							</div>
							<div className="conversion__card">
								<Input
									value={state.from}
									name="from"
									onKeyDown={isNumberKey}
									onChange={handleFromOnChangeAndUpdate}
									type="number"
									label={`Exchange ${from} -> ${to}`}
									placeholder="0.00"
								/>
							</div>
						</Wallet>
					</div>

					<div className="col-lg-2 d-md-flex align-items-center my-5 my-md-0">
						<button
							className="btn btn-primary btn-block"
							type="button"
							onClick={() => {
								exchangeCurrency(state, from, to);
								setState({
									from: '',
									to: '',
								});
							}}
							disabled={!Number(state.from)}
						>
							Exchange
						</button>
					</div>

					<div className="col-lg">
						<Wallet className="card">
							<div className="card-body">
								<Select
									value={to}
									onChange={(e) => updateToCurrentWallet(e.target.value)}
								>
									{currencies.map((currency) => (
										<option
											value={currency}
											key={currency}
											disabled={currency === from}
										>
											{getCurrencySymbol(currency)} {currency}
										</option>
									))}
								</Select>
								<p className="pills">Wallet Balance</p>
								<h1>
									{getCurrencySymbol(to)} {balance[to].amount.toFixed(2)}
								</h1>

								{state.to > 0 && (
									<h5 className="col-green">
										+ {getCurrencySymbol(to)} {state.to}
									</h5>
								)}
							</div>

							<div className="conversion__card">
								<Input
									value={state.to}
									onKeyDown={isNumberKey}
									name="from"
									onChange={handleToOnChangeAndUpdate}
									type="number"
									label={`Exchange ${from} -> ${to}`}
									placeholder="0.00"
								/>
							</div>
						</Wallet>
					</div>
				</div>
			</div>
		</Wrapper>
	);
};

const Wrapper = styled.section`
	margin-top: 5rem;
	button {
		border-radius: 50px;
		padding: 1rem 0;
		font-weight: 800;
		text-transform: uppercase;
		font-size: 0.96rem;
	}
`;
const Wallet = styled.div`
	background: white;
	border: 1px solid #ececec;
	border-radius: 14px;

	.card-body {
		padding: 2.25rem;
	}
	h1 {
		font-weight: 900;
		margin: 1rem 0;
	}
	h5 {
		font-size: 13px;
		opacity: 0.5;

		font-weight: 700;
		&.col-red {
			color: red;
		}
		&.col-green {
			color: green;
		}
	}
	p.pills {
		font-size: 0.79rem;
		margin-top: 0.9rem;
		color: #0965ff;
		background: #005ff112;
		width: fit-content;
		padding: 7px 14px;
		border-radius: 50px;
	}

	.conversion__card {
		padding: 10px 20px 20px;
		border-radius: 0px 0px 14px 14px;
		border-top: 1px solid #f5f5f5;
		box-shadow: inset 0px 11px 15px -15px #0000001c;

		h4 {
			font-size: 1.6rem;
			font-weight: 200;
			color: #009400;
		}
		p {
			margin: 5px 0;
			/* font-weight: 800; */
			color: #9a9a9a;
			font-size: 0.89rem;
		}
	}
`;

const mapStateToProps = createStructuredSelector({
	rate: selectCurrentExchangeRate,
	from: selectFromExchange,
	to: selectToExchange,
	balance: selectBalance,
});

ExchangeWallet.propTypes = propTypes;

export default connect(mapStateToProps, {
	updateFromCurrentWallet,
	updateToCurrentWallet,
	exchangeCurrency,
})(ExchangeWallet);
