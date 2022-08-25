import React from "react";
import { FaUserAlt } from "react-icons/fa";
import { Button } from "../Button";
export const User = () => {
  return (
    <div className="admin__UserIcon">
      <Button bName="POS" />
      <div className="admin__biller">
        <p>PMS</p>
        <div className="adimin__logo">
          <FaUserAlt />
        </div>
      </div>
    </div>
  );
};
