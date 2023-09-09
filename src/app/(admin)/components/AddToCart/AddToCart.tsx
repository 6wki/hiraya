"use client";

import { useDispatch } from "react-redux";
import { addToCart } from "@/redux/slices/cartSlice";
import styles from "./addToCart.module.css";
import { useState } from "react";
import { toast } from "react-toastify";

const AddToCart = ({ productData }: any) => {
  const dispatch = useDispatch();

  const [quantity, setQuantity] = useState(1);

  const handleIncrement = () => {
    setQuantity((prevCount) => prevCount + 1);
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity((prevCount) => prevCount - 1);
    }
  };

  const handleAddToCart = () => {
    dispatch(addToCart({ ...productData, quantity }));
    setQuantity(1);
    toast.success("🥰 Product added to cart!", {
      position: "bottom-center",
      autoClose: 2500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  };
  return (
    <div>
      <div className={styles.quantityNumber}>
        <p>Quantity</p>
      </div>
      <div className="counterContainer">
        <button onClick={handleIncrement} className="buttonIncDec">
          +
        </button>
        <p className="result">{quantity}</p>
        <button onClick={handleDecrement} className="buttonIncDec">
          -
        </button>
      </div>
      {/* <button onClick={handleAddToCart} className={styles.addToCart}>
        der Tasche hinzufügen
      </button> */}
      <button onClick={handleAddToCart} className={styles.button} type="button">
        <span className={styles.buttonText}>Der Tasche hinzufügen</span>
        <span className={styles.buttonIcon}>
          <svg
            className="svg"
            fill="none"
            height="24"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            width="24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <line x1="12" x2="12" y1="5" y2="19"></line>
            <line x1="5" x2="19" y1="12" y2="12"></line>
          </svg>
        </span>
      </button>
    </div>
  );
};

export default AddToCart;
