import React from "react";
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
  let localCheck = JSON.parse(localStorage.getItem("pms_user"));
  let loginState = useSelector((state) => state.POS.LOGIN);
  const loginStatus = localCheck === null ? loginState : localCheck;
  // console.log(localCheck);

  return (
    <BrowserRouter>
      {loginStatus?.email === authEmail[0].email ? (
        <>
          <AdminNav />
          <Routes>
            <Route path={NAVIGATION_LINKS.HOME} element={<IndexAdmin />} />
          </Routes>
        </>
      ) : loginStatus?.email === authEmail[1].email ? (
        <>
          <Routes>
            <Route path={NAVIGATION_LINKS.HOME} element={<IndexStore />} />
          </Routes>
        </>
      ) : loginStatus?.email === authEmail[2].email ? (
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
