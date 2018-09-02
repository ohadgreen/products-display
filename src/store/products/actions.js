// import productsDataOld from './sampleData/productsDataOld';
import productsDataNew from './sampleData/productsDataNew';
import IcecatService from '../../services/icecat';

export function fetchDomains(locale) {
    console.log("locale action: ", locale.value);
    return async (dispatch, getState) => {
        try {
            const domainsArray = await IcecatService.getDomainsByLocale(locale.value);            
            dispatch({ type: 'FETCH_DOMAINS', domainsArray });
        } catch (error) {
            console.error(error);
        }
    };
}

export function fetchSampleProductsFromFile() {    
    const productsData = productsDataNew;
    return (dispatch) => {
        dispatch({ type: 'FETCH_PRODS_DATA', productsData });
    };
}

export function fetchSampleProductsFromDb(domain) {
    console.log("locale action: ", domain);
    return async (dispatch, getState) => {
        try {
            const productsData = await IcecatService.getProductsByDomain(domain.value);
            dispatch({ type: 'FETCH_PRODS_DATA', productsData });
        } catch (error) {
            console.error(error);
        }
    };
}

export function fetchProducts() {
    return (dispatch) => {
        dispatch({ type: 'FETCH_PRODUCTS', productsDataNew });
    };
}

export function selectLocale(locale) {
    return ({ type: 'SELECTED_LOCALE', locale })
}

export function selectDomain(domain) {
    return ({ type: 'SELECTED_DOMAIN', domain })
}

export function selectProduct(product) {
    return ({ type: 'SELECTED_PROD', product })
}
