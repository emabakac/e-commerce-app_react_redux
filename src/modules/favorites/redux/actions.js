import {
  addProductToFavoritesAction,
  emptyFavoritesAction,
  deleteProductFromFavoritesAction,
} from "./actionTypes";

export const addProductToFavorites = (product) => {
  return {
    type: addProductToFavoritesAction,
    payload: product,
  };
};

export const emptyFavorites = () => {
  return {
    type: emptyFavoritesAction,
  };
};

export const deleteProductFromFavorites = (id) => {
  return {
    type: deleteProductFromFavoritesAction,
    payload: id,
  };
};
