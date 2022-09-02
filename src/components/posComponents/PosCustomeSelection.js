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
  const [addressToggle, setAddressToggle] = useState(true);
  return (
    <PosThem className="pos__customer_selection">
      <SingelChooseCustomer
        onClick={() => {
          setToggle((e) => !e);
        }}
        cus="Choose a Customer"
      />

      <SingelChooseCustomer
        onClick={() => {
          setAddressToggle((e) => !e);
        }}
        cus="Choose a Customer Address"
      />

      <PosPopUp setToggle={setToggle} toggle={toggle} />
      <PosPopUpAddress
        setAddressToggle={setAddressToggle}
        addressToggle={addressToggle}
      />
    </PosThem>
  );
};

const SingelChooseCustomer = ({ cus, onClick }) => {
  return (
    <div className="pos__singleCustomer">
      <div className="pos__choose_customer">
        <h1 className="pos__choose_heading">{cus}</h1>
        <RiAddCircleFill onClick={onClick} />
      </div>
      <div className="pos__choose_input">
        <input type="text" defaultValue={cus} />
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

const PosPopUpAddress = ({ setAddressToggle, addressToggle }) => {
  if (addressToggle) {
    return <></>;
  }
  return (
    <PosThem className="pos__pop_up_customer">
      <div className="pos__pop_up_headings">
        <Heading des="Add Customer Address" />
        <MdClose onClick={() => setAddressToggle((e) => !e)} />
      </div>
      <LineBrek />
      <div className="pos__input_customer_selection">
        <CustomerAddInput name="First Name" placeholder="Enter First Name" />
        <CustomerAddInput name="Last Name" placeholder="Enter Last Name" />
      </div>
      <div className="pos__input_customer_selection">
        <CustomerAddInput name="Postal Code" placeholder="Enter Postal Code" />
        <CustomerAddInput name="City" placeholder="Enter City" />
      </div>
      <div className="pos__input_customer_selection">
        <CustomerAddInput name="Country" placeholder="Enter Country" />
        <CustomerAddInput name="State" placeholder="Enter State" />
      </div>
      <div className="pos__input_customer_selection">
        <CustomerAddInput
          name="Street Address"
          placeholder="Enter Street Address"
        />
        <CustomerAddInput name="Company" placeholder="Enter Company" />
      </div>
      <div className="pos__input_customer_selection">
        <CustomerAddInput name="Lat Lng" placeholder="Enter Lat Lng" />
        <CustomerAddInput name="Contact" placeholder="Enter Contact" />
      </div>
      <div className="pos__customer_button">
        <Button bName="Add Customer Address" />
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
