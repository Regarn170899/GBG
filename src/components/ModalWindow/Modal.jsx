import React from "react";
import styles from "./Modal.module.css";

const Modal = ({ visible, setVisible }) => {
  const rootClasses = [styles.modal];
  if (visible) {
    rootClasses.push(styles.active);
  }
  return (
    <div
      className={rootClasses.join(" ")}
      onClick={() => {
        setVisible("company", false);
      }}
    >
      <div
        className={styles.modalContent}
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <div className={styles.modalContentColor}>
          <div className={styles.modalLogo}></div>
          <div className={styles.modalText}>
            <p className={styles.modalDescription}>
              <span className={styles.modalRedText}>
                Плыли мы по морю ветер мачту рвал…
              </span>{" "}
              <br />
              Наша команда понимает, что значит создать что-либо с нуля.
              Совместными усилиями нашей команды мы перешли от анализа сферы
              Веб-разработки к действию. Когда момент настал - мы поняли, что
              нас достаточно. На сегодняшний день мы ориентированы на клиентов,
              кто только начинает свою деятельность, либо ищущих новые решения
              среди уже приевшихся. Наше с вами начало пути. На данный момент
              наша команда насчитывает не более четырех человек. Каждый член
              нашей команды - специалист в своей отдельной сфере, но вместе мы
              GBG. Мы следим за тенденциями рынка. Постоянно совершенствуя свои
              навыки, и расширяем нашу сферу услуг. Мы молодая команда,
              понимающая реалии современного рынка и его тенденций. Наша задача
              - понять каждого заказчика и предложить ему проект, отвечающий его
              требованиям и современным тенденциям рынка Веб-разработки. Мы
              стремимся развиваться вместе с нашими партнерами. Мы понимаем на
              сколько бывает не просто начать своё дело. Как и наши клиенты мы
              стремимся изучать новое и совершенствоваться.
              <span className={styles.modalRedText}>Мы в социальных сетях</span>
            </p>
            <div className={styles.modalSocialLink}></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
