import React from 'react';
import s from './Sector2.module.css'
import Card from "./Card";
import ButtonNew from "./ButtonNew";
const Sector2 = () => {
    return (
        <div className={s.sector}>
            <div className={s.container}>
                <div className={s.cards}>
                    <Card/>
                    <Card/>
                    <Card/>
                </div>
                <div className={s.baner}>
                    <h4 className={s.banerName}>Любой каприз за ваши деньги </h4>
                    <p className={s.banerDescription}>описание услуги гсание услуги а услу гисание у ие исание услуги а гсание услуги а услу гисание у ие исание услуги а  исание услуги а гсание услуги а услу гисание</p>
                </div>
                <h3 className={s.weCreate}>
                    Мы создаём - сайты <br/> пока создали только этот
                </h3>
                <div className={s.circlesContainer}>
                    <div className={s.circles1}>
                        <div className={s.circle1}></div>
                        <div className={s.circle2}></div>
                        <div className={s.circle3}></div>
                    </div>
                    <div className={s.circles2}>
                        <div className={s.circle4}></div>
                        <div className={s.circle5}></div>
                        <div className={s.circle6}></div>
                    </div>
                </div>
                <div className={s.whatIsContainer}>
                    <div className={s.whatIsImg}></div>
                    <div className={s.whatIsMenu}>
                        <h2 className={s.whatIsTit}>Что такое GBG ?</h2>
                        <ButtonNew/>
                        <ButtonNew/>
                        <ButtonNew/>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Sector2;