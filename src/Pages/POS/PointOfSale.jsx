import React from "react";
import PosProductsList from "../../components/posComponents/PosProductsList";
// import PosCustomeSelection from "../../components/posComponents/PosCustomeSelection";
import SelectProduct from "../../components/posComponents/SelectProduct";
import PosUserShop from "../../components/posComponents/PosUserShop";
import "../../Styles/PosStyle/PosDashboard.scss";
const PointOfSale = () => {
  return (
    <div className="pos__dashboard">
      <div className="pos__product_list_dash">
        <PosProductsList />
      </div>
      {/* <div className="pos__customer_selection_dash">
        <PosCustomeSelection />
      </div> */}
      <div className="pos_select_product_dash">
        <SelectProduct />
      </div>
      <div className="pos__user_shop">
        <PosUserShop />
      </div>
    </div>
  );
};

export default PointOfSale;
