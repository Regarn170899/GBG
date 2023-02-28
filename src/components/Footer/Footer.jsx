import React from "react";
import styles from "./Footer.module.css";
import { Link } from "react-scroll";
import { navigationLinkName } from "../../constants";

const Footer = () => {
  return (
    <div className={styles.footerSector}>
      <div className={styles.footerContainer}>
        <div className={styles.footerIcon}></div>
        <div className={styles.footerTextContainer}>
          <div className={styles.footerNavMenu}>
            <ul className={styles.menu}>
              {navigationLinkName.map((link) => (
                <li key={link.id}>
                  <Link
                    className={styles.itemFooter}
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
