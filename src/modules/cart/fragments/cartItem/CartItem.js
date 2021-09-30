import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { CartItemComponent } from "../../../../modules";
import {
  deleteProductFromCart,
  incrementProductInCart,
  decrementProductInCart,
} from "../../redux/actions";

export default function CartItem({ cartItem }) {
  const dispatch = useDispatch();

  const [openDeleteAlert, setOpenDeleteAlert] = useState(false);

  const handleOpenDeleteAlert = () => {
    setOpenDeleteAlert(true);
  };

  const handleCloseDeleteAlert = () => {
    setOpenDeleteAlert(false);
  };

  const incrementAmount = () => {
    dispatch(incrementProductInCart(cartItem.id));
  };

  const decrementAmount = () => {
    dispatch(decrementProductInCart(cartItem.id));
  };

  const deleteProduct = () => {
    dispatch(deleteProductFromCart(cartItem.id));
  };

  return (
    <CartItemComponent
      cartItem={cartItem}
      incrementAmount={incrementAmount}
      decrementAmount={decrementAmount}
      deleteProduct={deleteProduct}
      openDeleteAlert={openDeleteAlert}
      handleOpenDeleteAlert={handleOpenDeleteAlert}
      handleCloseDeleteAlert={handleCloseDeleteAlert}
    />
  );
}
