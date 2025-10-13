import React, { useContext, useEffect, useState } from "react";
import InputCommon from "../../InputCommon/InputCommon";
import styles from "./style.module.scss";
import Button from "@components/Button/Button";
import { useFormik } from "formik";
import * as Yup from "yup";
import { ToastContext } from "../../../contexts/Toast";
import { register, signIn } from "../../../apis/authService";
import Cookies from "js-cookie";
import { SideBarContext } from "../../../contexts/SideBar";
import { StoreContext } from "../../../contexts/Store";
const Login = () => {
  const {
    login__container,
    login__title,
    login__checkbox,
    login__lostpassword,
  } = styles;
  const { setIsOpen } = useContext(SideBarContext);
  const { setUserId } = useContext(StoreContext);
  const [isRegister, setIsRegister] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useContext(ToastContext);
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      cfmpassword: "",
    },
    validationSchema: Yup.object({
      email: Yup.string().email("Invalid email").required("Email is required"),
      password: Yup.string()
        .min(6, "Password must be at least 6 character")
        .required("Password is required"),
      cfmpassword: Yup.string().oneOf(
        [Yup.ref("password"), null],
        "Password must match"
      ),
    }),
    onSubmit: async (values) => {
      if (isLoading) return;
      const { email: username, password } = values;
      setIsLoading(true);
      if (isRegister) {
        await register({ username, password })
          .then((res) => {
            toast.success(res.data.message);
            setIsLoading(false);
          })
          .catch((err) => {
            toast.error(err.response.data.message);
            setIsLoading(false);
          });
      }
      if (!isRegister) {
        await signIn({ username, password })
          .then((res) => {
            setIsLoading(false);
            const { id, token, refreshToken } = res.data;
            setUserId(id);
            Cookies.set("token", token);
            Cookies.set("refreshToken", refreshToken);
            Cookies.set("userId", id);
            toast.success("Login successfully");
            setIsOpen(false);
          })
          .catch((err) => {
            setIsLoading(false);
          });
      }
    },
  });

  const handleToggle = () => {
    setIsRegister(!isRegister);
    formik.resetForm();
  };

  console.log(formik.errors);
  return (
    <div className={login__container}>
      <div className={login__title}>{isRegister ? "SIGN UP" : "SIGN IN"}</div>
      <form onSubmit={formik.handleSubmit}>
        <InputCommon
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
          value={formik.values.email}
          id="email"
          label={"Username or email"}
          type={"text"}
          isRequired
          formik={formik}
        />

        <InputCommon
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
          value={formik.values.password}
          id="password"
          label={"Password"}
          type={"password"}
          isRequired
          formik={formik}
        />
        {isRegister && (
          <InputCommon
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            value={formik.values.cfmpassword}
            id="cfmpassword"
            label={"Confirm Password"}
            type={"password"}
            isRequired
            formik={formik}
          />
        )}

        {!isRegister && (
          <div className={login__checkbox}>
            <input type="checkbox" />
            <span>Remember me</span>
          </div>
        )}

        <Button content={isRegister ? "Register" : "Sign up"} type={"submit"} />
      </form>
      <Button
        content={
          isRegister ? "Already have an account?" : "Don't have an account?"
        }
        type={"submit"}
        isPrimary={false}
        style={{ marginTop: "10px" }}
        onClick={handleToggle}
      />
      {!isRegister && (
        <div className={login__lostpassword}>Lost your password</div>
      )}
    </div>
  );
};

export default Login;
