import React from "react";
import { PosThem } from "../Thems";
import { useSelector } from "react-redux";
import { AiFillDelete } from "react-icons/ai";
import { BsFolderFill } from "react-icons/bs";
import IncDrop from "../../icons/fe_drop-down.svg";
import DecDrop from "../../icons/fe_drop-down-decrement.svg";
import "../../Styles/PosStyle/SelectProduct.scss";
import { useDispatch } from "react-redux";
import {
  setPosProductInc,
  setPosProduct,
  setPosSelectedProduct,
  POS_CONTROLLER_INITIAL_STATE,
} from "../../Store/dataSlice";
import { SelectSearch } from "./SelectSearch";
// import { MdOutlineArrowDropDown, MdOutlineArrowDropUp } from "react-icons/md";

const SelectProduct = () => {
  const dispatch = useDispatch();
  const prodcuts = useSelector((state) => state.POS.POS_PRODUCTS);
  const counterRedux = useSelector((state) => state.POS.POS_PRODUCTS_INC);
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

  function claculatePercent(data) {
    let price = data?.price;
    let percentage = data?.discountPercentage;
    let savedMoney = (price * percentage) / 100;
    let totalPrice = price - savedMoney;
    return Math.round(totalPrice);
  }

  let pushedData = [];
  function handleDraft(data) {
    pushedData.push(data);
    return pushedData;
  }

  const handleDelete = (d) => {
    if (prodcuts.length !== 0) {
      let filteredData = prodcuts.filter((data) => {
        if (data.id === d.id) {
          return false;
        }
        return data;
      });
      dispatch(
        setPosProduct({
          [POS_CONTROLLER_INITIAL_STATE.POS_PRODUCTS]: filteredData,
        })
      );
    }
  };

  return (
    <PosThem className="pos__selectProduct">
      <h1 className="pos__select_prod">Select Product</h1>
      <SelectSearch />
      <div className="pos__select_product_table">
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Price</th>
              <th>Quanity</th>
              <th>Discunt %</th>
              <th>Subtotal</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {prodcuts.map((prodcut) => {
              return (
                <tr key={prodcut.id}>
                  <td>{prodcut?.title}</td>
                  <td>{prodcut?.price}</td>
                  <td className="pos__select_product_table_icon_all">
                    <div>1</div>
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
                  <td>{claculatePercent(prodcut)}</td>
                  <td
                    className="pos__select_product_table_icon_delete"
                    onClick={() => handleDelete(prodcut)}
                  >
                    {<AiFillDelete />}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
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
          onClick={() =>
            dispatch(
              setPosSelectedProduct({
                [POS_CONTROLLER_INITIAL_STATE.POS_SELECTED_PRODUCT]:
                  handleDraft(prodcuts),
              })
            )
          }
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


