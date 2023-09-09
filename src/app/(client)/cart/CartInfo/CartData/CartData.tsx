import { useDispatch, useSelector } from "react-redux";
// import state from "./fetchingInfo";
import {
  removeFromCart,
  increaseQuantity,
  decreaseQuantity,
} from "@/redux/slices/cartSlice";
import { RootState } from "@/redux/store";
import styles from "./cartData.module.css";
import { useState, useEffect } from "react";
import Link from "next/link";
const CartData = () => {
  const state = useSelector((state: RootState) => state.auth.cartItems);
  const dispatch = useDispatch();
  const [isClient, setIsClient] = useState(false);

  const handleRemoveItem = (itemId: any) => {
    dispatch(removeFromCart(itemId));
  };

  useEffect(() => {
    setIsClient(true);
  }, []);

  const totalPrice = useSelector((state: RootState) => state.auth.totalPrice);

  const calculateProductPrice = () => {
    return state.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
    <div className={styles.cartDataContainer}>
      <div className={styles.containerInfo}>
        {isClient ? (
          <div>
            <h1 className={styles.title}>Dein Warenkorb</h1>
            <div className="separator" />
            <div className={styles.productsContainer}>
              {state.map((item: any) => (
                <div
                  className={styles.orderContainer}
                  key={crypto.randomUUID()}
                >
                  <div className={styles.left}>
                    <div
                      className={styles.delete}
                      onClick={() => handleRemoveItem(item.id)}
                    >
                      <img src="/trash.svg" alt="trash" />
                    </div>
                    <div className={styles.img}>
                      <img src={item.primary} alt="" />
                    </div>
                  </div>
                  <div className={styles.right}>
                    <div className={styles.top}>
                      <p>{item.name}</p>
                      <p>€{item.price}</p>
                    </div>
                    <div className={styles.bottom}>
                      <div className="counterContainer">
                        <button
                          className={styles.incDecRes + " " + "buttonIncDec"}
                          onClick={() => dispatch(increaseQuantity(item.id))}
                        >
                          +
                        </button>
                        <p className={styles.incDecRes + " " + "result"}>
                          {item.quantity}
                        </p>
                        <button
                          className={styles.incDecRes + " " + "buttonIncDec"}
                          onClick={() => dispatch(decreaseQuantity(item.id))}
                        >
                          -
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className={styles.bottomFooter}>
              <div className="separator" />
              <div className={styles.calculations}>
                <div className={styles.subShip}>
                  <div
                    className={styles.subTotal + " " + styles.pricesContainer}
                  >
                    <h2 className="secondTitle">Subtotal</h2>
                    <p>€{calculateProductPrice()}</p>
                  </div>
                  <div
                    className={styles.shipping + " " + styles.pricesContainer}
                  >
                    <h2 className="secondTitle">Shipping</h2>
                    <p>€4.95</p>
                  </div>
                </div>
                <div className="separator" />
                <div className={styles.pricesContainer + " " + styles.total}>
                  <div className={styles.info}>
                    <h2 className="secondTitle">Total</h2>
                  </div>
                  <h1>€{totalPrice}</h1>
                </div>
              </div>
            </div>
            <Link
              className={styles.checkoutButton + " pinkyButton"}
              href="checkout"
            >
              Sicher zur Kasse
            </Link>
          </div>
        ) : (
          "Loading"
        )}
      </div>
    </div>
  );
};

export default CartData;
