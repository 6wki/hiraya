"use client";

import React, { useEffect, useState } from "react";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import styles from "./paypalPayment.module.css";
import PaymentSuccessful from "../../cart/PaymentSuccessful/PaymentSuccessful";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { clearCartItems, togglePaid } from "@/redux/slices/cartSlice";
import { addOrder } from "@/utils/firebaseActions";
import { selectAddress } from "@/redux/slices/addressSlice";
// import { POST } from "@/app/api/email/route";

const PayPalPayment = () => {
  const totalPrice = useSelector((state: RootState) => state.auth.totalPrice);
  const dispatch = useDispatch();

  const addressData = useSelector(selectAddress);
  const products = useSelector((state: RootState) => state.auth.cartItems);

  const order = {
    addressData,
    products,
  };

  const handlePaymentSuccess = (details: any, data: any) => {
    // Handle successful payment here (e.g., record the payment in your database).
    dispatch(togglePaid());
    addOrder("orders", order);
    // POST(order.addressData.email);
    dispatch(clearCartItems());
  };

  const createPayPalOrder = (data: any, actions: any) => {
    // Set the amount dynamically here
    return actions.order.create({
      purchase_units: [
        {
          amount: {
            value: totalPrice,
            currency_code: "EUR",
          },
        },
      ],
    });
  };

  return (
    <PayPalScriptProvider
      options={{
        clientId: process.env.NEXT_PUBLIC_CLIENT_ID || "",
        currency: "EUR",
      }}
    >
      <>
        <h2 className="secondTitle2">Pay Now</h2>
        <div style={{ zIndex: 1, position: "relative" }}>
          <PayPalButtons
            style={{ layout: "horizontal" }}
            className={styles.checkout}
            createOrder={createPayPalOrder}
            onApprove={(data: any, actions: any) => {
              return actions.order.capture().then(function (details: any) {
                handlePaymentSuccess(details, data);
              });
            }}
          />
        </div>
      </>
    </PayPalScriptProvider>
  );
};

export default PayPalPayment;
