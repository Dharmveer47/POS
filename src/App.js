import React, { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AdminNav from "./components/Navigation/AdminNav";
// import Dashbord from "./Pages/Dashbord";
// import StoreView from "./Pages/StoreView";
// import { ProductRequest } from "./components/MemberProduct/ProductRequest";
import Login from "./components/Login/Login";
import IndexBiller from "./apps/biller/IndexBiller";
import IndexAdmin from "./apps/admin/IndexAdmin";
import IndexStore from "./apps/storemanager/IndexStore";
// Auth
import { authEmail } from "./components/Login/Login";
// redux
import { Provider } from "react-redux";
import { store } from "./Store/store";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { setLogin, POS_CONTROLLER_INITIAL_STATE } from "./Store/dataSlice";

import "./App.css";

export const NAVIGATION = {
  HOME: "/",
  MEMBER_PRODUCT: "/memberProduct",
  STORE_VIEW: "/storeView",
  PRODUCT_REQUEST: "/productRequest",
  POINT_OF_SALES: "/pointOfSale",
  INDEX_BILLER: "/indexBiller",
  LOGIN: "login",
};
export const NAVIGATION_LINKS = Object.freeze(NAVIGATION);

export const CHECK_LOGIN = {
  ADMIN: "ADMIN",
  STORE: "STORE",
  BILLER: "BILLER",
};

function App() {
  return (
    <>
      <Provider store={store}>
        <AppController />
      </Provider>
    </>
  );
}

export const AppController = () => {
  const dispatch = useDispatch();
  console.log("renderCoutn");
  let localCheck = JSON.parse(localStorage.getItem("pms_user"));
  let loginState = useSelector((state) => state.POS.LOGIN); // loginState inital value is => false
  // for so
  const setStoreTrue = () => {
    dispatch(setLogin({ [POS_CONTROLLER_INITIAL_STATE.LOGIN]: localCheck }));
  };
  const setStoreFalse = () => {
    dispatch(setLogin({ [POS_CONTROLLER_INITIAL_STATE.LOGIN]: false }));
  };
  useEffect(() => {
    if (localCheck) {
      setStoreTrue();
    } else {
      setStoreFalse();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  // console.log(localCheck);

  return (
    <BrowserRouter>
      {loginState?.email === authEmail[0].email ? (
        <>
          <AdminNav />
          <Routes>
            <Route path={NAVIGATION_LINKS.HOME} element={<IndexAdmin />} />
          </Routes>
        </>
      ) : loginState?.email === authEmail[1].email ? (
        <>
          <Routes>
            <Route path={NAVIGATION_LINKS.HOME} element={<IndexStore />} />
          </Routes>
        </>
      ) : loginState?.email === authEmail[2].email ? (
        <>
          <Routes>
            <Route path={NAVIGATION_LINKS.HOME} element={<IndexBiller />} />
          </Routes>
        </>
      ) : (
        <>
          <Routes>
            <Route path={NAVIGATION_LINKS.HOME} element={<Login />} />
          </Routes>
        </>
      )}
    </BrowserRouter>
  );
};

export default App;
