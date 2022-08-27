import React, { useRef } from "react";
// import { dummyData } from "./DummyData";
import "../Styles/Them.scss";
export const Them = ({ children }) => {
  return <div className="them__background">{children}</div>;
};

// For any Dashboard
export const DashThem = ({ children }) => {
  return <div className="dahsbord">{children}</div>;
};

// For any component line break
export const LineBrek = () => {
  return <div></div>;
};

export const Search = ({ setData }) => {
  const inputRef = useRef();
  const handleSumbit = (e) => {
    e.preventDefault();
    const inputText = inputRef?.current?.value;
    console.log(inputText && inputText);
  };
  return (
    <>
      <form onSubmit={handleSumbit}>
        <input
          onFocus={() => console.log("focused")}
          ref={inputRef}
          className="input-elevated"
          type="search"
          placeholder="Search"
        ></input>
      </form>
    </>
  );
};
