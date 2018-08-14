import React, { Component } from 'react';
import ProductsScreen from './containers/ProductsScreen';
import DomainSelect from './containers/DomainSelect';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <DomainSelect />
      </div>
    );
  }
}

export default App;
