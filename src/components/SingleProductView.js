import React, { Component } from 'react'

export default class SingleProductView extends Component {

    render() {
        const prod = this.props.product;
        const title = prod.mainProps.filter(p => p.name === "Title")[0].value;
        const mainProperties = prod.mainProps.filter(p => p.name !== "Title");
        console.log("product view prod: ", prod);
        console.log("title: ", title);
    
        return (
            <div className="products-container">
                <h3 className="product_title">{title}</h3>
                <div >
                <table className="products_table">
                    <tbody>
                    {this.renderProductProperties(mainProperties)}
                    </tbody>
                </table>
                </div>
            </div>
        )
    }

    renderProductProperties(prodProperties) {                
        let propertiesTable = [];
        
            prodProperties.map(
                (p, i) => {
                    propertiesTable.push(
                        <tr key={i}>
                            <td className="prop_name_cell">{p.name}</td>
                            <td>{p.value}</td>
                        </tr>)}
                        )          
              
        return propertiesTable
    }
}
