import React from "react";
import { BiHomeAlt } from "react-icons/bi";
import { BsBagCheckFill } from "react-icons/bs";
import { AiOutlineBarChart } from "react-icons/ai";
import { RiArrowDropDownLine } from "react-icons/ri";
export const Links = () => {
  return (
    <div className="admin__links">
      <SingleLink icon={<BiHomeAlt />} linkName="Dashboard" />
      <SalesOrder />
      <SingleLink icon={<AiOutlineBarChart />} linkName="Reports" drop={true} />
    </div>
  );
};


const SingleLink = ({ drop, icon, linkName }) => {
  return (
    <div className="admin__link">
      <div className="admin__link_icon">{icon}</div>
      <div className="admin__linkname">{linkName}</div>
      {drop && (
        <div className="admin_link_dropdown">
          <RiArrowDropDownLine />
        </div>
      )}
    </div>
  );
};

const SalesOrder = ({ icon, linkName }) => {
  const [dropdown, setDropdown] = React.useState(false);
  console.log(dropdown);
  return (
    <div
      className="admin__link"
      onMouseEnter={() => setDropdown((e) => !e)}
      onMouseLeave={() => setDropdown((e) => !e)}
    >
      <div className="admin__link_icon">
        <BsBagCheckFill />
      </div>
      <div className="admin__linkname">Sell / Orders</div>
      <div className="admin_link_dropdown">
        <RiArrowDropDownLine />
      </div>
      {dropdown && (
        <ul className="admin_dropdown">
          <li>POS</li>
        </ul>
      )}
    </div>
  );
};
