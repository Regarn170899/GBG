import React, { useState } from "react";
import styles from ".//Swiper.module.css";
import { posts } from "../constants";

const SwiperNew = () => {
  const [currentPost, setCurrentPost] = useState(false);
  const ChangeSize = () => {
    setCurrentPost((current) => !current);
  };

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
          {posts.map((post) => (
            <div
              className={
                currentPost ? styles.swiperContainer : styles.bigSwiperContainer
              }
              key={post.id}
            >
              {post.description}
            </div>
          ))}
        </div>
      </div>
      <div className={styles.btnContainer}>
        <button
          className={styles.swiperBtnTop}
          onClick={() => {
            handelTopArrowClick();
            ChangeSize();
          }}
        ></button>
        <button
          className={styles.swiperBtnBottom}
          onClick={() => {
            handelBottomArrowClick();
            ChangeSize();
          }}
        ></button>
      </div>
    </div>
  );
};

export default SwiperNew;
