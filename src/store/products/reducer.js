import Immutable from 'seamless-immutable';

const initialState = Immutable({
    domains: [],
    icecatProducts: [],
    productsData: [],
    selectedLocale: undefined,
    selectedDomain: undefined,  
    selectedProduct: undefined     
});

export default function reduce(state = initialState, action = {}) {
    switch (action.type) {
        case 'FETCH_DOMAINS': {
            // console.log("reducer", action.domainsArray);
            return state.merge({
                domains: action.domainsArray                
            })
        }      
        case 'FETCH_PRODUCTS':{
            // console.log("reducer", action.productsData);
            return state.merge({
                icecatProducts: action.productsData
            })            
        }  
        case 'FETCH_PRODS_DATA': {
            return state.merge({
                productsData: action.productsData
            })
        }
        case 'SELECTED_LOCALE': {
            return state.merge({ 
                    selectedLocale: action.locale, 
                    selectedDomain: undefined, 
                    domains: [] })
        }
        case 'SELECTED_DOMAIN': {
            return state.merge({ selectedDomain: action.domain })
        }
        case 'SELECTED_PROD': {
            return state.merge({selectedProduct: action.product})
        }
        default:
            return state;
    }
}

export function getProducts(state){
    // console.log("selector", state.products);
    return state.products.icecatProducts;
}

export function getSampleProductsData(state) {
    return state.products.productsData;
}

export function getSelectedLocale(state) {
    return state.products.selectedLocale;
}

export function getDomainList(state) {
    return state.products.domains;
}

export function getSelectedDomain(state) {
    return state.products.selectedDomain;
}

export function getSelectedProd(state) {
    return state.products.selectedProduct;
}