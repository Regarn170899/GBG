import s from './Header.module.css';
import React from 'react';
import {Anchor} from 'antd';

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
                        <li className={s.item}><a href="">Что мы делаем</a></li>
                        <li className={s.item}>Портфолио</li>
                        <li className={s.item}>О нас</li>
                        <li className={s.item}>Блог</li>
                        <li className={s.item}>Контакты</li>
                    </ul>
                </div>
                <Anchor
                    items={[
                        {
                            key: 'part-1',
                            href: '#card',
                            title: 'Что мы делаем',
                        },
                        {
                            key: 'part-2',
                            href: '#part-2',
                            title: 'Part 2',
                        },
                        {
                            key: 'part-3',
                            href: '#part-3',
                            title: 'Part 3',
                        },
                    ]}
                />
            </div>
            <h1 className={s.tit}>GBG</h1>
            <h2 className={s.titDiscription}>Мы создаём
                <strong className={s.redWord}> сайты</strong></h2>
        </div>

    );
};

export default Header;