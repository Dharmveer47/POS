import React from "react";
import { Them, Search } from "../../Thems";
import { Heading } from "../../Heading";
import { dummyData } from "../../DummyData";
export const DasTransiction = () => {
  return (
    <Them>
      <div className="trans__heading">
        <div className="das__trans_heading">
          <Heading des="Transaction Summary" />
          <Search />
        </div>
        <TransactionTable />
      </div>
      <Pagenation />
    </Them>
  );
};

const Pagenation = () => {
  return (
    <div className="das__pagination">
      <button className="das__pag_btn">Previous</button>
      <div className="das__pag_count">1</div>
      <button className="das__pag_btn">Next</button>
    </div>
  );
};

const TransactionTable = () => {
  return (
    <table className="das__trasn_table">
      <tr className="das__trans_heaing">
        <thead>Date</thead>
        <thead>Transaction Code</thead>
        <thead>Description</thead>
        <thead>Quantity</thead>
        <thead>Amount</thead>
      </tr>
      {dummyData.map((data) => {
        return (
          <tr className="das__trans_field">
            <td>{data.date}</td>
            <td>{data.TC}</td>
            <td>{data.Des}</td>
            <td>{data.Qt}</td>
            <td>{data.Amt}</td>
          </tr>
        );
      })}
    </table>
  );
};
