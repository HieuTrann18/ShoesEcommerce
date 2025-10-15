import React, { useContext } from "react";
import styles from "../style.module.scss";
import Timer from "@components/Timer/Timer";
import Button from "@components/Button/Button";
import {
  OurShopContext,
  OurShopProvider,
} from "../../../contexts/OurShopProvider";
const Banner = () => {
  const { container__banner, container__content, btn__content, title } = styles;
  const targetDate = "2025-12-31T00:00:00";
  const { showOption, sortOption } = useContext(OurShopContext);
  console.log(showOption, sortOption);
  return (
    <>
      <div className={container__banner}>
        <div className={container__content}>
          <Timer targetDate={targetDate} />
          <div className={title}>The classics make a comeback</div>
          <div className={btn__content}>
            <Button content={"Buy now"} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
