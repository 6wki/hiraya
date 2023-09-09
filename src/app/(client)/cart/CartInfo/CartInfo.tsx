"use client";

import { useSelector } from "react-redux";
import styles from "./cartInfo.module.css";
import { RootState } from "@/redux/store";
import { useEffect, useState } from "react";
import CartLanding from "./CartLanding/CartLanding";
import CartData from "./CartData/CartData";

const CartInfo = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const state = useSelector((state: RootState) => state.auth.cartItems);

  return (
    <>
      {isClient ? (
        <>{state.length === 0 ? <CartLanding /> : <CartData />}</>
      ) : (
        ""
      )}
    </>
  );
};

export default CartInfo;
