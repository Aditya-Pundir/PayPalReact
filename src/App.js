import React from "react";
import ReactDOM from "react-dom";

const PayPalButton = window.paypal.Buttons.driver("react", { React, ReactDOM });

function App() {
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
    <PayPalButton
      createOrder={(data, actions) => createOrder(data, actions)}
      onApprove={(data, actions) => onApprove(data, actions)}
    />
  );
}

export default App;
