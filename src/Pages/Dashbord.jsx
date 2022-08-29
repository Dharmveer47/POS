import React from "react";
import { DasCard } from "../components/DashboardComponents/DasCard";
import DasChart from "../components/DashboardComponents/DasChart";
import { DasTransiction } from "../components/DashboardComponents/DasTransiction";
import { DashThem } from "../components/Thems";
import { Heading } from "../components/Heading";
import "../Styles/Dashboard.scss";

const Dashbord = () => {
  return (
    <DashThem>
      <div className="dash__heading">
        <Heading des="Dashboard" />
      </div>
      <DasCard />
      <DasChart />
      <DasTransiction />
    </DashThem>
  );
};

export default Dashbord;
