import s from "./Header.module.css";
import React from "react";
import { Link } from "react-scroll";

const Header = () => {
  return (
    <div className={s.Header}>
      <div className={s.HeaderContainer}>
        <div className={s.LogoContainer}>
          <div className={s.logo}></div>
          <p className={s.logoText}>Gonna be Great </p>
        </div>
        <div className={s.navContainer}>
          <ul className={s.menu}>
            <li>
              <Link
                className={s.item}
                to="card"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
              >
                Что мы делаем?
              </Link>
            </li>
            <li>
              <Link
                className={s.item}
                to="projects"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
              >
                Портфолео
              </Link>
            </li>
            <li>
              <Link
                className={s.item}
                to="about"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
              >
                О нас
              </Link>
            </li>
            <li>
              <Link
                className={s.item}
                to="blog"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
              >
                Блог
              </Link>
            </li>
            <li>
              <Link
                className={s.item}
                to="form"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
              >
                Контакты
              </Link>
            </li>
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
