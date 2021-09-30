import React from "react";
import { Typography } from "../../../../modules";
import useStyles from "./styles";

export default function OrderConfirmation({
  firstName,
  lastName,
  email,
  totalItems,
  totalPrice,
}) {
  const classes = useStyles();

  return (
    <div className={classes.orderConfirmationContainer}>
      <div className={classes.orderConfirmation}>
        <Typography variant="body1" text={`First name: ${firstName}`} />
        <br />
        <Typography variant="body1" text={`Last name: ${lastName}`} />
        <br />
        <Typography variant="body1" text={`Email: ${email}`} />
        <br />
        <Typography
          variant="body1"
          text={`Total number of items: ${totalItems}`}
        />
        <br />
        <Typography variant="body1" text={`Total price: $${totalPrice}`} />
        <br />
      </div>
    </div>
  );
}
