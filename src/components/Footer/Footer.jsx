import React from 'react';
import styles from './Footer.module.css'

const Footer = () => {
    return (
        <div className={styles.footerSector}>
            <div className={styles.footerContainer}>
                <div className={styles.footerIcon}></div>
                <div className={styles.footerTextContainer}>
                    <div className={styles.footerNavMenu}>
                        <ul className={styles.menu}>
                            <li className={styles.item}>Что мы делаем</li>
                            <li className={styles.item}>Портфолио</li>
                            <li className={styles.item}>О нас</li>
                            <li className={styles.item}>Блог</li>
                            <li className={styles.item}>Обратная связь</li>
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