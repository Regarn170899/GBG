import s from "./Header.module.css";
import React, { useState } from "react";
import { Link } from "react-scroll";
import { navigationLinkName } from "../../constants/index";

const Header = () => {
  const [menuActive, setMenuActive] = useState(false);
  return (
    <div className={s.Header}>
      <div className={s.HeaderContainer}>
        <div className={s.LogoContainer}>
          <div className={s.logo}></div>
          <p className={s.logoText}>Gonna be Great </p>
        </div>
        <div
          className={menuActive ? `${s.burger_btn} ${s.open}` : s.burger_btn}
          onClick={() => {
            setMenuActive(!menuActive);
          }}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div className={s.navContainer}>
          <ul className={menuActive ? `${s.menu} ${s.active}` : s.menu}>
            {navigationLinkName.map((link) => (
              <li key={link.id}>
                <Link
                  onClick={() => {
                    setMenuActive(!menuActive);
                  }}
                  className={s.itemHeader}
                  to={link.linkTo}
                  spy={true}
                  smooth={true}
                  offset={50}
                  duration={500}
                >
                  {link.description}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <h1 className={s.tit}>GBG</h1>
      <h2 className={s.titDiscription}>
        Мы создаём
        <strong className={s.redWord}> сайты</strong>
      </h2>
    </div>
  );
};

export default Header;
