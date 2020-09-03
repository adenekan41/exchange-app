/* -------------------------------------------------------------------------- */
/*                            External Dependencies                           */
/* -------------------------------------------------------------------------- */
import logger from 'redux-logger';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

/* -------------------------- Internal Dependencies ------------------------- */
import rootReducer from 'redux/root-reducers';

const middlewears = [thunk];

if (process.env.NODE_ENV === 'development') {
	middlewears.push(logger);
}

export const store = createStore(rootReducer, applyMiddleware(...middlewears));

export default store;
