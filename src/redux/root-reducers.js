/* -------------------------------------------------------------------------- */
/*                            External Dependencies                           */
/* -------------------------------------------------------------------------- */
import { combineReducers } from 'redux';

/* -------------------------- Internal Dependencies ------------------------- */
import exchangeReducer from './exchange/reducers';

export const rootReducer = combineReducers({
	exchange: exchangeReducer,
});

export default rootReducer;
