import React, { useState } from "react";
import styles from ".//Swiper.module.css";

const SwiperNew = () => {
  const [offset, setOffset] = useState(0);
  const handelTopArrowClick = () => {
    setOffset((currentOfset) => {
      const newOffset = currentOfset + 234;
      return Math.min(newOffset, 234);
    });
  };
  const handelBottomArrowClick = () => {
    setOffset((currentOfset) => {
      const newOffset = currentOfset - 234;
      const maxNewOffset = -(234 * 3);
      return Math.max(newOffset, maxNewOffset);
    });
  };
  return (
    <div className={styles.swiperGlobalContainer}>
      <div className={styles.window}>
        <div
          className={styles.allItemsContainer}
          style={{ transform: `translateY(${offset}px)` }}
        >
          <div className={styles.swiperContainer}>1</div>
          <div className={styles.swiperContainer}>2</div>
          <div className={styles.swiperContainer}>3</div>
          <div className={styles.swiperContainer}>3</div>
          <div className={styles.swiperContainer}>3</div>
        </div>
      </div>
      <div className={styles.btnContainer}>
        <button
          className={styles.swiperBtnTop}
          onClick={handelTopArrowClick}
        ></button>
        <button
          className={styles.swiperBtnBottom}
          onClick={handelBottomArrowClick}
        ></button>
      </div>
    </div>
  );
};

export default SwiperNew;
