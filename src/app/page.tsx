import Banner from "./(client)/Components/Banner/Banner";
import Collections from "./(client)/Components/Collections/Collections";
import Rules from "./(client)/Components/Rules/Rules";
import SocialMedia from "./(client)/Components/Social Media/SocialMedia";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <Banner />
      <Collections />
      <SocialMedia />
      <Rules />
      <h1>333</h1>
    </main>
  );
}
