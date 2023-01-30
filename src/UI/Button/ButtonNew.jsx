import React from "react";
import s from "../../components/Sector2/Sector2.module.css";

const ButtonNew = (props) => {
  const handleClick = () => {
    console.log("Hello button new");
  };
  return (
    <div>
      <button onClick={handleClick} className={s.whatIsBtn}>
        {props.title}
      </button>
    </div>
  );
};

export default ButtonNew;
