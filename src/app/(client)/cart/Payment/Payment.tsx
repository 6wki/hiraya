"use client";

import { useEffect, useState } from "react";
import CartForm from "../../Components/CartForm/CartForm";
import CheckoutProducts from "../../Components/CheckoutProducts/CheckoutProducts";
import LoadingAnimation from "../../Components/LoadingAnimation/LoadingAnimation";
import styles from "./payment.module.css";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { notFound } from "next/navigation";
import PaymentSuccessful from "../PaymentSuccessful/PaymentSuccessful";

const Payment = () => {
  const [isClient, setIsClient] = useState(false);
  const totalPrice = useSelector((state: RootState) => state.auth.totalPrice);
  const paid = useSelector((state: RootState) => state.auth.paid);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const renderContent = () => {
    if (paid) {
      return <PaymentSuccessful />;
    } else {
      if (totalPrice === 0) {
        return notFound();
      } else {
        return (
          <div className={styles.payment}>
            <h1 className={styles.title}>Payment</h1>
            <div className="separator" />
            <div className={styles.paymentContainer}>
              <CartForm />
              <CheckoutProducts />
            </div>
          </div>
        );
      }
    }
  };

  return <>{isClient ? renderContent() : <LoadingAnimation />}</>;
};

export default Payment;
