import styles from "./banner.module.css";
import BannerHiraya from "../../../../../public/bannerHijab.png";
import Image from "next/image";
import ScrollDown from "./ScrollDown/ScrollDown";

const Banner = () => {
  return (
    <>
      <div className={styles.hirayaBanner}>
        <div className={styles.bannerContainer}>
          <div className={styles.bannerInfo}>
            <h1>MODESTY IS THE HIGHEST ELEGANCE</h1>
            <ScrollDown />
          </div>
          <div className={styles.overlay + " " + styles.white}></div>
          <div className={styles.overlay + " " + styles.black}></div>
          <Image
            src={BannerHiraya}
            width={0}
            height={0}
            alt="Hiraya Banner"
            className={styles.hirayaBannerImage}
          />
        </div>
      </div>
    </>
  );
};

export default Banner;
