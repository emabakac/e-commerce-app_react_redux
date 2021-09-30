import React from "react";
import { TextField } from "@material-ui/core";
import CheckCircleOutlineIcon from "@material-ui/icons/CheckCircleOutline";
import {
  Elements,
  CardElement,
  ElementsConsumer,
} from "@stripe/react-stripe-js";
import { Button, Typography } from "../../../../modules";
import useStyles from "./styles";

export default function PaymentDetails({
  creditCardConfirmed,
  handleSubmit,
  firstName,
  lastName,
  email,
  handleCustomerInfo,
  stripePromise,
}) {
  const classes = useStyles();

  return (
    <>
      <form className={classes.form} noValidate autoComplete="off">
        <TextField
          required
          id="outlined-secondary"
          name="firstName"
          label="First Name"
          value={firstName}
          variant="outlined"
          color="secondary"
          inputProps={{ maxLength: 40 }}
          onChange={handleCustomerInfo}
        />
        <br />
        <TextField
          required
          id="outlined-secondary"
          name="lastName"
          label="Last Name"
          value={lastName}
          variant="outlined"
          color="secondary"
          inputProps={{ maxLength: 40 }}
          onChange={handleCustomerInfo}
        />
        <br />
        <TextField
          required
          id="outlined-secondary"
          name="email"
          label="Email"
          value={email}
          variant="outlined"
          color="secondary"
          inputProps={{ maxLength: 40 }}
          onChange={handleCustomerInfo}
        />
      </form>
      <br />
      <div className={classes.creditCard}>
        <Elements stripe={stripePromise} style={{ margin: "0 20px" }}>
          <ElementsConsumer>
            {({ elements, stripe }) => (
              <form>
                {creditCardConfirmed ? (
                  <div className={classes.creditCardConfirmed}>
                    <CheckCircleOutlineIcon style={{ margin: "0 5px" }} />
                    <Typography variant="body1" text="Credit Card Confirmed" />
                  </div>
                ) : (
                  <div>
                    <CardElement />
                    <br />
                    <Button
                      type="submit"
                      variant="outlined"
                      color="secondary"
                      text="Confirm Credit Card"
                      onClick={(event) => handleSubmit(event, elements, stripe)}
                    />
                  </div>
                )}
              </form>
            )}
          </ElementsConsumer>
        </Elements>
      </div>
    </>
  );
}
