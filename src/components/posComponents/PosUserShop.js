import React from "react";
import { SingleSelectButton } from "./SelectProduct";
import { BsCash } from "react-icons/bs";
import { PosThem } from "../Thems";
import "../../Styles/PosStyle/PosUserShop.scss";
const PosUserShop = () => {
 
    return (
    <PosThem>
      <div className="pos__user_account">
        <div className="pos__user_info">
          <div className="pos__user_logo">X</div>
          <div className="pos__user_detai">
            <h1>The Kundol Shop</h1>
            <p>123-895-45688</p>
            <p>New York, USA</p>
          </div>
        </div>

        <div className="pos__user_iteam">
          <SingelUserIteam />
          <SingelUserIteam />
        </div>
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

const SingelUserIteam = () => {
  return (
    <div className="pos__single_iteam">
      <p>Total Items </p>
      <p>0</p>
    </div>
  );
};

export default PosUserShop;
