import React, { Component } from 'react';
import autoBind from 'react-autobind';
import { connect } from 'react-redux';
import Select from 'react-select';
import _ from 'lodash';
import { fetchDomains, selectLocale, selectDomain } from '../store/products/actions';
import * as productsData from '../store/products/reducer'

class DomainSelect extends Component {
    constructor(props) {
        super(props);
        autoBind(this);
    }

    componentDidMount() {
        // this.props.dispatch(fetchDomains(locale));
    }   
    
    localeSelected(l) {
        this.props.dispatch(selectLocale(l));
        console.log("l from dropdown: ", l.value);
        console.log("locale from dropdown: ", this.props.selectedLocale);
        this.props.dispatch(fetchDomains(l));
    }

    render() {        
        return (
            <div>
                {this.renderSelectLocaleList()}                
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
                />
            </div>);
    }
}

function mapStateToProps(state) {
    const selectedLocale = productsData.getSelectedLocale(state);    
    const selectedDomain = productsData.getSelectedDomain(state);
    const domainList = productsData.getDomainList(state);
    
    console.log("selected locale mstp ", selectedLocale);
    console.log("domains list mstp ", domainList);

    return {       
        domainList: domainList,
        selectedLocale: selectedLocale,
        selectedDomain: selectedDomain,
    };
}

export default connect(mapStateToProps)(DomainSelect);