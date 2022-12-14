import React, { useState, useEffect } from "react";
import { PosThem, DropThem } from "../Thems";
import { RiArrowDropDownLine } from "react-icons/ri";
import { PosListButton } from "../Button";
// import { useSelector } from "react-redux";
import "../../Styles/PosStyle/PosProduct.scss";

// Redux
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import {
  setPosProduct,
  POS_CONTROLLER_INITIAL_STATE,
} from "../../Store/dataSlice";

const PosProductsList = () => {
  const dispatch = useDispatch();
  const Filter = ["skincare", "fragrances", "furniture", "groceries"];
  const prodcuts = useSelector((state) => state.POS.POS_PRODUCTS);
  // const counterRedux = useSelector((state) => state.POS.POS_PRODUCTS_INC);
  const [value, setValue] = useState("All");

  const [product, setProduct] = useState([]);
  const [counter, setCounter] = useState(1);
  // const [fulldatas, setFulldatas] = useState([]);

  const fetchData = async () => {
    let response = await fetch("https://dummyjson.com/products");
    let data = await response.json();
    if (response.status === 200) {
      setProduct(data.products);
    }
  };

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // let fullData = [];

  function setAlldata(d) {
    return dispatch(
      setPosProduct({
        [POS_CONTROLLER_INITIAL_STATE.POS_PRODUCTS]: [...prodcuts, d],
      })
    );
  }
  function setFilterData(data) {
    return data.filter((d, index) => {
      return data.indexOf(d) === index;
    });
  }

  function handleProduct(data) {
    let stored = setAlldata(data);
    let filteredData = setFilterData(stored.payload?.POS_PRODUCTS);
    return dispatch(
      setPosProduct({
        [POS_CONTROLLER_INITIAL_STATE.POS_PRODUCTS]: filteredData,
      })
    );
  }
  // console.log(prodcuts);
  if (product.length === 0) {
    <div className="pos__product">loading...</div>;
  }

  function increment() {
    setCounter((e) => e + 1);
  }
  function decrement() {
    if (counter > 0) {
      setCounter((e) => e - 1);
    }
  }

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
          <PosListButton bName="Previous" onClick={decrement} />
          <span className="product__counter">Page {counter} of 13</span>
          <PosListButton bName="Next" onClick={increment} />
        </div>
      </div>
      <ProductLists>
        {product.map((data) => (
          <PosProduct
            key={data.id}
            imgUrl={data.thumbnail}
            name={data.title}
            onClick={() => handleProduct(data)}
          />
        ))}
      </ProductLists>
    </PosThem>
  );
};

const PosProduct = ({ imgUrl, name, onClick }) => {
  return (
    <div className="product_lists" onClick={onClick}>
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
