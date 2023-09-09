import styles from "./loadingAnimation.module.css";

const LoadingAnimation = () => {
  return (
    <div className={styles.loaderContainer}>
      <div className={styles.loader}></div>;
    </div>
  );
};

export default LoadingAnimation;
