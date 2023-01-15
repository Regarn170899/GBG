import React from "react";
import styles from "./CheckboxInput.module.css";

const CheckboxInput = () => {
  return (
    <div className={styles.checkbox}>
      <input type="checkbox" name="Checkbox2" />
      <label htmlFor="Checkbox2"></label>
    </div>
  );
};

export default CheckboxInput;
