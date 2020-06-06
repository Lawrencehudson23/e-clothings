import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  //NOTE: key get from stripe site
  const publishableKey =
    "pk_test_51Gr03oKgABCagJ0UgaKDnSZKI4gReCvFIcvOzhgVRnnaj5fCIAPvtr4KQ1r9yYNTBY377jr8rHBwWsyYt84zhiT100V47g4YJu";

  const onToken = (token) => {
    console.log(token);
    alert("Payment Successful");
  };

  return (
    <StripeCheckout
      label="Pay Now"
      name="Scollops"
      billingAddress
      shippingAddress
      image="https://camo.githubusercontent.com/0cd910e76658429374539a8d72a0608783918aae/68747470733a2f2f7261776769742e636f6d2f676f72616e67616a69632f72656163742d69636f6e732f6d61737465722f72656163742d69636f6e732e737667"
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
