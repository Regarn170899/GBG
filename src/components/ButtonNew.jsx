import React from "react";
import s from "./Sector2.module.css";

const ButtonNew = (props) => {
  return (
    <div>
      <button className={s.whatIsBtn}>{props.title}</button>
    </div>
  );
};

export default ButtonNew;
