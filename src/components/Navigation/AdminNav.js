import React from "react";
import { CompanyLogo } from "./CompanyLogo";
import { User } from "./User";
import { Links } from "./Links";
import "../../Styles/AdminNav/AdminNav.scss";
const AdminNav = () => {
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
