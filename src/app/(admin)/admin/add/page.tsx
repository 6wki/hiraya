import ProductDetails from "../../components/ProductDetails/ProductDetails";
import styles from "./add.module.css";

const page = () => {
  return (
    <div className="containerAdjust topSpace">
      <div className={`${styles.add} containerSettingsAdmin`}>
        <h1 className="titleAdmin">Add a product</h1>
        <h2 className="titleAdminSecond">Product Details</h2>
        <ProductDetails />
        {/* <h2 className="titleAdminSecond">Product Images</h2> */}
      </div>
    </div>
  );
};

export default page;
