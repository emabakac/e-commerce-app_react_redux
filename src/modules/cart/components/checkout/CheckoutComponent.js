import React from "react";
import { useHistory } from "react-router";
import {
  Box,
  Button,
  Paper,
  Step,
  Stepper,
  StepLabel,
} from "@material-ui/core";
import {
  OrderCompleted,
  OrderConfirmation,
  PaymentDetails,
} from "../../../../modules";
import { checkoutSteps as steps } from "../../../../data/checkoutSteps";
import { routes } from "../../../../routes";
import useStyles from "./styles";

export default function CheckoutComponent({
  activeStep,
  firstName,
  lastName,
  email,
  totalItems,
  totalPrice,
  creditCardConfirmed,
  handleNextStep,
  handleGoBack,
  handleCustomerInfo,
  setCreditCardConfirmed,
  handleSubmit,
  stripePromise,
}) {
  const classes = useStyles();
  const history = useHistory();

  return (
    <div className={classes.container}>
      <Paper elevation={4} className={classes.paper}>
        <Stepper activeStep={activeStep}>
          {steps.map((label, index) => {
            const stepProps = {};
            const labelProps = {};
            return (
              <Step
                key={label}
                {...stepProps}
                classes={{
                  root: classes.step,
                  completed: classes.completed,
                  active: classes.active,
                }}
              >
                <StepLabel
                  {...labelProps}
                  StepIconProps={{
                    classes: {
                      root: classes.step,
                      completed: classes.completed,
                      active: classes.active,
                    },
                  }}
                >
                  {label}
                </StepLabel>
              </Step>
            );
          })}
        </Stepper>
        {activeStep === 2 ? (
          <OrderCompleted />
        ) : activeStep === 0 ? (
          <PaymentDetails
            creditCardConfirmed={creditCardConfirmed}
            handleSubmit={handleSubmit}
            firstName={firstName}
            lastName={lastName}
            email={email}
            handleCustomerInfo={handleCustomerInfo}
            stripePromise={stripePromise}
          />
        ) : (
          <OrderConfirmation
            firstName={firstName}
            lastName={lastName}
            email={email}
            totalItems={totalItems}
            totalPrice={totalPrice}
          />
        )}
        {activeStep === steps.length ? (
          <Box
            sx={{ display: "flex", flexDirection: "row", pt: 2 }}
            style={{ margin: "10px" }}
          >
            <Box sx={{ flex: "1 1 auto" }} />
            <Button color="secondary" onClick={() => history.push(routes.HOME)}>
              Go to Home
            </Button>
          </Box>
        ) : (
          <Box
            sx={{ display: "flex", flexDirection: "row", pt: 2 }}
            style={{ margin: "10px" }}
          >
            <Button
              color="secondary"
              disabled={activeStep === 0}
              onClick={handleGoBack}
              sx={{ mr: 1 }}
            >
              Back
            </Button>
            <Box sx={{ flex: "1 1 auto" }} />
            <Button
              onClick={handleNextStep}
              color="secondary"
              disabled={
                !firstName ||
                !lastName ||
                !email ||
                creditCardConfirmed === false
              }
            >
              {activeStep === 1 ? "Buy" : "Next"}
            </Button>
          </Box>
        )}
      </Paper>
    </div>
  );
}
