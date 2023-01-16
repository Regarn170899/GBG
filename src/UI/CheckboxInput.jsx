import React from "react";
import styles from "./CheckboxInput.module.css";

const CheckboxInput = (props) => {
  return (
    <label className={styles.checkboxContainer}>
      <input className={styles.checkbox} type="checkbox" name="Checkbox2" />
        <span className={styles.checkboxNew}></span>
      <label className={styles.text} htmlFor="Checkbox2">{props.text}</label>
    </label>
  );
};

export default CheckboxInput;
