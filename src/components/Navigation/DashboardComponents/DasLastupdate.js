import React from "react";
import { BsFillLightningChargeFill } from "react-icons/bs";
import { GiNetworkBars } from "react-icons/gi";
import { Heading } from "../../Heading";
export const DasLastupdate = () => {
  return (
    <div className="das__last_update">
      <Heading des="Last Update" />
      <DasLastUpdateSingle heading="Total Products" ico={<BsFillLightningChargeFill/>} color="#ae69f5"/>
      <DasLastUpdateSingle heading="Total Sales" ico={<GiNetworkBars/>} color="#F49D2A" />
      <DasLastUpdateSingle heading="Total Order" ico={<GiNetworkBars/>} color="#F49D2A" />
      <DasLastUpdateSingle heading="Total User" ico={<BsFillLightningChargeFill/>} color="#FFC107" />
    </div>
  );
};
const DasLastUpdateSingle = ({ico, color,heading}) => {
  return (
    <>
      <div className="das__last_update_detail">
        <div className="das__last_update_icon" style={{backgroundColor: color}}>
          {ico}
        </div>
        <div className="das__last_heading_inf">
          <h1>{heading}</h1>
          <p>0 New Products</p>
          <div className="das__last_update_value">
            <p>1225</p>
          </div>
        </div>
      </div>
    </>
  );
};
