import React from "react";
import "./Header.css";
import Logout from "../pages/logout";
import styled from "styled-components";

const HeadeBackground = styled.div`
  display: flex;
  background-color: #0083cc;
  color: aliceblue;
  justify-content: space-between;
  align-items: center;
  height: 80px;
`;

const HeaderLogo = styled.div`
  font-size: 48px;
  padding-left: 20px;
`;

const Header = () => {
  return (
    <>
      <HeadeBackground>
        <HeaderLogo>ZP Books</HeaderLogo>
        <Logout />
      </HeadeBackground>
    </>
  );
};

export default Header;
