import {
  fetchAllProductsAction,
  fetchBestSellingProductsAction,
} from "./actionTypes";

const initialState = {
  products: [],
  bestSellingProducts: [],
};

const productsReducer = (state = initialState, action) => {
  switch (action.type) {
    case fetchAllProductsAction:
      action.payload.map((item) => (item.amount = 0));
      return { ...state, products: action.payload };
    case fetchBestSellingProductsAction:
      return { ...state, bestSellingProducts: action.payload };
    default:
      return state;
  }
};

export default productsReducer;
