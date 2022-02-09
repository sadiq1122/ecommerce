import { combineReducers, createStore } from "redux";
import ProductListReducer from "../reducers/ProductListReducer";
import ProductReducer from "../reducers/ProductReducer";
import CartReducer from "../reducers/CartReducer";
import OrderReducer from "../reducers/OrderReducer";

export const rootReducer = combineReducers({
  ProductListReducer,
  ProductReducer,
  CartReducer,
  OrderReducer
});

export const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
