import React from "react";
import { FaUserAlt } from "react-icons/fa";
import { Button } from "../Button";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import {
  setnNavHide,
  POS_CONTROLLER_INITIAL_STATE,
} from "../../Store/dataSlice";

export const User = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  return (
    <div className="admin__UserIcon">
      <Button
        bName="POS"
        onClick={() => {
          dispatch(
            setnNavHide({ [POS_CONTROLLER_INITIAL_STATE.NAV_HIDE]: true })
          );
          navigate("/pointOfSale")
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
