import React, { Component } from 'react';
import ProductsScreen2 from './containers/ProductsScreen2';
/* import ProductsScreen from './containers/ProductsScreen';
import DomainSelect from './containers/DomainSelect'; */
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <ProductsScreen2 />
      </div>
    );
  }
}

export default App;
