import React from "react";
import { IconButton, Tooltip } from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import { AlertBox, Typography } from "../../../../modules";
import useStyles from "./styles";

export default function CartItemComponent({
  cartItem,
  incrementAmount,
  decrementAmount,
  deleteProduct,
  openDeleteAlert,
  handleOpenDeleteAlert,
  handleCloseDeleteAlert,
}) {
  const classes = useStyles();

  return (
    <div>
      <div className={classes.card}>
        <div className={classes.media}>
          <img
            className={classes.image}
            src={cartItem.image}
            alt={cartItem.title}
          />
        </div>
        <div className={classes.cardContent}>
          <Typography variant="body1" text={cartItem.title} />
        </div>
        <div className={classes.changeAmount}>
          <button className={classes.button} onClick={decrementAmount}>
            -
          </button>
          <Typography variant="body1" text={cartItem.amount} />
          <button className={classes.button} onClick={incrementAmount}>
            +
          </button>
        </div>
        <div className={classes.price}>
          <Typography
            variant="body1"
            text={`$${cartItem.price} x ${cartItem.amount} 
            = 
            $${(cartItem.price * cartItem.amount).toFixed(2)}`}
          />
        </div>
        <div className={classes.cardActions}>
          <Tooltip title="Delete" placement="top">
            <IconButton
              aria-label="Remove from Cart"
              onClick={handleOpenDeleteAlert}
            >
              <DeleteIcon />
            </IconButton>
          </Tooltip>
          <AlertBox
            open={openDeleteAlert}
            onClose={handleCloseDeleteAlert}
            onClick={[deleteProduct, handleCloseDeleteAlert]}
            textId="delete-product-alert"
            alertText="Delete this product from cart?"
          />
        </div>
      </div>
    </div>
  );
}
