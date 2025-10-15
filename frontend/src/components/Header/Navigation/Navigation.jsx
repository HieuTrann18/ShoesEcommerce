import React, { useContext, useState } from "react";
import styles from "../styles.module.scss";
import { SideBarContext } from "../../../contexts/SideBar";
import { StoreContext } from "../../../contexts/Store";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
const Navigation = ({ content, href }) => {
  const { header__nav__item, sub__menu } = styles;
  const [isShowSubMenu, setShowSubMenu] = useState(false);
  const { setIsOpen, setType } = useContext(SideBarContext);
  const { userInfo, handleLogOut } = useContext(StoreContext);
  const navigate = useNavigate();
  const handleClickShowLogin = () => {
    if (content === "Sign In" && !userInfo) {
      setIsOpen(true);
      setType("login");
    }
    if (content === "Our Shop") {
      navigate("/shop");
    }
  };
  const handleRenderText = (content) => {
    if (content === "Sign In" && userInfo) {
      return `Hello ${userInfo?.username}`;
    } else {
      return content;
    }
  };
  const handleHover = () => {
    if (content === "Sign In" && userInfo) {
      setShowSubMenu(true);
    }
  };

  return (
    <div
      className={header__nav__item}
      onMouseEnter={handleHover}
      onClick={handleClickShowLogin}
    >
      {handleRenderText(content)}
      {isShowSubMenu && (
        <div
          onClick={handleLogOut}
          onMouseLeave={() => setShowSubMenu(false)}
          className={sub__menu}
        >
          Log out
        </div>
      )}
    </div>
  );
};

export default Navigation;
