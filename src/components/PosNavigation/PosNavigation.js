import React, { useState } from "react";
// import { RiArrowDropDownLine } from "react-icons/ri";
import { FaUserAlt } from "react-icons/fa";
import { BsFillCalculatorFill } from "react-icons/bs";
import { Calculater } from "./Calculator";
// Redux
import { setLogin } from "../../Store/dataSlice";
import { LocalStorage } from "../Login/Login";
import { useDispatch } from "react-redux";
import { POS_CONTROLLER_INITIAL_STATE } from "../../Store/dataSlice";
// Css
import { Button } from "../Button";
import { FileIcon } from "./FileIcon";
import "../../Styles/PosStyle/PosNavigation.scss";
import { ThisDateTime } from "./ThisDateTime";
const PosNavigation = () => {
  const [toggleCalc, setToggleCalc] = useState(false);
  const dispatch = useDispatch();
  let date = new Date();
  return (
    <div className="pos__navigation">
      <div className="pos__logo">
        <h1 className="pos__icon">WELCOME</h1>
        <h2 className="pos__username">Biller 1</h2>
      </div>
      <div className="pos__date_area">
        <ThisDateTime />
        {/* <div className="pos__current_date">Monday, 29 August 2022</div> */}
        <div className="pos__current_date">{date.toDateString()}</div>
      </div>
      <div className="pos__right_sidebar">
        {/* <WareHouseInput /> */}
        <Button
          bName="Biller Logout"
          bg="#7ebf49"
          onClick={() => {
            localStorage.removeItem(LocalStorage.pms_user);
            dispatch(setLogin({ [POS_CONTROLLER_INITIAL_STATE.LOGIN]: false }));
          }}
        />
        <Button
          bName="Store Owner Login"
          onClick={() => {
            localStorage.removeItem(LocalStorage.pms_user);
            dispatch(setLogin({ [POS_CONTROLLER_INITIAL_STATE.LOGIN]: false }));
          }}
        />
        <Button
          onClick={() => setToggleCalc((e) => !e)}
          bName={<BsFillCalculatorFill />}
        />
        {toggleCalc && <Calculater setToggleCalc={setToggleCalc} />}

        <FileIcon />
        <Button bName={<FaUserAlt />} bg="darkgray" />
      </div>
    </div>
  );
};

export default PosNavigation;
