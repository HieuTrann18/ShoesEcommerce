import React from "react";
import styles from "./style.module.scss";
import HeaderSidebar from "../Contents/HeaderSidebar/HeaderSidebar";
import cart from "@images/shopping-cart.png";
import ProductItem from "../Contents/ProductItem/ProductItem";
import Button from "@components/Button/Button";
const Cart = () => {
  const { cart__container, cart__wrapper, cart__total, btn__wrapper } = styles;
  return (
    <div className={cart__container}>
      <div className={cart__wrapper}>
        <HeaderSidebar icon={cart} title={"CART"} />
        <ProductItem />
      </div>
      <div>
        <div className={cart__total}>
          <p>SUBTOTAL:</p>
          <p>$199.99</p>
        </div>
        <div className={btn__wrapper}>
          <Button content={"VIEW CART"} />
          <Button content={"CHECK OUT"} />
        </div>
      </div>
    </div>
  );
};

export default Cart;
