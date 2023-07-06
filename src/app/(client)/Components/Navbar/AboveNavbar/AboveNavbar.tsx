import styles from "./aboveNavbar.module.css";

const AboveNavbar = () => {
  return (
    <p className={styles.aboveNavbar}>
      {" "}
      kostenloser Versand ab 100€ Bestellwert{" "}
    </p>
  );
};

export default AboveNavbar;
