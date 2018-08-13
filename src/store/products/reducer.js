import Immutable from 'seamless-immutable';

const initialState = Immutable({
    icecatProducts: [],
    selectedProduct: undefined     
});

export default function reduce(state = initialState, action = {}) {
    switch (action.type) {
        case 'FETCH_PRODUCTS':{
            // console.log("reducer", action.productsData);
            return state.merge({
                icecatProducts: action.productsData
                //, productIds: action.productsData.map(p => p.PRODUCT_ID)
            })            
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

export function getProductIdArray(state) {
    return state.productIds;
}

export function getSelectedProd(state) {
    return state.products.selectedProduct;
}