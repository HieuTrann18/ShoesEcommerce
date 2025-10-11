import React from "react";
import styles from "./styles.module.scss";
const Layout = ({ children }) => {
  const { container, wrapper } = styles;
  return (
    <main className={wrapper}>
      <div className={container}>{children}</div>
    </main>
  );
};

export default Layout;
