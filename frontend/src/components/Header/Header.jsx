import React, { useContext } from "react";
import HeaderIconGroup from "./HeaderIconGroup/HeaderIconGroup";
import Navigation from "./Navigation/Navigation";
import styles from "./styles.module.scss";
import Logo from "@images/logo.png";
import { listIcons, listNavigation } from "./constants";
import { SideBarContext } from "../../contexts/SideBar";
const Header = () => {
  const {
    header__wrapper,
    header__container,
    header__icons__wrapper,
    header__nav__wrapper,
    header__logo,
    wrapper,
  } = styles;

  const { isOpen, setIsOpen } = useContext(SideBarContext);

  return (
    <header className={header__container}>
      <div className={header__wrapper}>
        <div className={wrapper}>
          <div className={header__icons__wrapper}>
            {listIcons.slice(0, 3).map((item) => (
              <HeaderIconGroup
                key={item.type}
                type={item.type}
                href={item.href}
              />
            ))}
          </div>
          <div className={header__nav__wrapper}>
            {listNavigation.slice(0, 3).map((item) => (
              <Navigation
                key={item.content}
                content={item.content}
                href={item.href}
              />
            ))}
          </div>
        </div>
        <div>
          <img className={header__logo} src={Logo} alt="" />
        </div>
        <div className={wrapper}>
          <div className={header__nav__wrapper}>
            {listNavigation.slice(3, listNavigation.length).map((item) => (
              <Navigation
                key={item.content}
                content={item.content}
                href={item.href}
                setIsOpen={setIsOpen}
              />
            ))}
          </div>
          <div className={header__icons__wrapper}>
            {listIcons.slice(3, listIcons.length).map((item) => (
              <HeaderIconGroup
                key={item.type}
                type={item.type}
                href={item.href}
              />
            ))}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
