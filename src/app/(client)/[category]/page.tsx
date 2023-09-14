import { getProductsByCategory } from "@/utils/firebaseActions";
import { notFound } from "next/navigation";
import ProductListing from "../Components/ProductListing/ProductListing";
import styles from "./category.module.css";

export default async function ProductDetail({
  params,
}: {
  params: { category: string };
}) {
  const data = await getProductsByCategory(params.category);
  if (data.length == 0) {
    return notFound();
  }

  return (
    <div className="containerAdjust topSpace">
      <div className={"containerSettings"}>
        <h1 className={styles.title}>{params.category}</h1>
        <div className="separator"></div>
        <div className={styles.firstContainer}>
          <div className={styles.secondContainer}>
            <div className={styles.products}>
              {data.map((data) => (
                <ProductListing key={data.name} data={data} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
