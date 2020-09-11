/* -------------------------------------------------------------------------- */
/*                            External Dependencies                           */
/* -------------------------------------------------------------------------- */
import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from 'react-router-dom';
import { Provider } from 'react-redux';

/* -------------------------- Internal Dependencies ------------------------- */
import App from 'App';
import * as serviceWorker from 'utils/serviceWorker';
import store from 'redux/store';
import history from './utils/history';

/* --------------------------- Styles Dependencies -------------------------- */
import 'assets/styles/index.css';

ReactDOM.render(
	<Provider store={store}>
		<Router history={history}>
			<App />
		</Router>
	</Provider>,
	document.getElementById('root')
);

serviceWorker.unregister();
