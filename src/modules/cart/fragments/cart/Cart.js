import React, { useState, useLayoutEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router";
import { CartComponent } from "../../../../modules";
import { emptyCart } from "../../redux/actions";
import {
  getTotalPrice,
  getTotalNumberOfItemsInCart,
  fetchProductsFromCart,
} from "../../redux/selectors";
import MuiAlert from "@material-ui/lab/Alert";
import { routes } from "../../../../routes";

export default function Cart() {
  const dispatch = useDispatch();
  const history = useHistory();

  const cart = useSelector(fetchProductsFromCart);
  const totalItems = useSelector(getTotalNumberOfItemsInCart);
  const totalPrice = useSelector(getTotalPrice);

  const [isCartEmpty, setIsCartEmpty] = useState(false);
  const [purchaseMade, setPurchaseMade] = useState(false);
  const [openSnackbar, setOpenSnackbar] = useState(false);

  const checkCart = () => {
    setIsCartEmpty(!cart.length ? true : false);
  };

  useLayoutEffect(() => {
    checkCart();
    window.scrollTo(0, 0);
  });

  const deleteAllProducts = () => {
    dispatch(emptyCart());
  };

  const makePurchase = () => {
    setPurchaseMade(true);
    deleteAllProducts();
    history.push(routes.CHECKOUT);
  };

  const handleOpenSnackbar = () => {
    deleteAllProducts();
    setIsCartEmpty(true);
    setOpenSnackbar(true);
  };

  const handleCloseSnackbar = (reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpenSnackbar(false);
  };

  const Alert = (props) => {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
  };

  return (
    <CartComponent
      cart={cart}
      totalItems={totalItems}
      totalPrice={totalPrice}
      isCartEmpty={isCartEmpty}
      makePurchase={makePurchase}
      purchaseMade={purchaseMade}
      openSnackbar={openSnackbar}
      handleOpenSnackbar={handleOpenSnackbar}
      handleCloseSnackbar={handleCloseSnackbar}
      Alert={Alert}
    />
  );
}
