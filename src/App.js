import React, { Component } from 'react';
import ProductsScreen from './containers/ProductsScreen';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <ProductsScreen />
      </div>
    );
  }
}

export default App;
