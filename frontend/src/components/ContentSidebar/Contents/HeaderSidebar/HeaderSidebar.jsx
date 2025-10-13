import React from "react";
import styles from "./style.module.scss";

const HeaderSidebar = ({ icon, title }) => {
  const { head__container } = styles;
  return (
    <div>
      <div className={head__container}>
        <img width={30} height={30} src={icon} alt="" />
        <div>{title}</div>
      </div>
    </div>
  );
};

export default HeaderSidebar;
