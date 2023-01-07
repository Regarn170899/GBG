import s from './Header.module.css';
import React from 'react';

const Header = () => {
    return (
        <div className={s.Header}>
            <div className={s.HeaderContainer}>
                <div className={s.LogoContainer}>
                    <div className={s.logo}>
                    </div>
                    <p className={s.logoText}>Gonna be Great </p>
                </div>
                <div className={s.navContainer}>
                    <ul className={s.menu}>
                        <li className={s.item}>Что мы делаем</li>
                        <li className={s.item}>Портфолио</li>
                        <li className={s.item}>О нас</li>
                        <li className={s.item}>Блог</li>
                        <li className={s.item}>Контакты</li>
                    </ul>
                </div>
            </div>
            <h1 className={s.tit}>GBG</h1>
            <h2 className={s.titDiscription}>Мы создаём -
                сайты</h2>
        </div>

    );
};

export default Header;