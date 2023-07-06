import Image from "next/image";
import styles from "./collections.module.css";
import collection from "../../../../../public/bannerHijab.png";

const Collections = () => {
  return (
    <div className="containerAdjust">
      <div className={styles.collectionsContainer}>
        <h2 className="titleMain">ZUR KOLLEKTION</h2>
        <div className={styles.collections}>
          <div className={styles.collection}>
            <div className={styles.collectionInfo}>
              <h2>Abaya</h2>
              <button>View all</button>
            </div>
            <Image
              src={collection}
              height={0}
              width={0}
              alt="collection"
              className={styles.collectionPicture}
            />
          </div>
          <div className={styles.collection}>
            <div className={styles.collectionInfo}>
              <h2>Jilbab</h2>
              <button>View all</button>
            </div>
            <Image
              src={collection}
              height={0}
              width={0}
              alt="collection"
              className={styles.collectionPicture}
            />
          </div>
          <div className={styles.collection}>
            <div className={styles.collectionInfo}>
              <h2>Khimar</h2>
              <button>View all</button>
            </div>
            <Image
              src={collection}
              height={0}
              width={0}
              alt="collection"
              className={styles.collectionPicture}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Collections;
