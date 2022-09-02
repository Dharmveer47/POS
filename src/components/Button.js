import React from "react";
import "../Styles/buttons.scss";
export const Button = ({
  style = {},
  w = "",
  bName = "",
  onClick,
  bg = "#AE69F5",
  className,
}) => {
  return (
    <>
      <button
        className={`${className} button__pos`}
        onClick={onClick}
        style={{
          backgroundColor: bg,
          width: w,
          ...style,
        }}
      >
        {bName}
      </button>
    </>
  );
};

export const PosListButton = ({ bName = "" }) => {
  return <button className="product__previous">{bName}</button>;
};
