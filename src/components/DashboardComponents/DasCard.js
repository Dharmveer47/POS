import React from "react";
import { BsArrowUp } from "react-icons/bs";

export const DasCard = () => {
  return (
    <div className="dashboard__content">
      <div className="das__cards">
        <SingleDashboardCard
          color1="rgb(174, 105, 245,0.5)"
          color2="rgb(174, 105, 245,0.3)"
          name="Credit Wallet"
          value={1523}
          inc="12"
        />
        <SingleDashboardCard
          color1="rgb(244, 157, 42,.5)"
          color2="rgb(244, 157, 42,.3)"
          name="Debit Wallet"
          value={2561}
          inc="300"
        />
        <SingleDashboardCard
          color1="rgb(40, 167, 69,.5)"
          color2="rgb(40, 167, 69,.3)"
          name="Total Wallet"
          value={150}
          inc="10"
        />
        <SingleDashboardCard
          color1="rgb(0, 143, 251,.5)"
          color2="rgb(0, 143, 251,.3)"
          name="Debit Wallet"
          value={1025}
          inc="80"
        />
      </div>
    </div>
  );
};

const SingleDashboardCard = ({ name, value, inc, color1, color2 }) => {
  return (
    <div className="das__card">
      <div
        className="das_big_circle"
        style={{
          backgroundColor: color1,
        }}
      ></div>

      <div
        className="das_small_circle"
        style={{
          backgroundColor: color2,
        }}
      ></div>
      <div className="das_card_heading">{name}</div>
      <div className="das__card_number">
        <div className="das__card_count">{value}</div>
        <div className="das__card_arrow">
          <BsArrowUp />
          <p className="des__card_inc">{inc}</p>
        </div>
      </div>
      <p className="das__card_description">Compare to last year (2021) </p>
    </div>
  );
};
