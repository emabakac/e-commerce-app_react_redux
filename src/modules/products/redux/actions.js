import {
  fetchAllProductsAction,
  fetchBestSellingProductsAction,
} from "./actionTypes";

export const fetchAllProducts = (products) => {
  return {
    type: fetchAllProductsAction,
    payload: products,
  };
};

export const getBestSellingProducts = (products) => {
  return {
    type: fetchBestSellingProductsAction,
    payload: products,
  };
};
