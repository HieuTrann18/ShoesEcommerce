import React from "react";
import styles from "./style.module.scss";
const SectionHeader = ({ title, description }) => {
  const {
    product__container,
    headline,
    middleBox,
    product__title,
    product__description,
  } = styles;
  return (
    <div className={product__container}>
      <div className={headline}></div>
      <div className={middleBox}>
        <p className={product__description}>{description}</p>
        <p className={product__title}>{title}</p>
      </div>
      <div className={headline}></div>
    </div>
  );
};

export default SectionHeader;
