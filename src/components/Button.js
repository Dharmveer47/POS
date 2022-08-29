import React from "react";
import "../Styles/buttons.scss";
export const Button = ({ bName = "", onClick }) => {
  return (
    <>
      <button className="button__pos" onClick={onClick}>
        {bName}
      </button>
    </>
  );
};
