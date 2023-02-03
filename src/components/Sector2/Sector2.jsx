import React, { useState } from "react";
import s from "./Sector2.module.css";
import Card from "../Card/Card";
import ButtonNew from "../../UI/Button/ButtonNew";
import Projects from "../Projects/Projects";
import Slider from "../SwiperPosts/Swiper";
import OrderRequestForm from "../../UI/OrderRequestForm/OrderRequestForm";
import Footer from "../Footer/Footer";

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
        <div className={s.cards} id={"card"}>
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
        <div id={"projects"}>
          <Projects />
        </div>

        <div className={s.whatIsContainer} id={"about"}>
          <div className={s.whatIsImg}></div>
          <div className={s.whatIsMenu}>
            <h2 className={s.whatIsTit}>Что такое GBG ?</h2>
            <ButtonNew title={"Компания"} />
            <ButtonNew title={"Технологии"} />
            <ButtonNew title={"Цель"} />
          </div>
        </div>
        <Slider className={s.swiperWrapper} />
        <div className={s.FormSector}>
          <OrderRequestForm formData={formData} onChange={handelChangeForm} />
        </div>
      </div>
      <div className={s.footer} id={"form"}>
        <Footer id={"contacts"} />
      </div>
    </div>
  );
};

export default Sector2;
