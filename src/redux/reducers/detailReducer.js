let initialState = {
    product: ''
}

function detailReducer(state=initialState, action) {
    let {type, payload} = action;
    switch (type) {
        case "GET_PRODUCT_DETAIL":
            return {...state, product: payload.data};
        default:
            return {...state};
    }
}

export default detailReducer;