import styles from "./dashboard.module.css";
import Overview from "../../components/Overview/Overview";

const Page = () => {
  return (
    <div className="containerAdjust">
      <div className={`${styles.dashboard} containerSettings`}>
        <h1>Good Evening, User</h1>
        <Overview />
        <h4>MORE FEATURES COMING SOON</h4>
      </div>
    </div>
  );
};

export default Page;
