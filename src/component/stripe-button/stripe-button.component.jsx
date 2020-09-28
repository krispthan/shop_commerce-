import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey =
    'pk_test_51H4Y07CXbQAYXZnqszrV4fMWMOMjd01ZXfMmJt11dGpasSKVFOBW1157xUzdBLK6JisADLhdlzmsGimxni1GJ26G00MDZEP7pl';
  const onToken = (token) => {
    console.log(token);
    alert('Payment Successful');
  };
  return (
    <StripeCheckout
      label="Pay Now"
      name="Boutique Clothing LLC"
      billingAddress
      shippingAddressimage="https://svgshare.com/i/CUz.svg"
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
