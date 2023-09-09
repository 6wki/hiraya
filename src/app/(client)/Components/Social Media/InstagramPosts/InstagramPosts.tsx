import Image from "next/image";
import styles from "./IgPosts.module.css";
import igImage from "../../../../../../public/bannerHijab.png";
import igIcon from "../../../../../../public/instagramIcon.svg";

const InstagramPosts = () => {
  return (
    <div className={styles.instagram}>
      <h2 className={"titleMain " + styles.titleMainIg}>
        FOLGE UNS AUF INSTAGRAM @AL.HIRAYA
      </h2>
      <div className={styles.postsContainer}>
        <div className={styles.post}>
          <Image
            src={igIcon}
            width={0}
            height={0}
            alt="Instagram Icon"
            className={styles.instagramIcon}
          />
          <Image
            src={igImage}
            width={0}
            height={0}
            alt="Instagram Image"
            className={styles.instagramPost}
          />
        </div>
        <div className={styles.post}>
          <Image
            src={igIcon}
            width={0}
            height={0}
            alt="Instagram Icon"
            className={styles.instagramIcon}
          />
          <Image
            src={igImage}
            width={0}
            height={0}
            alt="Instagram Image"
            className={styles.instagramPost}
          />
        </div>
        <div className={styles.post}>
          <Image
            src={igIcon}
            width={0}
            height={0}
            alt="Instagram Icon"
            className={styles.instagramIcon}
          />
          <Image
            src={igImage}
            width={0}
            height={0}
            alt="Instagram Image"
            className={styles.instagramPost}
          />
        </div>
        <div className={styles.post}>
          <Image
            src={igIcon}
            width={0}
            height={0}
            alt="Instagram Icon"
            className={styles.instagramIcon}
          />
          <Image
            src={igImage}
            width={0}
            height={0}
            alt="Instagram Image"
            className={styles.instagramPost}
          />
        </div>
      </div>
      <div className="post"></div>
      <div className="post"></div>
      <div className="post"></div>
    </div>
  );
};

export default InstagramPosts;
