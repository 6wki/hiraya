import ProductsTable from "../../components/Tables/ProductsTable";
import styles from "./products.module.css";

const page = () => {
  return (
    <div className="containerAdjust">
      <div className={`${styles.add} containerSettingsAdmin`}>
        <h1 className="titleAdmin">Products</h1>
        <button className="pinkyButton">Add Product</button>
        <ProductsTable />
      </div>
    </div>
  );
};

export default page;
