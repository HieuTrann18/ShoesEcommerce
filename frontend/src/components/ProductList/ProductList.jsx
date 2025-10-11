import React from "react";
import styles from "./style.module.scss";
import ProductCard from "../ProductCard/ProductCard";
const ProductList = ({ data }) => {
  const { list__container } = styles;
  return (
    <div className={list__container}>
      {" "}
      {data.map((item) => (
        <ProductCard
          key={item.id}
          src={item.images[0]}
          previews={item.images[1]}
          name={item.name}
          price={item.price}
        />
      ))}
    </div>
  );
};

export default ProductList;
