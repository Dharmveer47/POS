import React from "react";
import { SingleSelectButton } from "./SelectProduct";
import { BsCash } from "react-icons/bs";
import { PosThem, LineBrek } from "../Thems";
import { useSelector } from "react-redux";
import "../../Styles/PosStyle/PosUserShop.scss";

const PosUserShop = () => {
  const prodcuts = useSelector((state) => state.POS.POS_PRODUCTS);
  const totalPrice = (data) => {
    if (data.length !== 0) {
      let arrNumber = data.map((d) => d.price);
      const sum = arrNumber.reduce((partialSum, a) => partialSum + a, 0);
      return sum;
    }
    return 0;
  };
  return (
    <PosThem className="pos__user_shop">
      <div className="pos__user_account">
        <div className="pos__user_info">
          <div className="pos__user_logo">X</div>
          <div className="pos__user_detai">
            <h1>The Kundol Shop</h1>
            <p>123-895-45688</p>
            <p>New York, USA</p>
          </div>
        </div>
        <LineBrek />
        <div className="pos__user_iteam">
          <SingelUserIteam value={prodcuts?.length} des="Total Items" />
          <SingelUserIteam
            value={totalPrice(prodcuts)}
            des="Actual Total Price"
          />
          <SingelUserIteam value={0.0} des="DISCOUNT (NaN %)" />
          <SingelUserIteam value={0} des="Subtotal" />
          <SingelUserIteam value={0.0} des="Tax (0%)" />
          <SingelUserIteam value={0.0} des="Total" />
        </div>
        <LineBrek />
        <div className="pos__pay_with">
          <SingleSelectButton
            color="#AE69F5"
            icon={<BsCash />}
            name="Pay With Cash"
          />
        </div>
      </div>
    </PosThem>
  );
};

const SingelUserIteam = ({ des, value }) => {
  return (
    <div className="pos__single_iteam">
      <p>{des}</p>
      <p>{value}</p>
    </div>
  );
};

export default PosUserShop;
