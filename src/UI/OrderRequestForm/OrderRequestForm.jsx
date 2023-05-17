import React, { useState } from "react";
import styles from "./OrderRequestForm.module.css";
import Checkbox from "../Checkbox/Checkbox";
import { formDataKeys, PRODUCTS } from "../../constants";
import axios from "axios";

const OrderRequestForm = ({ formData, onChange }) => {
  const { fio, phone, email, company, productType, budget, comments } =
    formData;

  const [emailDirty, setEmailDirty] = useState(false);
  const [emailError, setEmailError] = useState("email не может быть пустым");
  const [phoneDirty, setPhoneDirty] = useState(false);
  const [phoneError, setPhoneError] = useState(
    " номер телефона не может быть пустым"
  );

  const blurHandler = (e) => {
    switch (e.target.name) {
      case "email":
        setEmailDirty(true);
        break;
      case "phone":
        setPhoneDirty(true);
        break;
    }
  };

  const data = {
    full_name: fio,
    phone_number: phone,
    email: email,
    service: productType,
    budget: budget,
    about_project: comments,
  };

  const Post = () => {
    axios
      .post("http://antonmf6.beget.tech/api/v1/application/", data)
      .then((res) => {
        console.log(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

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
            {phoneError && phoneDirty && (
              <div style={{ color: "red" }}>{phoneError}</div>
            )}
            <input
              onBlur={(e) => blurHandler(e)}
              onChange={(e) => {
                onChange("phone", e.target.value);
              }}
              className={styles.formInputTextPhone}
              type="text"
              name="phone"
              placeholder={"+7 999 99 99 999"}
              value={phone}
            />
          </div>
          <div className={styles.formInputData2}>
            {emailError && emailDirty && (
              <div style={{ color: "red" }}>{emailError}</div>
            )}

            <input
              onBlur={(e) => blurHandler(e)}
              onChange={(e) => {
                onChange("email", e.target.value);
              }}
              className={styles.formInputText2}
              type="text"
              name="email"
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
              <Checkbox
                onChange={onChange}
                value={productType}
                formkey={formDataKeys.productType}
                text={PRODUCTS.landing}
              />
              <Checkbox
                onChange={onChange}
                value={productType}
                formkey={formDataKeys.productType}
                text={PRODUCTS.corporate}
              />
            </div>
            <div className={styles.formCheckService2}>
              <Checkbox
                onChange={onChange}
                value={productType}
                formkey={formDataKeys.productType}
                text={PRODUCTS.cutAway}
              />
              <Checkbox
                onChange={onChange}
                value={productType}
                formkey={formDataKeys.productType}
                text={PRODUCTS.custom}
              />
            </div>
          </div>
        </div>
        <div className={styles.formSector2}>
          <h4 className={styles.formBudgetSector}>Ваш бюджет</h4>
          <div className={styles.formBudgetCheckSector}>
            <div className={styles.formCheckService1}>
              <Checkbox
                onChange={onChange}
                value={budget}
                formkey={formDataKeys.budget}
                text={"Менее 100 тыс"}
              />
              <Checkbox
                onChange={onChange}
                value={budget}
                formkey={formDataKeys.budget}
                text={"Менее миллиона"}
              />
            </div>
            <div className={styles.formCheckService2}>
              <Checkbox
                onChange={onChange}
                value={budget}
                formkey={formDataKeys.budget}
                text={"Менее 500 тыс"}
              />
              <Checkbox
                onChange={onChange}
                value={budget}
                formkey={formDataKeys.budget}
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
          <div className={styles.btnAndDescription}>
            <button onClick={Post} className={styles.formSendBtn}>
              Отправить
            </button>
            <p className={styles.formContractDescripton}>
              *Нажимая на кнопку, соглашаюсь на обработку персональных данных
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderRequestForm;
