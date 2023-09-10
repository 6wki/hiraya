import { RootState } from "@/redux/store";
import { useSelector } from "react-redux";
import styles from "./checkoutProduct.module.css";

const CheckoutProducts = () => {
  const state = useSelector((state: RootState) => state.auth.cartItems);
  const totalPrice = useSelector((state: RootState) => state.auth.totalPrice);

  return (
    <div>
      {state.map((product) => (
        <div key={product.id} className={styles.product}>
          <div className={styles.img}>
            <img src={product.primary} alt="" />
            <p className={styles.qty}>{product.quantity}</p>
          </div>
          <div className={styles.info}>
            <p>{product.name}</p>
            <p>{product.price}€</p>
          </div>
        </div>
      ))}
      <div className={styles.calculation}>
        <p>
          Sub Total: <span>{(totalPrice - 4.95).toFixed(2)}€</span>
        </p>
        <p>
          Shipping: <span>4.95€</span>
        </p>
        <p>
          Total Price: <span>{totalPrice}€</span>
        </p>
      </div>
    </div>
  );
};

export default CheckoutProducts;
