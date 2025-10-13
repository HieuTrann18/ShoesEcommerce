import React from "react";
import styles from "./style.module.scss";
import HeaderSidebar from "../Contents/HeaderSidebar/HeaderSidebar";
import sync from "@images/sync.png";
import ProductItem from "../Contents/ProductItem/ProductItem";
const Compare = () => {
  const { compare__container } = styles;
  return (
    <div className={compare__container}>
      <HeaderSidebar icon={sync} title={"COMPARE"} />
      <ProductItem />
    </div>
  );
};

export default Compare;
