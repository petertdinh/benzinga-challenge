import * as TYPES from '../actions/types';

export default (state = {
	name: '',
	symbol: '',
	bid: 0.00,
	ask: 0.00,
}, action) => {
	switch(action.type) {
		case(TYPES.GET_STOCK):
			const { name, symbol, bidPrice, askPrice } = action.payload;
			return {...state, name, symbol, bid: bidPrice, ask: askPrice};
		default:
			return state;
	}
}