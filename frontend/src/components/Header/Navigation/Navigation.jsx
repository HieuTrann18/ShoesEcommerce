import React, { useContext } from "react";
import styles from "../styles.module.scss";
import { SideBarContext } from "../../../contexts/SideBar";
const Navigation = ({ content, href }) => {
  const { header__nav__item } = styles;
  const { setIsOpen, setType } = useContext(SideBarContext);
  const handleClickShowLogin = () => {
    if (content === "Sign In") {
      setIsOpen(true);
      setType("login");
    }
  };
  return (
    <div className={header__nav__item} onClick={handleClickShowLogin}>
      {content}
    </div>
  );
};

export default Navigation;
