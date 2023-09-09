import Payment from "../cart/Payment/Payment";
import styles from "./checkout.module.css";
const page = () => {
  return (
    <div className="containerAdjust topSpace">
      <div className={"containerSettings"}>
        <div className={styles.container}>
          <Payment />
        </div>
      </div>
    </div>
  );
};

export default page;
