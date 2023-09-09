import { decreaseQuantity, increaseQuantity } from "@/redux/slices/cartSlice";
import { useDispatch } from "react-redux";

const Quantity = ({
  item,
  styles,
}: {
  item: any;
  styles: {
    readonly [key: string]: string;
  };
}) => {
  const dispatch = useDispatch();

  return (
    <>
      <button
        className={styles.incDecRes + " " + "buttonIncDec"}
        onClick={() => {
          dispatch(increaseQuantity(item.quantity));
        }}
      >
        +
      </button>
      <p className={styles.incDecRes + " " + "result"}>{item.quantity}</p>
      <button
        className={styles.incDecRes + " " + "buttonIncDec"}
        onClick={() => {
          dispatch(decreaseQuantity(item.quantity));
        }}
      >
        -
      </button>
    </>
  );
};

export default Quantity;
