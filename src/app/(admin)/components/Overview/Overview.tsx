import Image from "next/image";
import styles from "./overview.module.css";
import shipped from "@/../public/shipped.svg";
import income from "@/../public/income.svg";
import order from "@/../public/order.svg";

const Overview = () => {
  return (
    <div className={styles.cards}>
      <div className={styles.card}>
        <p>Shipped orders</p>
        <h2>67</h2>
        <Image
          src={shipped}
          width={130}
          height={130}
          alt="Shipped orders"
          className={styles.cardImage}
        />
      </div>
      <div className={styles.card}>
        <p>Total income</p>
        <h2>2k</h2>
        <Image
          src={income}
          width={130}
          height={130}
          alt="Total income"
          className={styles.cardImage}
        />
      </div>
      <div className={styles.card}>
        <p>New orders</p>
        <h2>35</h2>
        <Image
          src={order}
          width={130}
          height={130}
          alt="New orders"
          className={styles.cardImage}
        />
      </div>
    </div>
  );
};

export default Overview;
