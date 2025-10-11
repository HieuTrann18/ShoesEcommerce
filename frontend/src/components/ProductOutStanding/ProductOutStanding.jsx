import React from "react";
import Timer from "@components/Timer/Timer";
import styles from "./style.module.scss";
import CountDown from "@components/CountDown/CountDown";
import ProductCard from "@components/ProductCard/ProductCard";

const Product = ({ data }) => {
  const { product__container, product__sub } = styles;
  console.log("check", data);
  return (
    <>
      <div className={product__container}>
        <CountDown />
        <div className={product__sub}>
          {data.map((item) => {
            return (
              <ProductCard
                key={item.id}
                src={item.images[0]}
                previews={item.images[1]}
                name={item.name}
                price={item.price}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Product;
