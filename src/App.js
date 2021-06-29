import React, { useState } from "react";
import ReactDOM from "react-dom";

const PayPalButton = window.paypal.Buttons.driver("react", { React, ReactDOM });

function App() {
  const [order, setOrder] = useState(false);

  const createOrder = (data, actions) => {
    return actions.order.create({
      purchase_units: [
        {
          amount: {
            value: "14",
          },
        },
      ],
    });
  };

  const onApprove = (data, actions) => {
    return actions.order.capture();
  };
  return (
    <>
      {order ? (
        <PayPalButton
          createOrder={(data, actions) => createOrder(data, actions)}
          onApprove={(data, actions) => {
            onApprove(data, actions);
            setOrder(false); // For paymentBtnCheckout, it will setOrder to false only when the payment is completed.
          }}
        />
      ) : (
        <button // PaymentBtnCheckout
          onClick={() => {
            setOrder(true);
          }}
        >
          Pay Now
        </button>
      )}
    </>
  );
}

export default App;
