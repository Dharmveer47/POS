import React from "react";
import { PosThem } from "../Thems";
import { RiArrowDropDownLine } from "react-icons/ri";
import { PosListButton } from "../Button";
import "../../Styles/PosStyle/PosProduct.scss";

const PosProductsList = () => {
  return (
    <PosThem className="pos__product">
      <div className="product__navigation">
        <div className="product__filter">
          <span className="product_dropdownList">All</span>
          <div>
            <RiArrowDropDownLine />
          </div>
        </div>
        <div className="product__pagination">
          <PosListButton bName="Previous" />
          <span className="product__counter">Page 1 of 13</span>
          <PosListButton bName="Next" />
        </div>
      </div>
      <ProductLists>
        <PosProduct />
        <PosProduct />
        <PosProduct />
        <PosProduct />
        <PosProduct />
        <PosProduct />
        <PosProduct />
        <PosProduct />
        <PosProduct />
        <PosProduct />
        <PosProduct />
        <PosProduct />
      </ProductLists>
    </PosThem>
  );
};

const PosProduct = () => {
  const imgUrl =
    "https://rawal-admin.themes-coder.net/gallary/202208215752food1.jpeg";
  return (
    <div className="product_lists">
      <div className="product__single">
        <div>
          <img src={imgUrl} alt="productList" />
        </div>
        <h4 className="product__name">Momos</h4>
      </div>
    </div>
  );
};

const ProductLists = ({ children }) => {
  return <div className="product_lists">{children}</div>;
};

export default PosProductsList;
