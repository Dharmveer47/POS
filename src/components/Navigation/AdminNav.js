import React from "react";
import { CompanyLogo } from "./CompanyLogo";
import { useSelector } from "react-redux";
import { User } from "./User";
import { Links } from "./Links";
import "../../Styles/AdminNav/AdminNav.scss";
import PosNavigation from "./PosNavigation/PosNavigation";
const AdminNav = () => {
  const navHide = useSelector((state) => state.POS.NAV_HIDE);

  if (navHide) {
    return <PosNavigation />;
  }

  return (
    <>
      <div className="admin__nav">
        <CompanyLogo />
        <Links />
        <User />
      </div>
    </>
  );
};

export default AdminNav;
