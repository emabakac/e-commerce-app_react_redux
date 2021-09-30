import React from "react";
import { Divider, Grid } from "@material-ui/core";
import { FavoriteItem, Button, Typography } from "../../../../modules";
import useStyles from "./styles";

export default function FavoritesComponent({
  favorites,
  deleteAllProductsFromFavorites,
}) {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <div style={{ width: "70%" }}>
        <Typography
          variant="h3"
          className={classes.title}
          text="Your Favorite Products"
        />
        <Divider variant="middle" />
      </div>
      {!favorites.length ? (
        <Typography
          variant="body1"
          className={classes.noItemsInFavoritesMessage}
          text="No products saved to Favorites."
        />
      ) : (
        <div className={classes.favoriteItemsContainer}>
          <Grid container spacing={2} className={classes.gridContainer}>
            {favorites.map((favoriteItem) => (
              <Grid item key={favoriteItem.id} xs={12} lg={12}>
                <FavoriteItem favoriteItem={favoriteItem} />
              </Grid>
            ))}
          </Grid>
          <div className={classes.div} />
          <Button
            variant="contained"
            color="secondary"
            onClick={deleteAllProductsFromFavorites}
            text="DELETE ALL"
          />
        </div>
      )}
    </div>
  );
}
