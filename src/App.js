import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AdminNav from "./components/Navigation/AdminNav";
import Dashbord from "./Pages/Dashbord";
import StoreView from "./Pages/StoreView";
import { ProductRequest } from "./components/MemberProduct/ProductRequest";
import "./App.css";

export const NAVIGATION_LINKS = {
  HOME: "/",
  MEMBER_PRODUCT: "/memberProduct",
  STORE_VIEW: "/storeView",
  PRODUCT_REQUEST: "/productRequest"
};

function App() {
  return (
    <>
      <BrowserRouter>
        <AdminNav />
        <Routes>
          <Route path={NAVIGATION_LINKS.HOME} element={<Dashbord />} />
          <Route path={NAVIGATION_LINKS.PRODUCT_REQUEST} element={<ProductRequest />} />
          <Route path={NAVIGATION_LINKS.STORE_VIEW} element={<StoreView />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
