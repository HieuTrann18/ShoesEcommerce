import React from "react";
import styles from "../styles.module.scss";
const Navigation = ({ content, href }) => {
  const { header__nav__item } = styles;
  return <div className={header__nav__item}>{content}</div>;
};

export default Navigation;
