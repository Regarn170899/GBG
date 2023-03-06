import React from "react";
import styles from "./ModalMission.module.css";

const ModalMission = ({ visible, setVisible }) => {
  const rootClasses = [styles.modal];
  if (visible) {
    rootClasses.push(styles.active);
  }
  return (
    <div
      className={rootClasses.join(" ")}
      onClick={() => {
        setVisible("mission", false);
      }}
    >
      <div
        className={styles.modalContent}
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <div className={styles.modalContentColor}>
          <div
            onClick={() => {
              setVisible("mission", false);
            }}
            className={styles.modalMissionLogoX}
          ></div>
          <div className={styles.modalMissionLogo}></div>
          <div className={styles.modalMissionText}>
            <p className={styles.modalMissionDescription}>
              <span className={styles.modalRedText}>Наша миссия</span>- помочь
              молодым предпринимателям, людям, начинающим свои проекты с нуля.
              Мы даем возможность благотворительным организациям воспользоваться
              нашими услугами{" "}
              <span className={styles.modalRedText}>безвозмездно</span>. Нашим
              клиентам мы гарантируем доступность и высокое качество
              предоставляемых услуг. Наша команда стремится понять{" "}
              <span className={styles.modalRedText}>каждого</span>
              заказчика и вне зависимости от поступившего нам задания,
              предложить{" "}
              <span className={styles.modalRedText}>
                лучшее решение на рынке WEB - разработки.
              </span>
            </p>
            <div className={styles.modalSocialLink}></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalMission;
