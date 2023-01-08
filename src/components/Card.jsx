import React from 'react';
import s from "./Sector2.module.css";

const Card = () => {
    return (
        <div className={s.card}>
            <h4 className={s.cardName}>ЛДЕНДИННГ</h4>
            <p className={s.cardDescription}>Описание услуги</p>
            <div className={s.cardBtnContainer}>
                <button className={s.cardBtn}>Кнопка</button>
            </div>
        </div>
    );
};

export default Card;