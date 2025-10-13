import React from "react";
import styles from "./style.module.scss";
import Timer from "@components/Timer/Timer";
import Button from "@components/Button/Button";
const CountDown = () => {
  const {
    countDown__container,
    countDown__timer,
    countDown__title,
    countDown__btn,
  } = styles;
  const targetDate = "2025-12-31T00:00:00";
  return (
    <div className={countDown__container}>
      <div className={countDown__timer}>
        {" "}
        <Timer targetDate={targetDate} />
        <h2 className={countDown__title}>The Classics Make A Comeback</h2>
        <div className={countDown__btn}>
          <Button content={"Buy now"} />
        </div>
      </div>
    </div>
  );
};

export default CountDown;
