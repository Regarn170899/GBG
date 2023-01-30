import React from "react";
import styles from "./CheckboxInput.module.css";

const CheckboxInputProduct = ({ product, text, onChange }) => {
  return (
    <label className={styles.checkboxContainer}>
      <input
        onChange={(e) => {
          onChange("productType", text);
        }}
        className={styles.checkbox}
        type="checkbox"
        value={product === text}
        name="Checkbox2"
      />
      <span className={styles.checkboxNew}></span>
      <label className={styles.text} htmlFor="Checkbox2">
        {text}
      </label>
    </label>
  );
};

export default CheckboxInputProduct;
