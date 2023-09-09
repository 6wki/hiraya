import styles from "./dashboard.module.css";
import Overview from "../../components/Overview/Overview";
import { getProducts } from "@/utils/firebaseActions";

const Page = async () => {
  const data = await getProducts();
  // const session = useSession();
  // console.log(session.data?.user);
  // const docRef = doc(db, "product", "RKzGn6pjMqa8R8o7bC4f");
  // console.log(docRef);
  return (
    <div className="containerAdjust topSpace">
      <div className={`${styles.dashboard} containerSettingsAdmin`}>
        <h1>hello world</h1>
        <Overview />
        <h4>MORE FEATURES COMING SOON</h4>
      </div>
    </div>
  );
};

export default Page;
