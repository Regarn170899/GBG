import React from "react";
import styles from "./ModalTechnologies.module.css";

const ModalTechnologies = ({ visible, setVisible }) => {
  const rootClasses = [styles.modal];
  if (visible) {
    rootClasses.push(styles.active);
  }
  return (
    <div
      className={rootClasses.join(" ")}
      onClick={() => {
        setVisible("technologies", false);
      }}
    >
      <div
        className={styles.modalContent}
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <div className={styles.modalContentColor}>
          <div className={styles.modalTechnologiesLogo}></div>
          <div className={styles.modalTextContainer}>
            <h3 className={styles.modalTitle}>
              Технологии которые МЫ используем
            </h3>
            <div className={styles.modalDescriptionTech}>
              <div className={styles.backend}>
                <h4 className={styles.titleTech}>BACKEND</h4>
                <p className={styles.nameTech}>Python</p>
                <p className={styles.nameTech}>Django</p>
                <p className={styles.nameTech}>Django REST</p>
                <p className={styles.nameTech}>MySQL</p>
                <p className={styles.nameTech}>PostgreSQL</p>
                <p className={styles.nameTech}>Docker</p>
              </div>
              <div className={styles.frontend}>
                <h4 className={styles.titleTech}>FRONTEND</h4>
                <p className={styles.nameTech}>TypeScript</p>
                <p className={styles.nameTech}>JavaScript</p>
                <p className={styles.nameTech}>Redux</p>
                <p className={styles.nameTech}>React</p>
              </div>
              <div className={styles.design}>
                <h4 className={styles.titleTech}>WEB DESIGN</h4>
                <p className={styles.nameTech}>Figma</p>
                <p className={styles.nameTech}>Adobe Photoshop</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalTechnologies;
