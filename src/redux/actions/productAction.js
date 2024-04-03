import {productActions} from "../reducers/productReducer";

function getProducts(searchQuery) {
    return async (dispatch, getState) => {
        let url = `https://my-json-server.typicode.com/ddori5338/react-shop/products?q=${searchQuery}`;
        let response = await fetch(url);
        let data = await response.json();
        // dispatch({type: "GET_PRODUCT_SUCCESS", payload: { data }})
        dispatch(productActions.getAllProducts({data}));
    }
}

function getDetail(id) {
    return async (dispatch, getState) => {
        let url = `https://my-json-server.typicode.com/ddori5338/react-shop/products/${id}`
        let response = await fetch(url);
        let data = await response.json();
        // dispatch({type: "GET_PRODUCT_DETAIL", payload: { data }});
        dispatch(productActions.getSingleProduct({data}));
    }
}

export const productAction = {getProducts, getDetail};