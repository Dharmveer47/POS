import React from "react";
import { RiArrowDropDownLine } from "react-icons/ri";
import { FaUserAlt } from "react-icons/fa";
import { BsFillCalculatorFill, BsFilesAlt } from "react-icons/bs";
// Redux
import { setnNavHide } from "../../Store/dataSlice";
import { useDispatch } from "react-redux";
import { POS_CONTROLLER_INITIAL_STATE } from "../../Store/dataSlice";
// Css
import "../../Styles/PosStyle/PosNavigation.scss";
import { Button } from "../Button";
const PosNavigation = () => {
  const dispatch = useDispatch();
  return (
    <div className="pos__navigation">
      <div className="pos__logo">
        <h1 className="pos__icon">WELCOME</h1>
        <h2 className="pos__username">Biller 1</h2>
      </div>
      <div className="pos__date_area">
        <div className="pos__clock">07:11:35 PM</div>
        <div className="pos__current_date">Monday, 29 August 2022</div>
      </div>
      <div className="pos__right_sidebar">
        <div className="pos__input_select_warehouse">
          <input type="text" placeholder="Select Warehouse" />
          <div className="pos__input_dropdown_icon">
            <RiArrowDropDownLine />
          </div>
        </div>
        <Button
          bName="Dashboard"
          onClick={() =>
            dispatch(
              setnNavHide({ [POS_CONTROLLER_INITIAL_STATE.NAV_HIDE]: false })
            )
          }
        />
        <Button bName={<BsFillCalculatorFill />} />
        <FileIcon />
        <Button bName={<FaUserAlt />} bg="darkgray" />
      </div>
    </div>
  );
};

const FileIcon = () => {
  return (
    <div className="pos__file_icon">
      <Button bName={<BsFilesAlt />} bg="#FFC107" />
      <div className="pos__file_icon_alert">0</div>
    </div>
  );
};

export default PosNavigation;
