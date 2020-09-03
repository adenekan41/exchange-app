/* -------------------------------------------------------------------------- */
/*                            External Dependencies                           */
/* -------------------------------------------------------------------------- */
import React from 'react';
import styled from 'styled-components';

/* -------------------------- Internal Dependencies ------------------------- */
import ExchangeWallet from './components/exchange-wallet';
import RatesSlate from './components/rates-slate';

const Home = () => {
	return (
		<Wrapper>
			<Header role="banner">
				<div className="container">
					<img
						src="https://www.revolut.com/icons/icon-192x192.png?v=9888e6b82e44f49eeff2872eb4b64175"
						alt="Revolut Logo"
					/>

					<h1>Revolut Exchange</h1>
					<p>Latest Rates</p>
					<RatesSlate />
				</div>
			</Header>
			<ExchangeWallet />
		</Wrapper>
	);
};

const Wrapper = styled.div`
	min-height: 100vh;
	margin-bottom: 5rem;
`;

const Header = styled.header`
	padding: 5.5rem 0;
	background: linear-gradient(362deg, #007fff 23%, #0c4cff 92%);
	text-align: center;
	margin: 1.5rem;
	border-radius: 18px;

	h1 {
		font-size: 2.2rem;
		font-weight: 800;
		color: #fff;

		text-align: center;
	}

	img {
		height: 70px;
		margin-bottom: 2rem;
	}

	p {
		font-size: 0.96rem;
		font-weight: 700;
		color: #ffffffb8;
		margin-top: 2.4rem;
	}
`;

export default Home;
