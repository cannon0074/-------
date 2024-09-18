import React from "react";
import "./Header.css";
import Logout from "../pages/logout";

const Header = () => {
  return (
    <>
      <section className="header">
        <div className="header-title">ZP Books</div>
        <Logout />
      </section>
    </>
  );
};

export default Header;
