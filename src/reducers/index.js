import { combineReducers } from 'redux';
import CurrentStock from './current_stock_reducer';
import Portfolio from './portfolio_reducer';

const rootReducer = combineReducers({
	current: CurrentStock,
	portfolio: Portfolio
});

export default rootReducer;
