import Link from "next/link";
import styles from "./paymentSuccessful.module.css";
import Image from "next/image";
import successful from "/public/ConfirmIcon.svg";

const PaymentSuccessful = () => {
  return (
    <div className={styles.container}>
      <div className={styles.secondContainer}>
        <Image width={150} height={150} alt="cart" src={successful} />
        <div className={styles.texts}>
          <h1>Your Products Are On The Way</h1>
          <p>
            Thank you for shopping. Your order has been successfully placed and
            has been processed for delivery, we will update you with an email.
          </p>
        </div>
        <Link className="pinkyButton" href={"/"}>
          Continue Shopping
        </Link>
      </div>
    </div>
  );
};

export default PaymentSuccessful;
