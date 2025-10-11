import React from "react";
import styles from "../styles.module.scss";
import facebook from "@images/facebook.png";
import instagram from "@images/instagram.png";
import youtube from "@images/youtube.png";
import reload from "@images/sync.png";
import heart from "@images/heart.png";
import cart from "@images/shopping-cart.png";
const HeaderIconGroup = ({ type, href }) => {
  const { header__icons, header__icons__item } = styles;

  const handleRenderIcon = (type) => {
    switch (type) {
      case "facebook":
        return facebook;
      case "instagram":
        return instagram;
      case "youtube":
        return youtube;
      case "reload":
        return reload;
      case "heart":
        return heart;
      case "cart":
        return cart;
    }
  };

  return (
    <div className={header__icons}>
      <img
        className={header__icons__item}
        src={handleRenderIcon(type)}
        alt={type}
      />
    </div>
  );
};

export default HeaderIconGroup;
