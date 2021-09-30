import React from "react";
import Rating from "@material-ui/lab/Rating";
import FavoriteTwoToneIcon from "@material-ui/icons/FavoriteTwoTone";
import {
  Card,
  CardContent,
  CardActions,
  IconButton,
  Tooltip,
} from "@material-ui/core";
import { AddShoppingCart } from "@material-ui/icons";
import { Typography } from "../../../../modules";
import useStyles from "./styles";

export default function ProductComponent({
  product,
  bestSellingProductRate,
  heartIconActive,
  addToFavorites,
  deleteFromFavorites,
  addToCart,
}) {
  const classes = useStyles();

  return (
    <Card elevation={4} className={classes.card}>
      <div className={classes.imageContainer}>
        <>
          {product.rating.rate > bestSellingProductRate && (
            <Typography
              variant="body1"
              className={classes.tag}
              text="Best-selling product"
            />
          )}
          <img
            src={product.image}
            className={classes.image}
            alt={product.title}
          />
        </>
      </div>
      <CardContent>
        <div className={classes.cardContent}>
          <Typography
            variant="h6"
            component="h2"
            gutterBottom
            style={{ height: "130px" }}
            text={product.title}
          />
          <div className={classes.rating}>
            <Rating
              name="half-rating"
              defaultValue={product.rating.rate}
              precision={0.5}
            />
            <Typography
              color="textSecondary"
              className={classes.ratingCount}
              text={`(${product.rating.count})`}
            />
          </div>
          <Typography
            variant="h5"
            component="h2"
            color="textSecondary"
            text={`$${product.price}`}
          />
        </div>
      </CardContent>
      <CardActions className={classes.cardActions}>
        <IconButton
          onClick={heartIconActive ? deleteFromFavorites : addToFavorites}
          aria-label="Show favorites"
          color={heartIconActive ? "secondary" : "inherit"}
        >
          <FavoriteTwoToneIcon />
        </IconButton>
        <Tooltip title="Add to Cart" placement="top">
          <IconButton aria-label="Add to Cart" onClick={addToCart}>
            <AddShoppingCart />
          </IconButton>
        </Tooltip>
      </CardActions>
    </Card>
  );
}
