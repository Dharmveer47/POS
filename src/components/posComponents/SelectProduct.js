import React from "react";
import { PosThem } from "../Thems";
import { RiArrowDropDownLine } from "react-icons/ri";
import { useSelector } from "react-redux";
import { AiFillDelete } from "react-icons/ai";
import { BsFolderFill } from "react-icons/bs";
import IncDrop from "../../icons/fe_drop-down.svg";
import DecDrop from "../../icons/fe_drop-down-decrement.svg";
import "../../Styles/PosStyle/SelectProduct.scss";
import { useDispatch } from "react-redux";
import {
  setPosProductInc,
  POS_CONTROLLER_INITIAL_STATE,
} from "../../Store/dataSlice";
// import { MdOutlineArrowDropDown, MdOutlineArrowDropUp } from "react-icons/md";

const SelectProduct = () => {
  const dispatch = useDispatch();
  const prodcuts = useSelector((state) => state.POS.POS_PRODUCTS);
  const counterRedux = useSelector((state) => state.POS.POS_PRODUCTS_INC);
  let a = 1;
  const newProduct = (p) => {
  
    if (p.length !== 0) {
      const modifidedProdct = p.map((d) => {
        return {
          ...d,
          counter: (function () {
            if (counterRedux.id === d.id) {
              return a++;
            }
            return a;
          })(),
        };
      });
      return modifidedProdct;
    }
  };
  console.log(newProduct(prodcuts));
  function handleIcrement(id) {
    dispatch(
      setPosProductInc({
        [POS_CONTROLLER_INITIAL_STATE.POS_PRODUCTS_INC]: {
          counter: counterRedux?.counter + 1,
          id,
        },
      })
    );
  }
  function handleDecrement(id) {
    if (counterRedux > 1) {
      dispatch(
        setPosProductInc({
          [POS_CONTROLLER_INITIAL_STATE.POS_PRODUCTS_INC]: {
            counter: counterRedux?.counter - 1,
            id,
          },
        })
      );
    }
  }
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
                    <div>{"counter"}</div>
                    <span className="pos__select_product_table_icon">
                      <img
                        src={IncDrop}
                        alt="increment"
                        onClick={() => handleIcrement(prodcut.id)}
                      />
                      <img
                        src={DecDrop}
                        alt="decrement"
                        onClick={() => handleDecrement(prodcut.id)}
                      />
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
