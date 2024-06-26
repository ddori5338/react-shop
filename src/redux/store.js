// import { createStore, applyMiddleware } from 'redux';
// import { thunk } from 'redux-thunk';
// import rootReducer from "./reducers/index";
// import { composeWithDevTools } from '@redux-devtools/extension';
import productSlice from "./reducers/productSlice";
import authenticateReducer from "./reducers/authenticateReducer";


import {configureStore} from "@reduxjs/toolkit";

const store = configureStore({
    reducer: {
        auth: authenticateReducer,
        product: productSlice,
    }
})

export default store;


// let store = createStore(
//     rootReducer,
//     composeWithDevTools(applyMiddleware(thunk))
// );

// export default store;