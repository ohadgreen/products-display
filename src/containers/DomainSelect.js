import React, { Component } from 'react';
import autoBind from 'react-autobind';
import { connect } from 'react-redux';
import VirtualizedSelect from 'react-virtualized-select';
import _ from 'lodash';
import { fetchSampleProductsFromDb, fetchDomains, selectLocale, selectDomain } from '../store/products/actions';
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
        if (d !== null) {
            this.props.dispatch(selectDomain(d));
            console.log(d.value);
            this.props.dispatch(fetchSampleProductsFromDb(this.props.selectedLocale, d));
        }
    }

    render() {
        return (
            <div className="domain_select">
                {this.renderSelectDomainList()}
            </div>
        )
    }

    renderLoading() {
        return (
            <p>Loading...</p>
        );
    }

    renderSelectDomainList() {
        const domainsForSelect = _.map(this.props.domainList, v => ({ "value": v, "label": v }));
        return (
            <div>
                <label>Select Domain:</label>
                <VirtualizedSelect
                    value={this.props.selectedDomain}
                    onChange={this.domainSelected}
                    options={domainsForSelect}
                />
            </div>);
    }
}

function mapStateToProps(state) {
    let selectedLocale = productsData.getSelectedLocale(state);
    let selectedDomain = productsData.getSelectedDomain(state);
    let domainList = productsData.getDomainList(state);
    console.log("domains list mstp count ", domainList.length);

    return {
        selectedLocale: selectedLocale,
        selectedDomain: selectedDomain,
        domainList: domainList,
    };
}

export default connect(mapStateToProps)(DomainSelect);