import React from "react";
import { DasCard } from "../components/Navigation/DashboardComponents/DasCard";
import DasChart from "../components/Navigation/DashboardComponents/DasChart";
import { DasTransiction } from "../components/Navigation/DashboardComponents/DasTransiction";
import "../Styles/Dashboard.scss";

const Dashbord = () => {
  return (
    <div className="dahsbord">
      <div className="dash__heading">
        <h1>Dashboard</h1>
      </div>
      <DasCard />
      <DasChart />
      <DasTransiction />
    </div>
  );
};

export default Dashbord;
