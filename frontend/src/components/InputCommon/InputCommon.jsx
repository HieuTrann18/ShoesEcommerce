import React, { useState } from "react";
import styles from "./style.module.scss";
import show from "@images/view.png";
import hide from "@images/hide.png";
const InputCommon = ({ label, type, isRequired = false }) => {
  const { input__container, input__label, input__wrapper, password__icon } =
    styles;
  const [showPassword, setShowPassword] = useState(false);
  const isPassword = type === "password";
  const isShowTextOrPassword =
    type === "password" && showPassword ? "text" : type;
  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };
  return (
    <div className={input__container}>
      <div className={input__label}>
        {label} {isRequired && <span>*</span>}
      </div>
      <div className={input__wrapper}>
        <input type={isShowTextOrPassword} />
        {isPassword && (
          <div onClick={handleShowPassword} className={password__icon}>
            {showPassword ? <img src={show} /> : <img src={hide} />}
          </div>
        )}
      </div>
    </div>
  );
};

export default InputCommon;
