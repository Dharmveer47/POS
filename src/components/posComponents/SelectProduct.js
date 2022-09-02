import React from "react";
import { PosThem } from "../Thems";
import { RiArrowDropDownLine } from "react-icons/ri";
import { AiFillDelete } from "react-icons/ai";
import { BsFolderFill } from "react-icons/bs";
import "../../Styles/PosStyle/SelectProduct.scss";

const SelectProduct = () => {
  return (
    <PosThem className="pos__selectProduct">
      <h1 className="pos__select_prod">Select Product</h1>
      <div className="pos__input_and_name">
        <div className="pos__name">
          <span>Name</span>
          <RiArrowDropDownLine />
        </div>
        <input type="text" placeholder="Type any Characters and Press Enter" />
      </div>
      <div className="pos__select_product_table">
        <ul>
          <li>Name</li>
          <li>Price</li>
          <li>Quanity</li>
          <li>Discunt Price</li>
          <li>Subtotal</li>
        </ul>
      </div>
      <div className="pos__select_product_btn">
        <SingleSelectButton
          color="#DC3545"
          name="Suspand/Cancel"
          icon={<AiFillDelete />}
        />
        <SingleSelectButton
          color="#FFC107"
          name="Draft Order"
          icon={<BsFolderFill />}
        />
      </div>
    </PosThem>
  );
};

export const SingleSelectButton = ({ icon, name, color }) => {
  return (
    <button className="pos__select_product_btn_single"
      style={{
        backgroundColor: color,
      }}
    >
      <div>{icon}</div>
      <p>{name}</p>
    </button>
  );
};

export default SelectProduct;
