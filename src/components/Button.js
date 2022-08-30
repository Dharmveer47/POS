import React from "react";
import "../Styles/buttons.scss";
export const Button = ({ bName = "", onClick, bg = "#AE69F5" }) => {
  return (
    <>
      <button
        className="button__pos"
        onClick={onClick}
        style={{
          backgroundColor: bg,
        }}
      >
        {bName}
      </button>
    </>
  );
};

export const PosListButton = ({bName=""}) => {
  return <button className="product__previous">{bName}</button>;
};
