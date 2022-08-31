import React, { useState } from "react";
import { LineBrek, PosThem } from "../Thems";
import { Heading } from "../Heading";
import { MdClose } from "react-icons/md";
import { Button } from "../Button";
import { RiAddCircleFill, RiArrowDropDownLine } from "react-icons/ri";
// cus = customer

import "../../Styles/PosStyle/PosCustomer.scss";
const PosCustomeSelection = () => {
  const [toggle, setToggle] = useState(true);
  return (
    <PosThem className="pos__customer_selection">
      <SingelChooseCustomer setToggle={setToggle} cus="Choose a Customer" />
      <SingelChooseCustomer cus="Choose a Customer Address" />
      <PosPopUp setToggle={setToggle} toggle={toggle} />
    </PosThem>
  );
};

const SingelChooseCustomer = ({ cus, setToggle }) => {
  return (
    <div className="pos__singleCustomer">
      <div className="pos__choose_customer">
        <h1 className="pos__choose_heading">{cus}</h1>
        <RiAddCircleFill onClick={() => setToggle((e) => !e)} />
      </div>
      <div className="pos__choose_input">
        <input type="text" value="Choose Customer" />
        <RiArrowDropDownLine />
      </div>
    </div>
  );
};

const PosPopUp = ({ toggle, setToggle }) => {
  if (toggle) {
    return <></>;
  }
  return (
    <PosThem className="pos__pop_up_customer">
      <div className="pos__pop_up_headings">
        <Heading des="Add Customer" />
        <MdClose onClick={() => setToggle((e) => !e)} />
      </div>
      <LineBrek />
      <div className="pos__input_customer_selection">
        <CustomerAddInput name="First Name" placeholder="Enter First Name" />
        <CustomerAddInput name="Last Name" placeholder="Enter Last Name" />
      </div>
      <div className="pos__input_customer_selection">
        <CustomerAddInput name="Email" placeholder="example@gmail.com" />
        <CustomerAddInput name="Password" placeholder="password" />
      </div>
      <div className="pos__customer_button">
        <Button bName="Add Customer" />
      </div>
    </PosThem>
  );
};

const CustomerAddInput = ({ placeholder, name }) => {
  return (
    <div className="pos__customer_add_container">
      <h1 className="pos__customer_add">{name}</h1>
      <input type="text" placeholder={placeholder} />
    </div>
  );
};

export default PosCustomeSelection;
