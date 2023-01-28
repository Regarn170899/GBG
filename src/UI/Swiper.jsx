import React, {useRef, useState} from "react";
// Import Swiper React components
import {Swiper, SwiperSlide} from "swiper/react";
import styles from "./Swiper.module.css";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";


import "./Swiper.css";
// import required modules
import {Navigation} from "swiper";

export default function Slider() {
    const [swiperRef, setSwiperRef] = useState(null);

    return (
        <div className={styles.swiperContainer}>
            <Swiper
                effect={"creative"}
                grabCursor={true}
                slidesPerView={3}
                centeredSlides={true}
                spaceBetween={20}
                pagination={{
                    type: "fraction",
                }}
                style={{height: "800px" }}
                navigation={true}
                modules={[Navigation]}
                className="mySwiper"
                direction={"vertical"}
            >
                <div className={styles.swiperContainer}>
                    <div className={styles.slideContainer}>
                        <SwiperSlide>
                            <div className={styles.swiperWrapper}></div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className={styles.swiperWrapper}></div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className={styles.swiperWrapper}></div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className={styles.swiperWrapper}></div>
                        </SwiperSlide>
                    </div>
                    <div className={styles.buttonNext}></div>
                    <div className={styles.buttonPre}></div>
                </div>


            </Swiper>
        </div>
    );
}
