import React from "react";
import styles from "./OrderRequestForm.module.css";
import CheckboxInputProduct from "../Checkbox/CheckboxInputProduct";
import { PRODUCTS } from "../../constants";
import CheckboxInputBudget from "../Checkbox/CheckboxInputBudget";

const OrderRequestForm = ({ formData, onChange }) => {
  const { fio, phone, email, company, productType, budget, comments } =
    formData;

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
              onChange={(e) => {
                onChange("fio", e.target.value);
              }}
              className={styles.formInputTextName}
              type="text"
              placeholder={"ФИО"}
              value={fio}
            />
            <input
              onChange={(e) => {
                onChange("phone", e.target.value);
              }}
              className={styles.formInputTextPhone}
              type="text"
              placeholder={"+7 999 99 99 999"}
              value={phone}
            />
          </div>
          <div className={styles.formInputData2}>
            <input
              onChange={(e) => {
                onChange("email", e.target.value);
              }}
              className={styles.formInputText2}
              type="text"
              placeholder={"email"}
              value={email}
            />
            <input
              onChange={(e) => {
                onChange("company", e.target.value);
              }}
              className={styles.formInputText2}
              type="text"
              placeholder={"компания"}
              value={company}
            />
          </div>
          <h4 className={styles.formNameService}>Выберите услугу</h4>
          <div className={styles.formSectorService}>
            <div className={styles.formCheckService1}>
              <CheckboxInputProduct
                onChange={onChange}
                product={productType}
                text={PRODUCTS.landing}
              />
              <CheckboxInputProduct
                onChange={onChange}
                product={productType}
                text={PRODUCTS.corporate}
              />
            </div>
            <div className={styles.formCheckService2}>
              <CheckboxInputProduct
                onChange={onChange}
                product={productType}
                text={PRODUCTS.cutAway}
              />
              <CheckboxInputProduct
                onChange={onChange}
                product={productType}
                text={PRODUCTS.custom}
              />
            </div>
          </div>
        </div>
        <div className={styles.formSector2}>
          <h4 className={styles.formBudgetSector}>Ваш бюджет</h4>
          <div className={styles.formBudgetCheckSector}>
            <div className={styles.formCheckService1}>
              <CheckboxInputBudget
                onChange={onChange}
                budget={budget}
                text={"Менее 100 тыс"}
              />
              <CheckboxInputBudget
                onChange={onChange}
                budget={budget}
                text={"Менее миллиона"}
              />
            </div>
            <div className={styles.formCheckService2}>
              <CheckboxInputBudget
                onChange={onChange}
                budget={budget}
                text={"Менее 500 тыс"}
              />
              <CheckboxInputBudget
                onChange={onChange}
                budget={budget}
                text={"Более миллиона"}
              />
            </div>
          </div>
          <textarea
            onChange={(e) => {
              onChange("comments", e.target.value);
            }}
            value={comments}
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

export default OrderRequestForm;
