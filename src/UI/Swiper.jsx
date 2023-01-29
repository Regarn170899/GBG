import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import styles from "./Swiper.module.css";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./Swiper.css";
// import required modules
import { Navigation } from "swiper";
import Post from "./Post";

export default function Slider() {
  const [swiperRef, setSwiperRef] = useState(null);

  return (
    <div className={styles.swiperContainer}>
      <Swiper
        effect={"creative"}
        grabCursor={true}
        slidesPerView={3}
        centeredSlides={true}
        spaceBetween={3}
        pagination={{
          type: "fraction",
        }}
        style={{ height: "800px" }}
        navigation={true}
        modules={[Navigation]}
        className="mySwiper"
        direction={"vertical"}
      >
        <div className={styles.slideContainer}>
          <SwiperSlide>
            <Post
              description={
                "Компания GBG запускает новую услуг. Теперь вы можете заказать у нас работы любой сложности достаточно лишь оставить заявку в форме обратной связи."
              }
              title={"Вот так услуга - Кастомный заказ!"}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Post
              description={
                "Наша команда рада приветствовать вас на нашем сайте! Теперь вместе с нами вы сможете развивать свой бизнес и привлекать клиентов."
              }
              title={"Добро пожаловать!"}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Post
              description={
                "Наша компания объявляет о начале деятельности. Рады приветствовать вас на нашем сайте."
              }
              title={"Вот так услуга - Кастомный заказ!"}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Post
              description={
                "Компания GBG запускает новую услуг. Теперь вы можете заказать у нас работы любой сложности достаточно лишь оставить заявку в форме обратной связи."
              }
              title={"На рынке новый игрок!"}
            />
          </SwiperSlide>
        </div>
      </Swiper>
    </div>
  );
}
