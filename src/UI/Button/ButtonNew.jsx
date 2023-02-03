import React from "react";
import s from "../../components/Sector2/Sector2.module.css";

const ButtonNew = ({ title, setVisible, modal, name }) => {
  return (
    <div>
      <button
        onClick={() => {
          setVisible(name, true);
        }}
        className={s.whatIsBtn}
        value={modal}
      >
        {title}
      </button>
    </div>
  );
};

export default ButtonNew;
