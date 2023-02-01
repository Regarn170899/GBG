import React from "react";
import styles from "./CheckboxInput.module.css";

const Checkbox = ({ value, formkey, text, onChange }) => {
  return (
    <label className={styles.checkboxContainer}>
      <input
        onChange={(e) => {
          onChange(formkey, text);
        }}
        className={styles.checkbox}
        type="checkbox"
        checked={value === text}
        name="Checkbox2"
      />
      <span className={styles.checkboxNew}></span>
      <label className={styles.text} htmlFor="Checkbox2">
        {text}
      </label>
    </label>
  );
};

export default Checkbox;
