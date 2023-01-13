import React from 'react';
import s from './Sector2.module.css'
import Card from "./Card";
import ButtonNew from "./ButtonNew";
import Projects from "./Projects";

const Sector2 = () => {
    return (
        <div className={s.sector}>
            <div className={s.container}>
                <div className={s.cards}>
                    <Card description={'Это одностраничный сайт, создание которого занимает меньше времени чем создание полноценного сайта.\n' + ' \n' + 'С его помощью можно эфективно создать портфолио, запустить продажи или просто собрать заявки.'} title={'Лендинг'}/>
                    <Card description={'Это  самый малозатратный и быстрый способ заявить о себе и своем проекте. \n' + '\n' + 'Он является аналогом рекламного баннера или обычной визитки, которую мы раздаем при знакомстве. \n' + 'Основной задачей мини-сайта является привлечение внимания целевой аудитории, а также формирование положительного имиджа.'} title={'Сайт-визитка'}/>
                    <Card description={'Это портал для бизнеса, необходимый элемент успешной работы любой компании, будь то крупная международная организация или небольшое предприятие.\n' + '\n' + 'Именно от внешнего вида и функционала этого сайта зависит, какое мнение о компании сложится у потенциальных клиентов.'} title={'Коорпоративный'}/>
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
                    <Projects/>
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