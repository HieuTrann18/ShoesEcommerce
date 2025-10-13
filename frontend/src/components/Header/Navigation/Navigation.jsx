import React from "react";
import styles from "../styles.module.scss";
const Navigation = ({ content, href, setIsOpen }) => {
  const { header__nav__item } = styles;
  return (
    <div className={header__nav__item} onClick={() => setIsOpen(true)}>
      {content}
    </div>
  );
};

export default Navigation;
