import React from "react";
import { NavLink } from "react-router-dom";
export const MemberDropDown = () => {
  return (
    <ul className="admin_dropdown">
      <NavLink to={"/productRequest"}>
        <li>Product Request</li>
      </NavLink>
      <li>Member Product Request</li>
      <li>Member Invoice List</li>
      <li>Brach Sales Commission</li>
    </ul>
  );
};
