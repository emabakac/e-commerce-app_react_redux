import React from "react";
import { Slider } from "@material-ui/core";
import { Typography } from "../../../../modules";
import useStyles from "./styles";

export default function PriceFilterComponent({
  price,
  showPrice,
  handlePriceChange,
}) {
  const classes = useStyles();

  return (
    <div className={classes.priceFilter}>
      <Typography
        id="range-slider"
        gutterBottom
        text="Filter products by price:"
      />
      <div className={classes.priceRange}>
        <Typography variant="body1" text={`$${price[0]}`} />
        <Slider
          value={price}
          min={0}
          max={1000}
          color="secondary"
          onChange={handlePriceChange}
          valueLabelDisplay="auto"
          aria-labelledby="range-slider"
          getAriaValueText={showPrice}
          className={classes.slider}
        />
        <Typography variant="body1" text={`$${price[1]}`} />
      </div>
    </div>
  );
}
