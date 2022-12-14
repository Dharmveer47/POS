import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { RiArrowDropDownLine } from "react-icons/ri";
import { PosThem } from "../Thems";

export function SelectSearch() {
  const [searchInput, setSearchInput] = useState("");
  const [productlist, setProduct] = useState([]);
  const [searched, setSearched] = useState([]);
  const [focused, setFocued] = useState(false);

  // const [allProduct, setAlldata] = useState([]);

  // const [filtered, setFiltered] = useState([]);
  const prodcuts = useSelector((state) => state.POS.POS_PRODUCTS);

  const fetchData = async () => {
    let response = await fetch("https://dummyjson.com/products");
    let data = await response.json();
    if (response.status === 200) {
      setProduct(data.products);
    }
  };
  function handleDublicate(data1, data2) {
    // console.log(data1, data2);
    // let fulldatas = data1.concat(data2);
    let difference = data1.filter((x) => !data2.includes(x));
    console.log(difference);
  }

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // for product searching
  useEffect(() => {
    let searchdata = productlist.map((d) => {
      if (d.title.toLowerCase().includes(searchInput)) {
        return d;
      }
      return false;
    });
    setSearched(searchdata);
    // Search all Products
    // let allData = [...prodcuts, ...productlist];
    handleDublicate(prodcuts, productlist);

    // console.log(filteredData);
  }, [prodcuts, productlist, searchInput]);

  // for filter searching

  const handleChaneg = (e) => {
    setSearchInput(() => {
      let inputValues = e.target.value;

      if (inputValues.length > 1) {
        setFocued(true);
      } else {
        setFocued(false);
      }
      // console.log(focused, inputValues.length);
      return inputValues.toLowerCase();
    });
  };

  // console.log(focused);
  // console.log(focused);
  // console.log(allProduct);

  return (
    <>
      <div className="pos__input_and_name">
        <div className="pos__name">
          <span>Name</span>
          <RiArrowDropDownLine />
        </div>
        <input
          type="search "
          placeholder="Type any Characters and Press Enter"
          onChange={handleChaneg}
        />
      </div>
      <SearchSugstion searched={searched} focused={focused} />
    </>
  );
}

const SearchSugstion = ({ searched = [], focused }) => {
  if (!focused) {
    return <div></div>;
  }
  return (
    <>
      <PosThem className="pos__searchContainer">
        {searched.map((d) => {
          if (!d) {
            return false;
          }
          return (
            <p className="pos__searchText" id="d.id">
              {d.title}
            </p>
          );
        })}
      </PosThem>
    </>
  );
};
