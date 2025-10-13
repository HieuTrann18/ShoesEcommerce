import React from "react";
import styles from "./style.module.scss";
import HeaderSidebar from "../Contents/HeaderSidebar/HeaderSidebar";
import ProductItem from "../Contents/ProductItem/ProductItem";
import heart from "@images/heart.png";
import Button from "@components/Button/Button";
const WishList = () => {
  const { wishlist_container, wishlist_wrapper, btn__wrapper } = styles;
  return (
    <div className={wishlist_container}>
      <div className={wishlist_wrapper}>
        <HeaderSidebar icon={heart} title={"Wish List"} />
        <ProductItem />
      </div>
      <div className={btn__wrapper}>
        <Button content={"VIEW WISHLIST"} />
        <Button content={"ADD TO CART"} isPrimary={false} />
      </div>
    </div>
  );
};

export default WishList;
