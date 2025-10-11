import React, { useEffect, useState } from "react";
import styles from "./style.module.scss";
const Timer = ({ targetDate }) => {
  const { element__timer, element_interval } = styles;
  const calculateTimeLeft = () => {
    const difference = new Date(targetDate) - new Date();
    if (difference <= 0) return null;

    return {
      Days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      Hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      Mins: Math.floor((difference / 1000 / 60) % 60),
      Secs: Math.floor((difference / 1000) % 60),
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);

  const formatNumber = (number) => String(number).padStart(2, "0");

  if (!timeLeft) return <div>Time's up!</div>;

  return (
    <div>
      {Object.entries(timeLeft).map(([interval, value]) => (
        <span className={element__timer} key={interval}>
          {formatNumber(value)}
          <span className={element_interval}>{interval}</span>{" "}
        </span>
      ))}
    </div>
  );
};

export default Timer;
