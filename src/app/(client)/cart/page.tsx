import React from "react";
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
