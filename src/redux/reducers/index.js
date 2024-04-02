import { combineReducers } from "redux";
import productReducer from "./productReducer";
import authenticateReducer from "./authenticateReducer";
import detailReducer from "./detailReducer";

export default combineReducers({
    auth: authenticateReducer,
    product: productReducer,
    detail: detailReducer
})