import React from "react";
import styles from "./styles.module.scss";
import Button from "../Button/Button";
const Banner = () => {
  const {
    banner__container,
    banner__content,
    banner__title,
    banner__description,
  } = styles;
  return (
    <div className={banner__container}>
      <div className={banner__content}>
        <h1 className={banner__title}>XStore Marseille04 Demo</h1>
        <p className={banner__description}>
          Make yours celebrations even more special this years with beautiful.
        </p>
        <Button content={"Go to shop"} />
      </div>
    </div>
  );
};

export default Banner;
