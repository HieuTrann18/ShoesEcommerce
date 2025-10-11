import React from "react";
import styles from "../style.module.scss";

const InfoCard = ({ title, description, src }) => {
  const {
    infoSection__wrapper,
    infoSection__icons,
    infoSection__content,
    infoSection__title,
    infoSection__text,
  } = styles;
  return (
    <div className={infoSection__wrapper}>
      <img className={infoSection__icons} src={src} alt="" />
      <div className={infoSection__content}>
        <span className={infoSection__title}>{title}</span>
        <span className={infoSection__text}>{description}</span>
      </div>
    </div>
  );
};

export default InfoCard;
