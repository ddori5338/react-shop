function getProducts(searchQuery) {
    return async (dispatch, getState) => {
        let url = `https://my-json-server.typicode.com/ddori5338/react-shop/products?q=${searchQuery}`;
        let response = await fetch(url);
        let data = await response.json();
        // setProductList(data);
        dispatch({type: "GET_PRODUCT_SUCCESS", payload: { data }})
    }
}

function getDetail(id) {
    return async (dispatch, getState) => {
        let url = `https://my-json-server.typicode.com/ddori5338/react-shop/products/${id}`
        let response = await fetch(url);
        let data = await response.json();
        // setProduct(data);
        dispatch({type: "GET_PRODUCT_DETAIL", payload: { data }})
    }
}

export const productAction = {getProducts, getDetail};