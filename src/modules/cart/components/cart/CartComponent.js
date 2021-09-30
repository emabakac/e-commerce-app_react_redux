import React, { useState } from "react";
import { Divider, Grid, Snackbar } from "@material-ui/core";
import { Button, CartItem, Checkout, Typography } from "../../../../modules";
import useStyles from "./styles";

export default function CartComponent({
  cart,
  totalItems,
  totalPrice,
  isCartEmpty,
  makePurchase,
  purchaseMade,
  openSnackbar,
  handleOpenSnackbar,
  handleCloseSnackbar,
  Alert,
}) {
  const classes = useStyles();

  const [priceTotal, setPriceTotal] = useState(totalPrice);
  const [itemsTotal, setItemsTotal] = useState(totalItems);

  return purchaseMade ? (
    <div className={classes.checkoutContainer}>
      <div className={classes.purchaseMadeContainer}>
        <Checkout totalItems={itemsTotal} totalPrice={priceTotal} />
      </div>
    </div>
  ) : (
    <div className={classes.cartContainer}>
      <div className={classes.cartItems}>
        <Typography
          variant="h4"
          className={classes.title}
          text="Your Shopping Cart"
        />
        <Divider variant="middle" />
        <div className={classes.div} />
        {!cart.length ? (
          <Typography
            variant="body1"
            className={classes.noItemsInCartMessage}
            text="No items in cart."
          />
        ) : (
          <Grid container className={classes.gridContainer}>
            {cart.map((cartItem) => (
              <Grid item key={cartItem.id} xs={12} lg={12}>
                <CartItem cartItem={cartItem} />
              </Grid>
            ))}
          </Grid>
        )}
      </div>
      <div className={classes.orderSummary}>
        <Typography
          variant="h4"
          className={classes.title}
          text="Order Summary"
        />
        <Divider variant="middle" />
        <div className={classes.total}>
          <Typography
            variant="body1"
            style={{ marginBottom: "30px" }}
            text={`Total number of items: ${totalItems}`}
          />
          <Typography
            variant="body1"
            text={`Total cost: $${totalPrice.toFixed(2)}`}
          />
        </div>
        <Button
          variant="contained"
          color="secondary"
          className={classes.checkoutButton}
          disabled={isCartEmpty}
          onClick={() => {
            setItemsTotal(totalItems);
            setPriceTotal(totalPrice);
            makePurchase();
          }}
          text="CHECKOUT"
        />
        <Button
          variant="contained"
          color="primary"
          className={classes.emptyCartButton}
          disabled={isCartEmpty}
          onClick={handleOpenSnackbar}
          text="EMPTY CART"
        />
        <Snackbar
          open={openSnackbar}
          autoHideDuration={3000}
          onClose={handleCloseSnackbar}
        >
          <Alert onClose={handleCloseSnackbar} severity="success">
            Cart emptied!
          </Alert>
        </Snackbar>
      </div>
    </div>
  );
}
