/* -------------------------------------------------------------------------- */
/*                            External Dependencies                           */
/* -------------------------------------------------------------------------- */
import React from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import styled from 'styled-components';

/* -------------------------- Internal Dependencies ------------------------- */
import Home from 'pages/home';
import ErrorBoundary from 'components/error-boundary';

/* ---------------------------- Routes PropTypes ---------------------------- */
const propTypes = {
	location: PropTypes.object,
};

const Routes = ({ location }) => (
	<Wrapper>
		<ErrorBoundary>
			<Switch location={location}>
				<Route exact path="/" component={Home} />
			</Switch>
		</ErrorBoundary>
	</Wrapper>
);

const Wrapper = styled.main``;

Routes.propTypes = propTypes;

export default withRouter(Routes);
