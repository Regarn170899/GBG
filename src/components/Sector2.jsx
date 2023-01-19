import React, { useState } from "react";
import s from "./Sector2.module.css";
import Card from "./Card";
import ButtonNew from "./ButtonNew";
import Projects from "./Projects";
import SwiperNew from "../UI/Swiper";
import OrderRequestForm from "../UI/OrderRequestForm";
import VerticalCarousel from "../UI/Swiper";
import styles from "../UI/Swiper.module.css";

const initialFormState = {
  fio: "",
  phone: "",
  email: "",
  company: "",
  productType: "",
  budget: "",
  comments: "",
};
const Sector2 = () => {
  const [formData, setFormData] = useState(initialFormState);
  const handelChangeForm = (key, value) => {
    console.log(key, value);
    setFormData({ ...formData, [key]: value });
  };

  return (
    <div className={s.sector}>
      <div className={s.container}>
        <div className={s.cards}>
          <Card />
        </div>
        <div className={s.baner}>
          <h4 className={s.banerName}>Кастомный заказ</h4>
          <p className={s.banerDescription}>
            Это индивидуальный заказ не входящая в перечень услуг представленных
            на нашем сайте. Наши команда специалистов готова приступить к
            выполнению вашего заказа в порядке индивидуального согласования с
            нашим менеджером.
          </p>
        </div>
        <Projects />
        <div className={s.whatIsContainer}>
          <div className={s.whatIsImg}></div>
          <div className={s.whatIsMenu}>
            <h2 className={s.whatIsTit}>Что такое GBG ?</h2>
            <ButtonNew title={"Компания"} />
            <ButtonNew title={"Технологии"} />
            <ButtonNew title={"Цель"} />
          </div>
        </div>
        <SwiperNew />
        <div className={s.FormSector}>
          <OrderRequestForm formData={formData} onChange={handelChangeForm} />
        </div>
      </div>
    </div>
  );
};

export default Sector2;
