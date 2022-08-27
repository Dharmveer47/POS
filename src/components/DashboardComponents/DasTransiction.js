import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Them, Search } from "../Thems";
import { Heading } from "../Heading";
import { dummyData } from "../DummyData";
import { AiOutlineEye } from "react-icons/ai";
import { BiDownload } from "react-icons/bi";

import { NAVIGATION_LINKS } from "../../App";

export const DasTransiction = () => {
  const [searchStore, setSearchStore] = useState(dummyData);
  return (
    <Them>
      <div className="trans__heading">
        <div className="das__trans_heading">
          <Heading des="Transaction Summary" />
          <Search setData={setSearchStore} />
        </div>
        <TransactionTable data={searchStore} />
      </div>
      <Pagenation />
    </Them>
  );
};

const Pagenation = () => {
  return (
    <div className="das__pagination">
      <button className="das__pag_btn">View All</button>
    </div>
  );
};

const TransactionTable = ({ data = [] }) => {
  const navigate = useNavigate();
  return (
    <table className="das__trasn_table">
      <tbody>
        <tr className="das__trans_heaing">
          <td>Date</td>
          <td>Store Id</td>
          <td>Loaction</td>
          <td>Amount</td>
          <td>Store View</td>
        </tr>
        {data.map((data, i) => {
          return (
            <tr className="das__trans_field" key={i}>
              <td>{data.date}</td>
              <td>{data.TC}</td>
              <td>{data.Des}</td>
              <td>{data.Qt}</td>
              <td className="das__trans_icon">
                <AiOutlineEye
                  onClick={() => navigate(NAVIGATION_LINKS.STORE_VIEW)}
                />
                <BiDownload />
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};
