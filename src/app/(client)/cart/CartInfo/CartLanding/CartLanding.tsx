import cart from "@/../public/EmptyCart.svg";
import Image from "next/image";
import Link from "next/link";
import styles from "./cartLanding.module.css";

const CartLanding = () => {
  return (
    <div className={styles.container}>
      <div className={styles.secondContainer}>
        <Image
          width={200}
          height={200}
          alt="cart"
          src={cart}
          style={{ marginLeft: "1rem" }}
        />
        <div className={styles.texts}>
          <h1>Your Cart is Empty</h1>
          <p>Looks like you haven’t added anything to your cart yet</p>
        </div>
        <Link className="pinkyButton" href={"/"}>
          Go Shop
        </Link>
      </div>
    </div>
  );
};

export default CartLanding;
