import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as productsData from './store/products/reducer'; 
import ProductsScreen from './containers/ProductsScreen';
import LocaleSelect from './containers/LocaleSelect';
import DomainSelect from './containers/DomainSelect';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <LocaleSelect />
        <DomainSelect />
        {this.props.isDomainSelected ? <ProductsScreen /> : this.renderPlaceholder() }        
      </div>
    );
  }
  renderPlaceholder() {
    return (
      <p>No Data to Display</p>
    );
  }
}

function mapStateToProps(state) {
  let selectedDomain = productsData.getSelectedDomain(state);
  let logDomain = (selectedDomain !== undefined) ? selectedDomain.value : "domain not selected";
  console.log("app selected domain: " + logDomain);
  return {
    isDomainSelected: (selectedDomain !== undefined)
  };
}

export default connect(mapStateToProps)(App);
