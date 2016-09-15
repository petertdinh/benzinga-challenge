import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getStock } from '../actions/index';
import axios from 'axios';

class SearchBar extends Component {
	constructor(props) {
		super(props);
		this.state = { symbol: '' };
	}

	handleSubmit = (e, symbol) => {
		e.preventDefault();
		this.setState({symbol: ''});
		this.props.getStock(symbol);
	}

	render() {
		return (
			<div className="search-bar">
				<div className="title">Simple Stock Exchange</div>
				<form onSubmit={(e) => this.handleSubmit(e, this.state.symbol)}>
					<div className="search">
						<input className="search-input" placeholder="Enter Symbol" value={this.state.symbol} onChange={(e) => { this.setState({symbol: e.target.value.toUpperCase()})}}></input>
						<button>Lookup</button>
					</div>
				</form>
			</div>
		)
	}
}

export default connect(null, { getStock })(SearchBar);