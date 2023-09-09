"use client";

import { useSelector } from "react-redux";
import styles from "./cartIcon.module.css";

import { RootState } from "@/redux/store";
import { useEffect, useState } from "react";

const CartIcon = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const cartItems = useSelector((state: RootState) => state.auth.cartItems);

  return (
    <div>
      {isClient ? (
        <>
          {cartItems.length === 0 ? (
            <></>
          ) : (
            <div className={styles.notification}>
              <span>{cartItems.length <= 9 ? cartItems.length : +9}</span>
            </div>
          )}
        </>
      ) : (
        ""
      )}
    </div>
  );
};

export default CartIcon;
