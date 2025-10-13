import React from "react";
import InputCommon from "../../InputCommon/InputCommon";
import styles from "./style.module.scss";
import Button from "@components/Button/Button";
const Login = () => {
  const {
    login__container,
    login__title,
    login__checkbox,
    login__lostpassword,
  } = styles;
  return (
    <div className={login__container}>
      <div className={login__title}>Sign In</div>
      <InputCommon label={"Username or email"} type={"text"} isRequired />
      <InputCommon label={"Password"} type={"password"} isRequired />
      <div className={login__checkbox}>
        <input type="checkbox" />
        <span>Remember me</span>
      </div>
      <Button content={"Login"} />
      <div className={login__lostpassword}>Lost your password</div>
    </div>
  );
};

export default Login;
