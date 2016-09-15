import React, { Component } from 'react';
import numeral from 'numeral';

const StockIndex = (props) => (
	<div className="stock-index">
		<div className="company">{props.company}</div>
		<div className="shares">{props.quantity}</div>
		<div className="price-paid">{numeral(props.price).format('$0,0.00')}</div>
	</div>
);

export default StockIndex;