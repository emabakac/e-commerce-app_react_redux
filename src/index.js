import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { combineReducers, createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { App } from "./modules";
import cartReducer from "./modules/cart/redux/reducer";
import favoritesReducer from "./modules/favorites/redux/reducer";
import productsReducer from "./modules/products/redux/reducer";

const rootReducer = combineReducers({
  cart: cartReducer,
  favorites: favoritesReducer,
  products: productsReducer,
});

const composedEnhancer = compose(applyMiddleware(thunk));

const store = createStore(rootReducer, composedEnhancer);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
