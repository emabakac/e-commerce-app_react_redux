import React from "react";
import { Grid } from "@material-ui/core";
import { LoadingSpinner, Product, Typography } from "../../../modules";
import useStyles from "./styles";

export default function HomePageComponent({
  bestSelling,
  bestSellingProductRate,
  isLoading,
}) {
  const classes = useStyles();

  return (
    <>
      <div className={classes.container}>
        {isLoading ? (
          <LoadingSpinner />
        ) : (
          <div className={classes.productsContainer}>
            <div className={classes.titleContainer}>
              <Typography
                variant="h3"
                color="textPrimary"
                text="Welcome to E-Commerce!"
              />
              <Typography
                variant="h6"
                color="textPrimary"
                className={classes.title}
                text="Check out our best selling products!"
              />
            </div>
            <Grid container spacing={4}>
              {bestSelling.map((product) => (
                <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
                  <Product
                    product={product}
                    bestSellingProductRate={bestSellingProductRate}
                  />
                </Grid>
              ))}
            </Grid>
          </div>
        )}
      </div>
    </>
  );
}
