import React from 'react';
import s from './Sector2.module.css'
import Card from "./Card";
import ButtonNew from "./ButtonNew";

const Sector2 = () => {
    const projects={
        project1:"/img/rec1.svg",
        project2:"/img/rec2.svg",
        project3:"/img/rec3.svg",
        project4:"/img/rec4.svg",
        project5:"/img/rec5.svg",
        project6:"/img/rec6.svg",
    }
    let projectElement=Object.values(projects).map((p) => <img className={s.project} src={p} alt="проект"/>)
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
                    <p className={s.banerDescription}>описание услуги гсание услуги а услу гисание у ие исание услуги а
                        гсание услуги а услу гисание у ие исание услуги а исание услуги а гсание услуги а услу
                        гисание</p>
                </div>
                <h3 className={s.weCreate}>
                    Мы создаём - сайты <br/> пока создали только этот
                </h3>
                <div className={s.ourProjects}>
                    {projectElement}
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