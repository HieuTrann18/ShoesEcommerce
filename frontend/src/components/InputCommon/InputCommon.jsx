import React, { useState } from "react";
import styles from "./style.module.scss";
import show from "@images/view.png";
import hide from "@images/hide.png";
const InputCommon = ({ label, type, isRequired = false, ...props }) => {
  const {
    input__container,
    input__label,
    input__wrapper,
    password__icon,
    ErrorMessage,
  } = styles;
  const { formik, id } = props;
  const [showPassword, setShowPassword] = useState(false);
  const isPassword = type === "password";
  const isShowTextOrPassword =
    type === "password" && showPassword ? "text" : type;
  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };
  const isError = formik.touched[id] && formik.errors[id];
  const messageError = formik.errors[id];
  return (
    <div className={input__container}>
      <div className={input__label}>
        {label} {isRequired && <span>*</span>}
      </div>
      <div className={input__wrapper}>
        <input
          type={isShowTextOrPassword}
          {...props}
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
          value={formik.values[id]}
        />
        {isPassword && (
          <div onClick={handleShowPassword} className={password__icon}>
            {showPassword ? <img src={show} /> : <img src={hide} />}
          </div>
        )}
        {isError && <div className={ErrorMessage}>{messageError}</div>}
      </div>
    </div>
  );
};

export default InputCommon;
