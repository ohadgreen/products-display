import React, { Component } from 'react';
import autoBind from 'react-autobind';
import _ from 'lodash';
import { connect } from 'react-redux';
import { fetchDomains, selectLocale } from '../store/products/actions';
import * as productsData from '../store/products/reducer';
import Select from 'react-select';

class LocaleSelect extends Component {
    constructor(props) {
        super(props);
        autoBind(this);
    }

    localeSelected(l) {
        this.props.dispatch(selectLocale(l));
        this.props.dispatch(fetchDomains(l));
    }

    render() {
        return (
            <div className="domain_select">
                {this.renderSelectLocaleList()}
            </div>
        )
    }

    renderSelectLocaleList() {
        const localeArray = ['US', 'EN', 'DE'];
        const localeForSelect = _.map(localeArray, v => ({ "value": v, "label": v }));
        return (
            <div><label>Select Locale:</label>
                <Select
                    value={this.props.selectedLocale}
                    onChange={this.localeSelected}
                    options={localeForSelect}
                    // style={{ width: "30%" }}
                    autosize={"false"}
                />
            </div>);
    }
}

function mapStateToProps(state) {
    const selectedLocale = productsData.getSelectedLocale(state);

    return {
        selectedLocale: selectedLocale,
    };
}

export default connect(mapStateToProps)(LocaleSelect);