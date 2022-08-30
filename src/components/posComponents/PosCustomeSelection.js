import React from "react";
import { PosThem } from "../Thems";
import { RiAddCircleFill, RiArrowDropDownLine } from "react-icons/ri";
// cus = customer

import "../../Styles/PosStyle/PosCustomer.scss";
const PosCustomeSelection = () => {
  return (
    <PosThem className="pos__customer_selection">
      <SingelChooseCustomer cus="Choose a Customer" />
      <SingelChooseCustomer cus="Choose a Customer Address" />
    </PosThem>
  );
};

const SingelChooseCustomer = ({ cus }) => {
  return (
    <div className="pos__singleCustomer">
      <div className="pos__choose_customer">
        <h1 className="pos__choose_heading">{cus}</h1>
        <RiAddCircleFill />
      </div>
      <div className="pos__choose_input">
        <input type="text" value="Choose Customer" />
        <RiArrowDropDownLine />
      </div>
    </div>
  );
};

export default PosCustomeSelection;
