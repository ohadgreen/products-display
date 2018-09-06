import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { fetchSampleProductsFromDb, fetchSampleProductsFromFile } from '../store/products/actions';
import SingleProductView from '../components/SingleProductView';
import * as productsData from '../store/products/reducer'

class ProductsScreen extends Component {

    componentDidMount() {
        // this.props.dispatch(fetchSampleProductsFromDb(this.props.selectedLocale, this.props.selectedDomain));
        // this.props.dispatch(fetchSampleProductsFromFile());
        console.log("productsScreen mounted");
    }

    render() {
        if (!this.props.sampleProductsData) return this.renderLoading();

        else {
            return (                
                this.props.sampleProductsData.map(
                    (p, i) => <SingleProductView key={i} product = {p} />)                
            )
        }
    }

    renderLoading() {
        return (
            <p>Loading...</p>
        );
    }

    renderProductView(product) {
        console.log("render product", product);
        console.log("product id", product.prodId);
        return (
        <li key={product.prodId}>
            {product.prodId}
            {product.mainProps.Title}
        </li>)
    }
}

function mapStateToProps(state) {
    const selectedLocale = productsData.getSelectedLocale(state);
    const selectedDomain = productsData.getSelectedDomain(state);
    const sampleProductsData = productsData.getSampleProductsData(state);    
    return {
        selectedLocale: selectedLocale,
        selectedDomain: selectedDomain,
        sampleProductsData: sampleProductsData,
    };
}

export default connect(mapStateToProps)(ProductsScreen);

