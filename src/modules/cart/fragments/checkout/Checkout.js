import React, { useState } from "react";
import { CardElement } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { CheckoutComponent } from "../../../../modules";

export default function Checkout({ totalItems, totalPrice }) {
  const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PUBLIC_KEY);

  const [activeStep, setActiveStep] = useState(0);
  const [creditCardConfirmed, setCreditCardConfirmed] = useState(false);

  const [customerInfo, setCustomerInfo] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });

  const { firstName, lastName, email } = customerInfo;

  const handleCustomerInfo = (e) => {
    setCustomerInfo({
      ...customerInfo,
      [e.target.name]: e.target.value,
    });
  };

  const handleNextStep = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleGoBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleSubmit = async (event, elements, stripe) => {
    event.preventDefault();
    const cardElement = elements.getElement(CardElement);
    const { error } = await stripe.createPaymentMethod({
      type: "card",
      card: cardElement,
    });

    if (!stripe || !elements) {
      setCreditCardConfirmed(false);
      return;
    }
    if (!error) {
      setCreditCardConfirmed(true);
    }
  };

  return (
    <CheckoutComponent
      activeStep={activeStep}
      firstName={firstName}
      lastName={lastName}
      email={email}
      totalItems={totalItems}
      totalPrice={totalPrice}
      creditCardConfirmed={creditCardConfirmed}
      handleNextStep={handleNextStep}
      handleGoBack={handleGoBack}
      handleCustomerInfo={handleCustomerInfo}
      setCreditCardConfirmed={setCreditCardConfirmed}
      handleSubmit={handleSubmit}
      stripePromise={stripePromise}
    />
  );
}
