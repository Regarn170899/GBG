import React from "react";
import { products } from "../constants/index";
import styles from "./Sector2.module.css";
const Card = (props) => {
  return (
    <>
      {products.map((product) => (
        <div className={styles.card}>
          <h4 className={styles.cardName}>{product.title}</h4>
          <div className={styles.cardDescriptionContainer}>
            <p className={styles.cardDescription}>{product.description}</p>
          </div>
          <div className={styles.cardBtnContainer}>
            <button className={styles.cardBtn}>Кнопка</button>
          </div>
        </div>
      ))}
    </>
  );
};

export default Card;
