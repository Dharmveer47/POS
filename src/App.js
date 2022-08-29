import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AdminNav from "./components/Navigation/AdminNav";
import Dashbord from "./Pages/Dashbord";
import StoreView from "./Pages/StoreView";
import { ProductRequest } from "./components/MemberProduct/ProductRequest";
// POS
import PointOfSale from "./Pages/POS/PointOfSale";
// redux
import { Provider } from "react-redux";
import { store } from "./Store/store";

import "./App.css";

export const NAVIGATION = {
  HOME: "/",
  MEMBER_PRODUCT: "/memberProduct",
  STORE_VIEW: "/storeView",
  PRODUCT_REQUEST: "/productRequest",
  POINT_OF_SALES: "/pointOfSale",
};
export const NAVIGATION_LINKS = Object.freeze(NAVIGATION);

function App() {
  return (
    <>
      <Provider store={store}>
        <BrowserRouter>
          <AdminNav />
          <Routes>
            <Route path={NAVIGATION_LINKS.HOME} element={<Dashbord />} />
            <Route
              path={NAVIGATION_LINKS.PRODUCT_REQUEST}
              element={<ProductRequest />}
            />
            <Route path={NAVIGATION_LINKS.STORE_VIEW} element={<StoreView />} />
            <Route
              path={NAVIGATION_LINKS.POINT_OF_SALES}
              element={<PointOfSale />}
            />
          </Routes>
        </BrowserRouter>
      </Provider>
    </>
  );
}

export default App;
