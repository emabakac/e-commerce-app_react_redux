import {
  addProductToCartAction,
  deleteProductFromCartAction,
  emptyCartAction,
  incrementProductInCartAction,
  decrementProductInCartAction,
} from "./actionTypes";

export const addProductToCart = (product) => {
  return {
    type: addProductToCartAction,
    payload: product,
  };
};

export const deleteProductFromCart = (id) => {
  return {
    type: deleteProductFromCartAction,
    payload: id,
  };
};

export const emptyCart = () => {
  return {
    type: emptyCartAction,
  };
};

export const incrementProductInCart = (id) => {
  return {
    type: incrementProductInCartAction,
    payload: id,
  };
};

export const decrementProductInCart = (id) => {
  return {
    type: decrementProductInCartAction,
    payload: id,
  };
};
