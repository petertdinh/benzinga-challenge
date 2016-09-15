import axios from 'axios';
import * as TYPES from './types';

export const getStock = (symbol) => {
	return (dispatch) => {
		axios.post('/stock', { symbol })
			.then((resp) => {
				dispatch({type: TYPES.GET_STOCK, payload: resp.data[symbol]});
			})
			.catch((err) => {
				alert(`That stock doesn't exist, please try another symbol.`);
			});
	}
}

export const buyStock = (qty, price, stock) => {
	return (dispatch) => {
		stock.qty = qty;
		stock.price = price;
		dispatch({type: TYPES.BUY_STOCK, payload: stock, symbol: stock.symbol, price});
	}
}

export const sellStock = (qty, price, stock) => {
	return (dispatch) => {
		stock.qty = qty;
		stock.price = price;
		dispatch({type: TYPES.SELL_STOCK, payload: stock, symbol: stock.symbol, price});
	}
}