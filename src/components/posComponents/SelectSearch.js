import React, { useState, useEffect } from "react";
import { RiArrowDropDownLine } from "react-icons/ri";
import { PosThem } from "../Thems";

export function SelectSearch() {
  const [searchInput, setSearchInput] = useState("");
  const [productlist, setProduct] = useState([]);
  const [searched, setSearched] = useState([]);
  const [focused, setFocued] = useState(false);
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
  // for product searching
  useEffect(() => {
    let searchdata = productlist.map((d) => {
      if (d.title.toLowerCase().includes(searchInput)) {
        return d;
      }
      return false;
    });
    setSearched(searchdata);
  }, [productlist, searchInput]);

  const handleChaneg = (e) => {
    setSearchInput(() => {
      let inputValues = e.target.value;
      console.log(inputValues.length);
      if (inputValues.length > 3) {
        setFocued(true);
      }
      setFocued(false);
      return inputValues.toLowerCase();
    });
  };
  // console.log(focused);
  // console.log(productlist);
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
  if (focused) {
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
  }
  return <></>;
};
