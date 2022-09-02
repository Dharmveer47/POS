import React from "react";
import { DasCard } from "../components/DashboardComponents/DasCard";
import DasChart from "../components/DashboardComponents/DasChart";
import { DasTransiction } from "../components/DashboardComponents/DasTransiction";
import { DashThem } from "../components/Thems";
import { Heading } from "../components/Heading";
import { useSelector } from "react-redux";
import PointOfSale from "./POS/PointOfSale";
import "../Styles/Dashboard.scss";

const Dashbord = () => {
  const navHide = useSelector((state) => state.POS.NAV_HIDE);

  return (
    <>
      {navHide ? (
        <PointOfSale />
      ) : (
        <DashThem>
          <div className="dash__heading">
            <Heading des="Dashboard" />
          </div>
          <DasCard />
          <DasChart />
          <DasTransiction />
        </DashThem>
      )}
    </>
  );
};

export default Dashbord;
