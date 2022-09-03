import React from "react";
import { PosThem } from "../Thems";
import { RiArrowDropDownLine } from "react-icons/ri";
import { useSelector } from "react-redux";
import { AiFillDelete } from "react-icons/ai";
import { BsFolderFill } from "react-icons/bs";
import "../../Styles/PosStyle/SelectProduct.scss";
import { MdOutlineArrowDropDown, MdOutlineArrowDropUp } from "react-icons/md";

const SelectProduct = () => {
  const prodcuts = useSelector((state) => state.POS.POS_PRODUCTS);
  console.log(prodcuts);
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
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Price</th>
              <th>Quanity</th>
              <th>Discunt Price</th>
              <th>Subtotal</th>
            </tr>
          </thead>
          <tbody>
            {prodcuts.map((prodcut) => {
              return (
                <tr key={prodcut.id}>
                  <td>{prodcut?.title}</td>
                  <td>{prodcut?.price}</td>
                  <td className="pos__select_product_table_icon_all">
                    <div>5</div>
                    <span className="pos__select_product_table_icon">
                      <MdOutlineArrowDropUp />
                      <MdOutlineArrowDropDown />
                    </span>
                  </td>
                  <td>{prodcut?.discountPercentage}</td>
                  <td>1020</td>
                </tr>
              );
            })}
          </tbody>
        </table>
        {/* <ul className="pos_selected_product">
          <li>{prodcuts?.title}</li>
          <li>{prodcuts?.price}</li>
          <li>Quanity</li>
          <li>{prodcuts?.discountPercentage}</li>
          <li>Subtotal</li>
        </ul> */}
      </div>
      <div className="pos__select_product_btn">
        <SingleSelectButton
          onClick={() => {}}
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

export const SingleSelectButton = ({ icon, name, color, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="pos__select_product_btn_single"
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
