import productsData from './productsData';

export function fetchProducts() {
    return (dispatch) => {
        dispatch({ type: 'FETCH_PRODUCTS', productsData });
    };
}

export function selectProduct(product){
    return({ type: 'SELECTED_PROD', product })
}