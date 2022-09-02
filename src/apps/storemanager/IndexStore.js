import React from "react";
import { Button } from "../../components/Button";
import { setLogin, POS_CONTROLLER_INITIAL_STATE } from "../../Store/dataSlice";
import { useDispatch } from "react-redux";
import { LocalStorage } from "../../components/Login/Login";
const IndexStore = () => {
  const dispatch = useDispatch();
  return (
    <div>
      <div>I'm Store Manager</div>
      <div>
        <Button
          bName="Logout"
          onClick={() => {
            localStorage.removeItem(LocalStorage.pms_user);
            dispatch(setLogin({ [POS_CONTROLLER_INITIAL_STATE.LOGIN]: false }));
          }}
        />
      </div>
    </div>
  );
};
export default IndexStore;
