import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { FavoriteItemComponent } from "../../../../modules";
import { deleteProductFromFavorites } from "../../redux/actions";
import { addProductToCart } from "../../../cart/redux/actions";

export default function FavoriteItem({ favoriteItem }) {
  const dispatch = useDispatch();

  const [openDeleteAlert, setOpenDeleteAlert] = useState(false);

  const handleOpenDeleteAlert = () => {
    setOpenDeleteAlert(true);
  };

  const handleCloseDeleteAlert = () => {
    setOpenDeleteAlert(false);
  };

  const deleteProduct = () => {
    dispatch(deleteProductFromFavorites(favoriteItem.id));
  };

  const addToCart = (product) => {
    dispatch(addProductToCart(product));
  };

  return (
    <FavoriteItemComponent
      openDeleteAlert={openDeleteAlert}
      handleOpenDeleteAlert={handleOpenDeleteAlert}
      handleCloseDeleteAlert={handleCloseDeleteAlert}
      deleteProduct={deleteProduct}
      favoriteItem={favoriteItem}
      addToCart={addToCart}
    />
  );
}
