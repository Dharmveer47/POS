import React from "react";
import "../Styles/Them.scss";
export const Them = ({ children }) => {
  return <div className="them__background">{children}</div>;
};

export const LineBrek = () => {
  return <div></div>;
};

export const Search = () => {
  return (
    <input class="input-elevated" type="text" placeholder="Search"></input>
  );
};
