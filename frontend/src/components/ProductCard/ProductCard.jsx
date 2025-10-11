import React from "react";
import styles from "./style.module.scss";

import cart from "@images/parcel.png";
import reload from "@images/sync.png";
import heart from "@images/heart.png";
import view from "@images/view.png";
const ProductOutStanding = ({ src, previews, name, price }) => {
  const {
    img__wrapper,
    img__hover,
    action__hover,
    img__icons,
    img__product__name,
    img__product__price,
    product__card,
  } = styles;
  return (
    <div className={product__card}>
      <div className={img__wrapper}>
        <img src={src} alt="" />
        <img src={previews} className={img__hover} alt="" />
        <div className={action__hover}>
          <div className={img__icons}>
            <img src={cart} alt="" />
          </div>
          <div className={img__icons}>
            <img src={heart} alt="" />
          </div>
          <div className={img__icons}>
            <img src={reload} alt="" />
          </div>
          <div className={img__icons}>
            <img src={view} alt="" />
          </div>
        </div>
      </div>
      <div className={img__product__name}>{name}</div>
      <div className={img__product__price}>${price}</div>
    </div>
  );
};

export default ProductOutStanding;
