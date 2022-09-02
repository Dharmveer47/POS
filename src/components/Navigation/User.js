import React from "react";
import { FaUserAlt } from "react-icons/fa";
import { Button } from "../Button";
import { useDispatch } from "react-redux";

import { setLogin, POS_CONTROLLER_INITIAL_STATE } from "../../Store/dataSlice";

export const User = () => {
  const dispatch = useDispatch();

  return (
    <div className="admin__UserIcon">
      <Button
        bName="LOGOUT"
        bg="#6ebf49"
        onClick={() => {
          localStorage.removeItem("pms_user");
          dispatch(setLogin({ [POS_CONTROLLER_INITIAL_STATE.LOGIN]: false }));
        }}
      />
      <div className="admin__biller">
        <p>PMS</p>
        <div className="adimin__logo">
          <FaUserAlt />
        </div>
      </div>
    </div>
  );
};
