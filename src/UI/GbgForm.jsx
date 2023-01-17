import React from "react";
import styles from "./GbgForm.module.css";
import CheckboxInput from "./CheckboxInput";

const GbgForm = () => {
  return (
    <div className={styles.formContainer}>
      <h4 className={styles.formName}>
        Оставьте заявку, чтобы обсудить ваш проект
      </h4>
      <div className={styles.formSector}>
        <div className={styles.formSectorData}>
          <h4 className={styles.formNameData}>Ваши данные</h4>
          <div className={styles.formInputData1}>
            <input
              className={styles.formInputTextName}
              type="text"
              placeholder={"ФИО"}
            />
            <input
              className={styles.formInputTextPhone}
              type="text"
              placeholder={"+7 999 99 99 999"}
            />
          </div>
          <div className={styles.formInputData2}>
            <input
              className={styles.formInputText2}
              type="text"
              placeholder={"email"}
            />
            <input
              className={styles.formInputText2}
              type="text"
              placeholder={"компания"}
            />
          </div>
          <h4 className={styles.formNameService}>Выберите услугу</h4>
          <div className={styles.formSectorService}>
            <div className={styles.formCheckService1}>
              <CheckboxInput text={"Лендинг"} />
              <CheckboxInput text={"Корпоративный сайт"} />
            </div>
            <div className={styles.formCheckService2}>
              <CheckboxInput text={"Сайт-визитка"} />
              <CheckboxInput text={"Кастом"} />
            </div>
          </div>
        </div>
        <div className={styles.formSector2}>
          <h4 className={styles.formBudgetSector}>Ваш бюджет</h4>
          <div className={styles.formBudgetCheckSector}>
            <div className={styles.formCheckService1}>
              <CheckboxInput text={"Менее 100 тыс"} />
              <CheckboxInput text={"Менее миллиона"} />
            </div>
            <div className={styles.formCheckService2}>
              <CheckboxInput text={"Менее 500 тыс"} />
              <CheckboxInput text={"Более миллиона"} />
            </div>
          </div>
          <textarea
            className={styles.formComment}
            name=""
            id=""
            cols="30"
            rows="10"
            placeholder={"комментарий"}
          ></textarea>
          <button className={styles.formSendBtn}>Отправить</button>
          <p className={styles.formContractDescripton}>
            *Нажимая на кнопку, соглашаюсь на обработку персональных данных{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default GbgForm;
