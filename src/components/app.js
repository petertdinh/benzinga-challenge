import React, { Component } from 'react';
import { connect } from 'react-redux';
import numeral from 'numeral';
import { buyStock, sellStock } from '../actions/index';
import SearchBar from './search_bar';
import Portfolio from './portfolio';
import CurrentStock from './current_stock';
import _ from 'lodash';


export default class App extends Component {

  render() {
    return (
      <div className="parent">
      	<SearchBar />
      	<div className="order-book">
      		<CurrentStock />
      		<Portfolio />
      	</div>
      </div>
    );
  }
}