import React from "react";
import Grid from "@material-ui/core/Grid";
import {
  LoadingSpinner,
  PriceFilter,
  Product,
  Typography,
} from "../../../../modules";
import useStyles from "./styles";

export default function ProductsComponent({
  filteredProducts,
  isLoading,
  bestSellingProductRate,
  price,
  setPrice,
}) {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      {isLoading ? (
        <div className={classes.loadingSpinner}>
          <LoadingSpinner />
        </div>
      ) : (
        <div className={classes.productsContainer}>
          <PriceFilter price={price} setPrice={setPrice} />
          <div className={classes.products}>
            <Grid container spacing={4}>
              {!filteredProducts.length ? (
                <Typography variant="body1" text="No products found." />
              ) : (
                filteredProducts.map((product) => (
                  <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
                    <Product
                      product={product}
                      bestSellingProductRate={bestSellingProductRate}
                    />
                  </Grid>
                ))
              )}
            </Grid>
          </div>
        </div>
      )}
    </div>
  );
}
