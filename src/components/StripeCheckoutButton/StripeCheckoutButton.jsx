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
      image="https://cdn3.iconfinder.com/data/icons/one-piece-colored/48/Cartoons__Anime_One_Piece_Artboard_6-512.png"
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
