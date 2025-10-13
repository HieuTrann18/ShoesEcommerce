import React from "react";
import styles from "./style.module.scss";
import prd1 from "@images/prd1.png";
import { IoMdClose } from "react-icons/io";
const ProductItem = () => {
  const { product__container, content__wrapper, title, price, btn__close } =
    styles;
  return (
    <div className={product__container}>
      <img src={prd1} alt="" />
      <div className={btn__close}>
        <IoMdClose />
      </div>
      <div className={content__wrapper}>
        <div className={title}>title of product</div>
        <div className={price}>$119.99</div>
      </div>
    </div>
  );
};

export default ProductItem;
