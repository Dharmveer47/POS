import React from "react";
import { DasCard } from "../components/Navigation/DashboardComponents/DasCard";
import  DasChart  from "../components/Navigation/DashboardComponents/DasChart";
import "../Styles/Dashboard.scss";

const Dashbord = () => {
  return (
    <div className="dahsbord">
      <div className="dash__heading">
        <h1>Dashboard</h1>
      </div>
      <div className="dashboard__content">
        <DasCard />
      </div>
      <DasChart />
    </div>
  );
};

export default Dashbord;