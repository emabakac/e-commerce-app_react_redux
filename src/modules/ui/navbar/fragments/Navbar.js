import React from "react";
import { useHistory, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { NavbarComponent } from "../../../../modules";
import { fetchProductsFromFavorites } from "../redux/selectors";
import { getTotalNumberOfItemsInCart } from "../../../cart/redux/selectors";

export default function Navbar({ handleSearchQuery }) {
  const history = useHistory();

  const location = useLocation();
  const pathname = location.pathname;

  const favorites = useSelector(fetchProductsFromFavorites);
  const totalItems = useSelector(getTotalNumberOfItemsInCart);

  return (
    <NavbarComponent
      history={history}
      pathname={pathname}
      favorites={favorites}
      totalItems={totalItems}
      handleSearchQuery={handleSearchQuery}
    />
  );
}
