import React, { Component } from 'react';
import SearchBar from './search_bar';
import Portfolio from './portfolio';
import CurrentStock from './current_stock';


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