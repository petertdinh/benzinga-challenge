import React, { Component } from 'react';
import { connect } from 'react-redux';
import StockIndex from './stock_index';
import numeral from 'numeral';
import _ from 'lodash';

class Portfolio extends Component {
	render() {

  	const stocks = _.map(this.props.stocksInPortfolio, (stock) => {
  		if(stock.qty > 0) {
	  		return <StockIndex 
	  						company={stock.name}
	  						quantity={stock.qty}
	  						price={stock.price} />
  		}
  	});

		return (
			<div className="portfolio">
				<div className="current-portfolio">My Portfolio</div>
				<div className="cash">Cash: {numeral(this.props.cash).format('$0,0.00')}</div>
				<div className="portfolio-header">
					<div className="company-header">Company</div>
					<div className="shares-header">Shares</div>
					<div>Price Paid</div>
				</div>
				<div className="stocks">{stocks}</div>
			</div>
		)
	}
}

const mapStateToProps = (state) => {
	const { cash, stocks } = state.portfolio;
	return {
		cash,
		stocksInPortfolio: stocks,
	};
}

export default connect(mapStateToProps)(Portfolio);