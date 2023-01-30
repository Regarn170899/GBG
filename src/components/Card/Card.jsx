import React from "react";
import { services } from "../../constants";
import styles from "../Sector2/Sector2.module.css";
const Card = (props) => {
  return (
    <>
      {services.map((product) => (
        <div className={styles.card} key={product.id}>
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
