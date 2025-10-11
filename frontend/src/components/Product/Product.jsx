import React from "react";
import Timer from "@components/Timer/Timer";
import styles from "./style.module.scss";
import CountDown from "@components/CountDown/CountDown";
const Product = () => {
  const { product__container, product__sub } = styles;
  return (
    <>
      <div className={product__container}>
        <CountDown />
        <div className={product__sub}>
          <div>1</div>
          <div>2</div>
        </div>
      </div>
    </>
  );
};

export default Product;
