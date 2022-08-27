import React from "react";
import { DasCard } from "../components/DashboardComponents/DasCard";
import DasChart from "../components/DashboardComponents/DasChart";
import { DasTransiction } from "../components/DashboardComponents/DasTransiction";
import { DashThem } from "../components/Thems";
import "../Styles/Dashboard.scss";

const Dashbord = () => {
  return (
    <DashThem>
      <div className="dash__heading">
        <h1>Dashboard</h1>
      </div>
      <DasCard />
      <DasChart />
      <DasTransiction />
    </DashThem>
  );
};

export default Dashbord;
