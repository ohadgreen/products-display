import React, { Component } from 'react';
import autoBind from 'react-autobind';
import { connect } from 'react-redux';
import Select from 'react-select';
import VirtualizedSelect from 'react-virtualized-select';
import _ from 'lodash';
import { fetchDomains, selectLocale, selectDomain } from '../store/products/actions';
import * as productsData from '../store/products/reducer';
import 'react-virtualized-select/styles.css';
import 'react-virtualized/styles.css';
import 'react-virtualized-select/node_modules/react-select/dist/react-select.css';

class DomainSelect extends Component {
    constructor(props) {
        super(props);
        autoBind(this);
    }
    
    localeSelected(l) {
        this.props.dispatch(selectLocale(l));
        console.log("l from dropdown: ", l.value);
        // console.log("locale from dropdown: ", this.props.selectedLocale);
        this.props.dispatch(fetchDomains(l));
    }

    domainSelected(d) {
        this.props.dispatch(selectDomain(d));
        if (this.props.selectedDomain !== undefined){
            console.log("selected domain props: ", this.props.selectedDomain.value);             
        }
    }

    render() {        
        return (                        
            <div>
                {this.renderSelectLocaleList()}                                                     
                {this.renderSelectDomainList()}
            </div>                       
        )
    }

    renderLoading() {
        return (
            <p>Loading...</p>
        );
    }

    renderSelectLocaleList() {
        const localeArray = ['US', 'EN', 'DE', 'FR', 'IT', 'ES'];
        const localeForSelect = _.map(localeArray, v => ({ "value": v, "label": v }));
        return (
            <div>
                <Select                    
                    value={this.props.selectedLocale}
                    onChange={this.localeSelected}
                    options={localeForSelect}
                    // style={{ width: "30%" }}
                    autosize={"false"}
                />
            </div>);
    }

    renderSelectDomainList() {        
        const domainsForSelect = _.map(this.props.domainList, v => ({ "value": v, "label": v }));
        return (
            <div>
                <VirtualizedSelect
                    value={this.props.selectedDomain}
                    onChange={this.domainSelected}
                    options={domainsForSelect}
                    style={{ width: "40%" }}
                />
            </div>);
    }
}

function mapStateToProps(state) {
    const selectedLocale = productsData.getSelectedLocale(state);    
    const selectedDomain = productsData.getSelectedDomain(state);
    const domainList = productsData.getDomainList(state);
    
    console.log("selected locale mstp ", selectedLocale);
    console.log("domains list mstp count ", domainList.length);

    return {       
        domainList: domainList,
        selectedLocale: selectedLocale,
        selectedDomain: selectedDomain,
    };
}

export default connect(mapStateToProps)(DomainSelect);