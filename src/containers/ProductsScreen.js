import React, { Component } from 'react';
import autoBind from 'react-autobind';
import { connect } from 'react-redux';
import Select from 'react-select';
import { fetchProducts, selectProduct } from '../store/products/actions';
import ProductView from '../components/ProductView';
import * as productsData from '../store/products/reducer'

class ProductsScreen extends Component {
    constructor(props) {
        super(props);
        autoBind(this);
    }

    componentDidMount() {
        this.props.dispatch(fetchProducts());
    }

    productSelected(p) {
        this.props.dispatch(selectProduct(p));
        console.log("selected product: ", this.props.selectedProd);
    }

    render() {
        if (!this.props.icecatProducts) return this.renderLoading();

        else {
            // const productToRender = this.props.icecatProducts[0];
            const productsSelect = [...this.props.icecatProducts.map(p => p.PRODUCT_ID)];
            let productsValueLabelArr = [];
            for (let i = 0; i < productsSelect.length; i++) {
                productsValueLabelArr.push({ value: productsSelect[i], label: productsSelect[i] });
            }

            return (
                <div>
                    {this.renderSelectList(productsValueLabelArr)}
                    {this.renderProductView()}
                </div>
            )
        }
    }

    renderLoading() {
        return (
            <p>Loading...</p>
        );
    }

    renderSelectList(productsValueLabelArr) {
        return (
            <div>
                <Select
                    value={this.props.selectedProd}
                    onChange={this.productSelected}
                    options={productsValueLabelArr}
                />
            </div>);
    }

    renderProductView() {
        if (!this.props.selectedProd) {
            return (<div> Please choose a product </div>)
        }
        else {
            const productSelectedFound = this.props.icecatProducts.filter((p) => (p.PRODUCT_ID === this.props.selectedProd.value));            
            console.log("productSelectedFound", productSelectedFound[0]);

        return (
            <div>
                product view:
            <ProductView product={productSelectedFound[0]} />
            </div>
        )
    }
    }
}

function mapStateToProps(state) {
    const icecatProducts = productsData.getProducts(state);
    const selectedProd = productsData.getSelectedProd(state);
    // console.log("prod selected mstp ", selectedProd);
    return {
        icecatProducts: icecatProducts,
        selectedProd: selectedProd
    };
}

export default connect(mapStateToProps)(ProductsScreen);