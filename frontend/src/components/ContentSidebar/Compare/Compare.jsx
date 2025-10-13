import React from "react";
import styles from "./style.module.scss";
import HeaderSidebar from "../Contents/HeaderSidebar/HeaderSidebar";
import sync from "@images/sync.png";
import ProductItem from "../Contents/ProductItem/ProductItem";
import Button from "@components/Button/Button";
const Compare = () => {
  const { compare__container, compare__wrapper } = styles;
  return (
    <div className={compare__container}>
      <div className={compare__wrapper}>
        <HeaderSidebar icon={sync} title={"COMPARE"} />
        <ProductItem />
      </div>
      <div>
        <Button content={"VIEW COMPARE"} />
      </div>
    </div>
  );
};

export default Compare;
