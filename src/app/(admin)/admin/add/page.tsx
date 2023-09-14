import ProductDetails from "../../components/ProductDetails/ProductDetails";
import styles from "./add.module.css";

const page = () => {
  return (
    <div className="containerAdjust topSpace">
      <div className={`${styles.add} containerSettingsAdmin`}>
        <ProductDetails />
        {/* <h2 className="titleAdminSecond">Product Images</h2> */}
      </div>
    </div>
  );
};

export default page;
