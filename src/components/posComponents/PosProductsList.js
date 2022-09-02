import React, { useState, useEffect } from "react";
import { PosThem, DropThem } from "../Thems";
import { RiArrowDropDownLine } from "react-icons/ri";
import { PosListButton } from "../Button";
import "../../Styles/PosStyle/PosProduct.scss";

const PosProductsList = () => {
  const Filter = ["Electronics", "Fresh", "Mobile", "Clothing"];
  const [value, setValue] = useState("All");
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchData = async () => {
    setLoading(true);
    let response = await fetch("https://dummyjson.com/products");
    let data = await response.json();
    if (response.status === 200) {
      setProduct(data.products);
    }
    setLoading(false);
  };
  useEffect(() => {
    fetchData();
  }, []);
  if (product.length === 0) {
    <div className="pos__product">loading...</div>;
  }
  console.log(product);
  return (
    <PosThem className="pos__product">
      <div className="product__navigation">
        <div className="product__filter" onClick={() => {}}>
          <span className="product_dropdownList">{value}</span>
          <div>
            <RiArrowDropDownLine />
          </div>
          <DropThem className="pos__product_dropdown">
            {Filter.map((d, i) => (
              <li
                onClick={() => setValue(d)}
                key={i}
                className={`${d === value && "active"}`}
              >
                {d}
              </li>
            ))}
          </DropThem>
        </div>
        <div className="product__pagination">
          <PosListButton bName="Previous" />
          <span className="product__counter">Page 1 of 13</span>
          <PosListButton bName="Next" />
        </div>
      </div>
      <ProductLists>
        {product.map((data) => (
          <PosProduct key={data.id} imgUrl={data.thumbnail} name={data.title} />
        ))}
      </ProductLists>
    </PosThem>
  );
};

const PosProduct = ({ imgUrl, name }) => {
  return (
    <div className="product_lists">
      <div className="product__single">
        <div>
          <img src={imgUrl} alt="productList" />
        </div>
        <h4 className="product__name">{name}</h4>
      </div>
    </div>
  );
};

const ProductLists = ({ children }) => {
  return <div className="product_lists main_produtlist">{children}</div>;
};

export default PosProductsList;
