import React from 'react';
import s from "./Sector2.module.css";

const Card = (props) => {
    return (
        <div className={s.card}>
            <h4 className={s.cardName}>{props.title}</h4>
            <div className={s.cardDescriptionContainer}>
                <p className={s.cardDescription}>{props.description}</p>
            </div>
            <div className={s.cardBtnContainer}>
                <button className={s.cardBtn}>Кнопка</button>
            </div>
        </div>
    );
};

export default Card;