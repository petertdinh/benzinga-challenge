import * as TYPES from '../actions/types';

export default (state = {
	cash: 100000.00,
	stocks: {},
}, action) => {
	switch(action.type) {
		case (TYPES.BUY_STOCK):
			let stocksAfterPurchase;
			if(state.stocks[action.symbol]) {
				//creating copies to avoid mutation to the state
				const newStockQty = {...state.stocks[action.symbol], qty: state.stocks[action.symbol].qty + action.payload.qty};
				stocksAfterPurchase = {...state.stocks, [action.symbol]: newStockQty};
			} else {
				stocksAfterPurchase = {...state.stocks, [action.symbol]: action.payload};
			}
			const amountAfterPurchase = state.cash - action.payload.qty*action.price;
			return {...state, cash: amountAfterPurchase, stocks: stocksAfterPurchase};
		case (TYPES.SELL_STOCK):
			const stockAfterSale = {...state.stocks[action.symbol], qty: state.stocks[action.symbol].qty - action.payload.qty};
			const amountAfterSale = state.cash + action.payload.qty*action.price;
			return {...state, cash: amountAfterSale, stocks: {...state.stocks, [action.symbol]: stockAfterSale}};
		default:
			return state;
	}
}