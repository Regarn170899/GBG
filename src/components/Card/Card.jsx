import React from "react";
import { services } from "../../constants";
import styles from "../Sector2/Sector2.module.css";
import s from "../Header/Header.module.css";
import { Link } from "react-scroll";
const Card = () => {
  return (
    <>
      {services.map((product) => (
        <div className={styles.card} key={product.id}>
          <h4 className={styles.cardName}>{product.title}</h4>
          <div className={styles.cardDescriptionContainer}>
            <p className={styles.cardDescription}>{product.description}</p>
          </div>
          <div className={styles.cardBtnContainer}>
            <Link
              className={s.item}
              to="form"
              spy={true}
              smooth={true}
              offset={500}
              duration={600}
            >
              <button className={styles.cardBtn}>
                <span>ЗАКАЗАТЬ</span>
              </button>
            </Link>
          </div>
        </div>
      ))}
    </>
  );
};

export default Card;
