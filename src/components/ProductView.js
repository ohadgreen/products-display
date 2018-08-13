import React, { Component } from 'react'

export default class ProductView extends Component {

    render() {
        if (!this.props.product) return this.renderEmpty();
        if (this.props.product) return this.renderProduct();
    }

    renderEmpty() {
        return (
            <div>
                <h3>Select a post to view</h3>
            </div>
        );
    }

    renderProduct() {
        console.log("product view prod: ", this.props.product);
        const img = this.props.product.IMAGE;
        const propertiesTable = this.renderProductProperties(this.props.product);
        return (
            <div>
                <img src={img} alt={this.props.product.PRODUCT_ID} />
                <table>
                {propertiesTable}
                </table>
            </div>
        )
    }

    renderProductProperties(product) {
        console.log("Prod id", product.PRODUCT_ID);
        const p = [...product.PROPERTIES];
        let propertiesTable = [];

        for (let i = 0; i < p.length; i++) {
            const prod = p[i];
            for (let [key, value] of Object.entries(prod)) {
                // console.log(key, value);
                propertiesTable.push(
                    <tr key={key}>
                        <td>{key}</td>
                        <td>{value}</td>
                    </tr>)
            }
        }
        return propertiesTable
    }
}