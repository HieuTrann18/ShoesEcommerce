import React, { useContext } from "react";
import styles from "./style.module.scss";
import { SideBarContext } from "../../contexts/SideBar";
import className from "classnames";
import close from "@images/close.png";
import Login from "@components/ContentSidebar/Login/Login";
import Compare from "@components/ContentSidebar/Compare/Compare";
const Sidebar = () => {
  const {
    sidebar__container,
    overlay,
    sidebar,
    slideSideBar,
    sidebar__close,
    close__icon,
  } = styles;
  const { isOpen, setIsOpen, type } = useContext(SideBarContext);

  const handleRenderContent = () => {
    switch (type) {
      case "login":
        return <Login />;
      case "reload":
        return <Compare />;
      case "heart":
        return "wishlist";
      case "cart":
        return "cart";
      default:
        return <Login />;
    }
  };

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className={sidebar__container}>
      <div
        className={className({ [overlay]: isOpen })}
        onClick={handleToggle}
      />
      <div className={className(sidebar, { [slideSideBar]: isOpen })}>
        {isOpen && (
          <div onClick={handleToggle} className={sidebar__close}>
            <img className={close__icon} src={close} alt="" />
          </div>
        )}
        {handleRenderContent()}
      </div>
    </div>
  );
};

export default Sidebar;
