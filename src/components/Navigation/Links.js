import React, { useState } from "react";
import { NavLink } from "react-router-dom";

import { BiHomeAlt } from "react-icons/bi";
import { BsBagCheckFill } from "react-icons/bs";
import { AiOutlineBarChart } from "react-icons/ai";
import { RiArrowDropDownLine } from "react-icons/ri";
import { MdOutlineCardMembership } from "react-icons/md";
import { MemberDropDown } from "./members/MemberDropDown";
// Redux
import {
  setnNavHide,
  POS_CONTROLLER_INITIAL_STATE,
} from "../../Store/dataSlice";

import { useDispatch } from "react-redux";

import { NAVIGATION_LINKS } from "../../App";

export const Links = () => {
  return (
    <div className="admin__links">
      <DashbordLink />
      <MemberProduct />
      <SalesOrder />
      <Reports />
    </div>
  );
};

const DashbordLink = () => {
  return (
    <NavLink to={"/"}>
      <div className="admin__link">
        <div className="admin__link_icon">
          <BiHomeAlt />
        </div>
        <div className="admin__linkname">Dashboard</div>
      </div>
    </NavLink>
  );
};

const MemberProduct = () => {
  const [dropdown, setDropdown] = useState(false);
  return (
    <div
      className="admin__link"
      onMouseEnter={() => setDropdown((e) => !e)}
      onMouseLeave={() => setDropdown((e) => !e)}
    >
      <div className="admin__link_icon">
        <MdOutlineCardMembership />
      </div>
      <div className="admin__linkname">Member Product Request</div>
      <div className="admin_link_dropdown">
        <RiArrowDropDownLine />
      </div>
      {dropdown && <MemberDropDown />}
    </div>
  );
};

const Reports = () => {
  const [dropdown, setDropdown] = useState(false);
  return (
    <div
      className="admin__link"
      onMouseEnter={() => setDropdown((e) => !e)}
      onMouseLeave={() => setDropdown((e) => !e)}
    >
      <div className="admin__link_icon">
        <AiOutlineBarChart />
      </div>
      <div className="admin__linkname">Reports</div>
      <div className="admin_link_dropdown">
        <RiArrowDropDownLine />
      </div>
      {dropdown && (
        <ul className="admin_dropdown">
          <li>Dummy</li>
          <li>Dummy</li>
        </ul>
      )}
    </div>
  );
};

const SalesOrder = () => {
  const dispatch = useDispatch();
  
  const [dropdown, setDropdown] = useState(false);

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
          <NavLink
            to={NAVIGATION_LINKS.POINT_OF_SALES}
            onClick={() => {
              dispatch(
                setnNavHide({ [POS_CONTROLLER_INITIAL_STATE.NAV_HIDE]: true })
              );
            }}
          >
            <li>POS</li>
          </NavLink>
        </ul>
      )}
    </div>
  );
};
