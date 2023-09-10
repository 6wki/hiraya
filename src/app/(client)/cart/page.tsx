import { RootState, store, useAppSelector } from "@/redux/store";
import React from "react";
import { useSelector } from "react-redux";
import Payment from "./Payment/Payment";
import styles from "./cart.module.css";
import CartInfo from "./CartInfo/CartInfo";

const Page: React.FC = () => {
  return (
    <div className="containerAdjust topSpace">
      <div className={"containerSettings"}>
        <CartInfo />
      </div>
    </div>
  );
};

export default Page;
