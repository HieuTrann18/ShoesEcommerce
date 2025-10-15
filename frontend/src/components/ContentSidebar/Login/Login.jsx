import React, { useContext, useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import Cookies from "js-cookie";

import { StoreContext } from "../../../contexts/Store";
import { SideBarContext } from "../../../contexts/SideBar";
import { ToastContext } from "../../../contexts/Toast";

import { register, signIn } from "../../../apis/authService";

import Button from "@components/Button/Button";
import InputCommon from "../../InputCommon/InputCommon";

import styles from "./style.module.scss";

const Login = () => {
  const {
    login__container,
    login__title,
    login__checkbox,
    login__lostpassword,
  } = styles;

  // Context
  const { setIsOpen } = useContext(SideBarContext);
  const { setUserId } = useContext(StoreContext);
  const { toast } = useContext(ToastContext);

  // State
  const [isRegister, setIsRegister] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  // Formik
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

      try {
        if (isRegister) {
          const res = await register({ username, password });
          toast.success(res.data.message);
        } else {
          const res = await signIn({ username, password });
          const { id, token, refreshToken } = res.data;
          setUserId(id);
          Cookies.set("token", token);
          Cookies.set("refreshToken", refreshToken);
          Cookies.set("userId", id);
          toast.success("Login successfully");
          setIsOpen(false);
        }
      } catch (err) {
        toast.error(err.response?.data?.message || "Something went wrong");
      } finally {
        setIsLoading(false);
      }
    },
  });

  // Toggle Register / Login
  const handleToggle = () => {
    setIsRegister(!isRegister);
    formik.resetForm();
  };

  return (
    <div className={login__container}>
      <div className={login__title}>{isRegister ? "SIGN UP" : "SIGN IN"}</div>

      <form onSubmit={formik.handleSubmit}>
        <InputCommon
          id="email"
          label="Username or email"
          type="text"
          isRequired
          value={formik.values.email}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          formik={formik}
        />

        <InputCommon
          id="password"
          label="Password"
          type="password"
          isRequired
          value={formik.values.password}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          formik={formik}
        />

        {isRegister && (
          <InputCommon
            id="cfmpassword"
            label="Confirm Password"
            type="password"
            isRequired
            value={formik.values.cfmpassword}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            formik={formik}
          />
        )}

        {!isRegister && (
          <div className={login__checkbox}>
            <input type="checkbox" />
            <span>Remember me</span>
          </div>
        )}

        <Button content={isRegister ? "Register" : "Sign up"} type="submit" />
      </form>

      <Button
        content={
          isRegister ? "Already have an account?" : "Don't have an account?"
        }
        type="button"
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
