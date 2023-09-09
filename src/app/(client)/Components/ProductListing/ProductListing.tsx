import Image from "next/image";
import styles from "./ProductListing.module.css";
import bannerHijab from "@/../public/bannerHijab.png";
import Link from "next/link";
import slugify from "slugify";

const ProductListing = ({ data }: any) => {
  // Formatting the price

  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "EUR",
  });

  const url = slugify(data.name);

  return (
    <Link href={`${data.category}/${url}`}>
      <div className={styles.productListing}>
        {/* <Image
          src={data.primary}
          width={0}
          height={0}
          alt="product"
          className={styles.productPicture}
        /> */}
        <img src={data.primary} alt="" className={styles.productPicture} />
        <div className={styles.name}>{data.name}</div>
        <div className={styles.price}>{formatter.format(data.price)}</div>
      </div>
    </Link>
  );
};

export default ProductListing;
