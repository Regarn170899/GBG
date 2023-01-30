import React from "react";
import styles from "./Footer.module.css";
import { Link } from "react-scroll";
import s from "../Header/Header.module.css";

const Footer = () => {
  return (
    <div className={styles.footerSector}>
      <div className={styles.footerContainer}>
        <div className={styles.footerIcon}></div>
        <div className={styles.footerTextContainer}>
          <div className={styles.footerNavMenu}>
            <ul className={styles.menu}>
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
                  Обратная связь
                </Link>
              </li>
            </ul>
          </div>
          <div className={styles.footerContactsContainer}>
            <h2 className={styles.nameCompany}>Gonna be Great </h2>
            <div className={styles.footerContacts}>
              <p className={styles.email}>email.mail@mail.ru</p>
              <p className={styles.phone}>+7 999 99 99 999</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
