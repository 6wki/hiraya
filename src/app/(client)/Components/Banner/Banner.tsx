import styles from "./banner.module.css";
import BannerHiraya from "../../../../../public/bannerHijab.png";
import Image from "next/image";

const Banner = () => {
  return (
    <div className={styles.hirayaBanner}>
      <div className={styles.bannerContainer}>
        <div className={styles.bannerInfo}>
          <h1>MODESTY IS THE HIGHEST ELEGANCE</h1>
          <button></button>
        </div>
        <div className={styles.overlay}></div>
        <Image
          src={BannerHiraya}
          width={0}
          height={0}
          alt="Hiraya Banner"
          style={{
            width: "1200px",
            height: "30rem",
            objectFit: "cover",
            borderRadius: ".5rem",
            filter: "brightness(.6)",
          }}
        />
      </div>
    </div>
  );
};

export default Banner;
