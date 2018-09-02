import React, { Component } from 'react';
import autoBind from 'react-autobind';
import { connect } from 'react-redux';
import { /* fetchSampleProductsFromDb, */ fetchSampleProductsFromFile } from '../store/products/actions';
import SingleProductView from '../components/SingleProductView';
import * as productsData from '../store/products/reducer'

class ProductsScreen2 extends Component {

    componentDidMount() {
        // this.props.dispatch(fetchSampleProductsFromDb("EN"));
        this.props.dispatch(fetchSampleProductsFromFile());
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
    const selectedDomain = productsData.getSelectedDomain(state);
    const sampleProductsData = productsData.getSampleProductsData(state);
    
    console.log("sample prods count mstp: ", sampleProductsData.length);

    return {
        selectedDomain: selectedDomain,
        sampleProductsData: sampleProductsData,
    };
}

export default connect(mapStateToProps)(ProductsScreen2);

