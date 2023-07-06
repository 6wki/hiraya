import styles from "./add.module.css";

const page = () => {
  return (
    <div className="containerAdjust">
      <div className={`${styles.add} containerSettings`}>
        <h1 className="titleAdmin">Add a product</h1>
      </div>
    </div>
  );
};

export default page;
