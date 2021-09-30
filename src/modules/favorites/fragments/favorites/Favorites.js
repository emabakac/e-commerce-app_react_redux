import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FavoritesComponent } from "../../../../modules";
import { emptyFavorites } from "../../redux/actions";
import { fetchProductsFromFavorites } from "../../../ui/navbar/redux/selectors";

export default function Favorites() {
  const dispatch = useDispatch();

  const favorites = useSelector(fetchProductsFromFavorites);

  useEffect(() => {
    window.scrollTo(0, 0);
  });

  const deleteAllProductsFromFavorites = () => {
    dispatch(emptyFavorites());
  };

  return (
    <FavoritesComponent
      favorites={favorites}
      deleteAllProductsFromFavorites={deleteAllProductsFromFavorites}
    />
  );
}
