// import { getProductByCategoryAndSlug } from "@/utils/firebaseActions";
// import { notFound } from "next/navigation";
// import styles from "./product.module.css";

// export default async function ProductDetail({
//   params,
// }: {
//   params: { category: string; product: string };
// }) {
//   const productData = await getProductByCategoryAndSlug(
//     params.category,
//     params.product
//   );

//   if (
//     !productData ||
//     (productData.category !== "abaya" && productData.product !== "abayablue")
//   ) {
//     return notFound(); // Return not found page
//   }

//   return (
//     <div className="containerAdjust">
//       <div className={"containerSettings"}>
//         <h1>{productData.category}</h1>
//         <div className="separator"></div>
//         <div className={styles.firstContainer}>
//           <div className={styles.secondContainer}>
//             <div className={styles.products}>
//               {/* Display the product details */}
//               <h1>{productData.name}</h1>
//               <p>{productData.description}</p>
//               <p>Price: {productData.price}</p>
//               {/* Add more product details here */}
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

import { getProductByCategoryAndSlug } from "@/utils/firebaseActions";
import { notFound } from "next/navigation";
import styles from "./product.module.css";
import hiraya from "../../../../../public/bannerHijab.png";
import payment from "../../../../../public/paymentsMethods.svg";
import Link from "next/link";
import Image from "next/image";

import AddToCart from "@/app/(admin)/components/AddToCart/AddToCart";
import { DesktopImages, MobileImages } from "./ProductImage/ProductImage";
import slugify from "slugify";

export default async function ProductDetail({
  params,
}: {
  params: { category: string; product: string };
}) {
  const productData = await getProductByCategoryAndSlug(
    params.category,
    params.product
  );

  if (!productData) {
    return notFound();
  }

  const url = slugify(productData.name).toLowerCase();

  if (
    !productData ||
    (productData.category !== params.category && url !== params.product)
  ) {
    return notFound(); // Return not found page
  }

  return (
    <div className="containerAdjust topSpace">
      <div className={"containerSettings" + " " + styles.containerEdit}>
        <div className={styles.topSpace}></div>
        <div className={styles.productContainer}>
          <div className={styles.img}>
            {/* <img src={hiraya} alt="" /> */}
            <DesktopImages data={productData} />
            <MobileImages data={productData} />
          </div>
          {/* Display the product details */}
          <div className={styles.info}>
            {/* Links */}
            <div className="heading">
              <div className={styles.links}>
                <p>Kollektionen</p>
                <span> / </span>
                <Link href={"/" + productData.category}>
                  {productData.category}
                </Link>
              </div>
              {/* General Informations */}
              <h1 className={styles.productTitle}>{productData.name}</h1>
              <div className={styles.price}>
                <h2>{productData.price}€</h2>
              </div>
            </div>
            <div className="SecondSeparator" />
            {/* Add to cart */}
            <AddToCart productData={productData} />
            <div className="SecondSeparator" />
            <div
              className="description"
              dangerouslySetInnerHTML={{ __html: productData.desc }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
