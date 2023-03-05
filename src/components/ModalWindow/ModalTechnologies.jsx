import React from "react";
import styles from "./ModalTechnologies.module.css";
import {
  technologiesDescriptionBackend,
  technologiesDescriptionFrontend,
  technologiesDescriptionWebDesign,
} from "../../constants";

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
              Технологии которые <span className={styles.red}>МЫ</span>
              используем
            </h3>
            <div className={styles.modalDescriptionTech}>
              <div className={styles.backend}>
                <h4 className={styles.titleTech}>BACKEND</h4>
                {technologiesDescriptionBackend.map((item) => (
                  <p id={item.id} className={styles.nameTech}>
                    {item.description}
                  </p>
                ))}
              </div>
              <div className={styles.frontend}>
                <h4 className={styles.titleTech}>FRONTEND</h4>
                {technologiesDescriptionFrontend.map((item) => (
                  <p id={item.id} className={styles.nameTech}>
                    {item.description}
                  </p>
                ))}
              </div>
              <div className={styles.design}>
                <h4 className={styles.titleTech}>WEB DESIGN</h4>
                {technologiesDescriptionWebDesign.map((item) => (
                  <p id={item.id} className={styles.nameTech}>
                    {item.description}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalTechnologies;
