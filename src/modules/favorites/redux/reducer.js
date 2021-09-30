import {
  addProductToFavoritesAction,
  emptyFavoritesAction,
  deleteProductFromFavoritesAction,
} from "./actionTypes";

const initialState = {
  favorites: [],
};

const favoritesReducer = (state = initialState, action) => {
  switch (action.type) {
    case addProductToFavoritesAction:
      return { ...state, favorites: [...state.favorites, action.payload] };
    case emptyFavoritesAction:
      return { ...state, favorites: [] };
    case deleteProductFromFavoritesAction:
      const filteredFavorites = state.favorites.filter(
        (item) => item.id !== action.payload
      );
      return { ...state, favorites: filteredFavorites };
    default:
      return state;
  }
};

export default favoritesReducer;
