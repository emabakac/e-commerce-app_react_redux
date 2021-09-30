import React from "react";
import { IconButton, Tooltip } from "@material-ui/core";
import { AddShoppingCart } from "@material-ui/icons";
import DeleteIcon from "@material-ui/icons/Delete";
import { AlertBox, Typography } from "../../../../modules";
import useStyles from "./styles";

export default function FavoriteItemComponent({
  openDeleteAlert,
  handleOpenDeleteAlert,
  handleCloseDeleteAlert,
  deleteProduct,
  favoriteItem,
  addToCart,
}) {
  const classes = useStyles();

  return (
    <div className={classes.card}>
      <div className={classes.imageContainer}>
        <img
          className={classes.image}
          src={favoriteItem.image}
          alt={favoriteItem.title}
        />
      </div>
      <div className={classes.cardContent}>
        <Typography variant="body1" text={favoriteItem.title} />
      </div>
      <div className={classes.price}>${favoriteItem.price}</div>
      <div className={classes.cardActions}>
        <Tooltip title="Delete" placement="top">
          <IconButton
            aria-label="Remove from Favorites"
            onClick={handleOpenDeleteAlert}
          >
            <DeleteIcon />
          </IconButton>
        </Tooltip>
        <Tooltip title="Add to Cart" placement="top">
          <IconButton
            aria-label="Add To Cart"
            onClick={() => addToCart(favoriteItem)}
          >
            <AddShoppingCart />
          </IconButton>
        </Tooltip>
        <AlertBox
          open={openDeleteAlert}
          onClose={handleCloseDeleteAlert}
          onClick={[deleteProduct, handleCloseDeleteAlert]}
          textId="delete-from-favorites-alert"
          alertText="Delete this product from favorites?"
        />
      </div>
    </div>
  );
}
