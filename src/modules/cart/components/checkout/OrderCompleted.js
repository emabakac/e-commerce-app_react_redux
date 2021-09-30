import React from "react";
import { Typography } from "../../../../modules";
import useStyles from "./styles";

export default function OrderCompleted() {
  const classes = useStyles();

  return (
    <div className={classes.orderCompleted}>
      <Typography
        sx={{ mt: 2, mb: 1 }}
        variant="body1"
        component="p"
        text="Thank you for your purchase!"
      />
    </div>
  );
}
