// import Image from "next/image";
// import styles from "./product.module.css";
// import img from "../../../../public/bannerHijab.png";
// import correct from "../../../../public/correct.svg";
// import ProductGallery from "../Components/ProductGallery/ProductGallery";
// import { EmblaCarousel } from "../Components/ProductCarossel/ProductCarossel";

// export default function Page({ params }: { params: { product: string } }) {
//   return (
//     <div className={`${styles.product} containerAdjust`}>
//       <div className={`${styles.productsContainer} containerSettings`}>
//         <div className={`${styles.images} ${styles.side}`}>
//           <ProductGallery />
//           <EmblaCarousel
//             slides={[
//               <Image
//                 src={img}
//                 width={0}
//                 height={0}
//                 alt="product"
//                 className={styles.productImage}
//               />,
//               <Image
//                 src={img}
//                 width={0}
//                 height={0}
//                 alt="product"
//                 className={styles.productImage}
//               />,
//               <Image
//                 src={img}
//                 width={0}
//                 height={0}
//                 alt="product"
//                 className={styles.productImage}
//               />,
//             ]}
//           />
//         </div>
//         <div className={`${styles.informations} ${styles.side}`}>
//           <div className={styles.section}>
//             <p className="collections">Kollektionen / Khimar /</p>
//             <h1>French Abaya Sky Blue</h1>
//           </div>
//           <div className={styles.section}>
//             <p>Pries</p>
//             <h4>€47,99 €42,99 (20% Off)</h4>
//             <ul>
//               <li>
//                 <Image src={correct} width={20} height={20} alt="correct" /> One
//                 size fits all
//               </li>
//               <li>
//                 <Image src={correct} width={20} height={20} alt="correct" />{" "}
//                 Front length approx. 80 cm - back length approx. 110 cm
//               </li>
//               <li>
//                 <Image src={correct} width={20} height={20} alt="correct" />{" "}
//                 100% Polyester
//               </li>
//               <li>
//                 <Image src={correct} width={20} height={20} alt="correct" />{" "}
//                 Jazz optics
//               </li>
//             </ul>
//           </div>
//           <button className={styles.buyButton}>der Tasche hinzufügen</button>
//           <div className="payments"></div>
//           <p>
//             With the different front and back lengths of our two-layer khimar,
//             modern hijab clothing takes on new importance. The khimar is opaque
//             and offers various ways to tie them. The colors are identical to our
//             Abaya NAIRA and are therefore very suitable to combine. The khimar
//             has a front length of about 80 cm and a back length of about 110 cm.
//             It is available in black, white, olive green, navy blue, dusky pink,
//             dusty pink, beige, taupe, cream, dark brown and baby blue.
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// }
