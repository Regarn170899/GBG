import React from "react";
import styles from "./Swiper.module.css";

const Post = () => {
  return (
    <div className={styles.swiperWrapper}>
      <div className={styles.slideIcon}></div>
      <div className={styles.slideTextContainer}>
        <div className={styles.slideTopTextContainer}>
          <p className={styles.slideAuthor}>автор:</p>
          <p className={styles.slideAuthorName}>Владимир Лугинов </p>
          <p className={styles.slideTitle}>Вот так услуга - Кастомный заказ!</p>
        </div>
        <div className={styles.slideBottomTextContainer}>
          <p>
            Компания GBG запускает новую услуг. Теперь вы можете заказать у нас
            работы любой сложности достаточно лишь оставить заявку в форме
            обратной связи.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Post;
