import React, { Component } from 'react';
import { connect } from 'react-redux';
import numeral from 'numeral';
import { buyStock, sellStock } from '../actions/index';
import _ from 'lodash';


class CurrentStock extends Component {
	constructor(props) {
		super(props);
		this.state = { quantity: 0 };
	}

	currencyBeautify = (amount) => {
		return numeral(amount).format('$0,0.00');
	}

	handleBuy = () => {
		//check to see if user has high enough balance to make purchase
		if(this.props.stock.name) {
			if(this.props.cash - (this.state.quantity*this.props.ask) > 0) {
				this.setState({quantity: 0});
				const stockPayload = {...this.props.stock, qty: this.state.quantity, price: this.props.ask};
				this.props.buyStock(stockPayload);
			} else {
				alert(`You don't have enough money to make this purchase! Please re-adjust the quantity.`);
			}
		} else {
			alert(`You haven't selected a stock to purchase. Lookup a symbol first.`);
		}
	}

	handleSell = () => {
		//check to see if user has enough shares to sell
		if(this.props.stock.name) {
			if(this.props.stocksInPortfolio[this.props.stock.symbol] && this.props.stocksInPortfolio[this.props.stock.symbol].qty >= this.state.quantity) {
				this.setState({quantity: 0});
				const stockPayload = {...this.props.stock, qty: this.state.quantity, price: this.props.bid};
				this.props.sellStock(stockPayload);
			} else {
				alert(`You don't have that many shares to sell! Please re-adjust the quantity.`);
			}
		} else {
			alert(`You haven't selected a stock to sell. Lookup a symbol first.`);
		}
	}

  render() {
    return (
    	<div className="current-stock">
    		<div>
	      	<div className="stock">{this.props.stock.name ? `${this.props.stock.name}(${this.props.stock.symbol})` : <div className="empty-stock">Not shown</div>}</div>
	      	<div className="bid-ask">
		      	<div>Bid: {this.currencyBeautify(this.props.bid)}</div>
		      	<div>Ask: {this.currencyBeautify(this.props.ask)}</div>
	      	</div>
	      	<div className="transaction">
	      		<div className="qty">QTY.</div>
	      		<input type="number" value={this.state.quantity} onChange={e => this.setState({quantity: Number(e.target.value)})}></input>
	      		<button onClick={this.handleBuy}>Buy</button>
	      		<button onClick={this.handleSell}>Sell</button>
      		</div>
      	</div>
    	</div>
    );
  }
}

const mapStateToProps = (state) => {
	const { name, symbol, ask, bid } = state.current;
	const { cash, stocks } = state.portfolio;
	return {
		ask,
		bid,
		cash,
		stock: { name, symbol },
		stocksInPortfolio: stocks
	};
}

export default connect(mapStateToProps, { buyStock, sellStock })(CurrentStock);